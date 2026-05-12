import css from '@css'

const style = css`
  .hero {
    align-items: center;
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-xs);

    svg {
      aspect-ratio: 1 / 1;
      margin: 0 auto;
      max-width: 480px;
    }
  }

  .hero__div {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-giant);
    flex-direction: column;
  }

  .hero__hgroup {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
    flex-direction: column;
    text-align: center;
  }

  .hero__hat {
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
    font-size: var(--font-size-xxl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);

    strong {
      color: var(--color-primary);
    }
  }

  .hero__h2 {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-reuglar);
    line-height: var(--line-height-lg);
    width: 80%;

    strong {
      color: var(--color-master-darker);
      font-weight: var(--font-weight-bold);
    }
  }

  .hero__a {
    align-items: center;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-sm);
    color: var(--color-pure-white);
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    height: 42px;
    padding: 0 var(--spacing_inset-lg);
    text-decoration: none;
  }

  @media (width >= 768px) {
    .hero {
      flex-direction: row-reverse;
      gap: calc(var(--spacing_inset-giant) * 1.62);
      justify-content: space-between;
    }

    .hero__div {
      align-items: start;
      max-width: 48%;
    }

    .hero__hgroup {
      align-items: start;
      text-align: left;
    }

    .hero__h1 {
      font-size: var(--font-size-xl);
    }

    .hero__h2 {
      width: 100%
    }
  }

  @media (width >= 960px) {
    .hero__h1 {
      font-size: var(--font-size-xxl);
    }
  }

  @media (width >= 1200px) {
    .hero__h1 {
      font-size: var(--font-size-xxxl);
    }
  }
`

export default style
