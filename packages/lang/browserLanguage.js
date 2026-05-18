import locales from './locales'

class BrowserLanguage {
  static #headers

  static get lang() {
    const preference = (
      BrowserLanguage.#headers.get('Accept-Language') ?? ''
    ).toLowerCase()
    return locales.find(locale => preference.includes(locale.toLowerCase()))
  }

  static handle(request) {
    BrowserLanguage.#headers = request.headers
    return BrowserLanguage
  }
}

export default BrowserLanguage
