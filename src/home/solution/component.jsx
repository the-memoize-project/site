import Img from './img'
import style from './style'

function component() {
  return (
    <section className={style.solution}>
      <Img />
      <div className={style.solution__div}>
        <hgroup className={style.solution__hgroup}>
          <h1 className={style.solution__h1}>
            Por que você esquece.
            <br />
            <strong>E como parar</strong>
          </h1>
          <h2 className={style.solution__h2}>
            Seu cérebro descarta o que ele acha pouco importante — não é falta
            de esforço O método tradicional luta contra isso: você revisa tudo,
            do zero, várias vezes O Memoize inverte a lógica e te mostra cada
            card no momento exato em que sua memória precisa de reforço
          </h2>
        </hgroup>
        <a
          className={style.solution__a}
          href="//app.memoize.cards/auth/sign-in"
        >
          Começar agora
        </a>
      </div>
    </section>
  )
}

export default component
