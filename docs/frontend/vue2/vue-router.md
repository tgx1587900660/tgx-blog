# Vue-Router 知识复习

## 1. 什么是前端路由？
- **路由** 的本质是 **对应关系**。
- **前端路由** 是指 **哈希地址** 与 **组件** 的对应关系。

## 2. 怎么样实现一个前端路由？

::: tip 前提条件
- 同一个页面能通过 **a 链接的锚点** 快速定位内容区域，而无需刷新页面
- Vue 的 component 动态组件可以条件渲染某个组件
- 浏览器的 window.onhashchange 事件可以监听 **哈希值**（a链接的锚点）的变化 
:::

- 第一步：在页面放置一些 a 链接，并设置 hash 值，例如 
    ```html
    <!-- #/one 和 #/two 是锚点，也称 hash 值 -->
    <a href="#/one"></a>
    <a href="#/two"></a>
    ```
- 第二步：在页面放置一个动态组件，给一个动态组件名，例如 
    ```xml
    <!-- comName 是 vue 组件的名字 -->
    <component :is="comName"></component>
    ```
- 第三步：在 onhashchange 事件中定义 **哈希值** 与 **组件** 的对应关系，并根据 **哈希值变化** 动态改变 **组件**
    ```js
    window.onhashchange = () => {
        switch(location.hash) {
            case '#/one':
            // 显示 one 组件
            break
            case '#/two':
            // 显示 two 组件
            break
        }
    }
    ```

## 3. vue-router 插件
::: tip 插件说明
vue-router 是 vue 项目中的 **前端路由解决方案**。只需简单配置就能完成复杂的前端路由配置
:::

- 使用条件：
    - 安装 vue-router 依赖包到 **生产环境**
    - 用 Vue.use() 注册该插件
### 1. vue-router 中易混概念
- this.$router 是路由的 **导航对象**
- this.$route 是路由的 **参数对象**
- 地址栏 / 后面的是 **路径参数**，例如 /instance/3
- 地址栏 ? 后面的是 **查询参数**，例如 /instance?id=3
- 要用 this.$route.params 来访问 **路径参数**
- 要用 this.$route.query 来访问 **查询参数**

### 2. vue-router 语法知识点
- 在配置文件中编写 **路由规则**
- 用 **"router-view" 标签** 来动态 **匹配组件**
- 用 **"router-link" 标签** 来代替 **"a" 标签**
- 嵌套路由中 **children 节点** 内的 path 可以不加 /
- 嵌套路由中 **children 节点** 内某个规则 path 如果为空 ""，则称为 **默认子路由**
- 给路由规则 **开启 props 传参**，就可以在 **组件** 中拿到 **动态路由参数**，例如
```js
// 第一步：在 路由规则中 写一条规则
routes: [
    ...
    { path: '/instance/:objId', component: InstanceDetail, props: true }
    ...
]

// 第二步：在 InstanceDetail 组件中 直接用 props 接收
<script>
    export default {
        ...
        props: ['objId'], // objId 就是路由中的动态参数
        data() {}
        ...
    }
</script>
```
 
### 3. vue-router 的导航模式
::: tip 两种导航模式
- 声明式导航：通过 **a 链接 或 router-link 标签** 直接定义实现的跳转
- 编程式导航：通过 **路由 api** 在脚本中实现的跳转
:::

::: details 点击查看 声明式导航 案例
```html
<!-- 直接在 HTML 中写入 -->
<a href="#/one"></a>
<router-link to="/one"></router-link>
```
:::

::: details 点击查看 编程式导航 案例
```js
// 方法一： this.$router.push() 会 增加 一条历史记录
this.$router.push({ path: '/one', objId: 3 })


// 方法二： this.$router.replace() 会 替换 当前历史记录
this.$router.replace({ path: '/one', objId: 3 })


// 方法三： this.$router.go(n) 会跳转 n 步，若超出，则不动
this.$router.go(-1)
this.$router.go(1)
this.$router.go(3)

this.$router.back() // 等同于 this.$router.go(-1)
this.$router.forward() // 等同于 this.$router.go(1)
```
:::