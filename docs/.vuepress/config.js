// vuepress 的文档地址 https://vuepress.vuejs.org/zh/config/

const tools = require('./utils')

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

    // plugins: [
    //     '@vuepress/last-updated',
    //     {
    //         transformer: (timestamp, lang) => {
    //             // 不要忘了安装 moment
    //             console.log('--------------');
    //             console.log(timestamp, lang);
    //             console.log('--------------');
    //             return '99999999'
    //         }
    //     }
    // ],

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
                    { text: 'vue2', link: '/frontend/vue2/source-integration' },
                    { text: 'git', link: '/frontend/git/git-command' },
                    { text: 'tools', link: '/frontend/tools/webpack-study' },
                ]
            }
        ],
        // 侧边栏菜单
        sidebar: {
            // 文档路径标识 (表示以下文档都在 与 .vuepress 平级的 frontend/vue2 文件夹中)
            '/frontend/vue2': [
                {
                    // 设置一级标题 (vuepress 会从 .md 文档中自动提取 二级标题)
                    title: '资源整合',
                    // 对应的文章路径 (同 nav 里面的 link, 采取方案4)
                    path: '/frontend/vue2/source-integration'
                },
                {
                    title: '使用 vuepress 搭建个人博客',
                    path: '/frontend/vue2/personal-blog'
                },
                {
                    title: 'Vue 冷门知识复习',
                    path: '/frontend/vue2/unlikely-knowledge'
                },
                {
                    title: 'Vue 问答整理',
                    path: '/frontend/vue2/vue-questions-answers'
                },
                {
                    title: 'Vue 组件封装原则',
                    path: '/frontend/vue2/component-package-principle'
                }
            ],
            '/frontend/git': [
                {
                    title: 'Git 命令收集',
                    path: '/frontend/git/git-command'
                }
            ],
            '/frontend/tools': [
                {
                    title: 'Webpack 知识复习',
                    path: '/frontend/tools/webpack-study'
                },
                {
                    title: 'Eslint 升级体验',
                    path: '/frontend/tools/eslint-upgrade'
                }
            ]
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
