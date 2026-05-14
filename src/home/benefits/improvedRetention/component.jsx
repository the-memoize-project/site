import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.benefits__figure}>
      <Img />
      <figcaption className={style.benefits__figcaption}>
        <strong className={style.benefits__strong}>Fica de verdade.</strong>
        <p className={style.benefits__p}>
          Não é decoreba que some na semana seguinte. É memória que dura o ano
          inteiro.
        </p>
      </figcaption>
    </figure>
  )
}

export default component
