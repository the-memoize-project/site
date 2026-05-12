import { JsonLd } from '@master'
import Icon from './icon'
import schema from './schema.json'
import style from './style'

function component() {
  JsonLd.push(schema)

  return (
    <section className={style.faq}>
      <hgroup className={style.faq__hgroup}>
        <h1 className={style.faq__h1}>Tire suas dúvidas</h1>
      </hgroup>
      <div className={style.faq__div}>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            O que é repetição espaçada?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            É uma técnica de estudo baseada em mais de um século de pesquisa:
            você revisa cada informação no intervalo exato em que está prestes a
            esquecê-la Cada acerto estica esse intervalo — de minutos para dias,
            de dias para meses, de meses para anos Resultado: memória de longo
            prazo, com uma fração do tempo de estudo tradicional
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            Por que funciona melhor que outros métodos?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            Você estuda menos e lembra mais — por mais tempo Em vez de reler o
            mesmo conteúdo do zero antes de cada prova, você fixa de forma
            incremental Também reduz a ansiedade pré-prova, libera fim de semana
            e funciona para qualquer tipo de conteúdo memorizável: vocabulário,
            fórmulas, datas, conceitos, código
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            Em quanto tempo vejo resultado?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            Resumos, releitura e grifo dão a sensação de aprendizado, mas pouca
            retenção real A repetição espaçada inverte a lógica: você se testa
            ativamente, e o sistema só te mostra o que está prestes a esquecer
            Menos passivo, mais eficiente — e mensurável
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            Serve pra qualquer tipo de conteúdo?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            Você sente a diferença na primeira semana — informações que sumiriam
            em dois dias começam a ficar Em um mês, a curva de retenção fica
            visível no próprio app Em três meses, é difícil voltar para o método
            antigo
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            Quanto tempo por dia preciso estudar?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            Qualquer coisa que envolva memorizar fatos, conceitos, vocabulário
            ou relações entre ideias Idiomas, medicina, direito, programação,
            história, música — todos funcionam Para habilidades motoras (tocar
            piano, dirigir) ela não substitui a prática, mas ajuda na parte
            teórica
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            Como começo do zero?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            O Memoize calcula isso para você O intervalo entre revisões é
            definido pelo seu desempenho em cada card: acertou fácil, estica;
            errou, volta mais cedo Você não precisa pensar em quantas vezes
            revisar — só responder com sinceridade
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            Funciona em qualquer idade?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            Crie uma conta gratuita, monte seu primeiro deck (ou importe um
            pronto) e estude 10–15 minutos por dia O app cuida do resto: te
            avisa quando revisar, ajusta os intervalos e mostra o progresso Sem
            curva de aprendizado
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            É bom pra aprender idiomas?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            Sim A curva do esquecimento existe em qualquer idade — então a
            solução também Crianças, estudantes universitários, profissionais em
            meio de carreira e adultos acima dos 60 se beneficiam igualmente Só
            muda o tipo de conteúdo
          </p>
        </details>
        <details className={style.faq__details}>
          <summary className={style.faq__summary}>
            É realmente grátis pra sempre?
            <Icon />
          </summary>
          <p className={style.faq__p}>
            É um dos usos mais clássicos Vocabulário, conjugações, expressões
            idiomáticas, gênero das palavras — tudo entra muito bem em cards
            Combine com prática de conversação e você acelera a fluência em
            meses, não anos
          </p>
        </details>
      </div>
    </section>
  )
}

export default component
