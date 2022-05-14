// 左侧菜单 配置文件

// 引入工具函数
const { getDocumentUrl } = require('../utils/index.js')

// 引入 frontend 模块的侧边导航菜单
const FrontendVue2Sidebar = require('../../frontend/vue2/index.js')
const FrontendVue3Sidebar = require('../../frontend/vue3/index.js')
const FrontendTypeScriptSidebar = require('../../frontend/typescript/index.js')
const FrontendJavaScriptSidebar = require('../../frontend/javascript/index.js')
const FrontendToolsSidebar = require('../../frontend/tools/index.js')
const FrontendPackagesSidebar = require('../../frontend/packages/index.js')
const FrontendAppletSidebar = require('../../frontend/applet/index.js')
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
  // 前端学习区域
  '/frontend/vue2': [
    {
      text: 'Vue2',
      collapsible: true,
      children: getDocumentUrl(FrontendVue2Sidebar)
    }
    // TODO: 后续整合 vue3 目录到这里...
  ],
  '/frontend/vue3': [
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
  '/about-me/info': [
    {
      text: '联系我',
      collapsible: true,
      children: getDocumentUrl(AboutMeInfoSidebar)
    }
  ],
  '/about-me/donation': [
    {
      text: 'D 我',
      collapsible: true,
      children: getDocumentUrl(AboutMeDonationSidebar)
    }
  ]
}
