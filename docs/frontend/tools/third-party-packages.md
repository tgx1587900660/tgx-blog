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
