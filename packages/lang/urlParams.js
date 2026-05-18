import { params } from '@router'

class URLParams {
  static get lang() {
    return params.lang?.replace(
      /^([a-z]+)(-[a-z]+)?$/i,
      (_, language, region) =>
        region
          ? `${language.toLowerCase()}-${region.slice(1).toUpperCase()}`
          : language.toLowerCase(),
    )
  }
}

export default URLParams
