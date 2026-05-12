import Canonical from './canonical'
import Description from './description'
import Font from './font'
import Footer from './footer'
import Header from './header'
import JsonLd from './json-ld'
import OpenGraph from './open-graph'
import Prefetch from './prefetch'
import schema from './schema.json'
import Style from './style'
import Title from './title'
import TwitterCard from './twitter-card'

function component(_, children) {
  JsonLd.push(schema)

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="theme-color"
            content="#fafafa"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#1f1f1f"
            media="(prefers-color-scheme: dark)"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/memoize.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/memoize_180w.png" />
          <link rel="preconnect" href="//fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="//fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <Font />
          <Prefetch />
          <Canonical />
          <OpenGraph />
          <TwitterCard />
          <Title />
          <Description />
          <Style />
        </head>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
          <JsonLd />
        </body>
      </html>
    </>
  )
}

export default component
