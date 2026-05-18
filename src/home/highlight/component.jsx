import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.highlight}>
      <hgroup className={style.highlight__hgroup}>
        <h1 className={style.highlight__h1}>{t.headline}</h1>
        <h2 className={style.highlight__h2}>{t.pitch}</h2>
      </hgroup>
      <a className={style.highlight__a} href="//app.memoize.cards/auth/sign-in">
        {t.cta}
      </a>
    </section>
  )
}

export default component
