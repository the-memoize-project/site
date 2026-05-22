import css from '@css'

const style = css`
  .article {
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-giant);
    margin: 0 auto;
    max-width: 1440px;
    padding: calc(var(--spacing_inset-giant) * 1.62) var(--spacing_inset-lg);
  }

  .article__section {
    border-top: 1px solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding-top: var(--spacing_inset-md);
  }

  .article__h2 {
    color: var(--color-master-darker);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-xs);

    em {
      color: var(--color-primary);
      font-style: normal;
    }
  }

  .article__p {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);

    strong {
      color: var(--color-master-darker);
      font-weight: var(--font-weight-bold);
    }

    i {
      font-style: italic;
    }
  }

  .article__ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding-left: var(--spacing_inset-md);
  }

  .article__li {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    list-style-type: disc;

    strong {
      color: var(--color-master-darker);
      font-weight: var(--font-weight-bold);
    }
  }

  @media (width >= 768px) {
    .article__h2 {
      font-size: var(--font-size-md);
    }
  }
`

export default style
