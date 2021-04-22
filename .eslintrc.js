module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    $: 'readonly',
  },
  rules: {
    'class-methods-use-this': 0,
  },
};
