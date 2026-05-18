import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style['privacy-hero']}>
      <h1 className={style['privacy-hero__h1']}>{t.headline}</h1>
      <p className={style['privacy-hero__p']}>{t.pitch}</p>
    </section>
  )
}

export default component
