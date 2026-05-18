import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style['terms-hero']}>
      <h1 className={style['terms-hero__h1']}>{t.headline}</h1>
      <p className={style['terms-hero__p']}>{t.pitch}</p>
    </section>
  )
}

export default component
