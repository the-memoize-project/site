import css from '@css'

const style = css`
  .faq {
    align-items: start;
    background-color: var(--color-master-lighter);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-giant);
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-lg);
  }

  .faq__hgroup {
    display: flex;
    gap: var(--spacing_inset-nano);
    flex-direction: column;
  }

  .faq__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
  }

  .faq__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    width: 100%;
  }

  .faq__details {
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-sm);
    width: 100%;
  }

  .faq__summary {
    color: var(--color-master-darker);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    gap: var(--spacing_inset-xs);
    justify-content: space-between;
    line-height: var(--line-height-lg);
    list-style: none;
    padding: var(--spacing_inset-xs);
    width: 100%;

    svg {
      height: 24px;
      min-height: 24px;
      min-width: 24px;
      width: 24px;
    }
  }

  .faq__details[open] {
    .faq__summary {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .faq__p {
    color: var(--color-master-dark);
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    list-style: none;
    padding: var(--spacing_inset-xs);
    width: 100%;
  }

  @media (width >= 768px) {
    .faq__h1 {
      font-size: var(--font-size-lg);
    }
  }

  @media (width >= 1440px) {
    .faq {
      border-radius: var(--border-radius-md);
    }
  }
`

export default style
