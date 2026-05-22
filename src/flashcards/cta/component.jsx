import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.cta}>
      <span className={style.cta__label}>{t.label}</span>
      <hgroup className={style.cta__hgroup}>
        <h2 className={style.cta__h2}>
          {t.headline} <em>{t.headlineHighlight}</em>
        </h2>
      </hgroup>
      <a className={style.cta__a} href="//app.memoize.cards/auth/sign-in">
        {t.cta}
      </a>
    </section>
  )
}

export default component
