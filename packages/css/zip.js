function zip(strings, expressions) {
  return Array(Math.max(strings.length, expressions.length))
    .fill()
    .map((_, i) => [strings[i], expressions[i]])
    .flat(Number.POSITIVE_INFINITY)
    .join('')
}

export default zip
