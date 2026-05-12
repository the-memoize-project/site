class Children {
  static async mapper(children) {
    children = children.flat(Number.POSITIVE_INFINITY)
    children = children.filter(Boolean)
    children = await Promise.all(children)
    return children
  }

  static stringify(children) {
    return children.join('')
  }
}

export default Children
