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
  // 左上角的标题
  title: 'telectron 的网络日志',
  // 网站的 SEO 描述
  description: '唐干宵的网络日志|博客，telectron 的网络日志|博客，谭竿霄的网络日志|博客',

  // 需要被注入到 <head> 标签的内容(路径指向 docs/.vuepress/public)
  head: [['link', { rel: 'shortcut icon', href: getRandomElement(['/tang.ico', '/gan.ico', '/xiao.ico']) }]],

  // 指定 build 的输出目录, 默认打包到 docs/.vuepress 里面
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
    toggleColorMode: '点击切换颜色模式',
    lastUpdatedText: '上次更新',
    contributorsText: '作者',
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
