import css from '@css'

const style = css`
  .benefits {
    align-items: center;
    background-color: var(--color-master-lighter);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding-bottom: calc(var(--spacing_inset-giant) * 1.62);
  }

  .benefits__div {
    display: grid;
    gap: calc(var(--spacing_inset-giant) * 1.62);
    grid-template-columns: 1fr;
    padding: calc(var(--spacing_inset-giant) * 1.62);
  }

  .benefits__figure {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);

    svg {
      margin: 0 auto;
      width: 48%;
    }
  }

  .benefits__figcaption {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    text-align: center;
  }

  .benefits__strong {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .benefits__p {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
  }

  .benefits__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    margin-bottom: var(--spacing_inset-giant);
    padding: 0 var(--spacing_inset-xs);
    width: 80%;
  }

  .benefits__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .benefits__h2 {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
  }

  .benefits__a {
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
    .benefits__div {
      grid-template-columns: repeat(2, 1fr);
    }

    .benefits__hgroup {
      width: 64%;
    }

    .benefits__h1 {
      font-size: var(--font-size-lg);
    }
  }

  @media (width >= 968px) {
    .benefits__div {
      grid-template-columns: repeat(3, 1fr);
    }

    .benefits__hgroup {
      width: 56%;
    }
  }

  @media (width >= 1200px) {
    .benefits__hgroup {
      width: 48%;
    }
  }

  @media (width >= 1440px) {
    .benefits {
      border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
    }
  }
`

export default style
