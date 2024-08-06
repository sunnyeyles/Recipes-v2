module.exports = {
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case-start-capital': [2, 'always'],
    'header-type-required': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': (parsed) => {
          return [
            /^[A-Z]/.test(parsed.raw),
            'The commit message has to start with a capital letter. - I know I sound like an English teacher...',
          ]
        },
        'header-min-length': (parsed) => {
          return [
            parsed.raw.length >= 20,
            'Be more descriptive, your commit message has to be more than 20 chars.',
          ]
        },
        'header-type-required': ({ header }) => {
          const validTypes = ['bug fix', 'new feature', 'generic']
          const hasValidType = validTypes.some((type) =>
            header.toLowerCase().includes(type)
          )

          return [
            hasValidType,
            `Commit message must include: bug fix, new feature, or just include generic to opt out of it.`,
          ]
        },
      },
    },
  ],
}
