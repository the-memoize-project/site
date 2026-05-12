import paint from '@paint'
import component from './component'

@paint(component)
class Description {
  static #value

  get value() {
    return (
      Description.#value ??
      'Usando a ciência da repetição espaçada, garantimos uma retenção eficaz do conhecimento, permitindo que você domine qualquer assunto com facilidade'
    )
  }

  static change(value) {
    Description.#value = value
    return Description
  }
}

export default Description
