import Children from './children'
import Props from './props'
import Tag from './tag'

class Element {
  static create(element, attrs, children) {
    const selfClose = Tag.isSelfClose(element)
    const props = Props.stringify(attrs)
    const textContent = Children.stringify(children)

    return selfClose
      ? `<${element} ${props}/>`
      : `<${element} ${props}>${textContent}</${element}>`
  }
}

export default Element
