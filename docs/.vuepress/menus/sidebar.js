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

const FrontendSkillsSidebar = require('../../frontend/skills/skill/index.js') // 通用知识
const FrontendBrowserSidebar = require('../../frontend/skills/browser/index.js') // 通用知识

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
  /* 前端学习 区域 */
  // 通用知识 侧边栏配置
  '/frontend/skill': [
    {
      text: 'Skills',
      collapsible: true,
      children: getDocumentUrl(FrontendSkillsSidebar)
    },
    {
      text: 'Browser',
      collapsible: true,
      children: getDocumentUrl(FrontendBrowserSidebar)
    }
  ],
  // Vue 侧边栏配置
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
  // TypeScript 侧边栏配置
  '/frontend/typescript': [
    {
      text: 'TypeScript',
      collapsible: true,
      children: getDocumentUrl(FrontendTypeScriptSidebar)
    }
  ],
  // Javascript 侧边栏配置
  '/frontend/javascript': [
    {
      text: 'Javascript',
      collapsible: true,
      children: getDocumentUrl(FrontendJavaScriptSidebar)
    }
  ],
  // Tools 侧边栏配置
  '/frontend/tools': [
    {
      text: 'Tools',
      collapsible: true,
      children: getDocumentUrl(FrontendToolsSidebar)
    }
  ],
  // Packages 侧边栏配置
  '/frontend/packages': [
    {
      text: 'Packages',
      collapsible: true,
      children: getDocumentUrl(FrontendPackagesSidebar)
    }
  ],
  // 小程序 侧边栏配置
  '/frontend/applet': [
    {
      text: 'Applet',
      collapsible: true,
      children: getDocumentUrl(FrontendAppletSidebar)
    }
  ],
  // 面试题 侧边栏配置
  '/frontend/interview': [
    {
      text: 'Interview',
      collapsible: true,
      children: getDocumentUrl(FrontendInterviewSidebar)
    }
  ],

  /* 后端学习 区域 */
  // Node 侧边栏配置
  '/backend/node': [
    {
      text: 'Node',
      collapsible: true,
      children: getDocumentUrl(BackendNodeSidebar)
    }
  ],
  // DataBase 侧边栏配置
  '/backend/database': [
    {
      text: 'DataBase',
      collapsible: true,
      children: getDocumentUrl(BackendDataBaseSidebar)
    }
  ],
  // Packages 侧边栏配置
  '/backend/packages': [
    {
      text: 'Packages',
      collapsible: true,
      children: getDocumentUrl(BackendPackagesSidebar)
    }
  ],

  /* 异常处理区域 */
  '/exception/powershell': [
    {
      text: 'Powershell',
      collapsible: true,
      children: getDocumentUrl(ExceptionPowershellSidebar)
    }
  ],

  /* 联系我区域 */
  '/about-me': [
    {
      text: 'about me',
      collapsible: true,
      children: getDocumentUrl(AboutMeInfoSidebar)
    }
  ]
}
