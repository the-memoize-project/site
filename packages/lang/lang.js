import { params } from '@router'
import BrowserLanguage from './browserLanguage'
import GeoLanguage from './geoLanguage'

class Lang {
  static get value() {
    if (params.lang) return params.lang
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
