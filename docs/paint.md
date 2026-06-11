# `@paint` — Decorador de Renderização

`@paint` resolve um problema específico: **como usar classes JavaScript como componentes JSX sem abrir mão de métodos estáticos**.

---

## O problema

O sistema JSX (`@h`) espera funções como componentes:

```js
h(Flashcards, props)  // Flashcards precisa ser callable
```

Mas você quer modelar o componente como uma classe, porque classes têm:
- Getters com lógica encapsulada
- Métodos estáticos para estado compartilhado (`Flashcards.change(path)`)
- Herança e interfaces claras

Funções normais perdem os estáticos quando você as envolve. Proxies preservam.

---

## Solução

```js
function paint(component) {
  return (Klass) =>
    new Proxy(
      function (props, children) {
        return this instanceof Klass
          ? component(new Klass(...arguments), children)
          : component(new Klass(props), children)
      },
      {
        get: (_, key) => Reflect.get(Klass, key),
        set: (_, key, value) => (Reflect.set(Klass, key, value), true),
      },
    )
}
```

O `Proxy` envolve uma função anônima (tornando o resultado callable) e delega todo acesso de propriedade para a classe original. Resultado: a entidade decorada é ao mesmo tempo uma função e um espelho da classe.

---

## Uso

```js
import paint from '@paint'
import component from './component'
import t from './i18n'

@paint(component)
class Canonical {
  static #path
  static #base

  get base() { return Canonical.#base ?? 'https://memoize.cards' }
  get path() { return Canonical.#path ?? '/' }

  // métodos estáticos continuam acessíveis após @paint
  static change(path) { Canonical.#path = path }
  static handle(request) { Canonical.#base = new URL(request.url).origin }
}

// como JSX:
<Canonical />           // ← chama Canonical(props, children)

// como módulo com estado:
Canonical.change('/en/flashcards')   // ← acessa estático via Proxy
Canonical.handle(request)
```

---

## Ciclo de vida de uma instância

```
<Canonical />
     │
     ▼
h(Canonical, null)               ← @h detecta typeof Canonical === 'function'
     │
     ▼
Component.execute(Canonical, {}, [])
     │
     ▼
Canonical({}, [])                ← função proxy é invocada
     │
     ├── this instanceof Canonical?  NO (chamada comum, não `new`)
     │
     ▼
component(new Canonical({}), []) ← instância criada apenas para render
     │
     ▼
função component recebe instância, lê getters, retorna JSX/string
     │
     ▼
instância descartada
```

Cada renderização cria e descarta uma instância. Não há estado em instâncias — estado vive nos `static` fields da classe, acessíveis via Proxy.

---

## Por que não usar classes diretamente como componentes?

```js
// ❌ não funciona — h() não sabe como renderizar uma classe
@component  // hipotético
class Flashcards { ... }

// ❌ perde estáticos — Flashcards.change() vira undefined
const Flashcards = (props) => component(new OriginalFlashcards(props))

// ✅ @paint: callable + estáticos preservados via Proxy
@paint(component)
class Flashcards { ... }
```
