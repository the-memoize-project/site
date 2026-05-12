import paint from '@paint'
import component from './component'

@paint(component)
class Canonical {
  static #path = '/'

  get path() {
    return Canonical.#path
  }

  static change(value) {
    Canonical.#path = value
    return Canonical
  }
}

export default Canonical
