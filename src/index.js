module.exports = {
  root: true,
  extends: 'eslint-config-airbnb-base',
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
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 1,
    'import/prefer-default-export': 0,
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
    'no-template-curly-in-string': 'off'
  }
};
  
