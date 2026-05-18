import lang from '@lang'
import t from './i18n'

export default () => ({
  '@id': '#webpage',
  '@type': 'WebPage',
  about: { '@id': '#organization' },
  description: t.description,
  inLanguage: lang.value,
  isPartOf: { '@id': '#website' },
  mentions: { '@id': '#webapplication' },
  name: t.title,
  publisher: { '@id': '#organization' },
  relatedLink: ['https://memoize.cards'],
  significantLink: 'https://memoize.cards',
  url: 'https://memoize.cards',
})
