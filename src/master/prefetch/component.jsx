function component(props) {
  return (
    <>
      {props.urls.map((url) => (
        <link rel="prefetch" href={url} />
      ))}
    </>
  )
}

export default component
