import Image from './image'
import style from './style'

function component() {
  return (
    <section className={style.hero}>
      <Image />
      <div className={style.hero__div}>
        <hgroup className={style.hero__hgroup}>
          <strong className={style.hero__hat}>Para de esquecer</strong>
          <h1 className={style.hero__h1}>
            Estude uma vez
            <br />
            <strong>Lembre para sempre</strong>
          </h1>
          <h2 className={style.hero__h2}>
            Você decide o que aprender. O Memoize decide quando revisar grátis,
            sem limite
          </h2>
        </hgroup>
        <a className={style.hero__a} href="//app.memoize.cards/auth/sign-in">
          Criar meu primeiro card
        </a>
      </div>
    </section>
  )
}

export default component
