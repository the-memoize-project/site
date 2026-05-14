import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.audience__figure}>
      <Img />
      <figcaption className={style.audience__figcaption}>
        <small className={style.audience__label}>Profissionais</small>
        <strong className={style.audience__strong}>
          Lembre quando precisar brilhar
        </strong>
        <p className={style.audience__p}>
          Aprenda hoje e use daqui a seis meses, na reunião que importa. Sem
          releitura de última hora, sem branco.
        </p>
      </figcaption>
    </figure>
  )
}

export default component
