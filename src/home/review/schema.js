import t from './i18n'

export default () => ({
  '@id': '#review',
  '@type': 'Review',
  author: {
    '@id': '#person',
    '@type': 'Person',
    name: 'Dijalma Santos Cavalcante de Carvalho',
  },
  reviewBody: t.quote,
  reviewRating: {
    '@id': '#rating',
    '@type': 'Rating',
    bestRating: 5,
    ratingValue: 4,
  },
})
