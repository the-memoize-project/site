import Img from './img'
import style from './style'
import t from './i18n'

function component() {
  return (
    <figure className={style.audience__figure}>
      <Img />
      <figcaption className={style.audience__figcaption}>
        <small className={style.audience__label}>{t.label}</small>
        <strong className={style.audience__strong}>{t.claim}</strong>
        <p className={style.audience__p}>{t.description}</p>
      </figcaption>
    </figure>
  )
}

export default component
