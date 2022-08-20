# TypeScript 应用

## 1. 定义数组

### 1.1 定义对象数组

#### 1.1.1 固定属性

::: tip 问题

要求定义一个数组，数组里面是一个又一个的对象，对象当中 **有且仅有** name, path 属性

:::

::: details 点击查看 TS 代码

```ts
// 1. 定义类型别名 namePathArray
type namePathArray = { name: string; path: string }[]

// 2. 定义需要的对象数组
const arr: namePathArray = [
  { name: 'zs', path: '/zs' },
  { name: 'ls', path: '/ls' }
  // more...
]
```

:::

#### 1.1.2 不定属性

::: tip 问题

要求定义一个数组，数组里面是一个又一个的对象，对象当中 **有一些不确定的** 属性。比如这些对象具有 name, path, age 等多个不确定的属性。那我们就不可能通过 **type 类型别名** 把这些属性完全列举出来，而是通过 **interface 接口** 来实现

:::

> 这种定义方式有个专门的名字，叫 **索引签名类型**

::: details 点击查看 TS 代码

```ts
// 1. 定义一个接口 npArray
interface npArray {
  [key: string]: string
}

// 2. 定义需要的对象数组
const arr2: npArray[] = [
  { name: 'zs' },
  { name: 'ls', path: '/ls' },
  { name: 'ww', path: '/ww', age: '18' }
  // more...
]
```

:::
