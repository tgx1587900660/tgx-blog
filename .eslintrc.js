module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 开启默认配置
  extends: 'eslint:recommended',
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single']
  }
}
