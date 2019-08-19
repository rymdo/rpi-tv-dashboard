module.exports = {
  parser: '@typescript-eslint/parser', // define babel as the parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:node/recommended',
  ],
  plugins: ['react'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
  },
  parserOptions: {
    ecmaVersion: 2018, // understands let, const and other features
    sourceType: 'module', // understands the use of import and export
    ecmaFeatures: {
      jsx: true, // understands the use of tags inside js files
    },
  },
  env: {
    browser: true, // add browser globals variables like document and window
    es6: true, // add globals like Set
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
