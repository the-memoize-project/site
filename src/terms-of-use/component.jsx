import Master, {
  Canonical,
  Description,
  OpenGraph,
  Title,
  TwitterCard,
} from '@master'
import Hero from './hero'
import Terms from './terms'

function component(termsOfUse) {
  Title.change(termsOfUse.title)
  Description.change(termsOfUse.description)
  TwitterCard.change({
    title: termsOfUse.title,
    description: termsOfUse.description,
  })
  OpenGraph.change({
    title: termsOfUse.title,
    description: termsOfUse.description,
  })
  Canonical.change(termsOfUse.canonical)

  return (
    <Master>
      <Hero />
      <Terms />
    </Master>
  )
}

export default component
