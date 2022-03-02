# Node.js 概念及其内置 API

::: tip Node 是什么
**node.js 是** 一个 **基于 Chrome V8 引擎** 的 **JavaScript 运行环境**
:::

## 1. Node.js 中的 JS 运行环境

::: tip 说明

- 浏览器：是 js 的 **前端运行环境**
- Node：是 js 的 **后端运行环境**
- <tgx-link href="/frontend/browser/browser">点击查看浏览器运行环境</tgx-link>

:::

- 要想用 js 做前端开发，就要学习 浏览器 的 内置 API
- 要想用 js 做后端开发，就要学习 Node 的 内置 API

<tgx-img src="/node/node/node-environment.png" 
    alt="JS 运行环境示意图" 
    title="JS 运行环境示意图"
    width="740">
</tgx-img>

## 2. fs 文件系统模块

::: tip 说明
fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

- fs.readFile() 方法，用来 **读取** 指定文件中的内容
- fs.writeFile() 方法，用来向指定的文件中 **写入** 内容

:::

### 1. fs.readFile() 方法使用

- 语法

```js
fs.readFile(path[, options], callback)

// path: 必须参数。指定文件的路径
// options: 可选参数。指定用什么 编码格式 来读取文件
// callback: 必选参数。文件读取完成后，要做什么操作（无论成功，失败，都会执行该回调函数）
```

- 示例

::: details 点击查看用法示例

```js
const fs = require('fs')
fs.readFile('./01.txt', 'utf8', (err, docStr) => {
  if (err) {
    return console.log('读取文件失败：' + err.message)
  }
  console.log('读取文件成功，内容是：' + docStr)
})
```

:::
