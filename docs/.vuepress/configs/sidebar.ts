// 左侧菜单 配置文件

// 属性名是字符串，表示路径，属性值是数组，有几个成员，就有几个折叠栏
import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  // 前端学习 区域
  '/frontend/source': [
    {
      text: '项目资源收录',
      collapsible: true,
      children: [
        '/frontend/source/project/source-integration.md',
        '/frontend/source/project/project-collection.md'
        // ...
      ]
    },
    {
      text: '技术文章收录',
      collapsible: true,
      children: [
        '/frontend/source/article/personal-blog.md',
        '/frontend/source/article/browser.md',
        '/frontend/source/article/dev-web.md',
        '/frontend/source/article/authentication.md',
        '/frontend/source/article/code-lint-usage.md',
        '/frontend/source/article/eslint-upgrade.md',
        '/frontend/source/article/security-error.md'
      ]
    }
  ],
  '/frontend/vue': [
    {
      text: 'Vue2',
      collapsible: true,
      children: [
        '/frontend/vue/vue2/unlikely-knowledge.md',
        '/frontend/vue/vue2/vue-questions-answers.md',
        '/frontend/vue/vue2/component-package-principle.md',
        '/frontend/vue/vue2/vue-router.md',
        '/frontend/vue/vue2/vue-source.md'
        // ...
      ]
    },
    {
      text: 'Vue3',
      collapsible: true,
      children: [
        '/frontend/vue/vue3/vue3-change-details.md',
        '/frontend/vue/vue3/vue3-study.md'
        // ...
      ]
    }
  ],
  '/frontend/typescript': [
    {
      text: 'TypeScript',
      collapsible: true,
      children: [
        '/frontend/typescript/ts-application.md',
        '/frontend/typescript/typescript.md'
        // ...
      ]
    }
  ],
  '/frontend/javascript': [
    {
      text: 'Javascript',
      collapsible: true,
      children: [
        '/frontend/javascript/data-processing-method.md',
        '/frontend/javascript/restructure.md',
        '/frontend/javascript/modularity-standard.md',
        '/frontend/javascript/promise.md',
        '/frontend/javascript/async-await.md',
        '/frontend/javascript/event-loop.md'
      ]
    }
  ],
  '/frontend/tools': [
    {
      text: '工具使用',
      collapsible: true,
      children: [
        '/frontend/tools/git-command.md',
        '/frontend/tools/webpack-study.md',
        '/frontend/tools/vite-study.md',
        '/frontend/tools/vant-theme.md',
        '/frontend/tools/special-needs.md'
        // ...
      ]
    }
  ],
  '/frontend/packages': [
    {
      text: '前端依赖包相关',
      collapsible: true,
      children: [
        '/frontend/packages/third-party-packages'
        // ...
      ]
    }
  ],
  '/frontend/applet': [
    {
      text: '小程序相关',
      collapsible: true,
      children: [
        '/frontend/applet/learning-path.md',
        '/frontend/applet/about-applet.md',
        '/frontend/applet/applet-compose.md'
        // ...
      ]
    }
  ],

  // 后端学习 区域
  '/backend/node': [
    {
      text: 'Node 基础知识',
      collapsible: true,
      children: [
        '/backend/node/node.md',
        '/backend/node/module-loading.md',
        '/backend/node/express.md'
        // ...
      ]
    },
    {
      text: 'Node 相关工具',
      collapsible: true,
      children: [
        '/backend/node/package-knowledge.md',
        '/backend/node/yarn-useage.md'
        // ...
      ]
    }
  ],
  '/backend/database': [
    {
      text: '数据库相关',
      collapsible: true,
      children: [
        '/backend/database/database.md',
        '/backend/database/mysql.md',
        '/backend/database/sql.md'
        // ...
      ]
    }
  ],
  '/backend/packages': [
    {
      text: '后端依赖包相关',
      collapsible: true,
      children: [
        '/backend/packages/third-party-packages.md'
        // ...
      ]
    }
  ],

  // 联系我区域
  '/about-me': [
    {
      text: '优秀的朋友们',
      collapsible: true,
      children: [
        '/about-me/my-profile.md',
        '/about-me/friend-link.md'
        // ...
      ]
    },
    {
      text: '小作文',
      collapsible: true,
      children: [
        '/about-me/articles/career-planning.md'
        // ...
      ]
    }
  ]
}
