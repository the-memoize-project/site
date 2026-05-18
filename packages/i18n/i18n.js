import lang from '@lang'

const i18n = (dictionary) =>
  new Proxy(
    {},
    {
      get: (_, key) => dictionary[key][lang.value],
    },
  )

export default i18n
