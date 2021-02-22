module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['prettier', 'airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix'
    ]
  }
};
