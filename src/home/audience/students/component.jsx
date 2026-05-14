import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.audience__figure}>
      <Img />
      <figcaption className={style.audience__figcaption}>
        <small className={style.audience__label}>Estudantes</small>
        <strong className={style.audience__strong}>
          Chegue na prova tranquilo
        </strong>
        <p className={style.audience__p}>
          Em vez da maratona da véspera, 15 minutos por dia. O conteúdo já mora
          na sua cabeça quando a prova chega.
        </p>
      </figcaption>
    </figure>
  )
}

export default component
