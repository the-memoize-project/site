import paint from '@paint'
import component from './component'
import t from './i18n'

@paint(component)
class TwitterCard {
  static #data = {}

  get title() {
    return (TwitterCard.#data.title ??= t.title)
  }

  get description() {
    return (TwitterCard.#data.description ??= t.description)
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
