module.exports = {
    // vuepress 的文档地址 https://vuepress.vuejs.org/zh/config/

    /**
     * 部署站点的基准路径 (类型: string 默认值: /)
     */
    base: '/txg-blog/',

    /**
     * 网站的标题 (类型: string 默认值: undefined)
     */
    title: '谭竿霄',

    /**
     * 网站的 SEO 描述 (类型: string 默认值: undefined)
     */
    description: '一个普通上班族的前端博客',

    /**
     * 需要被注入到 HTML <head> 中的标签 (类型: Array 默认值: [])
     */
    head: [
        [
            // 添加一个 link 标签到 <head> 中
            'link',
            // link 标签具有以下属性
            {
                rel: 'shortcut icon',
                // 路径指向 .vuepress/public
                href: '/xiao.ico'
            }
        ]
    ],

    /**
     * 指定用于 dev server 的主机名 (类型: string 默认值: '0.0.0.0')
     * 0.0.0.0 , 127.0.0.1 , localhost 三者的区别 ?
     */
    host: 'localhost',

    /**
     * 指定 dev server 的端口 (类型: number 默认值: 8080)
     */
    port: 3000,

    /**
     * 指定客户端文件的临时目录 (类型: string 默认值: /path/to/@vuepress/core/.temp)
     */
    // temp: '/path/to/@vuepress/core/.temp'

    /**
     * 指定 vuepress build 的输出目录 (类型: string 默认值: .vuepress/dist)
     * 如果传入的是相对路径，则会基于 process.cwd() 进行解析
     */
    // dest:

    /**
     * 提供多语言支持的语言配置 (类型: { [path: string]: Object } 默认值: undefined)
     * 配置文档: https://vuepress.vuejs.org/zh/guide/i18n.html
     */
    // locales: undefined,

    /**
     * 一个函数，用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的 (类型: Function 默认值: () => true)
     * 配置文档: https://ssr.vuejs.org/zh/api/#shouldpreload
     */
    // shouldPrefetch: () => true,

    /**
     * 是否缓存 (类型: boolean|string 默认值: true)
     * VuePress 默认使用了 cache-loader 来加快 webpack 的编译速度
     */
    cache: true,

    /**
     * 指定额外的需要被监听的文件 (类型: Array 默认值: [])
     * 文件变动将会触发 vuepress 重新构建 并实时更新
     */
    extraWatchFiles: [
        '.vuepress/foo.js', // 使用相对路径
        '/path/to/bar.js' // 使用绝对路径
    ],

    // 指定要解析的文件模式 (类型: Array 默认值: ['**/*.md', '**/*.vue'])
    // patterns: ['**/*.md', '**/*.vue'],

    themeConfig: {
        // 网站 Logo
        logo: '/img/logo.jpg',
        // 顶部右侧导航栏
        nav: [
            { text: '前端基础', link: '/accumulate/' },
            { text: '算法题库', link: '/algorithm/' },
            { text: '微信', link: 'https://www.baidu.com' },
            {
                text: '语言',
                ariaLabel: '语言菜单',
                items: [
                    { text: '中文简体', link: '/language/chinese/' },
                    { text: '英语', link: '/language/english/' }
                ]
            }
        ],
        sidebar: [
            {
                title: '前端基础', // 必要的
                path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1 // 可选的, 默认值是 1
                // children: ['/']
            },
            {
                title: '算法题库',
                path: '/bar/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: [
                    {
                        title: '冒泡排序',
                        path: '/bar-children/'
                    }
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ],
        sidebarDepth: 2 // 侧边栏显示2级
    },
    configureWebpack: {
        resolve: {
            alias: { '@alias': 'path/to/some/dir' }
        }
    },
    markdown: {
        // 给 .md 文件中每个代码块显示行号
        lineNumbers: true
    }
}
