// 左侧菜单 配置文件

// 属性名是字符串，表示路径，属性值是数组，有几个成员，就有几个折叠栏
module.exports = {
  /* 前端学习 区域 */
  // 通用知识 侧边栏配置
  '/frontend/skill': [
    {
      text: 'Skills',
      collapsible: true,
      children: [
        //
        '/frontend/skills/skill/source-integration.md',
        '/frontend/skills/skill/personal-blog.md'
      ]
    },
    {
      text: 'Browser',
      collapsible: true,
      children: [
        //
        '/frontend/skills/browser/browser.md',
        '/frontend/skills/browser/dev-web.md',
        '/frontend/skills/browser/authentication.md'
      ]
    }
  ],
  // Vue 侧边栏配置
  '/frontend/vue': [
    {
      text: 'Vue2',
      collapsible: true,
      children: [
        '/frontend/vue/vue2/vue-source.md',
        '/frontend/vue/vue2/unlikely-knowledge.md',
        '/frontend/vue/vue2/vue-questions-answers.md',
        '/frontend/vue/vue2/component-package-principle.md',
        '/frontend/vue/vue2/vue-router.md'
      ]
    },
    {
      text: 'Vue3',
      collapsible: true,
      children: ['/frontend/vue/vue3/vue3-change-details.md', '/frontend/vue/vue3/vue3-study.md']
    }
  ],
  // TypeScript 侧边栏配置
  '/frontend/typescript': [
    {
      text: 'TypeScript',
      collapsible: true,
      children: ['/frontend/typescript/typescript.md']
    }
  ],
  // Javascript 侧边栏配置
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
  // Tools 侧边栏配置
  '/frontend/tools': [
    {
      text: 'Tools',
      collapsible: true,
      children: [
        '/frontend/tools/git-command.md',
        '/frontend/tools/webpack-study.md',
        '/frontend/tools/vite-study.md',
        '/frontend/tools/eslint-upgrade.md',
        '/frontend/tools/vant-theme.md',
        '/frontend/tools/special-needs.md'
      ]
    }
  ],
  // Packages 侧边栏配置
  '/frontend/packages': [
    {
      text: 'Packages',
      collapsible: true,
      children: ['/frontend/packages/third-party-packages']
    }
  ],
  // 小程序 侧边栏配置
  '/frontend/applet': [
    {
      text: 'Applet',
      collapsible: true,
      children: [
        //
        '/frontend/applet/learning-path.md',
        '/frontend/applet/about-applet.md',
        '/frontend/applet/applet-compose.md'
      ]
    }
  ],
  // 面试题 侧边栏配置
  '/frontend/interview': [
    {
      text: 'Interview',
      collapsible: true,
      children: ['/frontend/interview/interview.md']
    }
  ],

  /* 后端学习 区域 */
  // Node 侧边栏配置
  '/backend/node': [
    {
      text: 'Node',
      collapsible: true,
      children: [
        //
        '/backend/node/node.md',
        '/backend/node/module-loading.md',
        '/backend/node/express.md'
      ]
    }
  ],
  // DataBase 侧边栏配置
  '/backend/database': [
    {
      text: 'DataBase',
      collapsible: true,
      children: [
        //
        '/backend/database/database.md',
        '/backend/database/mysql.md',
        '/backend/database/sql.md'
      ]
    }
  ],
  // Packages 侧边栏配置
  '/backend/packages': [
    {
      text: 'Packages',
      collapsible: true,
      children: [
        //
        '/backend/packages/package-knowledge.md',
        '/backend/packages/yarn-useage.md',
        '/backend/packages/third-party-packages.md'
      ]
    }
  ],

  /* 异常处理区域 */
  '/exception/powershell': [
    {
      text: 'Powershell',
      collapsible: true,
      children: ['/exception/powershell/security-error.md']
    }
  ],

  /* 联系我区域 */
  '/about-me': [
    {
      text: 'about me',
      collapsible: true,
      children: ['/about-me/info/my-profile.md', '/about-me/info/donation.md']
    }
  ]
}
