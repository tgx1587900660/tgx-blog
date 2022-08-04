// 引入 vuepress默认主题
const { defaultTheme } = require('@vuepress/theme-default')

// 引入 vuepress插件
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

// 引入 工具函数
const { path } = require('@vuepress/utils')
const { getRandomElement } = require('./utils')

// 引入 左侧和顶部菜单
const { navbar, sidebar } = require('./menus/index.js')

module.exports = {
  // 部署站点的基准路径, 默认是 /
  base: '/tgx-blog/',
  title: 'telectron 的网络日志',
  description: '唐干宵的网络日志，telectron 的网络日志，谭竿霄的网络日志',

  // 需要被注入到 <head> 标签的内容(路径指向 docs/.vuepress/public)
  head: [['link', { rel: 'shortcut icon', href: getRandomElement(['/tang.ico', '/gan.ico', '/xiao.ico']) }]],

  // 指定打包路径 (默认打包到 docs/.vuepress 下)
  dest: './dist', // 现在会打包到与 docs 平级的目录下

  // 指定临时文件和缓存目录
  temp: './.temp',
  cache: './.cache',

  // 开发服务器地址和端口, 默认是 0.0.0.0:8080
  host: 'localhost',
  port: '8080',

  // vuepress 默认主题 的配置
  theme: defaultTheme({
    logo: '/img/logo.png',
    navbar,
    sidebar,
    tip: '说明',
    warning: '警告',
    danger: '危险',
    notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
    backToHome: '返回首页',
    toggleColorMode: '点击切换颜色模式',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    repoLabel: 'Gitee 仓库',
    repo: 'https://gitee.com/tgx-1587900660',
    editLink: false
  }),

  // 插件
  plugins: [
    // 将 components 目录下的所有文件注册为组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
}
