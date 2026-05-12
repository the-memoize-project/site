import paint from '@paint'
import component from './component'

@paint(component)
class TermsOfUse {
  get title() {
    return 'Termos de uso | Memoize'
  }

  get description() {
    return 'Ao criar uma conta na aplicação Memoize, você concorda com os seguintes termos'
  }

  get canonical() {
    return '/termos-de-uso'
  }
}

export default TermsOfUse
