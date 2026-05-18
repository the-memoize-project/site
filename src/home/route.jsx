import Lang from '@lang'
import { Canonical, HREFLang } from '@master'
import router from '@router'
import Home from './home'
import init from './init'

router.get('/', (request) => {
  return Response.redirect(`${new URL(request.url).origin}/${Lang.value}/`, 302)
})

router.get('/:lang/', async function home() {
  Canonical.change('/en/')
  HREFLang.change('/')
  return new Response(await (<Home />), init())
})
