# vue 问答整理

## 1. 说下你对 MVVM 的理解
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