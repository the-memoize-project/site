import style from './style'

function component() {
  return (
    <section className={style.highlight}>
      <hgroup className={style.highlight__hgroup}>
        <h1 className={style.highlight__h1}>
          Esquecer não é falha sua. É biologia.
        </h1>
        <h2 className={style.highlight__h2}>
          Seu cérebro descarta o que parece pouco útil. O Memoize devolve cada
          conteúdo no instante exato antes do esquecimento — e cada revisão
          deixa a memória mais firme.
        </h2>
      </hgroup>
      <a className={style.highlight__a} href="//app.memoize.cards/auth/sign-in">
        Ver como funciona
      </a>
    </section>
  )
}

export default component
