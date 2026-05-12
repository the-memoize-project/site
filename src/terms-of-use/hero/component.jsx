import style from './style'

function component() {
  return (
    <section className={style['terms-hero']}>
      <h1 className={style['terms-hero__h1']}>Termos de Uso</h1>
      <p className={style['terms-hero__p']}>
        Ao criar uma conta na aplicação Memoize, você concorda com os seguintes termos.
      </p>
    </section>
  )
}

export default component
