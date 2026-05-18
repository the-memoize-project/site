import Img from './img'
import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.solution}>
      <Img />
      <div className={style.solution__div}>
        <hgroup className={style.solution__hgroup}>
          <h1 className={style.solution__h1}>
            {t.headline}
            <br />
            <strong>{t.promise}</strong>
          </h1>
          <h2 className={style.solution__h2}>{t.pitch}</h2>
        </hgroup>
        <a
          className={style.solution__a}
          href="//app.memoize.cards/auth/sign-in"
        >
          {t.cta}
        </a>
      </div>
    </section>
  )
}

export default component
