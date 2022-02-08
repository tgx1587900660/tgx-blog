// vuepress 的文档地址 https://vuepress.vuejs.org/zh/config/
const tools = require('./utils')

const randomIcon = ['/tang.ico', '/gan.ico', '/xiao.ico']

module.exports = {
    // 部署站点的基准路径, 默认是 /
    base: '/tgx-blog/',

    // 左上角的标题
    title: 'telectron 的博客',

    // 网站的 SEO 描述
    description: '唐干宵的博客，一个普通上班族的博客，telectron 的博客，谭竿霄的博客',

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
                href: tools.getRandomElement(randomIcon)
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

    plugins: ['@vuepress/last-updated'],

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
                    { text: 'vue2', link: '/frontend/vue2/personal-blog' }
                    // { text: 'vue3', link: '/frontend/vue3/' }
                ]
            }
        ],
        // 侧边栏菜单
        sidebar: [
            {
                // 设置一级标题(子标题会从.md文档中自动提取)
                title: '使用 vuepress 搭建个人博客',
                // 对应的文章路径(同 nav 里面的 link, 采取方案4)
                path: '/frontend/vue2/personal-blog'
            },
            {
                title: '资源整合',
                path: '/frontend/vue2/bk-open-source'
            },
            {
                title: 'Git 命令收集',
                path: '/frontend/vue2/git-command'
            },
            {
                title: '旧项目 Eslint 升级体验',
                path: '/frontend/vue2/eslint-upgrade'
            }
        ],
        // 标题深度，2 表示提取 h2 和 h3 标题
        sidebarDepth: 2,

        // 是否启用页面滚动效果
        smoothScroll: true,

        // 最后更新时间
        lastUpdated: '最后更新时间',

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
