import css from '@css'

const style = css`
  .highlight {
    align-items: center;
    background-color: var(--color-master-light);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-giant);
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-xs);
  }

  .highlight__hgroup {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
    flex-direction: column;
  }

  .highlight__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .highlight__h2 {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-reuglar);
    line-height: var(--line-height-lg);
    text-align: center;
    width: 80%;
  }

  .highlight__a {
    align-items: center;
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-sm);
    color: var(--color-master-darker);
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    height: 42px;
    padding: 0 var(--spacing_inset-lg);
    text-decoration: none;
  }

  @media (width >= 768px) {
    .highlight__h1 {
      font-size: var(--font-size-lg);
    }

    .highlight__h2 {
      width: 64%;
    }
  }

  @media (width >= 960px) {
    .highlight__h2 {
      width: 80%;
    }
  }

  @media (width >= 1440px) {
    .highlight {
      border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    }
  }
`

export default style
