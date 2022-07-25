// vuepress 2.x 的文档地址 https://v2.vuepress.vuejs.org/zh/

// 引入主题
const { defaultTheme } = require('@vuepress/theme-default')
// 引入插件
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

// 引入 工具函数
const { getRandomElement, getCurrentTime } = require('./utils')

// 引入 菜单
const { navbar, sidebar } = require('./menus/index.js')

module.exports = {
  // 站点语言
  lang: 'zh-CN',
  // 部署站点的基准路径, 默认是 /
  base: '/tgx-blog/',

  // 左上角的标题
  title: 'telectron 的网络日志',

  // 网站的 SEO 描述 (首页的二级标题)
  description: '唐干宵的网络日志|博客，一个普通上班族的网络日志|博客，telectron 的网络日志|博客，谭竿霄的网络日志|博客',

  // 需要被注入到 <head> 标签的内容
  head: [
    [
      // 添加一个 link 标签到 <head> 中
      'link',
      // link 标签具有以下属性
      {
        rel: 'shortcut icon',
        // 路径指向 docs/.vuepress/public
        href: getRandomElement(['/tang.ico', '/gan.ico', '/xiao.ico']) // 随机取一个 favicon
      }
    ]
  ],

  // 指定 build 的输出目录, 默认打包到 docs/.vuepress 里面
  dest: './dist', // 现在会打包到与 docs 平级的目录下
  // 指定临时文件目录
  temp: './.temp',
  // 指定缓存目录
  cache: './.cache',

  // 开发服务器地址和端口, 默认是 0.0.0.0:8080
  host: 'localhost',
  port: '8080',

  // markdown 相关配置
  markdown: {
    // 给 .md 文件中每个代码块显示行号
    lineNumbers: true
  },

  // vuepress 默认主题 的配置
  theme: defaultTheme({
    // 左上角网站 Logo
    logo: '/img/logo.png',

    // 顶部导航栏
    navbar,
    // 侧边栏菜单
    sidebar,

    // 标题深度，2 表示提取 h2 和 h3 标题
    sidebarDepth: 2,

    // 是否启用页面滚动效果
    smoothScroll: true,
    // 是否在滚动页面时实时更新 URL 值
    activeHeaderLinks: false,

    // 最后更新时间 和 贡献者
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    // 仓库配置
    repoLabel: 'Gitee 仓库',
    repo: 'https://gitee.com/tgx-1587900660',
    editLink: false
  }),

  // 注册插件
  plugins: [
    // 1. 返回顶部 插件
    backToTopPlugin(),
    // 2. 最后更新时间 插件
    // ['@vuepress/last-updated', { transformer: timestamp => getCurrentTime(timestamp) }],
    // // 3. 放大页面中的图片 插件
    // '@vuepress/medium-zoom'
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
}
