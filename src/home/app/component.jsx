import { JsonLd } from '@master'
import Image from './image'
import schema from './schema.json'
import style from './style'
import t from './i18n'

function component() {
  JsonLd.push(schema)

  return (
    <section className={style.app}>
      <Image />
      <div className={style.app__div}>
        <hgroup className={style.app__hgroup}>
          <h1 className={style.app__h1}>{t.headline}</h1>
          <h2 className={style.app__h2}>{t.pitch}</h2>
        </hgroup>
        <aside className={style.app__aside}>
          <strong className={style.app__strong}>{t.installationLabel}</strong>
          <ol className={style.app__ul}>
            <li className={style.app__li}>{t.installStep1}</li>
            <li className={style.app__li}>
              <i>{t.installStep2}</i>
            </li>
            <li className={style.app__li}>{t.installStep3}</li>
          </ol>
        </aside>
      </div>
    </section>
  )
}

export default component
