# Vue 问答整理

## 1. 说下你对 MVVM 的理解 ?

- M 指 model 是页面所依赖的数据源
- V 指 view 是页面的 dom 结构
- VM 指 ViewModel 是 Vue 实例，联系 M 和 V 的桥梁

::: tip 说明
页面、数据都是千变万化的，但二者联系的桥梁是可以不变的。
:::

若我们把页面看成 UI ，把数据看成 data，则得到一个公式：

```xml
UI = render(data)
```

render() 是一个方法，它把数据(data)填充到了页面(UI)中，从而形成了我们看到的页面。开发 Vue 就是在开发一个 render() 方法， 而学习 Vue 就是在学习 render() 这个方法怎么使用。

## 2. 单页面应用程序（SPA）优缺点 ?

::: tip SPA 的特点

SPA 将所有的功能局限于一个 web 页面中，仅在该 web 页面初始化时加载相应的资源（ HTML、
JavaScript 和 CSS）。
一旦页面加载完成了，SPA 不会因为用户的操作而进行页面的重新加载或跳转，而是利用 JavaScript 动态地变换
HTML 的内容，从而实现页面与用户的交互。

:::

### 1. 优点

::: tip 主要 3 个优点

- 良好的交互体验
  - 内容改变无需重新加载整个页面
  - 网页数据也是 Ajax 异步获取的
  - 没有页面跳转，不会出现 “白屏现象”
- 良好的前后端工作分离模式
  - 后端专注于提供 API，更容易实现 API 接口的复用
  - 前端专注于页面渲染，更利于前端工程化的发展
- 减轻服务器压力
  - 服务器只提供数据，不负责页面的合成与逻辑的处理，吞吐能力会提高几倍

:::

### 2. 缺点

::: tip 主要 2 个缺点

- 首屏加载慢（4 种解决方案）
  - 路由懒加载
  - 代码压缩
  - CDN 加速
  - 网络传输压缩
- 不利于 SEO （1 种解决方案） - SSR 服务器端渲染

:::

## 3. 计算属性 VS 方法

::: tip 主要区别

- 计算属性：会缓存计算结果。如果在模版中被多次使用，只要 **依赖的数据** 不变，就只执行一次
- 方法：不会做特殊处理。如果在模版中被多次调用，内部逻辑就会执行多次

:::

## 4. 计算属性 VS 监听器

::: tip 侧重点不同

- 计算属性：会监听 **多个值**，始终缓存并返回 **一个值**
- 监听器：会监听 **一个值**，并执行一些逻辑，**无需返回值**

:::

## 5. 写一下 DOM-Diff 的 patch 函数 ？

- DOM-Diff 分为 2 条主线，大致写一下它的内部逻辑：
  - 1. 初次渲染
  - 2. 更新渲染

```js
// 1. 初始化（准备一个 节点，目的是创建该节点）
function creatElement(vNode) {
  // 创建元素三要素：标签名、标签的属性、子节点
  const tag = vNode.tag // 拿到标签名
  const attrs = vNode.attrs || {} // 拿到所有属性
  const children = vNode.children || [] // 拿到子节点

  if (!tag) {
    return null
  }

  // 有标签，则创建元素、添加属性、添加子节点
  const ele = document.creatElement(tag)

  for (let attName in attrs) {
    if (attrs.hasOwnProperty(attName)) {
      ele.setAttribute(arrName, attrs[arrName])
    }
  }

  children.forEach(function (childVnode) {
    ele.appendChild(creatElement(childVnode))
  })

  return ele
}

// 2. 更新函数（准备 一个旧节点 和 一个新节点，目的是把旧节点局部更新为新节点）
function updateChildren(vNode, newVnode) {
  let children = vNode.children || [] // 旧 DOM 的子节点
  let newChildren = newVnode.children || [] // 新 DOM 的子节点

  // 循环对比
  children.forEach(function(childVnode, index) {
    // 先假设无变化，则可以通过 旧节点索引 来获取 新节点
    let newChildrenVnode = newChildren[index]

    // 对比标签
    if(newChildrenVnode.tag === childVnode.tag) {
      // 第一层没变化, 递归更新子节点
      updateChildren(childVnode, newChildrenVnode)
    } else {
      // 标签变了，就需要把旧节点换成新的
      replaceNode(childVnode, newChildrenVnode)
    }
  })
```
