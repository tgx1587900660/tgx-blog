// 右上角菜单 配置文件

// 引入 frontend 模块的侧边导航菜单
const FrontendVue2Sidebar = require('../../frontend/vue2/index.js')
const FrontendVue3Sidebar = require('../../frontend/vue3/index.js')
const FrontendGitSidebar = require('../../frontend/git/index.js')
const FrontendJavaScriptSidebar = require('../../frontend/javascript/index.js')
const FrontendToolsSidebar = require('../../frontend/tools/index.js')
const FrontendBrowserSidebar = require('../../frontend/browser/index.js')
const FrontendInterviewSidebar = require('../../frontend/interview/index.js')

// 引入 backend 模块的侧边导航菜单
const BackendNodeSidebar = require('../../backend/node/index.js')
const BackendToolsSidebar = require('../../backend/tools/index.js')
const BackendDataBaseSidebar = require('../../backend/database/index.js')

// 引入 exception 模块的侧边导航菜单
const ExceptionPowershellSidebar = require('../../exception/powershell/index.js')

module.exports = [
  {
    text: '前端学习',
    items: [
      // 1️. 如果 link 为 '/test/', vuepress 会去 docs/test 文件夹中查找 README.md
      // 2. 如果 link 为 '/test/README', 会404出错(即使有 README.md 文件)
      // 3. 如果 link 为 '/test/README.md', 会404出错(即使有 README.md 文件)
      // 4. 如果 link 为 '/test/test-001', vuepress 会去 docs/test 文件夹中查找 test-001.md
      // 5. 如果 link 为 '/test/test-001.md', vuepress 会去 docs/test 文件夹中查找 test-001.md

      // 为了可读性, 我们将采取 方案4 来管理文章链接
      // { text: 'test', link: '/test/test-001' },

      // （这里提供一个示例写法）
      // { text: 'Vue2', link: '/frontend/vue2/source-integration' },

      { text: 'Vue2', link: FrontendVue2Sidebar[0].path },
      { text: 'Vue3', link: FrontendVue3Sidebar[0].path },
      { text: 'Git', link: FrontendGitSidebar[0].path },
      { text: 'JavaScript', link: FrontendJavaScriptSidebar[0].path },
      { text: 'Tools', link: FrontendToolsSidebar[0].path },
      { text: '通用知识', link: FrontendBrowserSidebar[0].path },
      { text: '面试题', link: FrontendInterviewSidebar[0].path }
    ]
  },
  {
    text: '后端学习',
    items: [
      { text: 'Node.js', link: BackendNodeSidebar[0].path },
      { text: 'DataBase', link: BackendDataBaseSidebar[0].path },
      { text: 'Tools', link: BackendToolsSidebar[0].path }
    ]
  },
  {
    text: '异常处理',
    items: [{ text: 'Powershell', link: ExceptionPowershellSidebar[0].path }]
  }
]
