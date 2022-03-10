# TypeScript 相关知识

::: tip 栏目说明
本栏目收集了一些 TypeScript 相关学习知识
:::

## 1. 体验 TS

::: tip 栏目说明

- 可以全局安装 typescript 这个包，然后终端用 `tsc test.ts` 命令来将 test.ts 这个文件 转化为 test.js 文件
- 可以全局安装 ts-node 这个包，然后终端用 `ts-node test.ts` 命令来直接运行 test.ts 文件（内部做了转化）

:::

## 2. TS 中的类型定义

### 1. 简单数据类型定义

::: details 点击查看 6 种基础类型定义

```ts
// 6 种基础类型定义: number, string, boolean, null, undefined, symbol
let age: number = 18
let str: string = 'str'
let bool: boolean = false
let n: null = null
let u: undefined = undefined
let s: symbol = Symbol()
```

:::

### 2. 复杂数据类型定义

::: tip 关键字 type

- 使用关键字 type 可以复用 **所有变量** 类型
  ```ts
  type customType = (number | string)[]
  ```

:::

::: details 点击查看 数组 类型定义

```ts
// 1. 只包含数字的数组（2种方法都可以）
let arr: number[] = [1, 2, 3]
let arr1: Array<number> = [1, 2, 3]

// 2. 联合类型：数组中可以包含 number 或 string 类型（2种方法都可以）
let arr3: (number | string)[] = [1, 'sdfd', 2]
let arr4: Array<number | string> = [1, 'sdfd', 2]

// 3. 类型别名：使用 关键字 type 给复杂的类型起别名
type customType = (number | string)[]
let arr5: customType = [1, 'sdfd', 2]
```

:::

::: details 点击查看 函数 类型定义

```ts
// 场景一：有返回值
// 1. 单独指定：给参数和返回值单独指定类型
// 命名函数
function add(n1: number, n2: number): number {
  return n1 + n2
}
console.log(add(1, 2)) // 3

// 匿名函数
const add2 = (n1: number, n2: number): number => {
  return n1 + n2
}
console.log(add2(1, 2)) // 3

// 2. 同时指定：直接使用表达式统一指定类型 （只适用于匿名函数）
const add3: (n1: number, n2: number) => number = (n1, n2) => n1 + n2
console.log(add3(1, 2)) // 3

// 场景二：无返回值
function greet(str: string): void {
  console.log(str)
}
greet('hello') // hello

// 场景三：可选参数 (这种形参一定要在放在最后面)
function mySlice(n1?: number, n2?: number): void {
  console.log('start:' + n1, 'end:' + n2)
}
mySlice() // start:undefined end:undefined
mySlice(1) // start:1 end:undefined
mySlice(1, 2) // start:1 end:2
```

:::

::: tip 关键字 interface

- 使用关键字 interface 可以复用 **对象变量** 的类型

  ```ts
  // 普通定义
  interface MyPerson {
    name: string
    age: number
    sayHi(): void
  }

  // 继承
  interface MyPerson2 extends MyPerson {
    sex: string
  }

  const person: MyPerson2 = {
    name: 'zs',
    age: 18,
    sayHi() {},
    sex: '男'
  }
  ```

:::

::: details 点击查看 对象 类型定义

```ts
// 场景一：必选属性
// 写在一行（加分号）
const obj: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
  name: '张三',
  age: 18,
  sayHi() {},
  greet(name) {}
}

// 写在多行（不加分号）
const obj2: {
  name: string
  age: number
  sayHi: () => void // 函数也可以用箭头函数形式
  greet: (name: string) => void
} = {
  name: '张三',
  age: 18,
  sayHi() {},
  greet(name) {}
}

// 场景二：可选属性（使用 ? ）
function myAxios(config: { url: string; method?: string }) {
  console.log(config.url)
}
myAxios({ url: 'url' }) // url

// 场景三：复用对象类型，要使用 关键字 interface 来定义对象类型
interface MyPerson {
  name: string
  age: number
  sayHi(): void
}
const person1: MyPerson = {
  name: 'zs',
  age: 18,
  sayHi() {}
}
const person2: MyPerson = {
  name: 'zs2',
  age: 20,
  sayHi() {}
}
```

:::

### 3. 扩展类型

::: details 点击查看 元组 数据类型定义

```ts
// 元组：特殊的数组，限定好元素个数和类型
const position: [number, string] = [1, '2']
```

:::

## 3. 类型断言

::: tip 说明

- **类型断言** 可以用来手动指定一个值的类型。
- **类型断言** 用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误。

:::

::: details 点击查看 类型断言语法

```ts{7}
// 语法如下：
// 1. 值 as 类型 （推荐写法）
interface Foo {
  bar: number
  bus: string
}
const foo = {} as Foo
foo.bar = 123 // 如果不指定类型，而给空对象添加属性，会报错
foo.bus = 'bus'

// 2. <类型> 值
let foo: any
let bar = <string>foo // 现在 bar 的类型是 'string'
```

:::
