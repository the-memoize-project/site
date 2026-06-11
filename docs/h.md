# `@h` — JSX Runtime Customizado

JSX sem React, sem Preact, sem VDOM. Um runtime que transforma a sintaxe JSX em strings HTML via `async/await`, rodando inteiramente no servidor (Worker).

---

## Configuração

O TypeScript compila JSX para chamadas ao runtime configurado em `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@h"
  }
}
```

Com `jsxImportSource: "@h"`, o compilador importa automaticamente de `@h/jsx-runtime`:

```js
// gerado pelo compilador para cada arquivo .jsx
import { jsx, jsxs, Fragment } from '@h/jsx-runtime'
```

---

## O que o compilador gera

```jsx
// Você escreve:
<section className={style.hero}>
  <h1>{title}</h1>
  <p>{description}</p>
</section>

// Compilado para:
jsxs("section", {
  className: style.hero,
  children: [
    jsx("h1", { children: title }),
    jsx("p",  { children: description }),
  ]
})
```

`jsx` (um filho) e `jsxs` (múltiplos filhos) são apenas aliases para a mesma função `jsxRuntime`:

```js
async function jsxRuntime(type, { children, ...props }) {
  children = Array.isArray(children) ? children : [children]
  return h(type, props, ...children)
}
```

---

## `h()` — o núcleo

```js
async function h(elementOrComponent, attrs, ...children) {
  attrs = { ...attrs }
  children = await Children.mapper(children)  // resolve Promises em paralelo

  return Component.is(elementOrComponent)
    ? Component.execute(elementOrComponent, attrs, children)
    : Element.create(elementOrComponent, attrs, children)
}
```

### Componente (função)

```js
Component.is(e)  // → typeof e === 'function'
Component.execute(Flashcards, {}, [])
// → Flashcards({}, [])  ← chama a função diretamente
```

### Elemento HTML (string)

```js
Element.create("section", { className: "_k3x9m" }, ["<h1>Título</h1>"])
// → '<section class="_k3x9m"><h1>Título</h1></section>'
```

`className` é convertido para `class` automaticamente via `ClassName.mapper()`.

---

## Async de ponta a ponta

Toda a árvore JSX é async. `Children.mapper()` resolve um array de Promises em paralelo:

```js
// se uma página tem 5 seções, todas renderizam em paralelo
await Promise.all(children)  // → strings HTML
```

Isso significa que seções independentes de uma página não bloqueiam umas às outras. O tempo total de renderização é o da seção mais lenta, não a soma de todas.

---

## `Fragment`

```jsx
<>
  {'<!DOCTYPE html>'}
  <html lang="pt">...</html>
</>
```

`Fragment` simplesmente concatena os filhos em uma string:

```js
function Fragment(_attrs, children) {
  return Children.stringify(children)  // → children.join('')
}
```

O `<!DOCTYPE html>` no topo do documento é passado como string literal dentro do Fragment raiz — não há nó especial de documento, é só uma string concatenada.

---

## Por que não React/Preact no servidor?

| | `@h` | React Server Components | Preact SSR |
|---|---|---|---|
| VDOM | ❌ não | ✅ sim | ✅ sim |
| Hydration | ❌ não | ✅ opcional | ✅ opcional |
| Streaming | ❌ não | ✅ sim | ❌ não |
| Tamanho (runtime) | ~2 kB | ~100 kB+ | ~4 kB |
| Dependências | 0 | muitas | algumas |
| Funciona em Workers | ✅ | ⚠️ | ✅ |

Para um site de marketing com SSR puro (sem interatividade no cliente), VDOM e hydration são overhead sem benefício. `@h` faz exatamente o que é necessário: JSX → string HTML.
