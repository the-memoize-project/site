import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.benefits__figure}>
      <Img />
      <figcaption className={style.benefits__figcaption}>
        <strong className={style.benefits__strong}>Aprende uma vez. Pronto.</strong>
        <p className={style.benefits__p}>
          Cada card só volta quando precisa. O que já está fixado não te
          incomoda mais.
        </p>
      </figcaption>
    </figure>
  )
}

export default component
