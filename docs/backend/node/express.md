# Express 相关知识

## 1. 什么是 Express？有什么用？

::: tip 说明

Express 是基于 Node.js 内置 http 模块扩展的一个 Web 开发框架。是一个 第三方包 ，可以极大提升开发效率。

:::

## 2. Express 使用相关

::: tip 说明

在这里安装体验的是 express@4.17.1 版本

:::

### 1. 快速搭建一个 Web 服务器

::: details 点击查看 简易服务器代码

```js
const express = require('express')

const app = express()

app.listen(80, () => {
  console.log('server is running at http://localhost')
})
```

:::

### 2. 监听客户端的 请求方法 和 请求路径

::: tip 说明

- 处理 post 请求：app.post(url, callback)
- 处理 get 请求：app.get(url, callback)
- put, delete...更多方法语法相同
- 其中：
  - url 是地址。
  - callback 是处理函数，在匹配到对应的 **请求方法** 和 **请求路径** 后就会执行。

:::

::: details 点击查看 路由处理案例

```js{5-10,12-16}
const express = require('express')

const app = express()

// 1. 当客户端用 get 请求 http://localhost/getUser 这个地址时匹配
app.get('/getUser', (req, res) => {
  // req 是请求对象， res 是响应对象
  // res.send() 方法用于做出响应
  res.send('get')
})

// 2. 当客户端用 post 请求 http://localhost/getUser 这个地址时匹配
app.post('/getUser', (req, res) => {
  // res.send() 方法用于做出响应
  res.send('post')
})

app.listen(80, () => {
  console.log('server is running at http://localhost')
})
```

:::

### 3. 获取 和 发送 参数

::: tip 说明
使用 res.query 和 res.params 来接收参数
:::

::: details 点击查看 参数处理案例

```js{5-8,12-15}
const express = require('express')

const app = express()

// 当客户端用 get 请求 http://localhost/getUser?id=1&name=tgx 时匹配
app.get('/getUser', (req, res) => {
  // 1. req.query 默认是空对象，接收地址栏的 查询参数
  // 此时 req.query 是个对象 { id: '1', name: 'tgx' }
  res.send(`查询参数是：${req.query}`)
})

// 当客户端用 post 请求 http://localhost/getUser/5/tgx 时匹配
app.post('/getUser/:uid/:uname', (req, res) => {
  // 2. res.params 默认是空对象，接收地址栏的 动态参数
  // 此时 req.params 是个对象 { uid: '5', uname: 'tgx }
  res.send(`动态参数是：${req.params}`)
})

app.listen(80, () => {
  console.log('server is running at http://localhost')
})
```

:::

### 4. 托管静态资源

::: tip 说明

- 使用 app.use(express.static('文件夹')) 来托管静态资源
- 可以多次使用该方法托管（**但是如果存在同名资源，优先使用前方的目录**）

:::

::: details 点击查看 具体案例

```js{5-7}
const express = require('express')

const app = express()

// 假设 demo 是个文件夹，里面有 index.html, index.css, index.js 三个文件
// 托管后 就可以直接访问 http://localhost/index.html
app.use(express.static('./demo'))

app.listen(80, () => {
  console.log('server is running at http://localhost')
})
```

:::

::: details 点击查看 加了前缀的案例

```js{5-7}
const express = require('express')

const app = express()

// 假设 demo 是个文件夹，里面有 index.html, index.css, index.js 三个文件
// 托管后, 现在要加个前缀, 要访问 http://localhost/demo/index.html
app.use('/demo', express.static('./demo'))

app.listen(80, () => {
  console.log('server is running at http://localhost')
})
```

:::
