# Arquitetura

> Como o Memoize Site funciona por dentro — sem mágica escondida.

---

## Visão geral

Este projeto é um servidor HTTP rodando na **edge da Cloudflare**. Sem Node.js, sem framework, sem bundle de 200 kB. Cada requisição percorre um pipeline determinístico de módulos JavaScript puros antes de retornar HTML montado via JSX.

```
Internet
   │
   ▼
┌─────────────────────────────────────────────┐
│           Cloudflare Workers (edge)          │
│                                             │
│  fetch(request)                             │
│       │                                     │
│       ├─► Agent.handle(request)    ← detecta bot vs. usuário
│       ├─► Canonical.handle(request) ← captura origin da URL
│       ├─► HREFLang.handle(request) ← extrai idioma da URL
│       ├─► Lang.handle(request)     ← seta idioma global da req
│       │                                     │
│       └─► router.handle(request)            │
│                │                            │
│                ├─► match(request)   ← acha a rota
│                ├─► body(request)    ← parseia JSON (POST/PUT)
│                ├─► args(request)    ← parseia query string
│                ├─► headers(request) ← expõe headers
│                ├─► params(request)  ← extrai :lang, :id, etc.
│                │                            │
│                └─► page()           ← renderiza JSX → HTML
│                         │                   │
│                         └─► new Response(html, init)
└─────────────────────────────────────────────┘
```

---

## Grafo de dependências dos pacotes

```
src/index.js
    │
    ├── @agent ────────────────────────── detecção de bot (regex)
    ├── @env ──────────────────────────── variáveis do Worker
    ├── @lang ─────────────────────────── estado do idioma
    ├── @master ───────────────────────── layout HTML global
    │       └── @h, @css, @i18n, @lang, @paint, @router
    └── @router ───────────────────────── roteamento HTTP
            └── args, body, headers, params, match, handle

src/*/route.jsx           (registra rota no router)
src/*/component.jsx       (renderiza JSX com @h)
src/*/<page>.js           (classe decorada com @paint)
src/*/i18n.js             (traduções via @i18n)
src/*/init.js             (headers + status da Response)
src/*/schema.json         (JSON-LD para SEO)
```

---

## O sistema de módulos como singletons

Um padrão recorrente no projeto é usar **a própria função como objeto de estado**, explorando o fato de que funções são objetos em JavaScript:

```js
// packages/router/args.js
const args = (request) => {
  const search = new URLSearchParams(new URL(request.url).search)
  search.entries().forEach(([key, value]) => {
    Reflect.set(args, key, value)   // ← guarda no próprio função
  })
}

// consumo em qualquer lugar:
import args from '@router/args'
args.utm_source  // → 'pwa'
```

O mesmo padrão se aplica a `body`, `headers`, `params` e `env`. Isso elimina a necessidade de um container de dependências ou contexto de requisição global separado — **a identidade do módulo é o contexto**.

---

## O motor JSX (`@h`)

O projeto não usa React, Preact nem nenhum VDOM. O JSX é compilado pelo TypeScript com `jsxImportSource: "@h"`, que aponta para um runtime próprio:

```
JSX source                    Compilado para
──────────────────────        ──────────────────────────────
<Title />                →   h(Title, null)
<h1 class="foo">Hi</h1> →   h("h1", { class: "foo" }, "Hi")
<>{a}{b}</>             →   Fragment(null, [a, b])
```

### Fluxo de `h()`

```
h(elementOrComponent, attrs, ...children)
        │
        ├── Component.is(e)?  → typeof e === 'function'
        │       YES → Component.execute(e, attrs, children)
        │               → e(attrs, children)   ← chama diretamente
        │
        └── NO → Element.create(tag, attrs, children)
                        → "<tag ...attrs>children</tag>"
```

**Tudo é async e resolve para strings.** Não há reconciliação, diffing ou estado reativo. Cada requisição monta uma árvore de strings do zero — SSR puro, determinístico e sem overhead de VDOM.

