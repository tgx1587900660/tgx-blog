# Vue 源码学习

::: tip 栏目说明

本栏目收集了一些 vue 2.6.11 的源码学习内容

:::

- 学习路线
  - 1. 变化侦测：怎么样实现数据响应式的？
  - 2. 虚拟 DOM： 为什么有虚拟 DOM？怎么样进行 DOM-Diff 节点对比？
  - 3. 模版解析：怎么样把 `template` 标签中的字符串一步步解析成 DOM?
  - 4. 实例方法实现：为什么有 this.$set() this.$delete()... 这些方法？
  - 5. 全局 API：怎么样实现这些 API 的？
  - 6. 生命周期：一个组件从创建到销毁经历了什么？
  - 7. 指令、过滤器、内置组件：这些功能有什么用？怎么实现？

## 1. 变化侦测

::: tip 概要

本小节大致学习 Vue 是如何实现 `Object` 和 `Array` 数据的响应式监听的

:::

### 1. 对象劫持

- 对象的访问情况，可以通过 Object.defineProperty 方法的 getter 捕获
- 对象的变化情况，可以通过 Object.defineProperty 方法的 setter 捕获
- Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
  <tgx-link href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">点击查看详情</tgx-link>

- Vue 封装了一个 `Observer 类` 来让某个数据变得 “可观测”，内部用到了 Object.defineProperty() 方法
  - 不足：直接给对象添加属性，新增的这个属性无法变成 `可观测`
- Vue 封装了一个 `Dep 类` 来收集某个 `依赖` 对应的 `依赖者`
  - 依赖 可以看成是 数据
  - 依赖者 可以看成是 组件

### 2. 数组劫持

- 数组的访问情况，也可以通过 getter 捕获
- 数组的变化情况，需要通过拦截实现。原理是：拦截原数组原型上的方法
  - 不足：直接用下标和 length 变更的数组元素，无法捕获
- Vue 重写了数组 7 个方法 push, unshift, pop, shift, splice, sort, reverse，在内部调用了原方法
  ```js
  // 大致像这样，既不改变 push 方法，又可以通知变化
  let arr = []
  arr.push(1)
  Array.prototype.newPush = function (value) {
    console.log('arr 被修改了')
    this.push(value)
  }
  arr.newPush(1)
  ```

## 2. 虚拟 DOM

### 1. 什么是 虚拟 DOM？

- 虚拟 DOM 就是一个 js 对象，里面包含一个又一个属性，用来描述真正的 DOM 节点

```js
<div class="content" id="navbar">导航条</div>

{
  tag:'div',          // 元素标签名
  attrs:{             // 属性
    class:'content',  // 类名
    id:'navbar'       // id 号
  },
  text:'导航条',      // 标签包裹的文本内容
  children:[]         // 子元素
}

```

### 2. 为什么要有 虚拟 DOM？

- 当数据变化时，利用 虚拟 DOM 来进行对比，找出变化的地方，用来更新真实的网页 DOM
- 对比 DOM 变化的过程就是 `DOM-Diff` 算法的过程

### 3. `DOM-Diff` 算法 具体做了什么？

- `DOM-Diff` 算法 主要做 3 件事：
  - 1. 以 新 DOM 为基准，如果 旧 DOM 没有，新 DOM 有，则添加节点
  - 2. 以 新 DOM 为基准，如果 旧 DOM 有，新 DOM 没有，则删除节点
  - 3. 以 新 DOM 为基准，如果 旧 DOM 和新 DOM 都有，则更新节点。更新节点又分 3 种情况：
    - 3.1 静态节点。无需变化
    - 3.2 文本节点。对比文本内容，进行更新
    - 3.3 元素节点。元素节点又分 2 种：
      - 不包含子节点。直接清空
      - 包含子节点。进行详细对比（相当于对比两个数组，挑了 4 种特殊情况，最后再进行双重 for 循环一一对比）
