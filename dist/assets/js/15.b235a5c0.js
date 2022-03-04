(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{458:function(s,t,a){"use strict";a.r(t);var n=a(83),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第三方包-相关知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方包-相关知识"}},[s._v("#")]),s._v(" 第三方包 相关知识")]),s._v(" "),a("h2",{attrs:{id:"_1-包管理工具-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-包管理工具-npm"}},[s._v("#")]),s._v(" 1. 包管理工具 npm")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("npm 是一个包管理工具，安装 node 时会自动安装。\n使用 npm 下载包，默认是从国外拉取资源的，速度慢。可以切换为 "),a("strong",[s._v("国内淘宝镜像")]),s._v(" 提升下载速度")])]),s._v(" "),a("h3",{attrs:{id:"_1-直接切换-npm-下载地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接切换-npm-下载地址"}},[s._v("#")]),s._v(" 1. 直接切换 npm 下载地址")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 查看当前下载包的镜像源 --\x3e")]),s._v("\nnpm config get registry\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 将下载包的镜像源切换为 淘宝镜像 --\x3e")]),s._v("\nnpm config set registry=https://registry.npm.taobao.org/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-借助-nrm-切换-npm-的下载地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-借助-nrm-切换-npm-的下载地址"}},[s._v("#")]),s._v(" 2. 借助 nrm 切换 npm 的下载地址")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 全局安装 nrm --\x3e")]),s._v("\nnpm i nrm -g\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 查看所有可用的 镜像地址 --\x3e")]),s._v("\nnrm ls\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 使用某个 镜像地址 --\x3e")]),s._v("\nnrm use taobao  （这里使用 淘宝地址）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("使用这个插件的命令时有可能出错")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看 错误详情及解决方案")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解决方案 分三步")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 找到 nrm 的位置 C:\\Users\\你的电脑用户名\\AppData\\Roaming\\npm\\node_modules\\nrm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 找到 cli.js 的第 17 行（我的 nrm 版本是 1.2.1）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 做出以下变更并保存即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错的：const NRMRC = path.join(process.env.HOME, '.nrmrc'); // 2021/2/9日 更改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正常的：const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');")]),s._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以下是 使用 nrm ls 命令时的报错内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TypeError "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERR_INVALID_ARG_TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" The "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),s._v(" argument must be "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" type string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Received "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("\n  at "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("validateString")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("internal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("validators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("122")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("375")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\Users\\"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("\\AppData\\Roaming\\npm\\node_modules\\nrm\\cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_compile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("internal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1085")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_extensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("js")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("internal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1114")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("load")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("internal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("950")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_load")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("internal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("791")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("executeUserEntryPoint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" runMain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("internal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run_main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  at internal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run_main_module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ERR_INVALID_ARG_TYPE'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"_2-包-的版本管理规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-包-的版本管理规范"}},[s._v("#")]),s._v(" 2. 包 的版本管理规范")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如 2.24.0\n其中每一位数字所代表的的含义如下：")]),s._v(" "),a("ul",[a("li",[s._v("第 1 位数字：大版本")]),s._v(" "),a("li",[s._v("第 2 位数字：功能版本")]),s._v(" "),a("li",[s._v("第 3 位数字：Bug 修复版本")])]),s._v(" "),a("p",[s._v("版本号提升的规则："),a("strong",[s._v("只要前面的版本号增长了，则后面的版本号归零")])])]),s._v(" "),a("h2",{attrs:{id:"_3-包-的内部结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-包-的内部结构"}},[s._v("#")]),s._v(" 3. 包 的内部结构")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("一个规范的包，它的组成结构，必须符合以下 3 点要求：")]),s._v(" "),a("ul",[a("li",[s._v("① 包必须以单独的目录而存在")]),s._v(" "),a("li",[s._v("② 包的顶级目录下要必须包含 package.json 这个包管理配置文件")]),s._v(" "),a("li",[s._v("③ package.json 中必须包含 name，version，main 这三个属性，分别代表包的名字、版本号、包的入口。\n"),a("ul",[a("li",[s._v("其中 main 节点用来指定 "),a("strong",[s._v("外界进行导入时，要导入的那个 js 文件路径")])])])])])]),s._v(" "),a("h2",{attrs:{id:"_4-开发一个自己的-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-开发一个自己的-包"}},[s._v("#")]),s._v(" 4. 开发一个自己的 包")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("步骤说明")]),s._v(" "),a("p",[s._v("要开发一款自己的 npm 包总共分为以下 7 步")])]),s._v(" "),a("h3",{attrs:{id:"_1-初始化-包-项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化-包-项目结构"}},[s._v("#")]),s._v(" 1. 初始化 包 项目结构")]),s._v(" "),a("ul",[a("li",[s._v("文件夹应该包含：\n"),a("ul",[a("li",[s._v("package.json --------------依赖管理文件")]),s._v(" "),a("li",[s._v("README.md -----------------说明文档")]),s._v(" "),a("li",[s._v("index.js ------------------包的入口文件")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-在-index-js-中编写逻辑并暴露成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-index-js-中编写逻辑并暴露成员"}},[s._v("#")]),s._v(" 2. 在 index.js 中编写逻辑并暴露成员")]),s._v(" "),a("h3",{attrs:{id:"_3-模块分离并在-index-js-中集成暴露"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-模块分离并在-index-js-中集成暴露"}},[s._v("#")]),s._v(" 3. 模块分离并在 index.js 中集成暴露")]),s._v(" "),a("h3",{attrs:{id:"_4-编写-readme-md-说明文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-编写-readme-md-说明文档"}},[s._v("#")]),s._v(" 4. 编写 README.md 说明文档")]),s._v(" "),a("ul",[a("li",[s._v("安装方式")]),s._v(" "),a("li",[s._v("导入方式")]),s._v(" "),a("li",[s._v("格式化时间")]),s._v(" "),a("li",[s._v("转义 HTML 中的特殊字符")]),s._v(" "),a("li",[s._v("还原 HTML 中的特殊字符")]),s._v(" "),a("li",[s._v("开源协议")])]),s._v(" "),a("h3",{attrs:{id:"_5-注册-npm-官网的帐号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-注册-npm-官网的帐号"}},[s._v("#")]),s._v(" 5. 注册 npm 官网的帐号")]),s._v(" "),a("h3",{attrs:{id:"_6-在终端登录自己的-npm-帐号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-在终端登录自己的-npm-帐号"}},[s._v("#")]),s._v(" 6. 在终端登录自己的 npm 帐号")]),s._v(" "),a("ul",[a("li",[s._v("在 npm login 登录之前需要把 下载源 切到 npm 的官方地址（而不是淘宝地址）")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 运行 login 命令开始登录 --\x3e")]),s._v("\nnpm login\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 然后按提示输入： --\x3e")]),s._v("\n1. 用户名\n2. 密码(密码是盲打的)\n3. 邮箱即可（第一次登录可能要验证邮箱）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_7-把包发布到-npm-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-把包发布到-npm-上"}},[s._v("#")]),s._v(" 7. 把包发布到 npm 上")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 在项目的根目录 运行 publish 命令即可开始发包 --\x3e")]),s._v("\nnpm publish\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_8-去-npm-官网查看自己发的包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-去-npm-官网查看自己发的包"}},[s._v("#")]),s._v(" 8. 去 npm 官网查看自己发的包")]),s._v(" "),a("ul",[a("li",[s._v("完成发布")])]),s._v(" "),a("h3",{attrs:{id:"_9-删除-npm-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-删除-npm-包"}},[s._v("#")]),s._v(" 9. 删除 npm 包")]),s._v(" "),a("ul",[a("li",[s._v("npm unpublish 只能删除 72 小时内的包")]),s._v(" "),a("li",[s._v("npm unpublish 删除的包 24 小时内不能再次发布")]),s._v(" "),a("li",[s._v("发包需要慎重，尽量不发没有意义的包")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 在项目的根目录 运行 unpublish 命令即可开始删包 --\x3e")]),s._v("\nnpm unpublish 包名 --force\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);