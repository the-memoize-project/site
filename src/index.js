import Agent from '@agent'
import env from '@env'
import Lang from '@lang'
import { Canonical, HREFLang } from '@master'
import router from '@router'

import './home'
import './terms-of-use'
import './privacy-policy'

export default {
  async fetch(request, environment) {
    env(environment)
    Agent.handle(request)
    Canonical.handle(request)
    HREFLang.handle(request)
    Lang.handle(request)
    return router.handle(request)
  },
}
