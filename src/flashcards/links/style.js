import css from '@css'

const style = css`
  .links {
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-lg);
  }

  .links__label {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .links__ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .links__li {
    align-items: center;
    color: var(--color-master-dark);
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    gap: var(--spacing_inset-nano);
    line-height: var(--line-height-lg);
    list-style: none;
  }

  .links__arrow {
    color: var(--color-master-dark);
  }

  .links__a {
    color: var(--color-primary);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
  }

  .links__a:hover {
    text-decoration: underline;
  }

  .links__path {
    color: var(--color-master-dark);
    font-size: var(--font-size-xxxs);
  }
`

export default style
