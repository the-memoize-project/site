import paint from '@paint'
import component from './component'

@paint(component)
class PrivacyPolicy {
  get title() {
    return 'Política de Privacidade | Memoize'
  }

  get description() {
    return 'Com a ciência da repetição espaçada, você obtém uma retenção de conhecimento superior. Domine qualquer assunto 2 a 5 vezes mais rápido que os métodos tradicionais'
  }

  get canonical() {
    return '/politica-de-privacidade'
  }
}

export default PrivacyPolicy
