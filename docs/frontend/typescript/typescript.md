# TypeScript 基本语法

::: tip 栏目说明
本栏目收集了一些 TypeScript 相关学习知识
:::

## 1. 体验 TS

::: tip 栏目说明

- 可以全局安装 `typescript` 这个包，然后终端用 `tsc test.ts` 命令来将 test.ts 这个文件 转化为 test.js 文件
- 可以全局安装 `ts-node` 这个包，然后终端用 `ts-node test.ts` 命令来直接运行 test.ts 文件（内部做了转化）

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

- 2.1 类型别名：type
  - 使用关键字 type 可以复用 **所有变量** 类型
    ```ts
    // customType 是自定义的变量名
    type customType = (number | string)[]
    ```

::: details 点击查看 数组 类型定义

```ts
// 1. 只包含数字的数组（2种方法都可以）
let arr: number[] = [1, 2, 3] // 推荐
let arr1: Array<number> = [1, 2, 3]

// 2. 联合类型：数组中可以包含 number 或 string 类型（2种方法都可以）
let arr3: (number | string)[] = [1, 'sdfd', 2] // 推荐
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

- 2.2 接口：interface

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

::: details 点击查看 字面量 类型定义

```ts
// 字面量类型：用来限定某个变量的具体范围，搭配联合类型使用
const fn = (direction: 'left' | 'right') => {}

// 使用：只能填入 left right 这两个值
fn('left')
fn('right')
fn('others') // 报错
```

:::

::: details 点击查看 枚举 类型定义

```ts
// 枚举类型：用来限定某个变量的具体范围（默认从0开始，如果被赋值，则递增）
enum Color {
  Red, // 0
  Green, // 1
  Blue // 2
}
console.log(Color.Red) // 0

// 也可以手动初始化
enum Direction {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down'
}
console.log(Direction.down) // down
```

:::

## 3. 类型断言

::: tip 说明

- **类型断言** 可以用来手动指定一个值的类型。
- **类型断言** 用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误。

:::

::: details 点击查看 类型断言语法

```ts{7}
// 语法有 2 种，如下：
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

## 4. class 类

### 1. 类的继承

::: tip 说明

类的继承 2 种方案

- extends（继承父类）
- implements（实现接口）

:::

::: details 点击查看 继承案例

```ts{1,12}
// 1. extends 的继承方法和 js 一样
class Father {
  com() {
    console.log('公司')
  }
}
class Son extends Father {
  son = 'son'
}
const s = new Son() // 实例s 有 son 属性和 com 方法

// 2. implements 接口继承要求这个 子类必须有 interface 中的属性
interface Singable {
  sing(): void
}
class Person implements Singable {
  // 必须有该方法（因为该方法在 接口Singable 中被定义过）
  sing() {
    console.log('sing')
  }
}
```

:::

### 2. 类成员的保护

| 关键字   | public             | protected    | private |
| -------- | ------------------ | ------------ | ------- |
| 可访问处 | 类本身、子类、实例 | 类本身、子类 | 类本身  |

::: details 点击查看 类成员的 3 种保护 案例

```ts{2,9,16}
class Father {
  // 1. public 写了相当于没写（类及其子类的内部可以使用，实例也可以访问）
  public a = 'a'
  public say(): void {
    console.log('say')
    console.log(this.a)
  }

  // 2. protected 保护成员（类及其子类的内部可以使用，但实例不可访问）
  protected money = 'my money'
  protected getMyMoney() {
    console.log('getMyMoney')
    console.log(this.money)
  }

  // 3. private 保护成员（类内部可以使用，子类和实例都不可访问）
  private mySelf = 'mySelf'
  private beatMySelf() {
    console.log(this.mySelf)
  }
}
class Son extends Father {
  study = 'study'
  run() {
    this.getMyMoney()
    console.log(this.money)
  }
}

const fat = new Father()
const son = new Son()
console.log(fat.a) // 'a'
fat.say() // 'say', 'a'
console.log(son.a) // 'a'
son.say() // 'say', 'a'

console.log(fat.money) // 报错
fat.getMyMoney() // 报错
```

