import Agent from '@agent'
import { Show } from '@component'

function component() {
  return (
    <Show when={Agent.user}>
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@400;500;700&display=swap"
      />
    </Show>
  )
}

export default component
