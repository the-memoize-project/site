import Master, { Canonical, Description, Title } from '@master'
import Hero from './hero'
import Terms from './terms'

function component(privacyPolicy) {
  Title.change(privacyPolicy.title)
  Description.change(privacyPolicy.description)
  Canonical.change(privacyPolicy.canonical)

  return (
    <Master>
      <Hero />
      <Terms />
    </Master>
  )
}

export default component
