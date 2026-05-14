import { JsonLd } from '@master'
import Image from './image'
import schema from './schema.json'
import style from './style'

function component() {
  JsonLd.push(schema)

  return (
    <section className={style.app}>
      <Image />
      <div className={style.app__div}>
        <hgroup className={style.app__hgroup}>
          <h1 className={style.app__h1}>
            Celular ou computador.
            <br />
            Mesmos cards
          </h1>
          <h2 className={style.app__h2}>
            Funciona no navegador, no Android e no iOS. Sincroniza sozinho — sem
            App Store, sem cobrança.
          </h2>
        </hgroup>
        <aside className={style.app__aside}>
          <strong className={style.app__strong}>Instalação manual</strong>
          <ol className={style.app__ul}>
            <li className={style.app__li}>Abra o menu do navegador</li>
            <li className={style.app__li}>
              Toque em <i>"Adicionar à tela inicial"</i>
            </li>
            <li className={style.app__li}>
              Pronto — o Memoize aparece como qualquer outro app
            </li>
          </ol>
        </aside>
      </div>
    </section>
  )
}

export default component
