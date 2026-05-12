import paint from '@paint'
import component from './component'

@paint(component)
class Prefetch {
  static #urls = []

  get urls() {
    return Prefetch.#urls
  }

  static push(...args) {
    Prefetch.#urls.push(...args)
    return Prefetch
  }
}

export default Prefetch
