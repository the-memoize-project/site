import css from '@css'

const style = css`
  .review {
    align-items: center;
    background-color: var(--color-master-lighter);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-xs);
  }

  .review__hgroup {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
    flex-direction: column;
    margin-bottom: calc((var(--spacing_inset-giant) * 1.62) - var(--spacing_inset-xs));
    width: 80%;
  }

  .review__h1 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);
    text-align: center;
  }

  .review__blockquote {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-sm);
    font-style: italic;
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    text-align: center;
    width: 80%;
  }

  .review__data {
    margin-top: var(--spacing_inset-nano);

    svg {
      height: 24px;
      width: 24px;
    }
  }

  .review__cite {
    align-items: center;
    display: flex;
    font-style: normal;
    gap: var(--spacing_inset-xs);
  }

  .review__img {
    aspect-ratio: 1 / 1;
    border-radius: var(--border-radius-circular);
    height: 72px;
    width: 72px;
  }

  .review__div {
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  .review__strong {
    color: var(--color-master-darker);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-xs);
  }

  .review__a {
    color: var(--color-primary);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-xs);
    text-decoration: none;
  }

  @media (width >= 768px) {
    .review__h1 {
      font-size: var(--font-size-lg);
    }

    .review__hgroup {
      width: 48%;
    }
  }

  @media (width >= 968px) {
    .review__hgroup {
      width: 40%;
    }
  }

  @media (width >= 1200px) {
    .review__hgroup {
      width: 32%;
    }
  }

  @media (width >= 1440px) {
    .review {
      border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    }
  }
`

export default style
