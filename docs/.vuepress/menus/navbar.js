// 右上角菜单 配置文件

// 引入 frontend 模块的侧边导航菜单
const FrontendSkillsSidebar = require('../../frontend/skills/index.js')
const FrontendVueSidebar = require('../../frontend/vue/index.js')
const FrontendTypeScriptSidebar = require('../../frontend/typescript/index.js')
const FrontendJavaScriptSidebar = require('../../frontend/javascript/index.js')
const FrontendToolsSidebar = require('../../frontend/tools/index.js')
const FrontendPackagesSidebar = require('../../frontend/packages/index.js')
const FrontendAppletSidebar = require('../../frontend/applet/index.js')
const FrontendInterviewSidebar = require('../../frontend/interview/index.js')

// 引入 backend 模块的侧边导航菜单
const BackendNodeSidebar = require('../../backend/node/index.js')
const BackendDataBaseSidebar = require('../../backend/database/index.js')
const BackendPackagesSidebar = require('../../backend/packages/index.js')

// 引入 exception 模块的侧边导航菜单
const ExceptionPowershellSidebar = require('../../exception/powershell/index.js')

// 引入 about-me 模块的侧边栏导航菜单
const AboutMeInfoSidebar = require('../../about-me/info/index.js')

module.exports = [
  {
    text: '前端学习',
    children: [
      // 1️. 如果 link 为 '/test/', vuepress 会去 docs/test 文件夹中查找 README.md
      // 2. 如果 link 为 '/test/README', 会404出错(即使有 README.md 文件)
      // 3. 如果 link 为 '/test/README.md', 会404出错(即使有 README.md 文件)
      // 4. 如果 link 为 '/test/test-001', vuepress 会去 docs/test 文件夹中查找 test-001.md
      // 5. 如果 link 为 '/test/test-001.md', vuepress 会去 docs/test 文件夹中查找 test-001.md
      // 为了可读性, 我们将采取 方案4 来管理文章链接
      // { text: 'test', link: '/test/test-001' },
      // （这里提供一个示例写法）
      // { text: 'Vue2', link: '/frontend/vue2/source-integration' }
      { text: '通用知识', link: FrontendSkillsSidebar[0].path },
      { text: 'Vue', link: FrontendVueSidebar[0].path },
      { text: 'TypeScript', link: FrontendTypeScriptSidebar[0].path },
      { text: 'JavaScript', link: FrontendJavaScriptSidebar[0].path },
      { text: 'Tools', link: FrontendToolsSidebar[0].path },
      { text: 'Packages', link: FrontendPackagesSidebar[0].path },
      { text: '小程序', link: FrontendAppletSidebar[0].path },
      { text: '面试题', link: FrontendInterviewSidebar[0].path }
    ]
  },
  {
    text: '后端学习',
    children: [
      { text: 'Node.js', link: BackendNodeSidebar[0].path },
      { text: 'DataBase', link: BackendDataBaseSidebar[0].path },
      { text: 'Packages', link: BackendPackagesSidebar[0].path }
    ]
  },
  {
    text: '问题处理',
    children: [{ text: 'Powershell', link: ExceptionPowershellSidebar[0].path }]
  },
  {
    text: '联系我',
    link: AboutMeInfoSidebar[0].path
  }
]
