import { locales } from '@lang'

function component(props) {
  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hreflang={locale}
          href={`${props.base}/${locale}${props.path}`}
        />
      ))}
      <link
        rel="alternate"
        hreflang="x-default"
        href={`${props.base}/en${props.path}`}
      />
    </>
  )
}

export default component
