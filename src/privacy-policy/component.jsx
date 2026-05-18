import Master, {
  Canonical,
  Description,
  OpenGraph,
  Title,
  TwitterCard,
} from '@master'
import Hero from './hero'
import Terms from './terms'

function component(privacyPolicy) {
  Title.change(privacyPolicy.title)
  Description.change(privacyPolicy.description)
  TwitterCard.change({
    title: privacyPolicy.title,
    description: privacyPolicy.description,
  })
  OpenGraph.change({
    title: privacyPolicy.title,
    description: privacyPolicy.description,
  })
  Canonical.change(privacyPolicy.canonical)

  return (
    <Master>
      <Hero />
      <Terms />
    </Master>
  )
}

export default component
