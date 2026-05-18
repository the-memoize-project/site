import Lang from '@lang'

const init = () => ({
  headers: {
    'Accept-Language': Lang.value,
    'Content-Type': 'text/html; charset=utf-8',
  },
  status: 200,
})

export default init
