# 表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

# Emoji
:tada: :100:

# 目录

[[toc]]

# 自定义容器

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::


::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

# 代码块中的语法高亮

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

# 代码块中的行高亮

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

# 插值
{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>

{{ $page }}

::: v-pre
`{{ This will be displayed as-is }}`
:::

# 使用组件
<demo-1 />
<OtherComponent />
<Foo-Bar />
