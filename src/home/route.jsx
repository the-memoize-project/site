import router from '@router'
import Home from './home'
import init from './init'

router.get('/', async function home() {
  return new Response(await (<Home />), init)
})
