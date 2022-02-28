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

## 6. Vue 实例 生命周期函数 变化

::: tip 名称变更

- Vue2

  - 创建阶段：beforeCreate, created （在内存中创建）
  - 挂载阶段：beforeMount, mounted （挂载到 dom 上）
  - 更新阶段：beforeUpdate, undated （data 数据更新）
  - **销毁阶段：beforeDestroy, destroyed （实例被销毁）**

- Vue3

  - 创建阶段： beforeCreate, created （在内存中创建）
  - 挂载阶段：beforeMount, mounted （挂载到 dom 上）
  - 更新阶段：beforeUpdate, undated （data 数据更新）
  - **销毁阶段：beforeUnmount, Unmounted （实例被销毁）**

:::

## 7. 挂载 axios 等工具变化

::: tip 说明

- vue3 不再推荐把某些工具挂载在 原型对象 prototype 上
- vue3 的实例 app 提供一个 config.globalProperties 代替原先的挂载方案

:::

::: details 点击查看 区别 案例

```js{8,19}
// vue3
import { createApp } from 'vue'
import axios from 'axios'
import App from './App'

const app = createApp(App)

app.config.globalProperties.$http = axios

app.mount('#app')

-------------------------------------------

// vue2
import Vue from 'vue'
import axios from 'axios'
import App from './App'

Vue.prototype.$http = axios

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')
```

:::

## 8. 自定义指令的钩子函数名变化

::: tip 说明

- vue3 和 vue2 的两个钩子函数名称变化，**意义和用法都不变**
- vue2 的 **bind** 钩子是在第一次绑定到 dom 上时触发，**update** 钩子是 dom 更新时触发
- vue3 的 **mounted** 钩子是在第一次绑定到 dom 上时触发，**updated** 钩子是 dom 更新时触发

:::
