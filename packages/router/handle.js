import args from './args'
import body from './body'
import headers from './headers'
import match from './match'
import params from './params'

async function handle(request, env, ctx) {
  const { page, path } = match(request)

  await body(request)
  args(request)
  headers(request)
  params(request, path)

  return page?.(request, env, ctx)
}

export default handle
