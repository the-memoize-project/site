import style from './style'

function component() {
  return (
    <section className={style.workflow}>
      <hgroup className={style.workflow__hgroup}>
        <h1 className={style.workflow__h1}>
          Estude quando o app pedir.
          <br />O algoritmo faz o resto
        </h1>
      </hgroup>
      <ul className={style.workflow__ul}>
        <li className={style.workflow__li}>
          <span className={style.workflow__span}>1</span>
          <strong className={style.workflow__strong}>
            Crie seus cards em segundos
          </strong>
          <p className={style.workflow__p}>
            Digite, cole ou importe. Pergunta de um lado, resposta do outro
          </p>
        </li>
        <li className={style.workflow__li}>
          <span className={style.workflow__span}>2</span>
          <strong className={style.workflow__strong}>
            Estude quando o app pedir
          </strong>
          <p className={style.workflow__p}>
            Notificação na hora certa. Nem antes — desperdício. Nem depois —
            esquecimento
          </p>
        </li>
        <li className={style.workflow__li}>
          <span className={style.workflow__span}>3</span>
          <strong className={style.workflow__strong}>
            O algoritmo faz o resto
          </strong>
          <p className={style.workflow__p}>
            Acertou fácil? Volta daqui um mês. Travou? Volta amanhã. Você só
            responde
          </p>
        </li>
      </ul>
      <a className={style.workflow__a} href="//app.memoize.cards/auth/sign-in">
        Começar agora
      </a>
    </section>
  )
}

export default component
