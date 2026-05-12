import css from '@css'

const style = css`
  .footer {
    align-items: center;
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    padding: var(--spacing_inset-xs);
  }

  .footer__legal {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .footer__link {
    color: var(--color-primary);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-xs);
    padding: var(--spacing_inset-nano) 0;
  }

  .footer__copyright {
    color: var(--color-master-darker);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-xs);
  }

  @media (width >= 678px) {
    .footer__legal {
      flex-direction: row;
    }
  }

  @media (width >= 997px) {
    .footer {
      flex-direction: row-reverse;
    }
  }
`

export default style
