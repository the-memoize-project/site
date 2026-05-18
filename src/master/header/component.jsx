import lang from '@lang'
import { urlFor } from '@router'
import Prefetch from '../prefetch'
import t from './i18n'
import style from './style'

function component() {
  Prefetch.push('//app.memoize.cards/auth/sign-in')

  return (
    <header className={style.header}>
      <a
        className={style.header__logo}
        href={urlFor('home', { lang: lang.value })}
        aria-label={t.logoLabel}
      >
        <svg
          width="363"
          height="363"
          viewBox="0 0 363 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="14.1421"
            y="181.019"
            width="236"
            height="236"
            transform="rotate(-45 14.1421 181.019)"
            stroke="#6D5CAE"
            stroke-width="20"
          />
          <line
            x1="181"
            y1="12"
            x2="181"
            y2="181"
            stroke="#6D5CAE"
            stroke-width="20"
          />
        </svg>
      </a>
      <a
        className={style.header__signin}
        href="//app.memoize.cards/auth/sign-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.signIn}
      </a>
    </header>
  )
}

export default component
