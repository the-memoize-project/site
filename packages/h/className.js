class ClassName {
  static mapper(attrs) {
    attrs.class = []
      .concat(attrs.className)
      .flat(Number.POSITIVE_INFINITY)
      .join(' ')
    delete attrs.className
    return attrs
  }
}

export default ClassName
