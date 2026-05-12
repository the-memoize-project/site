import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.benefits__figure}>
      <Img />
      <figcaption className={style.benefits__figcaption}>
        <strong className={style.benefits__strong}>Grava de verdade.</strong>
        <p className={style.benefits__p}>
          Não é decoreba que evapora na semana seguinte É memória que dura
        </p>
      </figcaption>
    </figure>
  )
}

export default component
