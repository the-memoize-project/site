import css from '@css'

export default css`
  .privacy-hero {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-xs);
  }

  .privacy-hero__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .privacy-hero__p {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
    max-width: 600px;
  }

  @media (width >= 768px) {
    .privacy-hero__h1 {
      font-size: var(--font-size-lg);
    }
  }
`
