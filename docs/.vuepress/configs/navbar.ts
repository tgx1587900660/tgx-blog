// 右上角菜单 配置文件
import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '前端学习',
    children: [
      // 有多种书写方案：
      // 1️. 如果 link 为 '/test/', vuepress 会去 docs/test 文件夹中查找 README.md
      // 2. 如果 link 为 '/test/README', 会404出错(即使有 README.md 文件)
      // 3. 如果 link 为 '/test/README.md', 会404出错(即使有 README.md 文件)
      // 4. 如果 link 为 '/test/test-001', vuepress 会去 docs/test 文件夹中查找 test-001.md
      // 5. 如果 link 为 '/test/test-001.md', vuepress 会去 docs/test 文件夹中查找 test-001.md
      {
        text: '资源&文章',
        children: [
          {
            text: '技术整合',
            link: '/frontend/skills/skill/source-integration.md'
          }
        ]
      },
      {
        text: '原生语言',
        children: [
          {
            text: 'TypeScript',
            link: '/frontend/typescript/ts-application.md'
          },
          {
            text: 'JavaScript',
            link: '/frontend/javascript/data-processing-method.md'
          }
          // ...
        ]
      },
      {
        text: '框架',
        children: [
          { text: 'Vue2', link: '/frontend/vue/vue2/unlikely-knowledge.md' },
          { text: 'Vue3', link: '/frontend/vue/vue3/vue3-change-details.md' }
          // ...
        ]
      },
      {
        text: '工具&库',
        children: [
          { text: 'Git', link: '/frontend/tools/git-command.md' },
          { text: 'Webpack', link: '/frontend/tools/webpack-study.md' },
          { text: 'Vite', link: '/frontend/tools/vite-study.md' },
          { text: 'Vant', link: '/frontend/tools/vant-theme.md' }
          // ...
        ]
      },
      {
        text: '未分类',
        children: [
          {
            text: 'Packages',
            link: '/frontend/packages/third-party-packages.md'
          },
          { text: '小程序', link: '/frontend/applet/learning-path.md' }
        ]
      }
    ]
  },
  {
    text: '后端学习',
    children: [
      { text: 'Node.js', link: '/backend/node/node.md' },
      { text: 'DataBase', link: '/backend/database/database.md' },
      { text: 'Packages', link: '/backend/packages/package-knowledge.md' }
    ]
  },
  {
    text: '问题处理',
    link: '/exception/powershell/security-error.md'
  },
  {
    text: '联系我',
    link: '/about-me/info/my-profile.md'
  }
]
