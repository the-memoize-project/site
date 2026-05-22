import css from '@css'

const style = css`
  .cta {
    align-items: center;
    background-color: var(--color-master-darker);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    padding: var(--spacing_inset-md) var(--spacing_inset-lg);
  }

  .cta__label {
    align-self: flex-start;
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    width: 100%;
  }

  .cta__hgroup {
    align-self: flex-start;
  }

  .cta__h2 {
    color: var(--color-pure-white);
    font-family: var(--font-family-base);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);

    em {
      color: var(--color-primary-lighter);
      font-style: normal;
    }
  }

  .cta__a {
    align-items: center;
    align-self: stretch;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-sm);
    color: var(--color-pure-white);
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    height: 42px;
    justify-content: center;
    padding: 0 var(--spacing_inset-lg);
    text-decoration: none;
    white-space: nowrap;
  }

  @media (width >= 768px) {
    .cta {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .cta__label {
      flex: 0 0 100%;
    }

    .cta__hgroup {
      flex: 1;
    }

    .cta__a {
      align-self: center;
      flex: 0 0 auto;
    }
  }
`

export default style
