import paint from '@paint'
import component from './component'
import t from './i18n'

@paint(component)
class PrivacyPolicy {
  get title() {
    return t.title
  }

  get description() {
    return t.description
  }

  get canonical() {
    return '/politica-de-privacidade'
  }
}

export default PrivacyPolicy
