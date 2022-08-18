# Node.js 概念及其内置 API

::: tip Node 是什么
**node.js 是** 一个 **基于 Chrome V8 引擎** 的 **JavaScript 运行环境**
:::

## 1. Node.js 中的 JS 运行环境

::: tip 说明

- 浏览器：是 js 的 **前端运行环境**
- Node：是 js 的 **后端运行环境**
- <tgx-link href="/frontend/browser/browser">这篇文章</tgx-link> 有 浏览器运行环境 相关知识

:::

- 要想用 js 做前端开发，就要学习 浏览器 的 内置 API
- 要想用 js 做后端开发，就要学习 Node 的 内置 API

<img src="./img/node-environment.png" alt="JS 运行环境示意图" title="JS 运行环境示意图" width="740" />

## 2. 怎么样学习 Node.js ?

::: tip 学习计划

- **浏览器的 js 学习路径**
  - 1. js 基础语法
  - 2. 浏览器内置 API（DOM, BOM...）
  - 3. 第三方库（Vue, JQuery, Art-template...）
- **Node 的 js 学习路径**
  - 1. js 基础语法
  - 2. Node.js 内置 API（fs, path, http...）
  - 3. 第三方库（express, mysql...）

:::

## 3. fs 文件系统模块

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

### 2. fs.writeFile() 方法使用

::: tip 注意点

- 该方法 **只能写入文件，不能创建文件夹**。这就意味着你如果要在一个不存在的文件夹里面写入一个文件是不可行的
- 该方法 重复写入内容，会进行覆盖操作

:::

- 语法

```js
fs.writeFile(path, data[, options], callback)

// path: 必须参数。指定文件的路径
// data: 必填参数。要写入的具体内容
// options: 可选参数。指定用什么 编码格式 来写入文件，默认是 utf8
// callback: 必选参数。文件写入完成后，要执行的回调函数
```

- 示例

::: details 点击查看用法示例

```js
const fs = require('fs')

fs.writeFile('./02.txt', 'abc123一二三32131232131', err => {
  if (err) {
    return console.log('文件写入失败：' + err.message)
  }
  console.log('文件写入成功！')
})
```

:::

## 4. path 路径模块

::: tip 说明
path 模块是 Node.js 官方提供的、用来处理文件路径的模块。它提供了一系列的方法和属性，用来满足用户对文件路径的操作需求。

- path.join() 方法，用来将多个路径片段拼接成一个 **完整的路径字符串**
- path.basename() 方法，用来从路径字符串中，将 **文件名** 解析出来
- path.extname() 方法，用来从路径字符串中，将 **文件后缀名** 解析出来

:::

### 1. path.join() 方法使用

::: tip 说明
\_\_dirname 是 node 提供的成员，用来表示当前文件所处的目录，常与 path.join() 方法一起使用
:::

::: details 点击查看用法示例

```js
const path = require('path')

const newPath = path.join('/a', 'b/c/', '../', './d', 'e')

console.log(newPath) //  \a\b\d\e
```

:::

### 2. path.basename() 方法使用

::: tip 说明
path.basename() 用来拿到文件的名称（可以是完整文件名，也可以去掉文件后缀名）
:::

::: details 点击查看用法示例

```js
const path = require('path')

const fname1 = path.basename('/a/b/c/index.html')

console.log(fname1) // index.html  （不管这个文件是否真的存在都会输出）

// 第二个参数表示 要剔除的后缀名
const fname2 = path.basename('/a/b/c/index.html', '.html')

console.log(fname2) // index  （不管这个文件是否真的存在都会输出）
```

:::

### 3. path.extname() 方法使用

::: tip 说明
path.extname() 用来拿到文件的后缀名称
:::

::: details 点击查看用法示例

```js
const path = require('path')

const extname = path.extname('/a/b/c/index.html')

console.log(extname) // .html  （不管这个文件是否真的存在都会输出）
```

:::

## 5. http 服务器模块

::: tip 说明
http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，就能把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务
:::

::: details 点击查看 如何创建一台简易服务器

```js
const http = require('http')

// 1. 创建一个 http 服务器 实例对象
const server = http.createServer()

// 2. 监听一个 request 事件 (req 是请求对象，res 是响应对象)
server.on('request', (req, res) => {
  // 解决中文乱码
  res.setHeader('Content-Type', 'application/json; charset=utf8')

  // 响应给客户端一段文本
  res.end(`访问的地址是${req.url}, 请求的方法是${req.method}`)
})

// 3. 监听一个端口
server.listen(80, () => {
  console.log('server is running at: http://localhost')
})
```

:::

## 6. querystring 字符串处理模块

::: tip 说明

- querystring 模块是 Node.js 官方提供的、用来处理字符串格式数据的模块。
- <tgx-link href="/backend/node/express">这篇文章</tgx-link> 的【Express 中间件】中用到了 querystring 模块

:::
