import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.audience__figure}>
      <Img />
      <figcaption className={style.audience__figcaption}>
        <small className={style.audience__label}>Estudantes</small>
        <strong className={style.audience__strong}>
          Passe sem virar a noite
        </strong>
        <p className={style.audience__p}>
          15 minutos por dia no lugar da maratona pré-prova. O conteúdo já está
          lá quando chega
        </p>
      </figcaption>
    </figure>
  )
}

export default component
