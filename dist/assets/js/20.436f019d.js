(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{463:function(s,t,a){"use strict";a.r(t);var e=a(83),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第三方插件-用法集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方插件-用法集合"}},[s._v("#")]),s._v(" 第三方插件 用法集合")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("记录了一些第三方插件的使用案例")])]),s._v(" "),a("h2",{attrs:{id:"_1-then-fs-读取文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-then-fs-读取文件内容"}},[s._v("#")]),s._v(" 1. "),a("code",[s._v("then-fs")]),s._v(" 读取文件内容")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[a("code",[s._v("then-fs")]),s._v(" 是个服务端的三方依赖包，可以基于 Promise 的方式来读取系统文件。")])]),s._v(" "),a("h3",{attrs:{id:"_1-then-fs-有什么用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-then-fs-有什么用"}},[s._v("#")]),s._v(" 1. then-fs 有什么用？")]),s._v(" "),a("ul",[a("li",[s._v("由于 node.js 官方提供的 fs 模块仅支持以回调函数的方式读取文件，不支持 Promise 的调用方式。因此，我们要借助 "),a("code",[s._v("then-fs")]),s._v(" 来基于 Promise 的方式读取文件的内容")]),s._v(" "),a("li",[s._v("then-fs 提供的 readFile() 方法，可以异步地读取文件的内容，它的返回值是 Promise 的实例对象。因此可以调用 .then() 方法为每个 Promise 异步操作指定成功和失败之后的回调函数")])]),s._v(" "),a("h3",{attrs:{id:"_2-使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用方法"}},[s._v("#")]),s._v(" 2. 使用方法")]),s._v(" "),a("ul",[a("li",[s._v("安装"),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("npm i then-fs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("使用"),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" thenFs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'then-fs'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用 readFile() 方法读取文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该方法返回一个 Promise 实例对象，因此可以访问 then() 方法")]),s._v("\nthenFs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./file.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("success")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);