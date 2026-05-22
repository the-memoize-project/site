import style from './style'
import t from './i18n'

const items = [
  { label: 'spacedRepetitionLabel', path: '/repeticao-espacada' },
  { label: 'activeRecallLabel', path: '/active-recall' },
  { label: 'createFlashcardsLabel', path: '/como-criar-flashcards' },
  { label: 'forgettingCurveLabel', path: '/curva-do-esquecimento' },
  { label: 'healthLabel', path: '/flashcards-area-saude' },
  { label: 'lawLabel', path: '/flashcards-area-juridica' },
  { label: 'ankiLabel', path: '/vs-anki' },
]

function component() {
  return (
    <nav className={style.links}>
      <span className={style.links__label}>{t.headline}</span>
      <ul className={style.links__ul}>
        {items.map(({ label, path }) => (
          <li className={style.links__li}>
            <span className={style.links__arrow}>→</span>
            <a className={style.links__a} href={path}>
              {t[label]}
            </a>
            <span className={style.links__path}>{path}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default component
