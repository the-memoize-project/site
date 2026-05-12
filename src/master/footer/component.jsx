import { JsonLd } from '@master'
import { urlFor } from '@router'
import schema from './schema.json'
import style from './style'

function component() {
  JsonLd.push(schema)

  return (
    <footer className={style.footer}>
      <nav className={style.footer__legal} aria-label="Links legais">
        <a className={style.footer__link} href={urlFor('termsOfUse')}>
          Termos de uso
        </a>
        <a className={style.footer__link} href={urlFor('privacyPolicy')}>
          Política de privacidade
        </a>
      </nav>
      <small className={style.footer__copyright}>
        © 2026 Memoize · Todos os direitos reservados
      </small>
    </footer>
  )
}

export default component
