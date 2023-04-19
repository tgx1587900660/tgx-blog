# 依赖包 用法集合

::: tip 栏目说明
本栏目记载了一些 **服务端** 相关的 **第三方包** 使用方法。
:::

## 1. `then-fs` 读取文件内容

::: tip 说明
由于 node.js 官方提供的 fs 模块 **仅支持以回调函数** 的方式读取文件，不支持 Promise 的调用方式。因此，我们要借助 `then-fs` 来基于 Promise 的方式读取文件的内容

:::

#### 1. `then-fs` 有什么用？

::: tip 具体作用

- `then-fs` 是一个 node.js 服务端 的三方依赖包。
- `then-fs` 可以基于 Promise 的方式来读取系统文件。提供的 readFile() 方法，可以异步地读取文件的内容，它的返回值是 Promise 的实例对象。因此可以调用 .then() 方法为每个 Promise 异步操作指定成功和失败之后的回调函数

:::

#### 2. 使用方法

- 第一步：安装

```xml
npm i then-fs
```

- 第二步：使用<tgx-link href="https://www.npmjs.com/package/then-fs">（点击查看具体使用文档）</tgx-link>

::: details 点击查看使用案例

```js{1-3}
// 使用这个包，分 2 步：
// 1. 导入包得到一个对象
// 2. 调用该对象的 readFile 方法即可


// 1. 引入包
import thenFs from 'then-fs'

// 2. 调用 readFile() 方法读取文件
// 该方法返回一个 Promise 实例对象，因此可以访问 then() 方法
thenFs.readFile('./file.txt', 'utf8').then(success => { .. }, error => { .. })
```

:::

## 2. `nodemon` 监听 node 服务文件

::: tip 说明
使用 node 执行代码后，如果代码发生变动，必须重新执行才能生效。
:::

#### 1. `nodemon` 有什么用？

::: tip 具体作用

- `nodemon` 是一个 node.js 服务端 的三方依赖包。
- `nodemon` 可以实时监听我们代码的变动，并自动执行文件。

:::

#### 2. 使用方法

- 第一步：全局安装

```xml
npm install -g nodemon
```

- 第二步：使用

::: details 点击查看使用案例

```js{1-2}
// 使用这个包，分 1 步：
// 1. 直接使用 nodemon 命令运行文件即可


// 1. 假设现在要执行一个 demo.js 文件
node demo.js // 原始：使用 node 执行
nodemon demo.js // 现在：使用 nodemon 执行，demo.js 变动后无需重启，可以自动更新
```

:::

## 3. `mysql` 操作数据库

#### 1. `mysql` 有什么用？

::: tip 具体作用

- `mysql` 是一个 node.js 服务端 的三方依赖包。
- 默认情况下，**项目** 与 **数据库** 是 **不存在联系的**。`mysql` 提供了在 Node.js 项目中 **连接和操作** MySQL 数据库的能力。

:::

#### 2. 使用方法

- 第一步：项目中安装

```xml
npm install mysql
```

- 第二步：项目中使用

::: details 点击查看 如何连接并测试 mysql 数据库

```js{1-5,8,11,19,28}
// 使用这个包，分 4 步：
// 1. 导入包，得到一个 对象
// 2. 调用 该对象的 createPool 方法创建一个 连接对象 (创建时需要传入一个配置对象)
// 3. 测试 连接对象 是否正常工作
// 4. 使用 连接对象 操作 数据库


// 1. 导入 mysql 模块
const mysql = require('mysql')

// 2. 建立与 MySQL 数据库 的连接
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库 ip 地址
  user: 'root', // 登录数据库的用户名
  password: 'admin123', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作的 数据库名称
})

// 3. 检测 mysql 模块是否正常工作
// 其中：'select 1' 这个SQL语句在这里没什么实质性作用，仅仅用于检测
db.query('select 1', (err, results) => {
  // err 是错误对象
  if (err) return console.log(err.message)
  // results 是查询结果 // [ RowDataPacket { '1': 1 } ]
  console.log(results)
})

// 4. 在项目中使用...
```

:::

