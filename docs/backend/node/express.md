# Express 相关知识

## 1. 什么是 Express？有什么用？

::: tip 说明

Express 是基于 Node.js 内置 http 模块扩展的一个 Web 开发框架。是一个 第三方包 ，可以极大提升开发效率。

:::

## 2. Express 基本用法

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

## 3. Express 后端路由

::: tip 概念

- 路由：指的是一种 **对应关系**
- 前端路由：指 **hash 地址** 与 **组件** 的对应关系
- **后端路由**：指 **请求方式、请求地址** 与 **处理函数** 的对应关系

:::

### 1. express 中路由的基本用法

::: tip 说明

- express 中一个路由包含 3 个部分

  - 1. 请求方式
  - 2. 请求地址
  - 3. 处理函数

- 例如：app.get('/getUser', callback) 就是一个路由，其中：

  - get 是 请求方式
  - /getUser 是 请求地址
  - callback 是 处理函数（回调函数）

- express 中的路由会从上到下依次匹配，完全匹配到 **请求方法**、**请求地址** 后才会执行 **回调函数**

:::

### 2. express 中的模块化路由

::: tip 说明

- 项目中路由应该使用模块化管理，而不是 挂载到 实例 app 上
- app.use() 方法，是用来注册中间件的
- app.use() 方法，如果加了前缀注册路由，请求时，路由前也要加这个前缀，例如：
  - 假设服务地址是 http://localhost
  - 定义一个路由 router.get('/user/list', (req, res) => {})
  - 注册这个路由 app.use(router)，则访问 http://localhost/user/list
  - 注册这个路由 app.use('/api', router)，则访问 http://localhost/api/user/list

:::

::: details 点击查看 路由模块

```js
// 使用 router.js模块 来集中管理路由

const express = require('express')

// 创建 路由实例 用来管理路由
const router = express.Router()

// 挂载第一个路由
router.get('/user/list', (req, res) => {})
// 挂载第二个路由
router.post('/home', (req, res) => {})
// 挂载......

module.exports = router
```

:::

::: details 点击查看 如何注册路由模块

```js
const express = require('express')

const app = express()

// 引入并注册 路由模块
const router = require('./router.js')
app.use(router)

app.listen(80, () => {
  console.log('server is running at http://localhost')
})
```

:::

## 4. Express 中间件

::: tip 概念

中间件：是指 **业务处理的中间环节**。后端在接收到前端的请求数据后，要经过一系列的 **中间处理环节**，最后再把数据返回给前端，而中间这些处理环节就是 **中间件**

:::

### 1. 中间件具体是什么？

- 中间件的本质就是 **处理函数**，与路由处理函数相比，中间件会多出一个 next 参数，且中间件内部必须调用 next() 这个参数（放行函数）

### 2. 中间件的特性

- 所有 中间件 **按顺序依次从上往下执行**，直到最后一个中间件走完了，才会匹配到对应的 路由

- 所有 中间件 **共享同一份 req 和 res**

- **全局中间件**：使用 app.use() 或 router.use() **单独注册** 的中间件

- **局部中间件**：这种中间件不需要 app.use() **单独注册**，而是放在 **路由地址** 和 **路由函数** 之间
  ::: details 点击查看 局部中间件用法

  ```js
  // 定义中间件
  const mw1 = (req, res, next) => {
    console.log('中间件 mw1')
    next()
  }
  const mw2 = (req, res, next) => {
    console.log('中间件 mw2')
    next()
  }

  // 两种写法都可以：

  // 1. 路由中直接插入，这个 mw1, mw2 就是 局部中间件
  app.use('/user', mw1, mw2, (req, res) => {})

  // 2. 路由中放入数组插入，这个 mw1, mw2 就是 局部中间件
  app.use('/user', [mw1, mw2], (req, res) => {})
  ```

  :::

### 3. 中间件的分类

::: tip 中间件分 5 类