:::

## 5. readonly

::: tip 使用

- 可以初始化，可以在类的 constructor 中改变
  - 能在 interface 中使用，修饰属性
  - 能在 type 中使用，修饰属性
  - 能在 class 类中使用，修饰属性

:::

::: details 点击查看 readonly 案例

```ts
// 1. 在 interface 中使用
interface Foo {
  readonly [x: number]: number
}
// 使用
const foo: Foo = { 0: 123, 2: 345 }
console.log(foo[0]) // 123 （读取成功）
foo[0] = 456 // 报错 （属性只读）

// 2. 在 type 中使用
type Foo2 = {
  readonly bar: number
  readonly bas: number
}
// 初始化
const foo: Foo2 = { bar: 123, bas: 456 }
// 不能被改变
foo.bar = 456 // 报错 （属性只读）

// 3. 在 类 中使用
class Father {
  readonly aaa: number = 18
  constructor(age?: number) {
    if (!age) {
      console.log(this.aaa)
      return
    }
    this.aaa = age
    console.log(this.aaa)
  }
}

new Father() // 18
new Father(999) // 999
```

:::

## 6. 类型兼容性

TS 采用 **结构化类型系统**，常见的注意点有 3 种

### 1. 类 与 接口 兼容 多赋少

- 定义 `类`和`接口`时，属性多的可以赋值给属性少的

::: details 点击查看案例

```ts{1,16}
// 1. 类 兼容
class Father {
  name: string
  age: number
}
class Son {
  name: string
  age: number
  job: string
}
let father = new Father()
let son = new Son()
father = son // 可行 （Son只需要具备Father的name,age属性即可兼容）
// son = father // 报错

// 2. 接口 兼容
interface Father {
  name: string
  age: number
}
interface Son {
  name: string
  age: number
  job: string
}
let father: Father
let son: Son
father = son // 可行 （Son只需要具备Father的name,age属性即可兼容）
// son = father // 报错
```

:::

### 2. 函数的形参 兼容 少赋多

- 定义 `函数`时， **形参** 少的可以赋值给 **形参** 多的函数
- 定义 `函数`时， **返回值** 多的可以赋值给 **返回值** 少的函数

::: details 点击查看案例

```ts{1,10}
// 1. 一般情况
type Father = (name: string, age: number) => void
type Son = (name: string, age: number, job: string) => void
let father: Father
let son: Son

son = father // 可行 （Father 只需要具备 Son 的 name,age 属性即可兼容）
// father = son // 报错

// 2. 混入接口的情况（依旧以函数形参为准）
interface Father {
  name: string
  age: number
}
interface Son {
  name: string
  age: number
  job: string
}
type fn = (p: Father) => void
type sn = (p: Son) => void
let father: fn
let son: sn
son = father // 可行 （认为 函数 fn 的参数比 函数 sn 的参数少）
father = son // 报错
```

:::

## 7. 交叉类型

- 可以实现 成员的继承

::: details 点击查看 接口中使用交叉类型 案例

```ts{1,16}
// 1. 使用 extends继承 实现
interface Father {
  name: string
}
interface Son extends Father {
  age: number
}
// 必须有 Father 和 Son 所有属性
const obj: Son = {
  age: 18,
  name: 'zs'
}

// ---------------------------------------------------

// 2. 使用 交叉类型(&) 实现
interface Father {
  name: string
}
interface Son extends Father {
  age: number
}
type newInterFace = Father & Son

// 必须有 Father 和 Son 所有属性
const newObj: newInterFace = {
  age: 18,
  name: 'zs'
}
```

:::

## 8. 泛型

- 可以 **在保证类型安全的同时，支持多种类型**

::: details 点击查看 函数中使用泛型 案例

