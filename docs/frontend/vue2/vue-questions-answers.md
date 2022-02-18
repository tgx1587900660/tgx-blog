# vue 问答整理

## 1. 说下你对 MVVM 的理解
- M 指 model 是页面所依赖的数据源
- V 指 view 是页面的 dom 结构
- VM 指 ViewModel 是 Vue 实例，联系 M 和 V 的桥梁

::: tip 说明
页面、数据都是千变万化的，但二者联系的桥梁是可以不变的。
:::

我当们把页面看成 UI ，把数据看成 data，那我们可以得到一个公式：
```xml
UI = render(data)
```
这个 render() 是一个动作，他把数据(data)填充到了页面(UI)中，从而形成了我们看到的页面。而 Vue 就做了这么一件事情，学习 Vue 就是在学习 render 这个方法。