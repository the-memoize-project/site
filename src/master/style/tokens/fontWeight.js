import css from '@css'

/**
 * Uso das variações de `font-weight`:
 * -----------------------------------
 *   - `font-weight-bold`: Uso em títulos e elementos que precisam de forte destaque visual.
 *   - `font-weight-medium`: Textos intermediários, garantindo hierarquia sem excesso de peso.
 *   - `font-weight-regular`: Padrão para textos regulares, oferecendo legibilidade equilibrada.
 */
const style = css`
  :root {
    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight-regular: 400;
  }
`

export default style
