import h from './h'

export { default as Fragment } from './fragment'

async function jsxRuntime(type, { children, ...props }) {
  children = Array.isArray(children) ? children : [children]
  return h(type, props, ...children)
}

export const jsx = jsxRuntime
export const jsxs = jsxRuntime
export const jsxDEV = jsxRuntime
