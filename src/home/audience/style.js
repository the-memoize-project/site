import css from '@css'

const style = css`
  .audience {
    align-items: center;
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding-bottom: calc(var(--spacing_inset-giant) * 1.62);
  }

  .audience__div {
    display: grid;
    gap: calc(var(--spacing_inset-giant) * 1.62);
    grid-template-columns: 1fr;
    padding: calc(var(--spacing_inset-giant) * 1.62);
  }

  .audience__figure {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);

    svg {
      margin: 0 auto;
      width: 48%;
    }
  }

  .audience__figcaption {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    text-align: center;
  }

  .audience__label {
    color: var(--color-master-medium);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-regular);
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
  }

  .audience__strong {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .audience__p {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
  }

  .audience__hgroup {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    margin-bottom: var(--spacing_inset-giant);
    padding: 0 var(--spacing_inset-xs);
    width: 80%;
  }

  .audience__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .audience__h2 {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
  }

  .audience__a {
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
    .audience__div {
      grid-template-columns: repeat(2, 1fr);
    }

    .audience__hgroup {
      width: 64%;
    }

    .audience__h1 {
      font-size: var(--font-size-lg);
    }
  }

  @media (width >= 968px) {
    .audience__div {
      grid-template-columns: repeat(3, 1fr);
    }

    .audience__hgroup {
      width: 56%;
    }
  }

  @media (width >= 1200px) {
    .audience__hgroup {
      width: 48%;
    }
  }
`

export default style
