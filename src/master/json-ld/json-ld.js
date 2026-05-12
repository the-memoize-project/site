import paint from '@paint'
import component from './component'

@paint(component)
class JsonLd {
  static #graph = []

  get graph() {
    return JsonLd.#graph
  }

  static push(...schemas) {
    schemas.forEach((schema) => JsonLd.#graph.push(schema))
    return JsonLd
  }
}

export default JsonLd
