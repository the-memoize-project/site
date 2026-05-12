import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.benefits__figure}>
      <Img />
      <figcaption className={style.benefits__figcaption}>
        <strong className={style.benefits__strong}>Menos esforço. Mais memória.</strong>
        <p className={style.benefits__p}>
          Você revisa só o que está no limite — e nada além disso
        </p>
      </figcaption>
    </figure>
  )
}

export default component
