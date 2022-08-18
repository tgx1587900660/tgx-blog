// 右上角菜单 配置文件
module.exports = [
  {
    text: '前端学习',
    children: [
      // 有多种书写方案：
      // 1️. 如果 link 为 '/test/', vuepress 会去 docs/test 文件夹中查找 README.md
      // 2. 如果 link 为 '/test/README', 会404出错(即使有 README.md 文件)
      // 3. 如果 link 为 '/test/README.md', 会404出错(即使有 README.md 文件)
      // 4. 如果 link 为 '/test/test-001', vuepress 会去 docs/test 文件夹中查找 test-001.md
      // 5. 如果 link 为 '/test/test-001.md', vuepress 会去 docs/test 文件夹中查找 test-001.md
      { text: '通用知识', link: '/frontend/skills/skill/source-integration.md' },
      { text: 'Vue', link: '/frontend/vue/vue2/vue-source.md' },
      { text: 'TypeScript', link: '/frontend/typescript/typescript.md' },
      { text: 'JavaScript', link: '/frontend/javascript/data-processing-method.md' },
      { text: 'Tools', link: '/frontend/tools/git-command.md' },
      { text: 'Packages', link: '/frontend/packages/third-party-packages.md' },
      { text: '小程序', link: '/frontend/applet/learning-path.md' },
      { text: '面试题', link: '/frontend/interview/interview.md' }
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
    children: [
      //
      { text: 'Powershell', link: '/exception/powershell/security-error.md' }
    ]
  },
  {
    text: '联系我',
    link: '/about-me/info/my-profile.md'
  }
]
