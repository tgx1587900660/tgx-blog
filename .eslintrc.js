module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 开启默认配置
  extends: 'eslint:recommended',
  // 自定义的规则
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single']
  }
}
