import regions from './regions'

class GeoLanguage {
  static #headers

  static get lang() {
    const country = (GeoLanguage.#headers.get('CF-IPCountry') ?? '').toUpperCase()
    return regions[country]
  }

  static handle(request) {
    GeoLanguage.#headers = request.headers
    return GeoLanguage
  }
}

export default GeoLanguage
