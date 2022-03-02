# 浏览器 相关知识

::: tip 说明
本栏目收集了一些 浏览器 的相关知识
:::

## 1. 浏览器为什么能运行 JavaScript ?

::: tip 说明

浏览器是 JS 的 **宿主环境** 之一。浏览器能运行 JS 代码，是因为它内置了 **JavaScript 解析引擎**。

:::

- js 代码在浏览器被加载之后，本质上只是一些字符串。浏览器利用了 **JavaScript 解析引擎** 来解析这些字符串，从而实现运行 js 代码的功能
- 每个浏览器都有自己的 JavaScript 解析引擎 ，目前，**性能最好的解析引擎是 V8**

<tgx-img src="/browser/browser/browser-principle.png" 
    alt="浏览器为什么能运行 JavaScript示意图" 
    title="浏览器为什么能运行 JavaScript示意图"
    width="740">
</tgx-img>

## 2. JS 为什么能操作 DOM 和 BOM ?

::: tip 说明

因为浏览器内置了一些操作 DOM、 BOM 和 Ajax 的 api 接口，所以我们就可以基于这些 api 编写一些 **操作 DOM、BOM、Ajax 的 js 代码**。浏览器拿到这些代码后，就交给 js 解析引擎处理，从而实现 js 代码操作 DOM，BOM 和 Ajax 的功能。

:::
<tgx-img src="/browser/browser/browser-dom-bom.png" 
    alt="JS 为什么能操作 DOM 和 BOM示意图" 
    title="JS 为什么能操作 DOM 和 BOM示意图"
    width="740">
</tgx-img>

## 3. 浏览器中的 JS 运行环境

::: tip 说明

- 运行环境：是指代码正常运行所需的必要环境
- 就像种子发芽的必要环境是：适宜的温度、氧气、水一样，js 代码运行也需要特定的环境

:::

- 对于 Chrome 浏览器来说，js 代码运行的两个条件：
  - V8 解析引擎
  - 内置 API

<tgx-img src="/browser/browser/environment.png" 
    alt="JS 运行环境示意图" 
    title="JS 运行环境示意图"
    width="740">
</tgx-img>
