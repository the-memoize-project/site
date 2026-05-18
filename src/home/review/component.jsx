import { JsonLd, Prefetch } from '@master'
import Rating from './rating'
import schema from './schema.json'
import style from './style'
import t from './i18n'

function component() {
  Prefetch.push('/dijalma-santos-cavalcante-de-carvalho.jpg')
  JsonLd.push(schema)

  return (
    <section className={style.review}>
      <hgroup className={style.review__hgroup}>
        <h1 className={style.review__h1}>{t.headline}</h1>
      </hgroup>
      <blockquote className={style.review__blockquote}>
        {t.quote}
      </blockquote>
      <data className={style.review__data}>
        <Rating />
      </data>
      <cite className={style.review__cite}>
        <img
          className={style.review__img}
          src="/dijalma-santos-cavalcante-de-carvalho.jpg"
          alt="Dijalma Santos Cavalcante de Carvalho"
          loading="lazy"
        />
        <div className={style.review__div}>
          <strong className={style.review__strong}>
            Dijalma Santos Cavalcante de Carvalho
          </strong>
          <a
            className={style.review__a}
            href="//www.instagram.com/dijalmacavallcante"
            target="_blanck"
          >
            @dijalmacavallcante
          </a>
        </div>
      </cite>
    </section>
  )
}

export default component
