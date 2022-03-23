# 第三方插件 用法集合

::: tip 栏目说明
本栏目记载了一些 **客户端** 相关的 **第三方包** 使用方法。
:::

## 1. `mitt` 创建 eventBus

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

::: details 点击查看 使用案例

```js
// 引入包, 创建 bus 并导出, 各个组件就可以直接引入使用了
import mitt from 'mitt'
const bus = mitt()
export default bus
```

:::

## 2. `moment` 格式化时间

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

::: details 点击查看 使用案例

```js
import moment from 'moment'

// 得到当前时间
const nowDate = moment()

// 格式化时间
nowDate.format('YYYY-MM-DD HH:mm:ss') // 2020-03-02 18:05:52
```

:::

## 3. `i5ting_toc` 转化 md 为 html

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

::: details 点击查看 使用案例

```js
  // 把桌面的 01.md 转为 html 格式：
  // 直接在桌面打开终端输入：
  i5ting_toc -f 01.md -o    // -o 表示 转换后再浏览器打开
```

:::

## 4. `live-server` 开发服务器

### 1. `live-server` 有什么用？

::: tip 具体作用

- 使用 `live-server` 第三方包，可以在本地快速开启一个服务器。
  - 1. 可以利用 ajax/fetch 来模拟请求本地数据
  - 2. 可以实时监听代码改动，同步到浏览器页面

:::

### 2. 使用方法

- 第一步：全局安装

```xml
npm install -g live-server
```

- 第二步：使用<tgx-link href="https://www.npmjs.com/package/live-server">（点击查看具体使用文档）</tgx-link>

::: details 点击查看 使用案例

```js
// 直接在要打开的 .html 文件的目录下 打开终端并运行命令： live-server
```

:::
