import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.faq}>
      <span className={style.faq__label}>{t.headline}</span>
      <div className={style.faq__div}>
        <div className={style.faq__item}>
          <p className={style.faq__question}>{t.dailyTimeQuestion}</p>
          <p className={style.faq__answer}>{t.dailyTimeAnswer}</p>
        </div>
        <div className={style.faq__item}>
          <p className={style.faq__question}>{t.resultsQuestion}</p>
          <p className={style.faq__answer}>{t.resultsAnswer}</p>
        </div>
        <div className={style.faq__item}>
          <p className={style.faq__question}>{t.contentTypesQuestion}</p>
          <p className={style.faq__answer}>{t.contentTypesAnswer}</p>
        </div>
        <div className={style.faq__item}>
          <p className={style.faq__question}>{t.pricingQuestion}</p>
          <p className={style.faq__answer}>{t.pricingAnswer}</p>
        </div>
      </div>
    </section>
  )
}

export default component