---

## O decorador `@paint`

`@paint` é a cola entre o modelo orientado a objetos e o sistema de renderização funcional. Ele transforma uma **classe** em uma **função callable** que retorna HTML.

```js
@paint(component)
class Flashcards {
  get title() { return t.title }
  get canonical() { return '/en/flashcards' }
}
```

O que `@paint` faz por baixo:

```js
function paint(component) {
  return (Klass) =>
    new Proxy(
      function (props, children) {
        // chamado como função: Flashcards({ ... })
        // ou como JSX:         <Flashcards />
        return this instanceof Klass
          ? component(new Klass(...arguments), children)
          : component(new Klass(props), children)
      },
      {
        // métodos estáticos e propriedades da classe continuam acessíveis
        get: (_, key) => Reflect.get(Klass, key),
        set: (_, key, value) => (Reflect.set(Klass, key, value), true),
      },
    )
}
```

O resultado é uma entidade que:
- **É uma função** → pode ser usada como componente JSX (`<Flashcards />`)
- **Preserva a classe** → métodos estáticos como `Flashcards.change()` continuam funcionando
- **Instancia automaticamente** → cada renderização cria uma instância nova e descartável

---

## CSS-in-JS na edge (`@css`)

CSS é escrito como template literals e processado em tempo de execução (no Worker), sem etapa de build:

```js
const style = css`
  .container { max-width: 1200px; margin: 0 auto; }
  .title { font-size: 2rem; color: var(--color-primary); }
`
// style → { container: "_k3x9m", title: "_b7z2p" }
```

### Pipeline de transformação

```
css`...`  (template literal)
    │
    ▼
zip(strings, expressions)
    → interpola as expressões e junta tudo em uma string
    │
    ▼
minifyCSS(css)
    → remove whitespace redundante
    │
    ▼
transformCSS(css)
    → regex captura todos os seletores de classe (.nome)
    → gera hash aleatório para cada um (_abc123)
    → substitui no CSS e cria o classMap
    → empurra CSS transformado para sheet[]
    │
    ▼
{ classMap, transformedCSS }
    classMap  → { container: "_k3x9m", title: "_b7z2p" }
    sheet[]   → acumula CSS de todos os componentes
```

O `sheet` é um array global (por requisição, pois Workers são stateless entre requests). O componente `<Style />` no `<head>` serializa todo o `sheet` em uma única tag `<style>` no final da renderização.

**Resultado:** escopo de CSS garantido por hash, zero especificidade conflicts, zero KB de runtime no cliente.

---

## O roteador (`@router`)

O router é um `Proxy` que intercepta qualquer acesso de propriedade e o trata como um método HTTP:

```js
const router = new Proxy({}, {
  get(_, method) {
    if (/handle/.test(method)) return handle
    return (path, page) =>
      listeners[method.toUpperCase()].push({ path, page, name: page.name })
  },
})

router.get('/pt/flashcards', flashcardsHandler)  // → listeners.GET.push(...)
router.post('/api/decks', createDeckHandler)     // → listeners.POST.push(...)
```

### Matching de rotas

```
GET /pt/flashcards
        │
        ▼
listeners.GET.find(({ path }) => {
  const pattern = path.replace(/:\w+/g, '([a-z0-9-_]+)')
  // "/:lang/flashcards" → "/([a-z0-9-_]+)/flashcards"
  return new RegExp(`^${pattern}$`, 'i').test(pathname)
})
```

Sem dependências externas. Sem `path-to-regexp`. Sem Express. Roteamento em ~10 linhas.

---

## Internacionalização (`@i18n` + `@lang`)

O idioma da requisição é extraído da URL (`/:lang/...`) e armazenado no singleton `lang`. Os dicionários são acessados via `Proxy`, que despacha automaticamente para a chave do idioma atual:

