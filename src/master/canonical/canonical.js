import paint from '@paint'
import component from './component'

@paint(component)
class Canonical {
  static #path
  static #base

  get base() {
    return Canonical.#base ?? 'https://memoize.cards'
  }

  get path() {
    return Canonical.#path ?? '/'
  }

  static change(path) {
    Canonical.#path = path
    return Canonical
  }

  static handle(request) {
    Canonical.#base = new URL(request.url).origin
    return Canonical
  }
}

export default Canonical
