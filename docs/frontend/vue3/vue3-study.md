# Vue3 相关知识

## 1. 组件上的 v-model

::: tip 有什么作用
主要是为了 **实现组件内外的数据同步**
:::

- 首先在父组件中 v-bind: 前加上 v-model 指定 某个数据 需要被同步
- 然后在子组件用 props 接收 这个数据
- 接着在子组件的 emits 数组中声明 **'update:被同步的数据'** 这个自定义事件
- 最后在某个时机，用 this.$emit('update:被同步的数据', newValue) 发送事件，即可同时在父子组件中同步这个数据

::: details 点击查看使用案例

```html
<!-- 父组件中指定 title 会被双向同步 -->
<template>
  <my-component v-model:title="bookTitle"></my-component>
</template>

<script>
  // 子组件中进行接收 并用自定义事件 update:title 更新 title 的值
  app.component('my-component', {
    props: {
      title: String
    },
    emits: ['update:title'],
    template: `
    <input type="text"
        :value="title"
        @input="$emit('update:title', $event.target.value)">
  `
  })

  // 结果：不论是父组件的 bookTitle ，还是子组件的 $event.target.value
  // 都可以修改 title 的值，实现数据同步的目的
</script>
```

:::

## 2. 组件之间的通讯

### 1. 父传子

::: tip 提示

- 父组件：用 v-bind 传递
- 子组件：用 props 接收

:::

### 2. 子传父

::: tip 提示

- 子组件：用 emits 自定义事件($emit) 发送
- 父组件：用 v-on 监听自定义事件 接收

:::

### 3. 父子组件双向同步

::: tip 提示

- 父组件：用 v-model:a="2" 绑定一个数据 a 给子组件
- 子组件：先用 props 接收 a , 再用 emits 自定义事件 ['update:a'] 更新数据 a 即可

:::

### 4. 兄弟组件共享数据

::: tip 提示

- 事先定义一个 eventBus.js 文件，并导出一个 事件中心 bus
- 组件 A：引入 bus 并用 this.$emit('事件名称', 参数) 发送一个自定义事件
- 组件 B：引入 bus 并用 this.$on('事件名称', (参数) => { 处理... }) 接收处理组件 A 发来的数据

:::
