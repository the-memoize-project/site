import listeners from './listeners'

const urlFor = (name, params, host = '') => {
  const anchor = { path: '#' }
  const { path } =
    listeners.GET.find((route) => route.name === name) ?? anchor
  return `${host}${path.replace(/:(?<key>\w+)/g, (_, key) => params[key])}`
}

export default urlFor
