module.exports = {
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case-start-capital': [2, 'always'],
    // 'header-end-period': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': (parsed) => {
          return [
            /^[A-Z]/.test(parsed.raw),
            'The commit message has to start with a capital letter',
          ]
        },
        'header-min-length': (parsed) => {
          return [
            parsed.raw.length >= 20,
            'Be more descriptive, you cannot use a 2 letter commit',
          ]
        },
        // 'header-end-period': (parsed) => {
        //   return [
        //     /\.$/.test(parsed.raw),
        //     'Please end the sentence with a full stop! (.)',
        //   ]
        // },
      },
    },
  ],
}
