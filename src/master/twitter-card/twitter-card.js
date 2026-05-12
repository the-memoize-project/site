import paint from '@paint'
import component from './component'

@paint(component)
class TwitterCard {
  static #data = {}

  get title() {
    return (TwitterCard.#data.title ??= 'Memoize')
  }

  get description() {
    return (TwitterCard.#data.description ??=
      'Usando a ciência da repetição espaçada, garantimos uma retenção eficaz do conhecimento, permitindo que você domine qualquer assunto com facilidade')
  }

  get image() {
    return (TwitterCard.#data.image ??= 'https://memoize.cards/memoize.svg')
  }

  static assign(data) {
    Object.assign(TwitterCard.#data, data)
    return TwitterCard
  }
}

export default TwitterCard
