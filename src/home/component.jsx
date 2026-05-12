import Master, { Canonical, Description, JsonLd, Title } from '@master'
import App from './app'
import Audience from './audience'
import Benefits from './benefits'
import Faq from './faq'
import Hero from './hero'
import Highlight from './highlight'
import Review from './review'
import schema from './schema.json'
import Solution from './solution'
import Workflow from './workflow'

function component(home) {
  Title.change(home.title)
  Description.change(home.description)
  Canonical.change(home.canonical)
  JsonLd.push(schema)

  return (
    <Master>
      <Hero />
      <Highlight />
      <Benefits />
      <Solution />
      <Review />
      <Workflow />
      <Audience />
      <Faq />
      <App />
    </Master>
  )
}

export default component