```ts{1,11,13}
// 1. 在函数中使用泛型 （T相当于一个形参，可以在调用函数时传入一个类型）
function fn<T>(params: T): T {
  return params
}
const res = fn<number>(50)
console.log(res) // 50
const res2 = fn<string>('str')
console.log(res2) // 'str'

// 2. 也可以省略类型（ts内部会推断）
const res4 = fn(100) // 100  此时不再是 number 类型，而是 字面量100 类型

// 3. 泛型可以用 extends 进行约束
interface MyLength {
  length: number
}
function getValue<Type extends MyLength>(value: Type): Type {
  console.log(value.length)
  // console.log(value.name) // 报错 （因为MyLength中没有name属性）
  return value
}
getValue({ length: 50, name: 12 }) // 传入的参数必须有 length 属性
```

:::

::: details 点击查看 接口中使用泛型 案例

```ts
// 1. 接口中使用 泛型 (使用时不能省略，无推断)
interface Father<Type> {
  name: Type
  com: () => Type[]
}

let father: Father<string> = {
  name: 'zs',
  com() {
    return ['1', '2']
  }
}
```

:::

::: details 点击查看 类中使用泛型 案例

```ts
// 1. 类中使用 泛型
class Father<Type> {
  age: Type
  constructor(age: Type) {
    this.age = age
  }
  add(x: Type, y: Type): void {
    console.log(11)
    console.log(this.age)
  }
}

let father = new Father<number>(100)
father.add(0, 0) // 11  100
```

:::

## 9. 泛型工具类型

::: tip 说明

TS 内置了一些工具类型，用于提升开发效率

:::

### 1. Partial 可选

::: details 点击查看 Partial 用法

```ts
// Partial 可以把接口成员 一次性全部改为 可选成员
// 1. 定义一个接口
// 2. 使用该接口
// 3. 怎么把该接口快速改造成 所有成员可选？

// 1. 定义
interface Father {
  name: string
  age: number
  hasSon: boolean
}

// 2. 使用时 必须传入三个属性
let father: Father = {
  name: 'zs',
  age: 100,
  hasSon: true
}

// 3. Partial 改造后，新类型 NewFather 三个属性都变为可选属性（同时不破坏Father）
type NewFather = Partial<Father>
let father2: NewFather = {
  name: 'ls'
}
```

:::

### 2. Readonly 只读

::: details 点击查看 Readonly 用法

```ts
// Readonly 可以把接口成员 全部改为只读
// 1. 定义一个接口
// 2. 使用该接口
// 3. 怎么把该接口快速改造成 所有成员只读？

// 1. 定义
interface Father {
  name: string
  age: number
  hasSon: boolean
}

// 2. 创建变量后，成员还可以修改
let father: Father = {
  name: 'zs',
  age: 100,
  hasSon: true
}
father.age = 120

// 3. Readonly 改造后，三个属性都变为可选属性
type NewFather = Readonly<Father>
let father2: NewFather = {
  name: 'ls',
  age: 100,
  hasSon: false
}
father2.age = 120 // 报错， 三个属性都变成 只读的了
```

:::

### 3. Pick 挑选某些成员

::: details 点击查看 Pick 用法

```ts
// Pick 可以把选取某一些接口成员
// 1. 定义一个接口
// 2. 挑选接口中某一些成员
// 3. 使用新类型

// 1. 定义
interface Father {
  name: string
  age: number
  hasSon: boolean
}

// 2. 挑选接口中某一些成员 语法： Pick<Type, keys>
type PickFather = Pick<Father, 'name' | 'age'>

// 3. 使用新类型
let pick: PickFather = {
  name: 'zs',
  age: 18
}
```

:::

### 4. Record 构造一个键值一样的对象

::: details 点击查看 Record 用法

```ts
// Record 可以快速构造一个键值格式一样的对象

type Father = Record<'a' | 'b' | 'c', string[]>

let father: Father = {
  a: ['aa'],
  b: ['bb'],
  c: ['cc']
}
```

:::

## 10. 索引签名类型

