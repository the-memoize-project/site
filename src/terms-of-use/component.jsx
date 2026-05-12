import Master, { Canonical, Description, Title } from '@master'
import Hero from './hero'
import Terms from './terms'

function component(termsOfUse) {
  Title.change(termsOfUse.title)
  Description.change(termsOfUse.description)
  Canonical.change(termsOfUse.canonical)

  return (
    <Master>
      <Hero />
      <Terms />
    </Master>
  )
}

export default component
