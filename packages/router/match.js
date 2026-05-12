import listeners from './listeners'

function match(request) {
  const url = new URL(request.url)
  const pathname = url.pathname

  return (
    listeners[request.method].find(({ path }) => {
      const pattern = path.replace(/:\w+/g, '([a-z0-9-_]+)')
      const regex = new RegExp(`^${pattern}$`, 'i')
      return regex.test(pathname)
    }) ?? {}
  )
}

export default match
