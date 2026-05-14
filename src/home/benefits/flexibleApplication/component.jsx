import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.benefits__figure}>
      <Img />
      <figcaption className={style.benefits__figcaption}>
        <strong className={style.benefits__strong}>No ônibus. Entre reuniões.</strong>
        <p className={style.benefits__p}>
          Abra, responda, feche. Qualquer dispositivo, a qualquer hora.
        </p>
      </figcaption>
    </figure>
  )
}

export default component
