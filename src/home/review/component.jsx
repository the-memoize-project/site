import { JsonLd, Prefetch } from '@master'
import Rating from './rating'
import schema from './schema.json'
import style from './style'

function component() {
  Prefetch.push('/dijalma-santos-cavalcante-de-carvalho.jpg')
  JsonLd.push(schema)

  return (
    <section className={style.review}>
      <hgroup className={style.review__hgroup}>
        <h1 className={style.review__h1}>
          O que muda quando você estuda com ciência
        </h1>
      </hgroup>
      <blockquote className={style.review__blockquote}>
        Como uma pessoa com TDAH e uma memória extremamente falha, este
        aplicativo tem sido essencial na minha vida. Ele me permite estudar de
        maneira mais dinâmica e menos estressante. Além disso, transforma o
        aprendizado em algo muito mais bala, como se fosse um jogo, onde posso
        pedir a ajuda de alguém para me fazer perguntas e depois eu respondo,
        entre outras atividades possíveis. Estou muito grato por ter encontrado
        essa ferramenta
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
