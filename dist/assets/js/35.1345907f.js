(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{480:function(t,s,v){"use strict";v.r(s);var a=v(55),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"vue-问答整理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-问答整理"}},[t._v("#")]),t._v(" vue 问答整理")]),t._v(" "),v("h2",{attrs:{id:"_1-说下你对-mvvm-的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-说下你对-mvvm-的理解"}},[t._v("#")]),t._v(" 1. 说下你对 MVVM 的理解")]),t._v(" "),v("ul",[v("li",[t._v("M 指 model 是页面所依赖的数据源")]),t._v(" "),v("li",[t._v("V 指 view 是页面的 dom 结构")]),t._v(" "),v("li",[t._v("VM 指 ViewModel 是 Vue 实例，联系 M 和 V 的桥梁")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),v("p",[t._v("页面、数据都是千变万化的，但二者联系的桥梁是可以不变的。")])]),t._v(" "),v("p",[t._v("若我们把页面看成 UI ，把数据看成 data，则得到一个公式：")]),t._v(" "),v("div",{staticClass:"language-xml line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-xml"}},[v("code",[t._v("UI = render(data)\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("render() 是一个方法，它把数据(data)填充到了页面(UI)中，从而形成了我们看到的页面。开发 Vue 就是在开发一个 render() 方法， 而学习 Vue 就是在学习 render() 这个方法怎么使用。")]),t._v(" "),v("h2",{attrs:{id:"_2-单页面应用程序-spa-优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-单页面应用程序-spa-优缺点"}},[t._v("#")]),t._v(" 2. 单页面应用程序（SPA）优缺点 ?")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("SPA 的特点")]),t._v(" "),v("p",[t._v("SPA 将所有的功能局限于一个 web 页面中，仅在该 web 页面初始化时加载相应的资源（ HTML、\nJavaScript 和 CSS）。\n一旦页面加载完成了，SPA 不会因为用户的操作而进行页面的重新加载或跳转，而是利用 JavaScript 动态地变换\nHTML 的内容，从而实现页面与用户的交互。")])]),t._v(" "),v("h3",{attrs:{id:"_1-优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-优点"}},[t._v("#")]),t._v(" 1. 优点")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("主要 3 个优点")]),t._v(" "),v("ul",[v("li",[t._v("良好的交互体验\n"),v("ul",[v("li",[t._v("内容改变无需重新加载整个页面")]),t._v(" "),v("li",[t._v("网页数据也是 Ajax 异步获取的")]),t._v(" "),v("li",[t._v("没有页面跳转，不会出现 “白屏现象”")])])]),t._v(" "),v("li",[t._v("良好的前后端工作分离模式\n"),v("ul",[v("li",[t._v("后端专注于提供 API，更容易实现 API 接口的复用")]),t._v(" "),v("li",[t._v("前端专注于页面渲染，更利于前端工程化的发展")])])]),t._v(" "),v("li",[t._v("减轻服务器压力\n"),v("ul",[v("li",[t._v("服务器只提供数据，不负责页面的合成与逻辑的处理，吞吐能力会提高几倍")])])])])]),t._v(" "),v("h3",{attrs:{id:"_2-缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-缺点"}},[t._v("#")]),t._v(" 2. 缺点")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("主要 2 个缺点")]),t._v(" "),v("ul",[v("li",[t._v("首屏加载慢（4 种解决方案）\n"),v("ul",[v("li",[t._v("路由懒加载")]),t._v(" "),v("li",[t._v("代码压缩")]),t._v(" "),v("li",[t._v("CDN 加速")]),t._v(" "),v("li",[t._v("网络传输压缩")])])]),t._v(" "),v("li",[t._v("不利于 SEO （1 种解决方案） - SSR 服务器端渲染")])])]),t._v(" "),v("h2",{attrs:{id:"_3-计算属性-vs-方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-计算属性-vs-方法"}},[t._v("#")]),t._v(" 3. 计算属性 VS 方法")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("主要区别")]),t._v(" "),v("ul",[v("li",[t._v("计算属性：会缓存计算结果。如果在模版中被多次使用，只要 "),v("strong",[t._v("依赖的数据")]),t._v(" 不变，就只执行一次")]),t._v(" "),v("li",[t._v("方法：不会做特殊处理。如果在模版中被多次调用，内部逻辑就会执行多次")])])]),t._v(" "),v("h2",{attrs:{id:"_4-计算属性-vs-监听器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-计算属性-vs-监听器"}},[t._v("#")]),t._v(" 4. 计算属性 VS 监听器")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("侧重点不同")]),t._v(" "),v("ul",[v("li",[t._v("计算属性：会监听 "),v("strong",[t._v("多个值")]),t._v("，始终缓存并返回 "),v("strong",[t._v("一个值")])]),t._v(" "),v("li",[t._v("监听器：会监听 "),v("strong",[t._v("一个值")]),t._v("，并执行一些逻辑，"),v("strong",[t._v("无需返回值")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);