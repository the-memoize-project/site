import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.audience__figure}>
      <Img />
      <figcaption className={style.audience__figcaption}>
        <small className={style.audience__label}>Professores</small>
        <strong className={style.audience__strong}>
          Seu conteúdo na cabeça deles
        </strong>
        <p className={style.audience__p}>
          Monte decks, compartilhe e veja a retenção subir. O que ensinou em
          março, eles lembram em novembro
        </p>
      </figcaption>
    </figure>
  )
}

export default component
