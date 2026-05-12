import paint from '@paint'
import component from './component'

@paint(component)
class Home {
  get title() {
    return 'Aprenda 5x mais Rápido! | Memoize'
  }

  get description() {
    return 'Com a ciência da repetição espaçada, você obtém uma retenção de conhecimento superior. Domine qualquer assunto 2 a 5 vezes mais rápido que os métodos tradicionais'
  }

  get canonical() {
    return '/'
  }
}

export default Home
