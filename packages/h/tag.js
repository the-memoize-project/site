class Tag {
  static isSelfClose(element) {
    return /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i.test(
      element,
    )
  }
}

export default Tag
