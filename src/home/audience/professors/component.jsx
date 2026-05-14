import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.audience__figure}>
      <Img />
      <figcaption className={style.audience__figcaption}>
        <small className={style.audience__label}>Professores</small>
        <strong className={style.audience__strong}>
          Veja seus alunos lembrando
        </strong>
        <p className={style.audience__p}>
          Crie decks, compartilhe e acompanhe a retenção. O que você ensinou em
          março, eles ainda têm em novembro.
        </p>
      </figcaption>
    </figure>
  )
}

export default component
