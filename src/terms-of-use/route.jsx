import { Canonical, HREFLang } from '@master'
import router from '@router'
import init from './init'
import TermsOfUse from './terms-of-use'

router.get('/:lang/terms-of-use', async function termsOfUse() {
  Canonical.change('/en/terms-of-use')
  HREFLang.change('/terms-of-use')
  return new Response(await (<TermsOfUse />), init())
})