- **应用级别** 的中间件：绑在 app.use() 上
- **路由级别** 的中间件：绑在 router.use() 上
- **错误级别** 的中间件：放在所有 路由 之后
- **Express 内置** 的中间件
- **第三方** 中间件

:::

#### 3.1 应用级别 的中间件

> 指的是上文的写法，绑在 app.use() 上

#### 3.2 路由级别 的中间件

> 指的是上文的写法，绑在 router.use() 上

#### 3.3 错误级别 的中间件

::: tip 说明
放在所有 路由中间件 之后，**用来防止某个错误导致服务器崩溃**
:::

::: details 点击查看 错误级别 中间件

```js{6-10}
const express = require('express')
const app = express()

// 路由中间件
app.use('/', (req, res) => {})

// 错误中间件 必须 放在所有路由中间件之后，才能捕获错误
app.use((err, req, res, next) => {
  console.log('发生了错误' + err.message)
  res.send('服务器发生了错误' + err.message)
})

app.listen(80)
```

:::

#### 3.4 Express 内置 的中间件

::: tip 说明

- 自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验
  - express.static 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）
  - express.json 解析 JSON 格式的请求体数据（仅在 4.16.0+ 版本中可用）
  - express.urlencoded 解析 固定表单格式的请求体数据（仅在 4.16.0+ 版本中可用）
    - express.urlencoded 只能解析 application/x-www-form-urlencoded 格式的表单数据

:::

::: details 点击查看 express.json 中间件 示例

```js
const express = require('express')
const app = express()

// 需要配置在所有路由之前
// 使用 内置中间件 express.json() 解析客户端发送的请求体，并挂载到 req.body 上
app.use(express.json())

// 第二个中间件
app.use((req, res, next) => {
  // 默认 req.body 接收的 json 请求体是 undefined
  // 经过 express.json 内置中间件 之后，就能在 req.body 拿到客户端发的 json 内容
  console.log(req.body)
  res.send('ok')
})

// 路由中间件
app.use('/', (req, res) => {})

app.listen(80)
```

:::

::: details 点击查看 express.urlencoded 中间件 示例

```js
const express = require('express')
const app = express()

// 需要配置在所有路由之前
app.use(express.json()) // 处理 json 请求体
app.use(express.urlencoded({ extended: false })) // 处理 URL-encoded 格式请求体

// 第二个中间件
app.use((req, res, next) => {
  // 经过 express.urlencoded 内置中间件 之后，
  // 就能在 req.body 拿到客户端发的表单键值对 URL-encoded 格式内容
  console.log(req.body)
  res.send('ok')
})

// 路由中间件
app.use('/', (req, res) => {})

app.listen(80)
```

:::

#### 3.5 第三方 中间件

::: tip 说明

- **第三方 中间件** 是指从 npm 仓库下载的中间件，也可以是自己写的 自定义 中间件。

- 这里用到了一个 querystring 模块，用来处理字符串，是 node.js 内置模块，与 fs, path 一样

:::

::: details 点击查看 自定的中间件 模块

```js
// customBodyParser.js 文件

const qs = require('querystring')

// 自定义一个处理数据的中间件
const customBodyParser = (req, res, next) => {
  // 1. 当客户端发送数据时触发 data 事件，监听并拼接客户端发来的数据
  let str = ''
  req.on('data', chunk => {
    //   数据是分片发送的，可能需要多次接收
    str += chunk
  })

  // 2. 当数据发送完成时触发 end 事件
  req.on('end', () => {
    // qs.parse 方法 可以把字符串解析为对象
    req.body = qs.parse(str)
  })

  next()
}

module.exports = customBodyParser
```

:::

::: details 点击查看 如何使用自定的中间件

```js
const express = require('express')
const customBodyParser = require('./customBodyParser.js')
const app = express()

// 注册自定义的中间件
app.use(customBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log('server is running at http://localhost')
})
```

:::