::: details 点击查看 如何查询数据

```js{1-3,15-23}
// 查询数据，分 2 步：
// 1. 编写 SQL 语句
// 2. 调用 连接对象的 qurey 方法执行


const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})

// 案例: 查询 users 表中所有数据
// 1. 编写 SQL 语句
const sqlStr = 'select * from users'
// 2. 调用 连接对象的 qurey 方法查询
db.query(sqlStr, (err, results) => {
  if (err) return console.log(err.message)
  // 用 select 查询到的 results 是个数组, 里面是一个又一个对象
  console.log(results)
})
```

:::

::: details 点击查看 如何插入数据

```js{1-4,15-30,33-45}
// 插入数据，分 3 步：
// 1. 定义一个要插入的对象
// 2. 编写 SQL 语句
// 3. 调用 连接对象的 qurey 方法执行


const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})

// 案例一: 向 users 中插入一条数据, username为Spider-Man, password为pcc321
// sql 语句中可以用 ? 来进行占位, 执行时 用数组对应替换即可
// 1. 定义一个要插入的对象
const user = { username: 'Spider-Man', password: 'pcc321' }
// 2. 编写 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)'
// 3. 调用 连接对象的 qurey 方法执行
// 用 insert into 查询到的 results 是个对象
db.query(sqlStr, [user.username, user.password], (err, results) => {
  if (err) return console.log(err.message)
  // 可以通过 affectedRows影响的行数 可以知道是否插入成功
  if (results.affectedRows === 1) {
    console.log(results)
    console.log('插入数据成功')
  }
})


// 案例二: 使用快捷方式 向 users 中插入一条数据
// 要求：数据对象的 每个属性和数据表的字段一一对应，执行时，直接用对象替换
// 1. 定义一个要插入的对象
const user = { username: 'Spider-Man2', password: 'pcc000' }
// 2. 编写 SQL 语句
const sqlStr = 'insert into users set ?'
// 3. 调用 连接对象的 qurey 方法执行
db.query(sqlStr, user, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  }
})
```

:::

::: details 点击查看 如何更新数据

```js{1-4,16-27,30-41}
// 插入数据，分 3 步：
// 1. 定义一个要插入的对象
// 2. 编写 SQL 语句
// 3. 调用 连接对象的 qurey 方法执行


const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})


// 案例一: 更新 users 中的一条数据（思想与插入数据类似）
// 1. 定义一个要插入的对象
const user = { id: 6, username: 'aaa', password: '000' }
// 2. 编写 SQL 语句
const sqlStr = 'update users set username=?, password=? where id=?'
// 3. 调用 连接对象的 qurey 方法执行
db.query(sqlStr, [user.username, user.password, user.id], (err, res) => {
  if (err) return console.log(err.message)
  if (res.affectedRows === 1) {
    console.log('更新数据成功')
  }
})


// 案例二: 使用便捷方式 更新 users 中的一条数据（思想与插入数据类似）
// 1. 定义一个要插入的对象
const user = { id: 6, username: 'aaa2', password: '0002' }
// 2. 编写 SQL 语句
const sqlStr = 'update users set ? where id=?'
// 3. 调用 连接对象的 qurey 方法执行
db.query(sqlStr, [user, user.id], (err, res) => {
  if (err) return console.log(err.message)
  if (res.affectedRows === 1) {
    console.log('更新数据成功')
  }
})
```

:::

> 标记删除思想：真正执行 delete 语句过于危险，无法恢复数据。因此我们可以在设计表时定义一个 status 状态字段，
> 用来标记某条数据是否为 '已删除状态'，实际操作时，我们使用的是 update 语句来修改这条数据的 '删除状态' ，从而实现删除效果。

::: details 点击查看 如何删除数据

