import Agent from '@agent'
import { Show } from '@component'

function component(props) {
  return (
    <Show when={Agent.bot}>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': props.graph,
          '@type': 'Schema',
        })}
      </script>
    </Show>
  )
}

export default component
