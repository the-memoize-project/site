import Master, {
  Canonical,
  Description,
  JsonLd,
  OpenGraph,
  Title,
  TwitterCard,
} from '@master'
import Article from './article'
import Cta from './cta'
import Faq from './faq'
import Hero from './hero'
import Links from './links'
import schema from './schema.json'

function component(flashcards) {
  Title.change(flashcards.title)
  Description.change(flashcards.description)
  TwitterCard.change({
    title: flashcards.title,
    description: flashcards.description,
  })
  OpenGraph.change({
    title: flashcards.title,
    description: flashcards.description,
  })
  Canonical.change(flashcards.canonical)
  JsonLd.push(schema)

  return (
    <Master>
      <Hero />
      <Article />
      <Faq />
      <Links />
      <Cta />
    </Master>
  )
}

export default component
