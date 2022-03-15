# Vue 源码学习

::: tip 栏目说明

本栏目收集了一些 vue 2.6.11 的源码学习内容

:::

## 1. 学习内容

::: tip 学习路线

- 1. 变化侦测：怎么样实现数据响应式的？
- 2. 虚拟 DOM： 为什么有虚拟 DOM？怎么样进行 DOM-Diff 节点对比？
- 3. 模版解析：怎么样把 `template` 标签中的字符串一步步解析成 DOM?
- 4. 实例方法实现：为什么有 this.$set() this.$delete()... 这些方法？
- 5. 全局 API：怎么样实现这些 API 的？
- 6. 生命周期：一个组件从创建到销毁经历了什么？
- 7. 指令、过滤器、内置组件：这些功能有什么用？怎么实现？

:::

## 2. 变化侦测

::: tip 概要

本小节大致学习 Vue 是如何实现 `Object` 和 `Array` 数据的响应式监听的

:::

### 1. 对象劫持

- Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
  <tgx-link href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">点击查看详情</tgx-link>

- Vue 封装了一个 `Observer 类` 来让某个数据变得 “可观测”，内部用到了 Object.defineProperty() 方法

```js
// 当 某一个对象 被该方法监听后就会被劫持（对象被劫持后，就称该对象是“可观测”的了）
let myson = {}
let names = 'jack'
Object.defineProperty(myson, 'names', {
  enumerable: true,
  configurable: true,
  get() {
    console.log('names属性被读取了') // 收集依赖
    return val
  },
  set(newVal) {
    console.log('names属性被修改了') // 更新依赖 （通知依赖者更新数据）
    val = newVal
  }
})
```
