import css from '@css'

const style = css`
  .app {
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

  .app__div {
    align-items: start;
    display: flex;
    gap: var(--spacing_inset-giant);
    flex-direction: column;
  }

  .app__hgroup {
    align-items: start;
    display: flex;
    gap: var(--spacing_inset-nano);
    flex-direction: column;
  }

  .app__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
  }

  .app__h2 {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-reuglar);
    line-height: var(--line-height-lg);
  }

  .app__aside {
    align-items: start;
    display: flex;
    gap: var(--spacing_inset-xs);
    flex-direction: column;
  }

  .app__strong {
    color: var(--color-master-darker);
    font-family: var(--font-family-base);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
  }

  .app__ul {
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    padding-left: var(--spacing_inset-md);
  }

  .app__li {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
  }

  @media (width >= 768px) {
    .app {
      flex-direction: row-reverse;
      gap: calc(var(--spacing_inset-giant) * 1.62);
      justify-content: space-between;
    }

    .app__div {
      max-width: 48%;
    }

    .app__h1 {
      font-size: var(--font-size-lg);
    }
  }
`

export default style
