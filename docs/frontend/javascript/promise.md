# Promise 相关知识
## 1. Promise 是为了解决什么问题？
::: tip 说明
**回调地狱** 说的是在 异步函数 中嵌套了多个 异步函数这种现象，虽然可以实现：**等待某个异步函数完成后再继续执行下一步** 这种需求，
但这导致代码维护变得困难
:::
- Promise 是为了解决 **回调地狱** 的问题而设计的

## 2. Promise 的概念
::: tip 概念
- Promise 是一个 **构造函数**
    - 可创建实例对象： const p = new Promise()
    - 实例对象 p ，代表一个异步操作
:::
- Promise.prototype 上提供了一些方法，供 **所有实例对象** 访问:
    - then()
    - catch()
    - all()

## 3. then() 方法的特性
::: tip 特性
- 如果上一个 .then() 方法中返回了一个新的 Promise 实例对象，则可以通过下一个 .then() 继续进行处理。
- 通过 .then() 方法的链式调用，就解决了回调地狱的问题
:::

- then() 方法用来 **预先指定** 成功和失败的回调函数
    - p.then(成功的回调函数，失败的回调函数)
    - 其中 成功的回调函数 必传， 失败的回调函数 可选

::: details 点击查看 then() 方法调用案例
```js
const p = new Promise()
p.then(success1 => {}, error1 => {})
    .then(success2 => {}, error2 => {})
    .then(success3 => {}, error3 => {})
```
:::

## 4. catch() 方法的特性
::: tip 特性
- 如果在 Promise 的链式操作中发生错误，可用 Promise.prototype.catch 方法进行捕获和处理。
- 如果 catch() 放在多个 then() 方法之后。只要有一个 then() 发生错误，就终止下一个 then() 执行而直接进入 catch() 方法
- 如果 catch() 放在最前面。则 catch() 后面的 then() 方法仍然可以执行
:::

::: details 点击查看 catch() 方法调用案例
```js
const p1 = new Promise()
p1.then(success1 => {}, error1 => {})
  .then(success2 => {}, error2 => {})
  .then(success3 => {}, error3 => {})
  .catch(err => { console.log(err) }) // 只要有一个 then() 出错，就直接跳到这一步

-------------------------------------------------------------------------

const p2 = new Promise()
p2.catch(err => { console.log(err) }) // 捕获错误后，继续执行后面的 then()
  .then(success1 => {}, error1 => {})
  .then(success2 => {}, error2 => {})
  .then(success3 => {}, error3 => {})
```
:::

## 5. all() 方法的特性
::: tip 特性
Promise.all() 方法会发起并行的 Promise 异步操作，等所有的异步操作全部结束后才会执行下一步的 .then 
操作（等待机制）。
:::


::: details 点击查看 all() 方法调用案例
```js
const p1 = new Promise()
const p2 = new Promise()
const p3 = new Promise()

Promise.all([p1, p2, p3])
    .then([res1, res2, res3] => {
        // 等待 p1 p2 p3 都完成后才进入这里
        console.log(res1, res2, res3) // 分别对应 p1 p2 p3 的结果
    })
    .catch(err => { console.log(err) })
```
:::

## 6. race() 方法的特性
::: tip 特性
Promise.race() 方法会发起并行的 Promise 异步操作，只要任何一个异步操作完成，就立即执行下一步的
.then 操作（赛跑机制）。
:::


::: details 点击查看 race() 方法调用案例
```js
const p1 = new Promise()
const p2 = new Promise()
const p3 = new Promise()

Promise.race([p1, p2, p3])
    .then(res => {
        // 只要有一个完成了，就进入这里
        console.log(res) // 谁最快就是谁的结果
    })
    .catch(err => { console.log(err) })
```
:::

## 7. 封装一个异步读取文件的方法
::: tip 特性
如果想要创建 **具体的异步操作**，则需要在 new Promise() 构造函数期间，传递一个 **函数**，将具体的异步操作定义到函数内部。
:::

```js
import fs from 'fs'

function getFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err) => {
            if (err) return reject(err)
            resolve()
        })
    })
}

------------------------------------
// 测试
getFile('./test.txt')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err.message)
    })
```