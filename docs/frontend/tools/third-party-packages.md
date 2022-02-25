# 第三方插件 用法集合
::: tip 说明
记录了一些第三方插件的使用案例
:::

## 1. `then-fs` 读取文件内容
::: tip 说明
`then-fs` 是个服务端的三方依赖包，可以基于 Promise 的方式来读取系统文件。
:::
### 1. then-fs 有什么用？
- 由于 node.js 官方提供的 fs 模块仅支持以回调函数的方式读取文件，不支持 Promise 的调用方式。因此，我们要借助 `then-fs` 来基于 Promise 的方式读取文件的内容
- then-fs 提供的 readFile() 方法，可以异步地读取文件的内容，它的返回值是 Promise 的实例对象。因此可以调用 .then() 方法为每个 Promise 异步操作指定成功和失败之后的回调函数

### 2. 使用方法
- 安装
    ```xml
    npm i then-fs
    ```
- 使用
    ```js
    // 引入包
    import thenFs from 'then-fs'

    // 调用 readFile() 方法读取文件
    // 该方法返回一个 Promise 实例对象，因此可以访问 then() 方法
    thenFs.readFile('./file.txt', 'utf8').then(success => { ... }, error => { ... })
    ```
