(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{453:function(s,a,t){"use strict";t.r(a);var n=t(83),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-命令收集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-命令收集"}},[s._v("#")]),s._v(" Git 命令收集")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("起因")]),s._v(" "),t("p",[s._v("工作中"),t("code",[s._v("gitlab")]),s._v("的账号和"),t("code",[s._v("gitee")]),s._v("的账号不一样，这导致我在码云上提交代码时不被统计到面板中，\n每次新开一个项目就忘记设置邮箱的"),t("code",[s._v("Git指令")]),s._v("，所以在这里收集了一些 Git 指令")])]),s._v(" "),t("h2",{attrs:{id:"_1-设置用户名和邮箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置用户名和邮箱"}},[s._v("#")]),s._v(" 1.设置用户名和邮箱")]),s._v(" "),t("blockquote",[t("p",[s._v("user.name 支持中文")])]),s._v(" "),t("ul",[t("li",[s._v("全局设置")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 语法 --\x3e")]),s._v("\ngit config --global user.name 用户名\ngit config --global user.email 邮箱地址\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 案例 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--\n假设我英文名是 telectron, 邮箱是 shuaibi@qq.com\n我要让今后 所有新老项目 中，都默认使用这个 用户名 和 邮箱 提交代码\n--\x3e")]),s._v("\ngit config --global user.name telectron\ngit config --global user.email shuaibi@qq.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("局部设置")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 语法 --\x3e")]),s._v("\ngit config user.name 用户名\ngit config user.email 邮箱地址\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 案例 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--\n假设我英文名是 telectron, 邮箱是 shuaibi@qq.com\n我要在 某一个项目 中，日后都使用这个 用户名 和 邮箱 提交代码\n--\x3e")]),s._v("\ngit config user.name telectron\ngit config user.email shuaibi@qq.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"_2-查看当前项目的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看当前项目的配置"}},[s._v("#")]),s._v(" 2.查看当前项目的配置")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v("git config --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-恢复到某次-commit-提交的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-恢复到某次-commit-提交的版本"}},[s._v("#")]),s._v(" 3.恢复到某次 commit 提交的版本")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 语法 --\x3e")]),s._v("\ngit reset --hard commitID\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 案例 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--\n假设我因为工作失误, 导致某个功能不能用了, 现在又有其他事要处理, 没办法及时排查问题,\n且改动又不多, 那我干脆回退到之前的稳定版本, 首先我要找到当时稳定版的 commit ID 号,\n点开提交记录, 右侧有个简短的 id 号(44tte48c), 复制出来, 粘贴一看,\n发现完整 id 号形如 44tte48c59eb8093686ceb517a37ea065a38a676\n--\x3e")]),s._v("\ngit reset --hard 44tte48c59eb8093686ceb517a37ea065a38a676\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"_4-删除分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除分支"}},[s._v("#")]),s._v(" 4.删除分支")]),s._v(" "),t("blockquote",[t("p",[s._v("D 表示强制删除, 有时候会用到，比如两个人写了重复代码，另一个人的代码废弃了，得删掉")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 语法 --\x3e")]),s._v("\ngit branch -d 分支名\ngit branch -D 分支名 (强制删除)\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 案例 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 分支名为 telectron_dev, 我要删了它 --\x3e")]),s._v("\ngit branch -d telectron_dev\ngit branch -D telectron_dev (强制删除)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_5-加入、取出缓存区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-加入、取出缓存区"}},[s._v("#")]),s._v(" 5.加入、取出缓存区")]),s._v(" "),t("blockquote",[t("p",[s._v("git stash 和 git stash pop 用的比较少，基本上要一起执行")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 相当于 剪切 本次修改内容 --\x3e")]),s._v("\ngit stash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 相当于 粘贴 那次修改内容 --\x3e")]),s._v("\ngit stash pop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_6-拉取代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-拉取代码"}},[s._v("#")]),s._v(" 6.拉取代码")]),s._v(" "),t("blockquote",[t("p",[s._v("初入公司或在 github/gitee 第一次获取项目代码时使用")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 语法 --\x3e")]),s._v("\ngit clone 远程地址\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 案例 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 我现在要拉这个仓库的代码 https://gitee.com/tgx-1587900660/tgx_vue_vision --\x3e")]),s._v("\ngit clone https://gitee.com/tgx-1587900660/tgx_vue_vision\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_7-给远程地址起别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-给远程地址起别名"}},[s._v("#")]),s._v(" 7.给远程地址起别名")]),s._v(" "),t("blockquote",[t("p",[s._v("方便提交代码时，少敲点字符")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 语法 --\x3e")]),s._v("\ngit remote add origin 远程地址\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 案例 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 我现在要给这个仓库起别名 https://gitee.com/tgx-1587900660/tgx_vue_vision --\x3e")]),s._v("\ngit remote add origin https://gitee.com/tgx-1587900660/tgx_vue_vision\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_8-查看所有分支名称-包括远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-查看所有分支名称-包括远程分支"}},[s._v("#")]),s._v(" 8.查看所有分支名称(包括远程分支)")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v("git branch -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_9-同步远程分支内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-同步远程分支内容"}},[s._v("#")]),s._v(" 9.同步远程分支内容")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("场景")]),s._v(" "),t("p",[s._v("有时候分支是在线上，点点点创建的，这时我们可以用这个命令在本地获取最新分支，\n然后直接 "),t("code",[s._v("git checkout 分支名")]),s._v(" 切过去，一般修复旧版本的 bug 会这么干")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v("git fetch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_10-高频不会忘的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-高频不会忘的命令"}},[s._v("#")]),s._v(" 10.高频不会忘的命令")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 新建一个 telectron_dev 分支 --\x3e")]),s._v("\ngit checkout -b telectron_dev\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 首次推送这个分支 --\x3e")]),s._v("\ngit push -u origin telectron_dev\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 线上有 telectron_dev 分支后推送 --\x3e")]),s._v("\ngit push\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 拉取 master 分支代码，并且合入当前分支 --\x3e")]),s._v("\ngit pull origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);