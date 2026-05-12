import style from './style'

function component() {
  return (
    <section className={style.highlight}>
      <hgroup className={style.highlight__hgroup}>
        <h1 className={style.highlight__h1}>
          Esquecer é biologia. Não é falta sua
        </h1>
        <h2 className={style.highlight__h2}>
          A curva do esquecimento é previsível O Memoize te lembra de cada
          conteúdo antes dele sumir — e cada revisão faz a memória durar mais
        </h2>
      </hgroup>
      <a className={style.highlight__a} href="//app.memoize.cards/auth/sign-in">
        Ver como funciona
      </a>
    </section>
  )
}

export default component
