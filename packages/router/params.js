const params = (request, path) => {
  const url = new URL(request.url)
  const keys = path?.split('/')
  const values = url.pathname.split('/')

  keys?.forEach((key, i) => {
    if (/^:/.test(key)) {
      Reflect.set(params, key.slice(1), values[i])
    }
  })
}

export default params
