import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.terms}>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.dataCollectionTitle}</h2>
        <p className={style.terms__p}>{t.dataCollectionBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.dataUsageTitle}</h2>
        <p className={style.terms__p}>{t.dataUsageBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.dataSecurityTitle}</h2>
        <p className={style.terms__p}>{t.dataSecurityBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.thirdPartySharingTitle}</h2>
        <p className={style.terms__p}>{t.thirdPartySharingBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.dataRetentionTitle}</h2>
        <p className={style.terms__p}>{t.dataRetentionBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.userRightsTitle}</h2>
        <p className={style.terms__p}>{t.userRightsBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.childrenPrivacyTitle}</h2>
        <p className={style.terms__p}>{t.childrenPrivacyBody}</p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>{t.policyChangesTitle}</h2>
        <p className={style.terms__p}>{t.policyChangesBody}</p>
      </article>
    </section>
  )
}

export default component
