// 左侧菜单 配置文件

// 引入工具函数
const { getDocumentUrl } = require('../utils/index.js')

// 引入 frontend 模块的侧边导航菜单
const FrontendVue2Sidebar = require('../../frontend/vue/vue2/index.js') // Vue
const FrontendVue3Sidebar = require('../../frontend/vue/vue3/index.js') // Vue

const FrontendTypeScriptSidebar = require('../../frontend/typescript/index.js') // TypeScript
const FrontendJavaScriptSidebar = require('../../frontend/javascript/index.js') //JavaScript
const FrontendToolsSidebar = require('../../frontend/tools/index.js') // Tools
const FrontendPackagesSidebar = require('../../frontend/packages/index.js') // Packages
const FrontendAppletSidebar = require('../../frontend/applet/index.js') // 小程序
const FrontendBrowserSidebar = require('../../frontend/browser/index.js') // 通用知识
const FrontendInterviewSidebar = require('../../frontend/interview/index.js') // 面试题

// 引入 backend 模块的侧边导航菜单
const BackendNodeSidebar = require('../../backend/node/index.js')
const BackendDataBaseSidebar = require('../../backend/database/index.js')
const BackendPackagesSidebar = require('../../backend/packages/index.js')

// 引入 exception 模块的侧边导航菜单
const ExceptionPowershellSidebar = require('../../exception/powershell/index.js')

// 引入 about-me 模块的侧边栏导航菜单
const AboutMeInfoSidebar = require('../../about-me/info/index.js')

module.exports = {
  // 前端学习区域
  '/frontend/vue': [
    {
      text: 'Vue2',
      collapsible: true,
      children: getDocumentUrl(FrontendVue2Sidebar)
    },
    {
      text: 'Vue3',
      collapsible: true,
      children: getDocumentUrl(FrontendVue3Sidebar)
    }
  ],
  '/frontend/typescript': [
    {
      text: 'TypeScript',
      collapsible: true,
      children: getDocumentUrl(FrontendTypeScriptSidebar)
    }
  ],
  '/frontend/javascript': [
    {
      text: 'Javascript',
      collapsible: true,
      children: getDocumentUrl(FrontendJavaScriptSidebar)
    }
  ],
  '/frontend/tools': [
    {
      text: 'Tools',
      collapsible: true,
      children: getDocumentUrl(FrontendToolsSidebar)
    }
  ],
  '/frontend/packages': [
    {
      text: 'Packages',
      collapsible: true,
      children: getDocumentUrl(FrontendPackagesSidebar)
    }
  ],
  '/frontend/applet': [
    {
      text: 'Applet',
      collapsible: true,
      children: getDocumentUrl(FrontendAppletSidebar)
    }
  ],
  '/frontend/browser': [
    {
      text: 'Browser',
      collapsible: true,
      children: getDocumentUrl(FrontendBrowserSidebar)
    }
  ],
  '/frontend/interview': [
    {
      text: 'Interview',
      collapsible: true,
      children: getDocumentUrl(FrontendInterviewSidebar)
    }
  ],
  // 后端学习区域
  '/backend/node': [
    {
      text: 'Node',
      collapsible: true,
      children: getDocumentUrl(BackendNodeSidebar)
    }
  ],
  '/backend/packages': [
    {
      text: 'Packages',
      collapsible: true,
      children: getDocumentUrl(BackendPackagesSidebar)
    }
  ],
  '/backend/database': [
    {
      text: 'DataBase',
      collapsible: true,
      children: getDocumentUrl(BackendDataBaseSidebar)
    }
  ],
  // 异常处理区域
  '/exception/powershell': [
    {
      text: 'Powershell',
      collapsible: true,
      children: getDocumentUrl(ExceptionPowershellSidebar)
    }
  ],
  // 联系我区域
  '/about-me': [
    {
      text: 'about me',
      collapsible: true,
      children: getDocumentUrl(AboutMeInfoSidebar)
    }
  ]
}
