# Memoize Site

> Site de marketing da plataforma [Memoize](https://memoize.cards) — aprenda qualquer assunto **2 a 5× mais rápido** com repetição espaçada científica.

[![Deploy](https://img.shields.io/badge/edge-Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Runtime](https://img.shields.io/badge/runtime-Bun-fbf0df?logo=bun&logoColor=black)](https://bun.sh/)
[![Lint](https://img.shields.io/badge/lint-Biome-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev/)
[![Commits](https://img.shields.io/badge/commits-Conventional-fe5196)](https://www.conventionalcommits.org/)
[![License](https://img.shields.io/badge/license-Proprietário-gray)](#licença)

---

## Por que isso é diferente

A maioria dos sites de marketing usa Next.js, Astro ou um CMS headless — uma stack razoável, porém com peso: bundler, VDOM, hidratação, cache de CDN, Node.js em algum lugar. Este projeto vai na direção oposta.

**Sem framework. Sem bundle. Sem Node. Sem dependências em produção.**

O código roda diretamente nos datacenters da Cloudflare, escrito em JavaScript puro com um runtime JSX próprio, um roteador de 10 linhas e CSS-in-JS que processa na edge. O que você escreve é o que executa.

Quer entender como tudo funciona? Leia [ARCHITECTURE.md](ARCHITECTURE.md).

---

## Stack

| Camada | Tecnologia | Por quê |
|---|---|---|
| Runtime | [Cloudflare Workers](https://workers.cloudflare.com/) | Edge, zero cold-start, escala global sem ops |
| Package manager | [Bun](https://bun.sh/) | Installs rápidos, TypeScript nativo |
| Deploy | [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | CLI oficial do Workers |
| Lint + Format | [Biome](https://biomejs.dev/) | Substitui ESLint + Prettier em um binário |
| Commits | [Conventional Commits](https://www.conventionalcommits.org/) | Changelog e semver automatizáveis |
| JSX | `@h` (custom) | Sem VDOM, SSR puro para strings |
| CSS | `@css` (custom) | CSS-in-JS com escopo por hash, zero runtime no cliente |
| Roteamento | `@router` (custom) | Proxy que transforma qualquer método HTTP em rota |
| i18n | `@i18n` + `@lang` | Proxy que despacha por idioma em tempo de acesso |
| Decoradores | `@paint` | Vincula classe a função de render sem perder métodos estáticos |

---

## Pacotes internos

```
packages/
├── agent/      Detecta bots (Googlebot, Lighthouse…) vs. usuários reais
├── component/  Classe base de componentes
├── css/        CSS-in-JS: zip → minify → transform → hash → sheet
├── env/        Acesso tipado às variáveis de ambiente do Worker
├── h/          h() + JSX runtime customizado (jsx, jsxs, Fragment)
├── i18n/       Proxy que despacha por lang.value em tempo de acesso
├── lang/       Singleton do idioma atual da requisição
├── paint/      Decorador @paint: classe → função callable → JSX component
└── router/     Router HTTP com Proxy + pattern matching via regex
```

Cada pacote é autocontido, sem dependências entre si exceto onde o diagrama em [ARCHITECTURE.md](ARCHITECTURE.md) explicita.

---

## Estrutura de uma página

Cada rota segue a mesma convenção:

```
src/<pagina>/
├── component.jsx   JSX da página
├── <pagina>.js     Classe decorada com @paint (título, description, canonical…)
├── i18n.js         Dicionário de traduções
├── init.js         Headers e status HTTP da Response
├── route.jsx       Registro da rota no router
└── schema.json     JSON-LD estruturado para SEO
```

Exemplo — registrar uma rota:

```js
// src/flashcards/route.jsx
router.get('/:lang/flashcards', async function flashcards() {
  Canonical.change('/en/flashcards')
  HREFLang.change('/flashcards')
  return new Response(await (<Flashcards />), init())
})
```

Exemplo — definir um componente:

```js
// src/flashcards/flashcards.js
@paint(component)
class Flashcards {
  get title()       { return t.title }
  get description() { return t.description }
  get canonical()   { return '/en/flashcards' }
}
```

---

## Pré-requisitos

- [Bun](https://bun.sh/) `>= 1.x`
- Conta na [Cloudflare](https://dash.cloudflare.com/) (para deploy)

---

## Instalação

```bash
git clone https://github.com/memoize-cards/site.git
cd site
bun install
```

---

## Scripts

| Comando | O que faz |
|---|---|
| `bun run dev` | Servidor local via `wrangler dev` → `http://localhost:8787` |
| `bun run deploy` | Deploy para Cloudflare Workers |
| `bun run lint` | Lint com Biome |
| `bun run format` | Formata o código com Biome |
| `bun run check` | Lint + format juntos |

---

## Convenção de commits

Conventional Commits é obrigatório — o hook de pre-commit valida via commitlint:

```
feat(flashcards): adicionar seção de benefícios
fix(router):      corrigir match de rotas com parâmetros opcionais
perf(css):        reduzir regex de whitespace
docs:             atualizar ARCHITECTURE com diagrama de ciclo de requisição
```

O hook de pre-commit também roda Biome (lint + format) via lint-staged.

---

## Documentação

| Documento | Conteúdo |
|---|---|
| [ARCHITECTURE.md](ARCHITECTURE.md) | Arquitetura completa: fluxo de requisição, grafo de pacotes, cada sistema interno |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Como contribuir: setup, fluxo de branches, padrões de código |
| [CHANGELOG.md](CHANGELOG.md) | Histórico de mudanças |
| [SECURITY.md](SECURITY.md) | Política de divulgação responsável |
| [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | Código de conduta |

---

## Licença

Proprietário — © Memoize. Todos os direitos reservados.
