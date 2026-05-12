import router from '@router'
import TermsOfUse from './terms-of-use'
import init from './init'

router.get('/termos-de-uso', async function termsOfUse() {
  return new Response(await (<TermsOfUse />), init)
})
