import css from '@css'

const style = css`
  .hero {
    border: 1px solid var(--color-master-light);
    border-radius: var(--border-radius-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-lg);
  }

  .hero__tag {
    align-self: flex-start;
    background-color: var(--color-primary-lighter);
    border-radius: var(--border-radius-pill);
    color: var(--color-primary-darker);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-regular);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .hero__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);

    em {
      color: var(--color-primary);
      font-style: normal;
    }
  }

  .hero__p {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);

    strong {
      color: var(--color-master-darker);
      font-weight: var(--font-weight-bold);
    }
  }

  @media (width >= 768px) {
    .hero__h1 {
      font-size: var(--font-size-lg);
    }
  }

  @media (width >= 960px) {
    .hero__h1 {
      font-size: var(--font-size-xl);
    }
  }
`

export default style
