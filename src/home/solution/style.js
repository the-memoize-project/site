import css from '@css'

const style = css`
  .solution {
    align-items: center;
    background-color: var(--color-master-lightest);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing_inset-giant) * 1.62);
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-xs);

    svg {
      margin: 0 auto;
      max-width: 480px;
      width: 64%;
    }
  }

  .solution__div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-giant);
  }

  .solution__hgroup {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
    flex-direction: column;
    width: 100%;
  }

  .solution__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .solution__h2 {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
    width: 80%;

    strong {
      color: var(--color-master-darker);
      font-weight: var(--font-weight-bold);
    }
  }

  .solution__a {
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
    .solution {
      gap: 0;
      flex-direction: row;
    }

    .solution__div {
      width: 56%;
    }

    .solution__h1 {
      font-size: var(--font-size-lg);
    }
  }
`

export default style
