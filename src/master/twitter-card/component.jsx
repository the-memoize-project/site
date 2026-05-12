function component(props) {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@memoizecards" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
    </>
  )
}

export default component
