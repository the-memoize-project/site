import Agent from '@agent'
import { Show } from '@component'

function component() {
  return (
    <Show when={Agent.user}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5682518312841496" crossorigin="anonymous" />
    </Show>
  )
}

export default component
