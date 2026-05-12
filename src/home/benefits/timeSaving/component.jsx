import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.benefits__figure}>
      <Img />
      <figcaption className={style.benefits__figcaption}>
        <strong className={style.benefits__strong}>15 minutos. Resultado de horas.</strong>
        <p className={style.benefits__p}>
          Sessões curtas, bem espaçadas, batem qualquer maratona da véspera
        </p>
      </figcaption>
    </figure>
  )
}

export default component
