import t from './i18n'

export default () => ({
  '@id': '#faqpage',
  '@type': 'FAQPage',
  isPartOf: { '@id': '#website' },
  mainEntity: [
    {
      '@type': 'Question',
      name: t.spacedRepetitionQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.spacedRepetitionAnswer },
    },
    {
      '@type': 'Question',
      name: t.effectivenessQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.effectivenessAnswer },
    },
    {
      '@type': 'Question',
      name: t.resultsQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.resultsAnswer },
    },
    {
      '@type': 'Question',
      name: t.contentTypesQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.contentTypesAnswer },
    },
    {
      '@type': 'Question',
      name: t.dailyTimeQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.dailyTimeAnswer },
    },
    {
      '@type': 'Question',
      name: t.gettingStartedQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.gettingStartedAnswer },
    },
    {
      '@type': 'Question',
      name: t.ageQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.ageAnswer },
    },
    {
      '@type': 'Question',
      name: t.languagesQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.languagesAnswer },
    },
    {
      '@type': 'Question',
      name: t.pricingQuestion,
      acceptedAnswer: { '@type': 'Answer', text: t.pricingAnswer },
    },
  ],
})
