import { Canonical, HREFLang } from '@master'
import router from '@router'
import init from './init'
import PrivacyPolicy from './privacy-policy'

router.get('/:lang/privacy-policy', async function privacyPolicy() {
  Canonical.change('/en/privacy-policy')
  HREFLang.change('/privacy-policy')
  return new Response(await (<PrivacyPolicy />), init())
})
