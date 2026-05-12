import style from './style'

function component() {
  return (
    <section className={style['privacy-hero']}>
      <h1 className={style['privacy-hero__h1']}>Política de Privacidade</h1>
      <p className={style['privacy-hero__p']}>
        Sua privacidade é importante para nós. Saiba como coletamos, usamos e protegemos seus dados.
      </p>
    </section>
  )
}

export default component
