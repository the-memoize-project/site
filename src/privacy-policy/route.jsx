import router from '@router'
import PrivacyPolicy from './privacy-policy'
import init from './init'

router.get('/politica-de-privacidade', async function privacyPolicy() {
  return new Response(await (<PrivacyPolicy />), init)
})
