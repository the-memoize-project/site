import { JsonLd } from '@master'
import Icon from './icon'
import schema from './schema.json'
import style from './style'
import t from './i18n'

function component() {
  JsonLd.push(schema)

  return (
    <section className={style.faq}>
      <hgroup className={style.faq__hgroup}>
        <h1 className={style.faq__h1}>{t.headline}</h1>
      </hgroup>
      <div className={style.faq__div}>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.spacedRepetitionQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.spacedRepetitionAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.effectivenessQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.effectivenessAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.resultsQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.resultsAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.contentTypesQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.contentTypesAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.dailyTimeQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.dailyTimeAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.gettingStartedQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.gettingStartedAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.ageQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.ageAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.languagesQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.languagesAnswer}</p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            {t.pricingQuestion}
            <Icon />
          </summary>
          <p className={style.faq__p}>{t.pricingAnswer}</p>
        </details>
      </div>
    </section>
  )
}

export default component