```js{1-3,15-25,28-38}
// 插入数据，分 2 步：
// 1. 编写 SQL 语句
// 2. 调用 连接对象的 qurey 方法执行


const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})


// 案例一: 删除 users 中的一条数据（不推荐）
// 1. 编写 SQL 语句
const sqlStr = 'delete from users where id=?'
// 2. 调用 连接对象的 qurey 方法执行
// 这个 id 值可以直接写 5 也可以写成 [5] (取决于操作的数据 是单个还是多个)
db.query(sqlStr, 5, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('删除数据成功')
  }
})


// 案例二: 使用标记删除思想 删除 users 中的一条数据（推荐）
// 1. 编写 SQL 语句
// 这里设计的 status 用来标记用户是否启用 0 为正常 1为禁用
const sqlStr = 'update users set status=? where id=?'
// 2. 调用 连接对象的 qurey 方法执行
db.query(sqlStr, [1, 6], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})
```

:::

## 4. `express-session` 身份认证

#### 1. `express-session` 有什么用？

::: tip 具体作用

- `express-session` 是一个 node.js 服务端 的三方依赖包。
- `express-session` 可以便捷地在客户端进行 session 身份认证。

:::

#### 2. 使用方法

- 第一步: 安装

```xml
npm i express-session
```

- 第二步: 使用

::: details 点击查看 如何在 express 项目中 保存、获取、删除 session 信息

```js{1-5,11,13,31,41,56}
// 完整使用这个包，分 5 步：
// 1. 导入包, 得到一个方法
// 2. 调用这个方法,传入一个配置对象, 同时注册为中间件
// 3. 注册后, req 上会自动挂载一个 session 属性 (用于存储用户信息, 供后续使用)
// 4. session 属性上有一个 destroy() 用于销毁当前用户信息


const express = require('express')
const app = express()

// 1. 导入
const session = require('express-session')
// 2. 注册 express-session 中间件
app.use(
  session({
    secret: 'tgx', // 任意写，用来加密的
    resave: false, // 固定写法
    saveUninitialized: true // 固定写法
  })
)

// 其他代码...

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // 3.1 将登录成功后的用户信息，保存到 Session 中
  // 只有成功注册 express-session 中间件后 req 才有 session 这个属性
  req.session.user = req.body // 将用户信息存入 Session 中
  req.session.islogin = true // 设置用户登录状态存入 Session 中

  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // 3.2 从 Session 中获取用户的名称，响应给客户端
  // 判断是否登录了
  if (!req.session.islogin) {
    return res.send({ status: 1, message: 'fail' })
  }

  res.send({
    status: 0,
    message: 'success',
    username: req.session.user.username
  })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // 4. 清空当前用户 Session 信息
  req.session.destroy() // destroy() 方法只会清除当前用户的信息
  res.send({ status: 0, message: 'success' })
})
```

:::

## 5. `jsonwebtoken` 和 `express-jwt` 认证

::: tip 说明

`jsonwebtoken` 和 `express-jwt` 都是 node.js 服务端 的三方依赖包。

:::

#### 1. 这 2 个包有什么用？

::: tip 具体作用

- `jsonwebtoken` 用于生成 JWT 字符串
- `express-jwt` 用于将 JWT 字符串解析还原成 JSON 对象

:::

#### 2. 使用方法

- 第一步: 安装 2 个包

```xml
npm i jsonwebtoken express-jwt
```

- 第二步: 使用

::: details 点击查看 2 个包的具体使用步骤

