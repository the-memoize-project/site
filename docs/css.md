# `@css` — CSS-in-JS na Edge

CSS-in-JS sem runtime no cliente, sem etapa de build, sem PostCSS, sem babel plugins. O processamento acontece no Worker, uma vez por requisição, e o resultado é injetado como uma única `<style>` no `<head>`.

---

## Pipeline

```
css`
  .container { max-width: 1200px; }
  .title { color: var(--color-primary); }
`
    │
    ▼  zip(strings, expressions)
    │  → interpola expressões JS no template literal
    │  → "  .container { max-width: 1200px; }  .title { color: var(--color-primary); }  "
    │
    ▼  minifyCSS(css)
    │  → remove whitespace redundante via regex
    │  → ".container { max-width: 1200px; } .title { color: var(--color-primary); }"
    │
    ▼  transformCSS(css)
    │  → regex captura todo seletor de classe: /\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g
    │  → para cada classe, gera hash: "_k3x9m"
    │  → substitui no CSS e constrói classMap
    │
    ▼
{
  classMap:      { container: "_k3x9m", title: "_b7z2p" },
  transformedCSS: "._k3x9m { max-width: 1200px; } ._b7z2p { color: var(--color-primary); }"
}
    │
    └─► sheet.push(transformedCSS)   ← acumula para todos os componentes
```

---

## Uso em componentes

```js
import css from '@css'

const style = css`
  .hero {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }

  .title {
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-master-darkest);
  }
`

function component(hero) {
  return (
    <section className={style.hero}>
      <h1 className={style.title}>{hero.title}</h1>
    </section>
  )
}
```

`style.hero` retorna `"_k3x9m"` — o hash gerado. Nunca o nome original. Colisões de classe entre componentes diferentes são impossíveis.

---

## O `sheet` global

```js
// packages/css/sheet.js
const sheet = []
export default sheet
```

É um array simples. Cada chamada a `css\`...\`` empurra o CSS transformado para esse array. No final da requisição, `<Style />` serializa tudo:

```js
// src/master/style/component.jsx
<style>{sheet.join('')}</style>
```

Workers são stateless entre requisições — o `sheet` começa vazio a cada request e é preenchido durante a renderização da árvore JSX. Não há vazamento de estilos entre requests.

---

## Design tokens

Os tokens do design system ficam em `src/master/style/tokens/` e são injetados via CSS custom properties na `:root`:

```
tokens/
├── borderRadius.js
├── borderWidth.js
├── color.js        ← light-dark() para dark mode automático
├── fontFamily.js
├── fontSize.js
├── fontWeight.js
├── lineHeight.js
├── opacity.js
├── shadow.js
└── spacing.js
```

Exemplo de token de cor com dark mode nativo:

```js
css`
  :root {
    --color-primary: light-dark(#6d5cae, #7a5ed1);
    --color-primary-light: light-dark(#8a7dbe, #6750c4);
  }
`
```

Sem media queries, sem classes `.dark`. O navegador cuida do tema com base na preferência do sistema.

---

## Por que não Tailwind / CSS Modules / styled-components?

| | `@css` | Tailwind | CSS Modules | styled-components |
|---|---|---|---|---|
| Build step | ❌ não | ✅ sim | ✅ sim | ❌ não |
| Runtime no cliente | ❌ não | ❌ não | ❌ não | ✅ sim |
| Escopo automático | ✅ hash | ⚠️ global | ✅ hash | ✅ hash |
| Co-location com JS | ✅ | ❌ | ⚠️ | ✅ |
| Funciona na edge | ✅ | ✅ | ✅ | ⚠️ |
| Zero dependências | ✅ | ❌ | ❌ | ❌ |

O principal diferencial: nenhuma dependência de build ou runtime, e funciona em qualquer ambiente JavaScript — inclusive Cloudflare Workers, onde bundlers são opcionais.
