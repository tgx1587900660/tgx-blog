// vuepress 的文档地址 https://vuepress.vuejs.org/zh/config/

// 引入 配置函数, 用于判断当前环境是 '开发模式' 还是 '发布模式'
const { defineConfig } = require('vuepress/config')

// 引入 工具函数
const { getRandomElement, getCurrentTime } = require('./utils')

// 引入 菜单
const { nav, sidebar } = require('./menus/index.js')

// 直接导出一个 '对象' 和 'defineConfig返回的对象' 效果一样
module.exports = defineConfig(ctx => ({
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
        // 路径指向 .vuepress/public
        // href: '/xiao.ico'
        href: getRandomElement(['/tang.ico', '/gan.ico', '/xiao.ico']) // 随机取一个 favicon
      }
    ]
  ],

  // 开发服务器地址, 默认是 0.0.0.0
  host: 'localhost',

  // 指定 build 的输出目录, 默认打包到 docs/.vuepress/dist 下
  dest: './dist', // 现在会打包到与 docs 平级的目录下

  // markdown 相关配置
  markdown: {
    // 给 .md 文件中每个代码块显示行号
    lineNumbers: true
  },

  // vuepress 默认主题 的配置
  themeConfig: {
    // 左上角网站 Logo
    logo: '/img/logo.png',

    // 顶部导航栏
    nav,
    // 侧边栏菜单
    sidebar,

    // 标题深度，2 表示提取 h2 和 h3 标题
    sidebarDepth: 2,

    // 是否启用页面滚动效果
    smoothScroll: true,
    // 是否在滚动页面时实时更新 URL 值
    activeHeaderLinks: false,

    // 最后更新时间
    lastUpdated: '上次更新',

    // 是否开启页面底部的 下一篇 链接
    nextLinks: true,
    // 是否开启页面底部的 上一篇 链接
    prevLinks: true,

    // 仓库链接文字
    repoLabel: 'Gitee 仓库',
    // 仓库地址
    repo: 'https://gitee.com/tgx-1587900660'
  },

  // 注册插件
  plugins: [
    // 1. 返回顶部 插件
    '@vuepress/back-to-top',
    // 2. 最后更新时间 插件
    ['@vuepress/last-updated', { transformer: timestamp => getCurrentTime(timestamp) }],
    // 3. 放大页面中的图片 插件
    '@vuepress/medium-zoom'
  ],

  // 额外监听的文件（无效，导航菜单变更，必须手动重启，原因未知）
  extraWatchFiles: ['.vuepress/menus/**'],

  // 浏览器兼容性设置：开发模式时 舍弃 IE, 提升性能, 减小体积
  evergreen: !ctx.isProd
}))
