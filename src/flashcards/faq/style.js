import css from '@css'

const style = css`
  .faq {
    background-color: var(--color-master-lighter);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-giant);
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-lg);
  }

  .faq__label {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .faq__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    width: 100%;
  }

  .faq__item {
    border-bottom: 1px solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding-bottom: var(--spacing_inset-xs);
  }

  .faq__question {
    color: var(--color-master-darker);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-lg);
  }

  .faq__answer {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
  }

  @media (width >= 1440px) {
    .faq {
      border-radius: var(--border-radius-md);
    }
  }
`

export default style
