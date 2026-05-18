import paint from '@paint'
import component from './component'
import t from './i18n'

@paint(component)
class Home {
  get title() {
    return t.title
  }

  get description() {
    return t.description
  }

  get canonical() {
    return '/en/'
  }
}

export default Home
