import bots from './bots'

class Agent {
  static #headers

  static get bot() {
    return bots.test(Agent.#headers.get('user-agent'))
  }

  static get user() {
    return !Agent.bot
  }

  static handle(request) {
    Agent.#headers = request.headers
    return Agent
  }
}

export default Agent
