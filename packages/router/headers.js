const headers = (request) => {
  Array.from(request.headers.entries()).forEach(([key, value]) => {
    Reflect.set(headers, key.toLowerCase(), value)
  })
}

export default headers
