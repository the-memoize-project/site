import Professionals from './professionals'
import Professors from './professors'
import Students from './students'
import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.audience}>
      <div className={style.audience__div}>
        <Students />
        <Professionals />
        <Professors />
      </div>
      <hgroup className={style.audience__hgroup}>
        <h1 className={style.audience__h1}>{t.headline}</h1>
        <h2 className={style.audience__h2}>{t.pitch}</h2>
      </hgroup>
      <a className={style.audience__a} href="//app.memoize.cards/auth/sign-in">
        {t.cta}
      </a>
    </section>
  )
}

export default component
