# vue 冷门知识复习

::: tip 易忘知识点
收集了一些平常工作中用的非常少，但又不能忘了的知识点。
:::

## 1. 指令
- v-html：把后端返回带有 html 标签的数据，渲染成对应的网页 UI。使用时会覆盖标签包裹的内容
- v-for：
    - 标识 key 值类型：为 String 或 Number
    - 循环对象（值名索）：
    v-for="(value, key, index) in obj" 中 value 是键值, key 是键名, index 是索引
- v-slot：
    - 具名插槽：v-slot:name1 简写成 #name1，只能用在 组件名或template 上
    - 作用于插槽：编写基础组件时，可以在 slot 标签上绑定一些属性，父组件使用时就可以用 #name1="obj" 中的 obj 来接收这些属性。（相当于数据的子传父）
- 自定义指令：
    - 注册自定义指令及其内部的函数触发时机
    ```js
    // 全局定义自定义指令 t-copy
    Vue.directive('t-copy', {
        // 第一次绑定到 dom 元素时触发（el 是被绑定的 dom 元素，binding 是指令后面的内容）
        bind(el, binding) {
            console.log('触发了 v-t-copy 指令的 bing 函数')
            el.style.color = binding.value
        },
        // 第一次绑定时不触发，dom 更新时触发
        update(el, binding) {
            console.log('触发了 v-t-copy 指令的 update 函数')
            el.style.color = binding.value
        }
    })

    ----------------------------------------------------------
    // 如果 bind 和 update 逻辑完全一样，可以简写
    Vue.directive('t-copy', () => {
        el.style.color = binding.value
    })

    ----------------------------------------------------------

    // 组件内使用自定义指令 t-copy
    <template>
        <p v-t-copy="bindingDate"></p>
    </template>
    ```

## 2. 事件绑定
- $event：
    - 若事件不携带参数，则方法默认接收原始 dom 事件对象 e
    - 若事件携带了参数，还想在方法中拿到 原始 dom 事件对象 e 就用 $event
    - 若子组件传了参数过来，并且自己又携带了参数，则方法中自己的参数会覆盖子组件的参数，此时可用 $event 获取子组件的参数

## 3. 事件修饰符
- @click.prevent：阻止事件默认行为。例如：阻止 submit 提交、阻止 a 链接跳转
- @click.stop：阻止冒泡

## 4. 按键修饰符
- @keyup.esc：弹起 esc 时触发
- @keyup.enter：弹起 enter 时触发

## 5. 指令修饰符
- v-model.number：把表单值转为数值类型
- v-model.trim：去掉表单首尾空字符
- v-model.lazy：表单失去焦点时才更新 data 中的数据