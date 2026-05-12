import Img from './img'
import style from './style'

function component() {
  return (
    <figure className={style.audience__figure}>
      <Img />
      <figcaption className={style.audience__figcaption}>
        <small className={style.audience__label}>Profissionais</small>
        <strong className={style.audience__strong}>
          Certificações que duram
        </strong>
        <p className={style.audience__p}>
          Aprenda hoje, lembre na reunião de daqui seis meses. Sem reler tudo na
          véspera
        </p>
      </figcaption>
    </figure>
  )
}

export default component
