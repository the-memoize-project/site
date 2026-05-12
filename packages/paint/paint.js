function paint(component) {
  return (Klass) =>
    new Proxy(
      function (props, children) {
        return this instanceof Klass
          ? component(new Klass(...arguments), children)
          : component(new Klass(props), children)
      },
      {
        get: (_, key) => Reflect.get(Klass, key),
        set: (_, key, value) => (Reflect.set(Klass, key, value), true),
      },
    )
}

export default paint
