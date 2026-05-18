import BrowserLanguage from './browserLanguage'
import GeoLanguage from './geoLanguage'
import URLParams from './urlParams'

class Lang {
  static get value() {
    if (URLParams.lang) return URLParams.lang
    if (BrowserLanguage.lang) return BrowserLanguage.lang
    if (GeoLanguage.lang) return GeoLanguage.lang
    return 'en'
  }

  static handle(request) {
    BrowserLanguage.handle(request)
    GeoLanguage.handle(request)
    return Lang
  }
}

export default Lang
