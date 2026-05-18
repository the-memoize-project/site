import Img from './img'
import style from './style'
import t from './i18n'

function component() {
  return (
    <figure className={style.benefits__figure}>
      <Img />
      <figcaption className={style.benefits__figcaption}>
        <strong className={style.benefits__strong}>{t.claim}</strong>
        <p className={style.benefits__p}>{t.description}</p>
      </figcaption>
    </figure>
  )
}

export default component
