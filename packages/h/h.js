import Children from './children'
import Componet from './component'
import Element from './element'

async function h(elementOrComponent, attrs, ...children) {
  attrs = { ...attrs }
  children = await Children.mapper(children)

  return Componet.is(elementOrComponent)
    ? Componet.execute(elementOrComponent, attrs, children)
    : Element.create(elementOrComponent, attrs, children)
}

export default h
