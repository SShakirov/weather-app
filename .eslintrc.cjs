/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['eslint-plugin-import-helpers'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-throw-literal': 'warn',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
    'arrow-spacing': 'warn',
    'max-len': ['error', {
      code: 120,
    }],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/store/',
          '/modules/',
          '/type/',
          '/components/',
          ['/UI/', '/components_styled/'],
          '/shared/',
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: { order: 'asc', ignoreCase: false },
      },
    ],
  },
}
