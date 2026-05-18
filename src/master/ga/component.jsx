import Agent from '@agent'
import { Show } from '@component'

function component() {
  return (
    <Show when={Agent.user}>
      <script async src="//www.googletagmanager.com/gtag/js?id=G-H0XTBCGZ9W" />
      <script>{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-H0XTBCGZ9W');`}</script>
    </Show>
  )
}

export default component
