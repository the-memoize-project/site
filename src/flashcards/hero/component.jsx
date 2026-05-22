import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.hero}>
      <strong className={style.hero__tag}>{t.tag}</strong>
      <h1 className={style.hero__h1}>
        {t.headline} <em>{t.headlineHighlight}</em> {t.headlineSuffix}
      </h1>
      <p className={style.hero__p}>
        {t.pitch}
        <strong>{t.pitchBold1}</strong>
        {t.pitchAnd}
        <strong>{t.pitchBold2}</strong>
        {t.pitchSuffix}
      </p>
    </section>
  )
}

export default component
