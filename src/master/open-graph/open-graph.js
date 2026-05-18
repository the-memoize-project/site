import paint from '@paint'
import component from './component'
import t from './i18n'

@paint(component)
class OpenGraph {
  static #data = {}

  get description() {
    return (OpenGraph.#data.description ??= t.description)
  }

  get image() {
    return (OpenGraph.#data.image ??= 'https://memoize.cards/memoize.svg')
  }

  get title() {
    return (OpenGraph.#data.title ??= t.title)
  }

  get type() {
    return (OpenGraph.#data.type ??= 'website')
  }

  get url() {
    return (OpenGraph.#data.url ??= 'https://memoize.cards')
  }

  static change(data) {
    Object.assign(OpenGraph.#data, data)
    return OpenGraph
  }
}

export default OpenGraph
