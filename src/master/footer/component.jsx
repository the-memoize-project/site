import lang from '@lang'
import { JsonLd } from '@master'
import { urlFor } from '@router'
import t from './i18n'
import schema from './schema.json'
import style from './style'

function component() {
  JsonLd.push(schema)

  return (
    <footer className={style.footer}>
      <nav className={style.footer__legal} aria-label={t.legalNavLabel}>
        <a
          className={style.footer__link}
          href={urlFor('termsOfUse', { lang: lang.value })}
        >
          {t.termsOfUse}
        </a>
        <a
          className={style.footer__link}
          href={urlFor('privacyPolicy', { lang: lang.value })}
        >
          {t.privacyPolicy}
        </a>
      </nav>
      <small className={style.footer__copyright}>{t.copyright}</small>
    </footer>
  )
}

export default component