- 数组是特殊的对象
- 索引签名类型 可以定义 **对象** 和 **数组** 类型的接口

::: details 点击查看 案例

```ts
// 1. 对象定义：要求该对象的键名 必须为字符串类型，键值为 数字或字符串
interface Father {
  [key: string]: number | string
}
// 使用
let father: Father = {
  name: 'zs',
  age: 18
}

// 2. 数组定义：要求键名是数字，键值为数字
interface Son {
  [key: number]: number
}
// 使用 (数组是特殊的对象)
let son: Son = [1, 2, 3]
```

:::

## 11. 映射类型

- 映射类型只能在 **类型别名 type** 中使用

::: details 点击查看 映射联合类型 案例

```ts
// 1. Father 和 Son2 组合写法 等同于 Son
type Father = 'x' | 'y' | 'z'
type Son = { x: number; y: number; z: number }
type Son2 = { [x in Father]: number } // 相当于遍历了 联合类型 Father (便于扩展)

let son: Son = {
  x: 0,
  y: 1,
  z: 2
}

let son2: Son2 = {
  x: 0,
  y: 1,
  z: 2
}
```

:::

::: details 点击查看 映射对象类型 案例

```ts
// 1. Father 和 Son2 组合写法 等同于 Son
type Father = { x: string; y: number; z: boolean }
type Son = { x: number; y: number; z: number }
// 相当于获取并遍历了 对象类型 Father 的键名
type Son2 = { [x in keyof Father]: number }

let son: Son = {
  x: 0,
  y: 1,
  z: 2
}

let son2: Son2 = {
  x: 0,
  y: 1,
  z: 2
}
```

:::

::: details 点击查看 Partial 怎么实现 案例

```ts{4-6}
// 1. 利用映射类型实现 Partial 工具类型
type Props = { x: string; y: number; z: boolean }

type MyPartial<T> = {
  [key in keyof T]?: T[key]
}

type MyProps = MyPartial<Props>

let p: MyProps = {
  x: 'x',
  y: 111
  // z: false // 都是可选的值
}
```

:::

## 12. 索引查询类型

```ts
// 1. 索引查询类型
type Props = { x: string; y: number; z: boolean }

type Type1 = Props['x'] // string 类型
type Type2 = Props['x' | 'y'] // string | number 类型
type Type3 = Props[keyof Props] // string | number | boolean 类型
```

## 13. TypeScript 类型声明文件

- 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
- ts 中有两种文件类型

  - ① .ts 文件

    - 可以定义类型，也可以编写逻辑代码
    - 可以被编译成 js 文件再执行逻辑代码
    - 作用：编写功能代码

  - ② .d.ts 文件

    - 只能定义类型，不能编写逻辑代码
    - 不会被编译成 js 文件，只提供类型定义
    - 作用：为 js 提供类型信息

### 1. 导入某个包后，没有代码提示？

1. 访问 <tgx-link href="https://www.typescriptlang.org/dt/search?search=">类型声明地址</tgx-link> 搜索对应的包名
2. 复制下载命令，并在项目中下载 这个包 对应的声明文件
   - 例如：lodash 安装后，就会有代码提示了
     - npm i @types/lodash --save-dev

### 2. 怎么编写自己的 声明文件？

- 在导入 .js 文件时，TS 会自动加载与 .js 同名的 .d.ts 文件，以提供类型声明
- declare 关键字：用于类型声明, 而不是创建一个新的变量
  - 1. 在 utils.js 文件已存在的变量声明(let const)
  - 2. 创建一个 utils.d.ts 来修饰 utils.js 在所有的 let const 和 function 前加上 `declare` 即可

## 14. tsconfig.json 文件

- 生成 `tsconfig.json` 文件，先要安装 `typescript` 这个全局包
- tsconfig.json 文件用来指定： **项目文件和项目编译所需的配置项**。

```xml
<!-- 终端输入以下命令，即可在项目中生成 tsconfig.json 文件 -->
tsc --init
```
