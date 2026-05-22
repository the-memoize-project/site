import { Canonical, HREFLang } from '@master'
import router from '@router'
import Flashcards from './flashcards'
import init from './init'

router.get('/:lang/flashcards', async function flashcards() {
  Canonical.change('/en/flashcards')
  HREFLang.change('/flashcards')
  return new Response(await (<Flashcards />), init())
})
