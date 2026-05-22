import style from './style'
import t from './i18n'

function component() {
  return (
    <article className={style.article}>
      <section className={style.article__section}>
        <h2 className={style.article__h2}>{t.section1Title}</h2>
        <p className={style.article__p}>{t.section1p1}</p>
        <p className={style.article__p}>
          {t.section1p2Prefix}
          <i>{t.section1p2Italic}</i>
          {t.section1p2Middle}
          <strong>{t.section1p2Bold}</strong>
          {t.section1p2Suffix}
        </p>
      </section>

      <section className={style.article__section}>
        <h2 className={style.article__h2}>
          {t.section2TitlePrefix}
          <em>{t.section2TitleHighlight}</em>
        </h2>
        <p className={style.article__p}>{t.section2Intro}</p>
        <ul className={style.article__ul}>
          <li className={style.article__li}>
            <strong>{t.section2Item1Bold}</strong>
            {t.section2Item1}
          </li>
          <li className={style.article__li}>
            <strong>{t.section2Item2Bold}</strong>
            {t.section2Item2}
          </li>
          <li className={style.article__li}>
            <strong>{t.section2Item3Bold}</strong>
            {t.section2Item3}
          </li>
        </ul>
        <p className={style.article__p}>
          {t.section2Stats}
          <strong>{t.section2StatsBold}</strong>
          {t.section2StatsSuffix}
        </p>
      </section>

      <section className={style.article__section}>
        <h2 className={style.article__h2}>{t.section3Title}</h2>
        <ul className={style.article__ul}>
          <li className={style.article__li}>
            <strong>{t.section3Step1Bold}</strong>
            {t.section3Step1}
          </li>
          <li className={style.article__li}>
            <strong>{t.section3Step2Bold}</strong>
            {t.section3Step2}
          </li>
          <li className={style.article__li}>
            <strong>{t.section3Step3Bold}</strong>
            {t.section3Step3}
          </li>
          <li className={style.article__li}>
            <strong>{t.section3Step4Bold}</strong>
            {t.section3Step4}
          </li>
        </ul>
      </section>

      <section className={style.article__section}>
        <h2 className={style.article__h2}>
          {t.section4TitlePrefix}
          <em>{t.section4TitleHighlight}</em>
          {t.section4TitleSuffix}
        </h2>
        <p className={style.article__p}>
          <strong>{t.section4ServeBold}</strong>
          {t.section4Serve}
        </p>
        <p className={style.article__p}>
          <strong>{t.section4NotServeBold}</strong>
          {t.section4NotServe}
          <i>{t.section4NotServeItalic}</i>
          {t.section4NotServeSuffix}
        </p>
      </section>

      <section className={style.article__section}>
        <h2 className={style.article__h2}>{t.section5Title}</h2>
        <p className={style.article__p}>
          {t.section5p}
          <strong>{t.section5pBrand}</strong>
          {t.section5pSuffix}
        </p>
      </section>
    </article>
  )
}

export default component
