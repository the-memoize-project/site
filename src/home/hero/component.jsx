import t from './i18n'
import Image from './image'
import style from './style'

function component() {
  return (
    <section className={style.hero}>
      <Image />
      <div className={style.hero__div}>
        <hgroup className={style.hero__hgroup}>
          <strong className={style.hero__hat}>{t.tagline}</strong>
          <h1 className={style.hero__h1}>
            {t.headline}
            <br />
            <strong>{t.promise}</strong>
          </h1>
          <h2 className={style.hero__h2}>{t.pitch}</h2>
        </hgroup>
        <a className={style.hero__a} href="//app.memoize.cards/auth/sign-in">
          {t.cta}
        </a>
      </div>
    </section>
  )
}

export default component
