# Async / Await 相关知识

## 1. async/await 有什么用
::: tip 说明
async/await 是 ES8（ECMAScript 2017）引入的新语法，用来简化 Promise 异步操作。
在 async/await 出现之前，开发者只能通过链式 .then() 的方式处理 Promise 异步操作
:::
- then() 链式调用的优缺点
    - 优点：解决了回调地狱的问题
    - 缺点：代码可阅读性差、不易理解
- async/await 的好处
    - 可以解决异步编程的回调地狱问题
    - 使得异步代码看起来像同步代码一样直观

## 2. async/await 语法特性
::: tip 注意事项
- async/await 是一起出现的。一个 Promise 实例如果被 await 修饰，那它外层的这个函数就要被 async 修饰成异步函数 
- 在 async 方法中，**第一个 await 之前的代码会同步执行**，await 之后的代码会异步执行
:::

::: details 点击查看 async/await语法 案例
```js
// 定义 3 个返回 Promise 实例对象的变量
const p1 = new Promise(......)
const p2 = new Promise(......)
const p3 = new Promise(......)

async function getRes() {
    const res1 = await p1
    console.log(res1) // 输出 p1 的返回结果

    const res2 = await p2
    console.log(res2) // 输出 p2 的返回结果
    
    const res3 = await p3
    console.log(res3) // 输出 p3 的返回结果
}

getRes() // 会从上往下依次得到 p1 p2 p3 的结果
```
:::

::: details 点击查看 async/await同步执行的顺序 案例
```js
import fs from 'fs'

console.log('A') // 1.同步代码 A

async function getFiles() {
    console.log('B') // 2.第一个 await 之前的仍然视为同步代码 B

    // 遇到 await 就推进任务列队，去执行外面的同步代码 C
    const res1 = await fs.readFile('./def.txt', 'utf8', () => {})
    console.log('D') // 4.同步代码执行完毕，来到异步任务 D
    const res2 = await fs.readFile('./def.txt', 'utf8', () => {})
    console.log('E') // 5.继续异步任务 E
    const res3 = await fs.readFile('./def.txt', 'utf8', () => {})

    console.log('F')  // 6.继续异步任务 F
}

getFiles()

console.log('C') // 3.同步代码 C

// 结果为
// A
// B
// C
// D
// E
// F
```
:::