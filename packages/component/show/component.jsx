function component(props, children) {
  return props.when ? children.join('') : ''
}

export default component
