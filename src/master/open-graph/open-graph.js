import paint from '@paint'
import component from './component'

@paint(component)
class OpenGraph {
  static #data = {}

  get description() {
    return (OpenGraph.#data.description ??=
      'Usando a ciência da repetição espaçada, garantimos uma retenção eficaz do conhecimento, permitindo que você domine qualquer assunto com facilidade')
  }

  get image() {
    return (OpenGraph.#data.image ??= 'https://memoize.cards/memoize.svg')
  }

  get title() {
    return (OpenGraph.#data.title ??= 'Memoize')
  }

  get type() {
    return (OpenGraph.#data.type ??= 'website')
  }

  get url() {
    return (OpenGraph.#data.url ??= 'https://memoize.cards')
  }

  static assign(data) {
    Object.assign(OpenGraph.#data, data)
    return OpenGraph
  }
}

export default OpenGraph
