# Vue3 相对于 Vue2 的某些变化
## 1. 单文件组件变化
- 不再限制 template 中只能有一个根节点标签
::: details 点击查看 区别 案例
```html
<!-- Vue3 -->
<template>
    <h1>App 根组件</h1>
    <h2>App 根组件</h2>
    <p>45</p>
</template>

----------------------------------

<!-- Vue2 -->
<template>
    <div class="root-wapper">
        <h1>App 根组件</h1>
        <h2>App 根组件</h2>
        <p>45</p>
    </div>
</template>
```
:::

## 2. 创建 Vue 实例语法变化
::: details 点击查看 区别 案例
```js
// Vue3
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')

------------------------------------------

// Vue2
import Vue from 'vue'
import App from './App.vue'
const app = new Vue({
  render: h => h(App)
})
app.$mount('#app')
```
:::

## 3. vue-devtool 调试工具
- vue-devtool 调试工具也要更改，如果使用的 vue3 版本就关闭 vue2 对应的 调试工具，要安装 vue3 对应的调试工具版本

## 4. 样式穿透变更
::: tip 说明
/deep/ 写法依然生效，但在 Vue3 中不再推荐，而用 :deep() 替代 **（把选择器放在括号内）**
:::
::: details 点击查看 变更 案例
```js
// Vue3
<style scoped>
:deep(.title) {
    color: red;
}
</style>

------------------------------------------

// Vue2
<style scoped>
/deep/ .title {
    color: red;
}
</style>
```
:::

## 5. 自定义事件 emits 节点
::: tip 说明
虽然不声明 emits 节点也能工作，但有了 emits 属性，子组件自定义事件就更加清晰了
:::
::: details 点击查看 变更 案例
```js
// Vue3
export default {
    name: 'App',
    emits: ['num-change'], // 多了 emits 节点, 包含该组件所有自定义事件
    methods: {
        add() {
            this.$emit('num-change')
        }
    }
}

------------------------------------------

// Vue2
export default {
    name: 'App',
    methods: {
        add() {
            this.$emit('num-change')
        }
    }
}
```
:::