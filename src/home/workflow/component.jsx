import style from './style'
import t from './i18n'

function component() {
  return (
    <section className={style.workflow}>
      <hgroup className={style.workflow__hgroup}>
        <h1 className={style.workflow__h1}>{t.headline}</h1>
      </hgroup>
      <ul className={style.workflow__ul}>
        <li className={style.workflow__li}>
          <span className={style.workflow__span}>1</span>
          <strong className={style.workflow__strong}>{t.createTitle}</strong>
          <p className={style.workflow__p}>{t.createBody}</p>
        </li>
        <li className={style.workflow__li}>
          <span className={style.workflow__span}>2</span>
          <strong className={style.workflow__strong}>{t.studyTitle}</strong>
          <p className={style.workflow__p}>{t.studyBody}</p>
        </li>
        <li className={style.workflow__li}>
          <span className={style.workflow__span}>3</span>
          <strong className={style.workflow__strong}>{t.algorithmTitle}</strong>
          <p className={style.workflow__p}>{t.algorithmBody}</p>
        </li>
      </ul>
      <a className={style.workflow__a} href="//app.memoize.cards/auth/sign-in">
        {t.cta}
      </a>
    </section>
  )
}

export default component
