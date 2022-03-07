# 第三方插件 用法集合

::: tip 说明
记录了一些第三方插件的作用及其用法
:::

## 1. `then-fs` 读取文件内容

::: tip 说明
由于 node.js 官方提供的 fs 模块 **仅支持以回调函数** 的方式读取文件，不支持 Promise 的调用方式。因此，我们要借助 `then-fs` 来基于 Promise 的方式读取文件的内容

:::

### 1. `then-fs` 有什么用？

::: tip 具体作用

- `then-fs` 是个服务端的三方依赖包，可以基于 Promise 的方式来读取系统文件。
- `then-fs` 提供的 readFile() 方法，可以异步地读取文件的内容，它的返回值是 Promise 的实例对象。因此可以调用 .then() 方法为每个 Promise 异步操作指定成功和失败之后的回调函数

:::

### 2. 使用方法

- 第一步：安装
  ```xml
  npm i then-fs
  ```
- 第二步：使用<tgx-link href="https://www.npmjs.com/package/then-fs">（点击查看具体使用文档）</tgx-link>

  ```js
  // 引入包
  import thenFs from 'then-fs'

  // 调用 readFile() 方法读取文件
  // 该方法返回一个 Promise 实例对象，因此可以访问 then() 方法
  thenFs.readFile('./file.txt', 'utf8').then(success => { ... }, error => { ... })
  ```

## 2. `mitt` 创建 eventBus

### 1. `mitt` 有什么用？

::: tip 具体作用

- 在 vue3 中：兄弟组件的数据共享需要用到 eventBus 方案
- 使用 `mitt` 可以快速创建 一个 vue 实例 作为 bus

:::

### 2. 使用方法

- 第一步：安装
  ```xml
  npm i mitt@2.1.0 -S
  ```
- 第二步：使用<tgx-link href="https://www.npmjs.com/package/mitt">（点击查看具体使用文档）</tgx-link>

  ```js
  // 引入包, 创建 bus 并导出, 各个组件就可以直接引入使用了
  import mitt from 'mitt'
  const bus = mitt()
  export default bus
  ```

## 3. `moment` 格式化时间

### 1. `moment` 有什么用？

::: tip 具体作用
使用 `moment` 第三方包，可以快速把原始时间处理成指定的日期格式。

:::

### 2. 使用方法

- 第一步：安装
  ```xml
  npm i moment -S
  ```
- 第二步：使用<tgx-link href="https://momentjs.com/docs/#/use-it/">（点击查看具体使用文档）</tgx-link>

  ```js
  import moment from 'moment'

  // 得到当前时间
  const nowDate = moment()

  // 格式化时间
  nowDate.format('YYYY-MM-DD HH:mm:ss') // 2020-03-02 18:05:52
  ```

## 4. `i5ting_toc` 转化 md 为 html

### 1. `i5ting_toc` 有什么用？

::: tip 具体作用
使用 `i5ting_toc` 第三方包，可以快速把 .md 文件转化为 .html 格式的文档

:::

### 2. 使用方法

- 第一步：全局安装
  ```xml
  npm install -g i5ting_toc
  ```
- 第二步：使用<tgx-link href="https://www.npmjs.com/package/i5ting_toc">（点击查看具体使用文档）</tgx-link>

  ```js
  // 把桌面的 01.md 转为 html 格式：
  // 直接在桌面打开终端输入：
  i5ting_toc -f 01.md -o    // -o 表示 转换后再浏览器打开
  ```

## 5. `nodemon` 监听 node 服务文件

### 1. `nodemon` 有什么用？

::: tip 具体作用

使用 `nodemon` 第三方包，可以实时监听我们代码的变动，而不用在每次更改代码后都重启服务才生效

:::

### 2. 使用方法

- 第一步：全局安装
  ```xml
  npm install -g nodemon
  ```
- 第二步：使用

  ```js
  // 直接使用 nodemon 运行文件即可

  // 假设现在要执行一个 demo.js 文件
  node demo.js // 原始：使用 node 执行
  nodemon demo.js // 现在：使用 nodemon 执行，demo.js 变动后无需重启，可以自动更新
  ```

## 6. `mysql` 操作数据库

### 1. `mysql` 有什么用？

::: tip 具体作用

- 默认情况下，项目 与 数据库 是 **不存在联系的**
- `mysql`这个第三方包，提供了在 Node.js 项目中 **连接和操作** MySQL 数据库的能力。
- 有关数据库的知识 <tgx-link href="/backend/database/database">请点击这里</tgx-link>

:::

### 2. 使用方法

- 第一步：项目中安装
  ```xml
  npm install mysql
  ```
- 第二步：项目中使用
  ::: details 点击查看 如何连接 mysql 数据库

  ```js
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
  ```

  :::

  ::: details 点击查看 如何查询数据

  ```js{10-16}
  const mysql = require('mysql')

  const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
  })

  // 1. 查询 users 表中所有数据
  const sqlStr = 'select * from users'
  db.query(sqlStr, (err, results) => {
    if (err) return console.log(err.message)
    // 用 select 查询到的 results 是个数组, 里面是一个又一个对象
    console.log(results)
  })
  ```

  :::

  ::: details 点击查看 如何插入数据

  ```js{10-23,26-36}
  const mysql = require('mysql')

  const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
  })

  // 1. 向 users 中插入一条数据, username为Spider-Man, password为pcc321
  // sql 语句中可以用 ? 来进行占位, 执行时 用数组对应替换即可
  const sqlStr = 'insert into users (username, password) values (?, ?)'
  const user = { username: 'Spider-Man', password: 'pcc321' }

  // 用 insert into 查询到的 results 是个对象
  db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message)
    // 可以通过 affectedRows影响的行数 可以知道是否插入成功
    if (results.affectedRows === 1) {
      console.log(results)
      console.log('插入数据成功')
    }
  })


  // 2. 快捷方式：向 users 中插入一条数据
  // 要求：数据对象的 每个属性和数据表的字段一一对应，执行时，直接用对象替换
  const sqlStr = 'insert into users set ?'
  const user = { username: 'Spider-Man2', password: 'pcc000' }

  db.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
      console.log('插入数据成功')
    }
  })
  ```

  :::

  ::: details 点击查看 如何更新数据

  ```js{10-19,22-31}
  const mysql = require('mysql')

  const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
  })

  // 1. 更新 users 中的一条数据（思想与插入数据类似）
  const sqlStr = 'update users set username=?, password=? where id=?'
  const user = { id: 6, username: 'aaa', password: '000' }

  db.query(sqlStr, [user.username, user.password, user.id], (err, res) => {
    if (err) return console.log(err.message)
    if (res.affectedRows === 1) {
      console.log('更新数据成功')
    }
  })


  // 2. 便捷方式：更新 users 中的一条数据（思想与插入数据类似）
  const sqlStr = 'update users set ? where id=?'
  const user = { id: 6, username: 'aaa2', password: '0002' }

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

  ```js{10-18,21-29}
  const mysql = require('mysql')

  const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
  })

  // 1. 删除 users 中的一条数据（不推荐）
  const sqlStr = 'delete from users where id=?'
  // 这个 id 值可以直接写 5 也可以写成 [5] (取决于操作的数据 是单个还是多个)
  db.query(sqlStr, 5, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
      console.log('删除数据成功')
    }
  })


  // 2. 标记删除：删除 users 中的一条数据（推荐）
  // 这里设计的 status 用来标记用户是否启用 0 为正常 1为禁用
  const sqlStr = 'update users set status=? where id=?'
  db.query(sqlStr, [1, 6], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
      console.log('标记删除成功')
    }
  })
  ```

  :::
