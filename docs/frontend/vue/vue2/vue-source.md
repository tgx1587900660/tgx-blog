# Vue 源码学习

::: tip 栏目说明

本栏目收集了部分 vue 2.6 的源码学习内容

:::

- 学习路线
  - 1. 变化侦测：怎么样实现数据响应式的？
  - 2. 虚拟 DOM： 为什么有虚拟 DOM？怎么样进行 DOM-Diff 节点对比？
  - 3. 模版解析：怎么样把 `template` 标签中的字符串一步步解析成 DOM?
  - 4. 生命周期：一个组件从创建到销毁经历了什么？
  - 5. 实例方法：为什么有 this.$set() this.$delete()... 这些方法？

## 1. 变化侦测

::: tip 概要

本小节大致学习 Vue 是如何实现 `Object` 和 `Array` 数据的响应式监听的

:::

### 1. 对象劫持

- 对象的访问情况，可以通过 Object.defineProperty 方法的 getter 捕获
- 对象的变化情况，可以通过 Object.defineProperty 方法的 setter 捕获
- Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

- Vue 封装了一个 `Observer 类` 来让某个数据变得 “可观测”，内部用到了 Object.defineProperty() 方法
  - 不足：直接给对象添加/删除属性，则这个属性无法变成 `可观测`
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
    console.log('arr 被修改了，请通知依赖者')
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

- 目的是为了让 **js 的计算性能** 来换取 **dom 的操作性能**（减少回流和重绘）
- 当数据变化时，利用 虚拟 DOM 进行对比，找出变化的地方，用最少次数来更新真实的网页 DOM
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

## 3. 模版解析

::: tip 说明

- AST（AbstractSyntaxTree） 是抽象语法树，可以利用 js 对象来描述一个 html 节点（DOM 节点）
- 解析模版，就是利用正则表达式来匹配 template 中的字符串，解析出 html 、文本、过滤器这些内容，转化为 AST

:::

### 1. 解析阶段

- 解析模版字符串过程中会在对应的时机，调用对应的解析器和钩子函数，将`模板字符串`转化成 `AST`

  - 1. 调用 parse 函数解析模版字符串
  - 2. parse 函数包含 3 部分：html 解析器、文本解析器、过滤器解析器
  - 3. 在 html 解析器中进行解析，遇到文本就调用文本解析器，遇到过滤器就调用过滤器解析器

- HTML 解析器

  - 通过一系列正则表达式来匹配对应的内容，调用对应的钩子函数
  - 内部维护一个 stack 栈，来确保`AST节点层级`与`真正DOM层级`一致。

- 文本 解析器
  - 二次处理`HTML 解析器`解析出来的文本及其变量，并构造 render 函数需要的数据结构

### 2. 优化阶段

- 为 **静态节点** 打上标记，提升 虚拟 DOM 中 更新过程的性能
- 找出 **静态节点** 和 **静态根节点**

### 3. 代码生成阶段

- 该阶段会生成一个 render 函数的字符串给 render 函数使用
- render 函数是可选的，可以由用户自定义，也可以让 Vue 自己生成，取决于我们写代码时有没有传入
- 调用的这个 `render 函数`就可以得到 `AST 对应的虚拟 DOM 的 VNode`

## 4. 生命周期

### 1. 初始化阶段

- 执行了 `new Vue` 创建了一个 Vue 实例对象，并在内部合并配置，初始化一些函数，顺序如下：
  ```js
  initLifecycle(vm) // 初始化生命周期
  initEvents(vm) // 初始化事件
  initRender(vm) // 初始化渲染
  callHook(vm, 'beforeCreate') // 调用生命周期钩子函数
  initInjections(vm) // 初始化 injections
  initState(vm) // 初始化 props, methods, data, computed, watch
  initProvide(vm) // 初始化 provide
  callHook(vm, 'created') // 调用生命周期钩子函数
  ```

### 2. 模版编译阶段

- 该阶段就是把 template 模版字符串编译成 render 函数供 Vue 执行（工程化项目中，该阶段可以借助插件 vue-loader 实现）
- 然后调用 $mount 方法，准备挂载 DOM 元素

### 3. 挂载更新阶段

- 该阶段主要 获取 el 属性对应的 id 节点，并用 App 组件来替换，对其内容进行控制

### 4. 销毁阶段

- 该阶段主要将当前的 Vue 实例从其父级实例中删除，取消当前实例上的所有依赖追踪并且移除实例上的所有事件监听器

## 5. 实例方法

### 1. $set()

- 这个方法是用来结局以下两个问题：
  - Vue 无法响应式监测对象通过 key/value 形式新增的属性
  - Vue 无法响应式监测数组通过下标来就该值和长度

### 2. $delete()

- 这个方法是用来结局以下问题：
  - Vue 无法响应式监测对象通过 delete 关键字来删除的某个属性

### 3. $on(), $emit(), $off(), $once()

- $on() 和 $emit() 是通过发布订阅模式，创建一个 **事件中心** 来建立联系的
  - $on() 用于订阅某个事件
  - $emit() 用于触发某个事件
- $off() 用来清除 **事件中心** 当中的事件
- $once() 利用子函数来让某个函数执行一次就销毁（内部使用了 $off() 解绑事件 ）

### 4. $nextTick()

- $nextTick()用于异步更新内容，因为 Vue 的 DOM 更新是异步的
- 当我们需要让 DOM 更新后才操作某些事情，就要使用该函数
