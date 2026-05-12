async function body(request) {
  const data =
    /POST|PUT/i.test(request.method) &&
    /application\/json/i.test(request.headers.get('Content-Type'))
      ? await request.json()
      : {}

  Object.keys(data).forEach((key) => {
    Object.defineProperty(body, key, {
      configurable: true,
      enumerable: true,
      value: data[key],
      writable: true,
    })
  })
}

export default body