```js{1-8,13,24,27,51,64,74,85}
// 使用这两个包，分 7 步：
// 1. 导入两个包
// 2. 定义 secret 密钥
// 3. 等待用户第一次登录成功，返回对应内容 （客户端请求登录接口）
// 4. 用 jsonwebtoken 包 加密用户信息成 token 字符串，返回给客户端保存
// 5. 注册 express-jwt解密 中间件
// 6. 等待用户请求权限接口，返回对应内容 （客户端请求需要权限的接口）
// 7. 使用错误处理中间件，捕获 解析 JWT 失败产生的错误（防止程序崩溃）

const express = require('express')
const app = express()

// 1. 导入两个包
const jwt = require('jsonwebtoken') // 用于加密的包
const expressJWT = require('express-jwt') // 用于解析的包

// 允许跨域资源共享
const cors = require('cors')
app.use(cors())
// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// 2. 定义 secret 密钥，token 进行解密、加密时都要用到 (随便起，越复杂越好)
const secretKey = 'tgx-XXX -_-'

// 5. 注册将 JWT 字符串解析还原成 JSON 对象的中间件
// expressJWT({secret: secretKey}) 用来解析 token 字符串
// unless({ path: [/^\/api\//] }) 用来指定 哪些接口不需要访问权限
app.use(
  expressJWT({
    secret: secretKey,
    algorithms: ['HS256']
  }).unless({
    path: [/^\/api\//]
  })
)

// 登录接口
app.post('/api/login', function (req, res) {
  const userinfo = req.body
  // 登录失败
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({
      status: 400,
      message: '登录失败！'
    })
  }

  // 登录成功
  // 3. 登录成功后，把用户信息加密成 JWT 字符串。并通过 token 属性发送给客户端
  // jwt.sign() 方法接收 3 个参数
  // 参数1: 用户的信息对象（一定不要放密码）
  // 参数2: 加密的秘钥
  // 参数3: 配置对象, 可配置 token 有效期
  const tokenStr = jwt.sign(
    {
      username: userinfo.username
    },
    secretKey,
    { expiresIn: '30s' }
  )

  // 4. 把加密的 用户信息 token 字符串，返回给客户端保存
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr // 要发送给客户端保存的 token 字符串
  })
})

// 这是一个有权限的 API 接口
app.get('/admin/getinfo', function (req, res) {
  // 6. 使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  // req 中的 user 属性是在注册了 express-jwt 中间件后被自动挂载的
  console.log(req.user) // {username:'admin', iat:1646731406, exp:1646731436}

  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user // 要发送给客户端的用户信息
  })
})

// 7. 使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    // token 解析失败导致 (防止程序崩溃)
    return res.send({ status: 401, message: '无效的 token' })
  }
  return res.send({ status: 500, message: '未知错误' })
})

app.listen(8888, function () {
  console.log('Express server running at http://127.0.0.1:8888')
})
```

:::

## 6. `cors` 允许跨域

#### 1. `cors` 有什么用？

::: tip 具体作用

- `cors` 是一个 node.js 服务端 的三方依赖包。
- `cors` 可以便捷地在客户端 设置跨域资源访问

:::

#### 2. 使用方法

- 第一步: 安装

```xml
npm i cors@2.8.5
```

- 第二步: 使用

::: details 点击查看 cors 具体用法

```js{1-3,8-11}
// 使用 cors， 分 2 步：
// 1. 导入包
// 2. 注册为中间件

const express = require('express')
const app = express()

// 1. 导入包
const cors = require('cors')
// 2. 注册为中间件
app.use(cors())
```

:::

## 7. `bcryptjs` 密码加密

#### 1. `bcryptjs` 有什么用？

::: tip 具体作用

- `bcryptjs` 是一个 node.js 服务端 的三方依赖包。
- `bcryptjs` 可以对明文密码进行加密
  - 加密后的密码，无法被逆向破解
  - 多个用户使用同一个密码，被加密后，得到的结果不同

:::

#### 2. 使用方法

- 第一步: 安装

```xml
npm i bcryptjs@2.4.3
```

- 第二步: 使用

::: details 点击查看 bcryptjs 具体用法

```js{1-4,11,13,15}
// 使用 bcryptjs 分 3 步：
// 1. 导入包
// 2. 调用包的 hashSync(密码, 数字) 方法加密
// 3. 调用包的 compareSync(密码, 数据库的加密密码) 方法解密


const express = require('express')
const app = express()


// 1. 导入包
const bcrypt = require('bcryptjs')
// 2. 进行加密并覆盖(其中 10 是随机盐长度，越大表示密码越复杂，时间也越久)
userinfo.password = bcrypt.hashSync(userinfo.password, 10)
// 3. 登录时解密 bcrypt.compareSync(明文密码, 加密密码) 返回布尔值
// results 是查询用户的结果
const compareRes = bcrypt.compareSync(userinfo.password, results[0].password)
if (!compareRes) return res.send('密码错误')
res.send('登录成功')
```

:::
