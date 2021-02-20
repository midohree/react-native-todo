module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'arrow-parens': ['warn', 'as-needed'],
    'eol-last': ['warn', 'always'],
    'no-unused-vars': ['warn', { args: 'none' }],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-before-blocks': ['warn', 'always'],
    'no-process-env': ['warn'],
  },
};
