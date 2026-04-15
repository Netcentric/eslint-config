module.exports = {
  root: true,
  extends: [
    'eslint-config-airbnb-base'
  ],
  env: {
    es2020: true,
    jest: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-param-reassign': [
      'error',
      { props: false }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'max-len': [
      'warn',
      { code: 200 }
    ],
    indent: [
      'error',
      4
    ],
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'prefer-destructuring': 0,
    'implicit-arrow-linebreak': 0,
    'no-return-assign': [
      'error',
      'except-parens'
    ],
    'no-restricted-globals': [
      'off',
      'location',
      'top'
    ],
    'object-curly-newline': [
      'error',
      { consistent: true }
    ],
    'no-underscore-dangle': 0,
    'no-trailing-spaces': 'off',
    'no-template-curly-in-string': 'off',
    'import/order': [
      'warn',
      {
        'groups': ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'newlines-between': 'never'
      }
    ]
  },
};

