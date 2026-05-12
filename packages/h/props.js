import ClassName from './className'

class Props {
  static stringify(attrs) {
    attrs = ClassName.mapper(attrs)
    return Object.entries(attrs)
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => `${key}='${value}'`)
      .join(' ')
  }
}

export default Props
