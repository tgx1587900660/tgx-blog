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

## 2. 事件绑定
- $event：
    - 若事件不携带参数，则方法默认接收原始 dom 事件对象 e
    - 若事件携带了参数，还想在方法中拿到 原始 dom 事件对象 e 就用 $event
    - 若子组件传了参数过来，并且自己又携带了参数，则方法中自己的参数会覆盖子组件的参数，此时可用 $event 获取子组件的参数

## 3. 事件修饰符
- @click.prevent：阻止事件默认行为。例如：阻止 submit 提交、阻止 a 链接跳转
- @click.stop：阻止冒泡

## 4. 按键修饰符
- @keyup.esc：按下 esc 时触发
- @keyup.enter：按下 enter 时触发

## 5. 指令修饰符
- v-model.number：把表单值转为数值类型
- v-model.trim：去掉表单首尾空字符
- v-model.lazy：表单失去焦点时才更新 data 中的数据