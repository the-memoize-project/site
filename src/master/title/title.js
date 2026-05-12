import paint from '@paint'
import component from './component'

@paint(component)
class Title {
  static #value

  get value() {
    return Title.#value ?? 'Memoize'
  }

  static change(value) {
    Title.#value = value
    return Title
  }
}

export default Title
