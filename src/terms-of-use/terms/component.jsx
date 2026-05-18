import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.terms}>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.contentResponsibilityTitle}</h2>
        <p className={style.terms__p}>{t.contentResponsibilityBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.appropriateUseTitle}</h2>
        <p className={style.terms__p}>{t.appropriateUseBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.dataProtectionTitle}</h2>
        <p className={style.terms__p}>{t.dataProtectionBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.intellectualPropertyTitle}</h2>
        <p className={style.terms__p}>{t.intellectualPropertyBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.availabilityTitle}</h2>
        <p className={style.terms__p}>{t.availabilityBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.liabilityDisclaimerTitle}</h2>
        <p className={style.terms__p}>{t.liabilityDisclaimerBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.accountTerminationTitle}</h2>
        <p className={style.terms__p}>{t.accountTerminationBody}</p>
      </article>
    </section>
  )
}

export default component
