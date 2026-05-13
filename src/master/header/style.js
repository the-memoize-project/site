import css from '@css'

const style = css`
  .header {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    height: 70px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    padding: var(--spacing_inset-xs);
  }

  .header__logo {
    align-items: center;
    display: flex;
    height: 42px;
    justify-content: center;
    width: 42px;

    svg {
      height: 42px;
      width: 42px;
    }
  }

  .header__signin {
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
`

export default style
