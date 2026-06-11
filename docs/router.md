# `@router` — Roteador HTTP

Um roteador HTTP em ~60 linhas, sem dependências, baseado em `Proxy` e pattern matching com regex.

---

## Como funciona

O objeto `router` é um `Proxy` sobre um objeto vazio. Qualquer acesso de propriedade — exceto `handle` — é interpretado como um método HTTP e retorna uma função para registrar a rota:

```js
const router = new Proxy({}, {
  get(_, method) {
    if (/handle/.test(method)) return handle
    return (path, page) =>
      listeners[method.toUpperCase()].push({ path, page, name: page.name })
  },
})
```

Isso significa que `router.get`, `router.post`, `router.put`, `router.delete` funcionam sem nenhuma declaração explícita de métodos — o Proxy cria o comportamento sob demanda.

---

## Registrando rotas

```js
import router from '@router'

router.get('/:lang/flashcards', async function flashcards() {
  return new Response(await (<Flashcards />), init())
})

router.post('/api/contact', async function contact() {
  const email = body.email  // ← body parseado automaticamente
  // ...
})
```

O `name: page.name` captura o nome da função nomeada. Isso permite referenciá-la depois em `urlFor`:

```js
import { urlFor } from '@router'
urlFor('flashcards', { lang: 'pt' })  // → '/pt/flashcards'
```

---

## Pattern matching

```js
// path registrado: "/:lang/flashcards"
// requisição:      GET /pt/flashcards

const pattern = path.replace(/:\w+/g, '([a-z0-9-_]+)')
// → "/([a-z0-9-_]+)/flashcards"

const regex = new RegExp(`^${pattern}$`, 'i')
regex.test('/pt/flashcards')  // → true
```

Parâmetros de rota (`:lang`, `:id`, `:slug`) viram grupos de captura. A extração dos valores acontece em `params()`:

```js
// path:     "/:lang/flashcards"
// pathname: "/pt/flashcards"

keys   = ['', ':lang', 'flashcards']
values = ['', 'pt',    'flashcards']

// params.lang = 'pt'
```

---

## Contexto da requisição

Antes de chamar o handler da rota, `handle()` popula cinco singletons:

```js
async function handle(request) {
  const { page, path } = match(request)

  await body(request)      // parseia JSON em POST/PUT → body.campo
  args(request)            // query string → args.utm_source
  headers(request)         // headers → headers['user-agent']
  params(request, path)    // path params → params.lang

  return page?.(request)
}
```

Cada singleton usa a própria função como objeto de estado via `Reflect.set`:

```js
import params from '@router/params'
params.lang  // → "pt"

import args from '@router/args'
args.utm_source  // → "pwa" (se ?utm_source=pwa)

import body from '@router/body'
body.email  // → "user@example.com" (se POST com JSON)
```

---

## `urlFor` — URLs nomeadas

```js
import { urlFor } from '@router'

// em qualquer componente:
const href = urlFor('flashcards', { lang: 'pt' })
// → '/pt/flashcards'

const absoluteHref = urlFor('flashcards', { lang: 'en' }, 'https://memoize.cards')
// → 'https://memoize.cards/en/flashcards'
```

Se a rota não existir, retorna `'#'` — sem throws, sem 500s.

---

## Comparação

| Recurso | `@router` | Express | itty-router | hono |
|---|---|---|---|---|
| Dependências | 0 | 57 | 0 | 0 |
| Tamanho (minzip) | ~1 kB | ~208 kB | ~1 kB | ~14 kB |
| Proxy-based API | ✅ | ❌ | ❌ | ❌ |
| Context singletons | ✅ | ⚠️ req.* | ❌ | ✅ c.* |
| urlFor (named routes) | ✅ | ❌ | ❌ | ❌ |
| Cloudflare Workers | ✅ | ⚠️ | ✅ | ✅ |

O `@router` troca flexibilidade (middleware, grupos, prefixos) por minimalismo absoluto. Para um site de marketing com ~5 rotas, é o tamanho certo.
