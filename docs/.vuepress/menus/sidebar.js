// 左侧菜单 配置文件

// 引入 frontend 模块的侧边导航菜单
const FrontendVue2Sidebar = require('../../frontend/vue2/index.js')
const FrontendVue3Sidebar = require('../../frontend/vue3/index.js')
const FrontendTypeScriptSidebar = require('../../frontend/typescript/index.js')
const FrontendJavaScriptSidebar = require('../../frontend/javascript/index.js')
const FrontendToolsSidebar = require('../../frontend/tools/index.js')
const FrontendPackagesSidebar = require('../../frontend/packages/index.js')
const FrontendBrowserSidebar = require('../../frontend/browser/index.js')
const FrontendInterviewSidebar = require('../../frontend/interview/index.js')

// 引入 backend 模块的侧边导航菜单
const BackendNodeSidebar = require('../../backend/node/index.js')
const BackendDataBaseSidebar = require('../../backend/database/index.js')
const BackendPackagesSidebar = require('../../backend/packages/index.js')

// 引入 exception 模块的侧边导航菜单
const ExceptionPowershellSidebar = require('../../exception/powershell/index.js')

// 引入 about-me 模块的侧边栏导航菜单
const AboutMeInfoSidebar = require('../../about-me/info/index.js')
const AboutMeDonationSidebar = require('../../about-me/donation/index.js')

module.exports = {
  // 键名：是文档路径标识 (表示在 与 .vuepress 平级的 frontend/vue2 文件夹中查找对应的 .md 文档)
  // 键值：是一个数组，里面的每一个对象表示一篇 .md 文档

  //（这里提供一个示例写法）
  // '/frontend/vue2': [
  //   {
  //     title: '资源整合', // 设置一级标题 (vuepress 会从 .md 文档中自动提取 二级标题)
  //     path: '/frontend/vue2/source-integration' // 对应的文章路径 (同 nav 里面的 link, 采取方案4)
  //   }
  // ],

  '/frontend/vue2': FrontendVue2Sidebar,
  '/frontend/vue3': FrontendVue3Sidebar,
  '/frontend/typescript': FrontendTypeScriptSidebar,
  '/frontend/javascript': FrontendJavaScriptSidebar,
  '/frontend/tools': FrontendToolsSidebar,
  '/frontend/packages': FrontendPackagesSidebar,
  '/frontend/browser': FrontendBrowserSidebar,
  '/frontend/interview': FrontendInterviewSidebar,
  '/backend/node': BackendNodeSidebar,
  '/backend/packages': BackendPackagesSidebar,
  '/backend/database': BackendDataBaseSidebar,
  '/exception/powershell': ExceptionPowershellSidebar,
  '/about-me/info': AboutMeInfoSidebar,
  '/about-me/donation': AboutMeDonationSidebar
}
