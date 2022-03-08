(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{473:function(t,s,n){"use strict";n.r(s);var a=n(55),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"eventloop-事件循环机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eventloop-事件循环机制"}},[t._v("#")]),t._v(" EventLoop 事件循环机制")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),n("ul",[n("li",[t._v("JavaScript 是一门单线程执行的编程语言，同一时间只能做一件事情。")]),t._v(" "),n("li",[t._v("如果前一个任务非常耗时，则后续的任务就不得不一直等待，从而导致程序假死的问题。")]),t._v(" "),n("li",[t._v("为了防止某个耗时任务导致程序假死的问题，JavaScript 把待执行的任务分为了 "),n("strong",[t._v("同步任务")]),t._v(" 和 "),n("strong",[t._v("异步任务")]),t._v(" 两类")])])]),t._v(" "),n("h2",{attrs:{id:"_1-同步任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-同步任务"}},[t._v("#")]),t._v(" 1. 同步任务")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("概念")]),t._v(" "),n("ul",[n("li",[t._v("又叫做"),n("strong",[t._v("非耗时任务")]),t._v("，指的是在 "),n("strong",[t._v("主线程上排队执行")]),t._v(" 的那些任务")]),t._v(" "),n("li",[t._v("只有前一个任务执行完毕，才能执行后一个任务")])])]),t._v(" "),n("h2",{attrs:{id:"_2-异步任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-异步任务"}},[t._v("#")]),t._v(" 2. 异步任务")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("概念")]),t._v(" "),n("ul",[n("li",[t._v("异步任务又分为 "),n("strong",[t._v("宏任务")]),t._v(" 和 "),n("strong",[t._v("微任务")]),t._v(" "),n("ul",[n("li",[t._v("宏任务：异步 Ajax 请求 、setTimeout、setInterval、文件操作 、 其它宏任务")]),t._v(" "),n("li",[t._v("微任务：Promise.then、.catch 和 .finally 、 process.nextTick 、 其它微任务")])])])])]),t._v(" "),n("ul",[n("li",[t._v("异步任务又叫 "),n("strong",[t._v("耗时任务")]),t._v("，异步任务由 JavaScript 委托给 "),n("strong",[t._v("宿主环境")]),t._v(" 进行执行")]),t._v(" "),n("li",[n("strong",[t._v("宿主环境")]),t._v(" 通常有： node 、浏览器\n"),n("ul",[n("li",[t._v("例如："),n("strong",[t._v("委托 node")]),t._v(" 执行异步文件读取任务")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("fs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'路径'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cbA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JavaScript 主线程 只负责执行回调函数 cbA")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[t._v("例如："),n("strong",[t._v("委托浏览器")]),t._v(" 执行异步定时器")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JavaScript 主线程 只负责执行回调函数 cbC")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])]),t._v(" "),n("li",[t._v("当异步任务执行完成后，会通知 JavaScript 主线程 执行 "),n("strong",[t._v("异步任务的回调函数")])])]),t._v(" "),n("h2",{attrs:{id:"_3-同步任务-和-异步任务-的执行过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-同步任务-和-异步任务-的执行过程"}},[t._v("#")]),t._v(" 3. 同步任务 和 异步任务 的执行过程")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("重要")]),t._v(" "),n("ul",[n("li",[t._v("JavaScript 主线程 "),n("strong",[t._v("只负责")]),t._v(" 执行 "),n("strong",[t._v("同步任务")]),t._v(" 和 "),n("strong",[t._v("回调函数")])]),t._v(" "),n("li",[t._v("异步任务由 "),n("strong",[t._v("宿主环境")]),t._v(" 执行")])])]),t._v(" "),n("tgx-img",{attrs:{src:"/javascript/event-loop/eventloop.png",alt:"同步任务和异步任务的执行过程",title:"同步任务和异步任务的执行过程",width:"740"}}),t._v(" "),n("ul",[n("li",[t._v("执行过程如下\n"),n("ol",[n("li",[t._v("同步任务由 "),n("strong",[t._v("JavaScript 主线程")]),t._v(" 次序执行")]),t._v(" "),n("li",[t._v("异步任务委托给 "),n("strong",[t._v("宿主环境")]),t._v(" 执行")]),t._v(" "),n("li",[t._v("已完成的 "),n("strong",[t._v("异步任务对应的回调函数")]),t._v("，会被加入到任务队列中等待执行")]),t._v(" "),n("li",[n("strong",[t._v("JavaScript 主线程")]),t._v(" 的执行栈被清空后，会读取任务队列中的 "),n("strong",[t._v("回调函数")]),t._v("，次序执行")]),t._v(" "),n("li",[n("strong",[t._v("JavaScript 主线程不断重复上面的第 4 步")]),t._v(" （因此叫事件循环 EventLoop）")])])])]),t._v(" "),n("h2",{attrs:{id:"_4-宏任务-和-微任务-的执行顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-宏任务-和-微任务-的执行顺序"}},[t._v("#")]),t._v(" 4. 宏任务 和 微任务 的执行顺序")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),n("p",[n("strong",[t._v("宏任务")]),t._v(" 和 "),n("strong",[t._v("微任务")]),t._v(" 是交替执行的。待执行的微任务被清空后才会执行下一个宏任务")])]),t._v(" "),n("tgx-img",{attrs:{src:"/javascript/event-loop/macrotask-microtask.png",alt:"宏任务 和 微任务 的执行顺序",title:"宏任务 和 微任务 的执行顺序",width:"740",height:"300"}}),t._v(" "),n("h2",{attrs:{id:"_5-案例分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-案例分析"}},[t._v("#")]),t._v(" 5. 案例分析")]),t._v(" "),n("h3",{attrs:{id:"_1-案例一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-案例一"}},[t._v("#")]),t._v(" 1. 案例一")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("分析")]),t._v(" "),n("ul",[n("li",[t._v("首先遇到宏任务 setTimeout， 那它里面的回调函数将被搁置")]),t._v(" "),n("li",[t._v("接着遇到同步任务 new Promise，那它里面的回调函数将会立即执行，"),n("strong",[t._v("输出 2")])]),t._v(" "),n("li",[t._v("接着遇到微任务 .then()，那它里面的回调函数将会被搁置")]),t._v(" "),n("li",[t._v("最后遇到同步任务，直接 "),n("strong",[t._v("输出 4")])]),t._v(" "),n("li",[t._v("此时 JS 检查到任务列队中有一个待执行的微任务 .then()，就会执行它的回调函数，"),n("strong",[t._v("输出 3")])]),t._v(" "),n("li",[t._v("最后清空了待执行的微任务后，就执行下一个宏任务 setTimeout 里面的回调函数，"),n("strong",[t._v("输出 1")])]),t._v(" "),n("li",[t._v("所有任务清空完毕")])])]),t._v(" "),n("tgx-img",{attrs:{src:"/javascript/event-loop/example1.png",alt:"案例分析",title:"案例分析",width:"740"}}),t._v(" "),n("h3",{attrs:{id:"_2-案例二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-案例二"}},[t._v("#")]),t._v(" 2. 案例二")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("输出分析")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("第 1 行")]),t._v(" 遇到同步任务，"),n("strong",[t._v("输出 1")])]),t._v(" "),n("li",[n("strong",[t._v("第 3 行")]),t._v(" 遇到第 1 个宏任务 setTimeout，它的回调函数会被搁置")]),t._v(" "),n("li",[n("strong",[t._v("第 13-15 行")]),t._v(" 遇到同步任务 new Promise 它的回调函数会立即执行，"),n("strong",[t._v("输出 5")])]),t._v(" "),n("li",[n("strong",[t._v("第 16 行")]),t._v(" 遇到第 1 个微任务 .then()，它的回调函数会被搁置")]),t._v(" "),n("li",[n("strong",[t._v("第 20 行")]),t._v(" 遇到第 2 个宏任务 setTimeout，它的回调函数会被搁置")]),t._v(" "),n("li",[t._v("到此为止，同步任务已被清空")]),t._v(" "),n("li",[n("strong",[t._v("第 16-18 行")]),t._v(" 开始检查待执行的微任务，则执行它的回调函数，"),n("strong",[t._v("输出 6")])]),t._v(" "),n("li",[t._v("到此为止，第一轮待执行的微任务已被清空")]),t._v(" "),n("li",[n("strong",[t._v("第 3-4 行")]),t._v(" 开始执行第 1 个宏任务 setTimeout 中的回调函数，"),n("strong",[t._v("输出 2")])]),t._v(" "),n("li",[n("strong",[t._v("第 5-7 行")]),t._v(" 继续遇到同步任务 new Promise，则立即执行它的回调函数，"),n("strong",[t._v("输出 3")])]),t._v(" "),n("li",[n("strong",[t._v("第 8-9 行")]),t._v(" 发现 new Promise 后面还有一个 .then() 微任务，则继续执行它的回调函数，"),n("strong",[t._v("输出 4")])]),t._v(" "),n("li",[t._v("到此为止，第 1 个宏任务 setTimeout 已执行完成")]),t._v(" "),n("li",[n("strong",[t._v("第 20-21 行")]),t._v(" 开始执行第 2 个宏任务 setTimeout 中的回调函数，"),n("strong",[t._v("输出 7")])]),t._v(" "),n("li",[n("strong",[t._v("第 22-24 行")]),t._v(" 继续遇到同步任务 new Promise，则立即执行它的回调函数，"),n("strong",[t._v("输出 8")])]),t._v(" "),n("li",[n("strong",[t._v("第 25-26 行")]),t._v("发现 new Promise 后面还有一个 .then() 微任务，则继续执行它的回调函数，"),n("strong",[t._v("输出 9")])]),t._v(" "),n("li",[t._v("所有任务清空完毕")])])]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("点击查看 案例二")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'7'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果 1 5 6 2 3 4 7 8 9")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);