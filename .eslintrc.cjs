module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': ['error'],
    'simple-import-sort/exports': ['error']
  }
}
