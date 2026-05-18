import paint from '@paint'
import component from './component'

@paint(component)
class HREFLang {
  static #path
  static #base

  get base() {
    return HREFLang.#base ?? 'https://memoize.cards'
  }

  get path() {
    return HREFLang.#path ?? '/'
  }

  static change(path) {
    HREFLang.#path = path
    return HREFLang
  }

  static handle(request) {
    HREFLang.#base = new URL(request.url).origin
    return HREFLang
  }
}

export default HREFLang
