# 前端模块化规范

## 1. 说出 4 种模块化规范

::: tip 概括
AMD 和 CMD 已被淘汰，不再需要学习。CommonJS 是 node.js 遵循的规范，未被淘汰但会被逐渐取代。
**ES6 模块化规范** 是官方推出的 **未来模块化规范趋势**。
:::

- 1. **AMD** ---- 不用学，已落伍
     - js 开发者社区提出（非标准）
     - 主要用于 **浏览器端**
- 2. **CMD** ---- 不用学，已落伍
     - js 开发者社区提出（非标准）
     - 主要用于 **浏览器端**
- 3. **CommonJS** ---- 要学，node.js 遵循的规范
     - js 开发者社区提出（非标准）
     - 主要用于 **服务器端**
     - 会慢慢被 **ES6 模块化** 淘汰
- 4. **ES6 模块化** ---- 必学
     - 官方提出（标准）
     - 适用于 **浏览器端** 和 **服务器端**

## 2. ES6 模块化规范的 3 个定义

::: tip 提示
以下内容将重点学习 **ES6 模块化规范** 的规则
:::

- 1. 每个 js 文件都是一个独立的模块
- 2. 导入其它模块成员使用 **import** 关键字
- 3. 向外共享模块成员使用 **export** 关键字

## 3. 在 Node.js 中体验 ES6 模块化

::: tip 提示
Node.js 默认使用 CommonJS 模块化规范，不支持 ES6 模块化规范。
:::
要想在 node.js 中体验 ES6 模块化，需要两步：

- 1. 确保 node.js 版本 >= v14.15.1 （具体版本我没验证，需查看 node 官网，经测试 v14.13.0 也能用）
- 2. 在项目 package.json 的根节点中添加 "type": "module" 节点（与 name 平级）

### 1. 默认导出 和 默认导入

::: tip 说明

- **默认导出** 一个文件只能用一次
- **默认导出** 需要导出一个对象，并挂载需要被访问的成员
- **导入时** 需要用 . 操作符访问成员
  :::
  ::: details 点击查看 默认导出 案例

```js
// 01.default-export.js 文件

let n1 = 10

let n2 = 20

function show() {}

// 外界只能访问 n1 和 show
export default {
  n1,
  show
}
```

:::

::: details 点击查看配套的 导入 案例

```js
// 与 01.default-export.js 配套的导入案例

// 直接导入，就可以用 m1.show 来访问 show 方法
import m1 from './01.default-export.js'

console.log(m1) // { n1: 10, show: [Function: show] }
```

:::

### 2. 按需导出 和 按需导入

::: tip 说明

- **按需导出** 一个文件可以使用多次
- **按需导出** 直接导出 需要被访问的成员 即可
- **导入时** 只需要解构成员，即可直接访问
- **导入时** 可以用 as 关键字 给这个成员重命名
  :::

::: details 点击查看 按需导出 案例

```js
// 03.export.js 文件

export let m1 = 1

export let m2 = 'aaa'

export function say() {}
```

:::

::: details 点击查看配套的 导入 案例

```js
// 与 03.export.js 配套的按需导入 案例

// 通过解构赋值 来导入成员
import {
  m1,
  m2 as mm2, // 导入时 给 m2 重命名为了 mm2
  say
} from './03.export.js'

console.log(m1, mm2, say) // 1 aaa [Function: say]
```

:::

### 3. 兼容两种导出方案

::: tip 提示
在实际开发中，为了兼顾 **使用方**，我们作为 **导出方** 需要 **同时提供两种导出方案**
:::
::: details 点击查看 导出方 案例

```js
// 05.example-export.js 文件

// 按需导出了 3 个成员
export let n1 = 10

export let n2 = 20

export function show() {}

// 同时，默认导出了这 3 个成员
export default {
  n1,
  n2,
  show
}
```

:::

::: details 点击查看 导入方 案例

```js
// 与 05.example-export.js 配套的导入 案例

// 可供 导入方 自由地选择不同的导入语法
import info, { n1, n2 as nn2, show } from './05.example-export.js'

console.log(info) // { n1: 10, n2: 20, show: [Function: show] }

console.log(n1, nn2, show) // 10 20 [Function: show]
```

:::