```js
// i18n.js de uma página
const t = i18n({
  title: {
    pt: 'Flashcards — Memoize',
    en: 'Flashcards — Memoize',
    es: 'Flashcards — Memoize',
  },
})

// componente
t.title  // → valor para o idioma atual da requisição
```

```js
const i18n = (dictionary) =>
  new Proxy({}, {
    get: (_, key) => dictionary[key][lang.value]
    //                                  ↑
    //                     lido em tempo de acesso, não de inicialização
  })
```

Isso significa que o mesmo objeto `t` retorna textos diferentes dependendo do idioma da requisição em andamento — sem recriação de objeto, sem closures por idioma.

---

## Detecção de agentes (`@agent`)

Antes de qualquer renderização, o Worker identifica se a requisição vem de um **bot** (Googlebot, Lighthouse, Pingdom…) ou de um **usuário real**. Isso permite decisões de renderização condicionais — por exemplo, omitir scripts de analytics para bots.

```js
Agent.bot   // → true / false
Agent.user  // → !Agent.bot
```

A lista de bots é mantida como uma única regex nomeada, o que facilita auditorias e adições futuras sem mudar a lógica de detecção.

---

## Ciclo completo de uma requisição

```
GET https://memoize.cards/pt/flashcards
                │
                ▼
        [Cloudflare Edge]
                │
         env(environment)         ← variáveis injetadas no Worker
         Agent.handle(request)    ← detecta User-Agent
         Canonical.handle(request)← guarda origin (https://memoize.cards)
         HREFLang.handle(request) ← guarda path relativo (/pt/flashcards)
         Lang.handle(request)     ← lang.value = "pt"
                │
         router.handle(request)
                │
          match() → { path: "/:lang/flashcards", page: flashcardsPage }
          body()  → {} (GET, sem body)
          args()  → {} (sem query string)
          headers()→ { "user-agent": "...", ... }
          params()→ params.lang = "pt"
                │
          flashcardsPage()
                │
          Canonical.change('/en/flashcards')
          HREFLang.change('/flashcards')
                │
          await <Flashcards />
                │
          @paint instancia Flashcards, chama component(instance)
                │
          component JSX monta a árvore:
          Master → <html> → <head> → ... → <body> → <main> → ...
                │
          @css coleta sheet[], Style serializa em <style>
                │
          Fragment.stringify() → string HTML completa
                │
          new Response(html, { status: 200, headers: { "content-type": "text/html; charset=UTF-8" } })
                │
                ▼
        Cloudflare envia ao cliente
        Time-to-first-byte: < 50ms (edge, sem cold start)
```

---

## Documentação detalhada por pacote

| Pacote | Doc |
|---|---|
| `@h` — JSX runtime | [docs/h.md](docs/h.md) |
| `@css` — CSS-in-JS | [docs/css.md](docs/css.md) |
| `@router` — Roteador HTTP | [docs/router.md](docs/router.md) |
| `@paint` — Decorador de renderização | [docs/paint.md](docs/paint.md) |

---

## Filosofia de design

### Sem abstrações desnecessárias
Cada pacote resolve exatamente um problema. `@lang` guarda o idioma. `@css` transforma CSS. `@h` renderiza JSX. Não há camadas de compatibilidade, plugins ou configuração.

### Objetos JavaScript como infraestrutura
Funções como singletons (`args`, `body`, `params`), Proxies como DSL (`router`, `i18n`), decoradores como transformadores de identidade (`@paint`) — o projeto explora as capacidades da linguagem ao invés de lutar contra elas.

### Edge-first
Não há servidor de aplicação, load balancer ou container. O código roda nos datacenters da Cloudflare, a milissegundos do usuário. Escalabilidade é uma propriedade da infraestrutura, não da aplicação.

### Zero dependências em produção
Nenhum `node_modules` chega à edge. O código que executa é o código escrito — sem transformações de bundler, sem polyfills, sem árvore de dependências oculta.
