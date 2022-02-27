// vuepress 的文档地址 https://vuepress.vuejs.org/zh/config/

// 引入 工具函数
const tools = require('./utils')

// 引入 各模块的侧边导航菜单
const FrontendVue2Sidebar = require('../frontend/vue2/index.js')
const FrontendVue3Sidebar = require('../frontend/vue3/index.js')
const FrontendGitSidebar = require('../frontend/git/index.js')
const FrontendJavaScriptSidebar = require('../frontend/javascript/index.js')
const FrontendToolsSidebar = require('../frontend/tools/index.js')

module.exports = {
  // 部署站点的基准路径, 默认是 /
  base: '/tgx-blog/',

  // 左上角的标题
  title: 'telectron 的网络日志',

  // 网站的 SEO 描述
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
        href: tools.getRandomElement(['/tang.ico', '/gan.ico', '/xiao.ico']) // 随机取一个 favicon
      }
    ]
  ],

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
    nav: [
      {
        text: '前端学习',
        items: [
          // 1️. 如果 link 为 '/test/', vuepress 会去 docs/test 文件夹中查找 README.md
          // 2. 如果 link 为 '/test/README', 会出错404(即使有 README.md 文件)
          // 3. 如果 link 为 '/test/README.md', 会出错404(即使有 README.md 文件)
          // 4. 如果 link 为 '/test/test-001', vuepress 会去 docs/test 文件夹中查找 test-001.md
          // 5. 如果 link 为 '/test/test-001.md', vuepress 会去 docs/test 文件夹中查找 test-001.md
          // { text: 'test', link: '/test/test-001' },
          // 为了可读性, 我们将采取 方案4 来管理文章链接
          { text: 'Vue2', link: '/frontend/vue2/source-integration' },
          { text: 'Vue3', link: '/frontend/vue3/vue3-change-details' },
          { text: 'Git', link: '/frontend/git/git-command' },
          { text: 'JavaScript', link: '/frontend/javascript/data-processing-method' },
          { text: 'Tools', link: '/frontend/tools/webpack-study' }
        ]
      }
    ],
    // 侧边栏菜单
    sidebar: {
      // 键名：是文档路径标识 (表示以下文档都在 与 .vuepress 平级的 frontend/vue2 文件夹中)
      // 键值：是一个数组，里面的每一个对象表示一篇 .md 文档（这里提供一个示例写法）
      '/frontend/vue2': [
        {
          // 设置一级标题 (vuepress 会从 .md 文档中自动提取 二级标题)
          title: '资源整合',
          // 对应的文章路径 (同 nav 里面的 link, 采取方案4)
          path: '/frontend/vue2/source-integration'
        },
        ...FrontendVue2Sidebar
      ],
      '/frontend/vue3': FrontendVue3Sidebar,
      '/frontend/git': FrontendGitSidebar,
      '/frontend/javascript': FrontendJavaScriptSidebar,
      '/frontend/tools': FrontendToolsSidebar
    },
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
    repo: 'https://gitee.com/tgx-1587900660/tgx-blog'
  }
}
