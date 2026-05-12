import Agent from '@agent'
import env from '@env'
import router from '@router'

import './home'
import './terms-of-use'
import './privacy-policy'

export default {
  async fetch(request, environment) {
    env(environment)
    Agent.handle(request)
    return router.handle(request)
  },
}
