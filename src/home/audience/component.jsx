import Professionals from './professionals'
import Professors from './professors'
import Students from './students'
import style from './style'

function component() {
  return (
    <section className={style.audience}>
      <div className={style.audience__div}>
        <Students />
        <Professionals />
        <Professors />
      </div>
      <hgroup className={style.audience__hgroup}>
        <h1 className={style.audience__h1}>
          Comece hoje. Lembre o resto da vida
        </h1>
        <h2 className={style.audience__h2}>
          Sem assinatura. Sem limite. Sem pegadinha
        </h2>
      </hgroup>
      <a className={style.audience__a} href="//app.memoize.cards/auth/sign-in">
        Começar agora
      </a>
    </section>
  )
}

export default component
