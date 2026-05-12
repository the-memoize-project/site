function component(props) {
  return (
    <>
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content={props.type} />
      <meta property="og:url" content={props.url} />
    </>
  )
}

export default component
