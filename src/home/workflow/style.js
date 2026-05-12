import css from '@css'

const style = css`
  .workflow {
    align-items: center;
    background-color: var(--color-master-light);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing_inset-giant) * 1.62);
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-xs);
  }

  .workflow__hgroup {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding: 0 var(--spacing_inset-xs);
    width: 64%;
  }

  .workflow__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .workflow__ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing_inset-giant) * 1.62);
    list-style: none;
    width: 64%;
  }

  .workflow__li {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  .workflow__span {
    align-items: center;
    border: var(--border-width-thin) solid var(--color-master-darker);
    border-radius: var(--border-radius-circular);
    color: var(--color-master-darker);
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    height: 56px;
    justify-content: center;
    margin-bottom: var(--spacing_inset-nano);
    text-align: center;
    width: 56px;
  }

  .workflow__strong {
    color: var(--color-master-darker);
    font-family: var(--font-family-base);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .workflow__p {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
  }

  .workflow__a {
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
    .workflow__hgroup {
      width: 56%;
    }

    .workflow__h1 {
      font-size: var(--font-size-lg);
    }

    .workflow__ul {
      width: 48%;
    }
  }

  @media (width >= 960px) {
    .workflow__hgroup {
      width: 40%;
    }

    .workflow__ul {
      width: 32%;
    }
  }

  @media (width >= 1440px) {
    .workflow {
      border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
    }
  }
`

export default style
