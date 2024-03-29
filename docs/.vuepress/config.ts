import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { path } from '@vuepress/utils'

// 引入 左侧和顶部菜单
import { navbar, sidebar, head } from './configs'

export default defineUserConfig({
  // 部署站点的基准路径, 默认是 /
  base: '/tgx-blog/',
  title: 'telectron 的网络日志',
  description: '唐干宵的博客|唐干宵的网络日志|谭竿霄的博客|谭竿霄的网络日志|前端技术学习|使用 vuepress 搭建个人博客',
  // 需要被注入到 <head> 标签的内容(路径指向 docs/.vuepress/public)
  head,

  // 指定临时文件和缓存目录
  temp: './.temp',
  cache: './.cache',

  // 开发服务器地址和端口, 默认是 0.0.0.0:8080
  host: 'localhost',
  port: 8090,

  // vuepress 默认主题 的配置
  theme: defaultTheme({
    logo: '/img/home.jpg',
    navbar,
    sidebar,
    tip: '说明',
    warning: '警告',
    danger: '危险',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
      // ...
    ],
    backToHome: '返回首页',
    toggleColorMode: '点击切换颜色模式',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    repoLabel: 'Github 仓库',
    repo: 'https://github.com/tgx1587900660/tgx-blog',
    editLink: false,
    sidebarDepth: 2
  }),

  // 插件
  plugins: [
    // 将 components 目录下的所有文件注册为组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    // 提供文档搜索功能
    searchPlugin({})
  ]
})
