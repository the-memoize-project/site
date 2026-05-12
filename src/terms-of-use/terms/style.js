import css from '@css'

export default css`
  .terms {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    margin: 0 auto;
    max-width: 720px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-xs);
    width: 100%;
  }

  .terms__article {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .terms__h2 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
  }

  .terms__p {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
  }
`
