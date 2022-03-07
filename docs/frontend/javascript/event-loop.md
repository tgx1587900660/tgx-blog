# EventLoop 事件循环机制

::: tip 说明

- JavaScript 是一门单线程执行的编程语言，同一时间只能做一件事情。
- 如果前一个任务非常耗时，则后续的任务就不得不一直等待，从而导致程序假死的问题。
- 为了防止某个耗时任务导致程序假死的问题，JavaScript 把待执行的任务分为了 **同步任务** 和 **异步任务** 两类

:::

## 1. 同步任务

::: tip 概念

- 又叫做**非耗时任务**，指的是在 **主线程上排队执行** 的那些任务
- 只有前一个任务执行完毕，才能执行后一个任务

:::

## 2. 异步任务

::: tip 概念

- 异步任务又分为 **宏任务** 和 **微任务**
  - 宏任务：异步 Ajax 请求 、setTimeout、setInterval、文件操作 、 其它宏任务
  - 微任务：Promise.then、.catch 和 .finally 、 process.nextTick 、 其它微任务

:::

- 异步任务又叫 **耗时任务**，异步任务由 JavaScript 委托给 **宿主环境** 进行执行
- **宿主环境** 通常有： node 、浏览器
  - 例如：**委托 node** 执行异步文件读取任务
  ```js
  fs.readFile('路径', 'utf8', cbA) // JavaScript 主线程 只负责执行回调函数 cbA
  ```
  - 例如：**委托浏览器** 执行异步定时器
  ```js
  window.setTimeout(cbC, 0) // JavaScript 主线程 只负责执行回调函数 cbC
  ```
- 当异步任务执行完成后，会通知 JavaScript 主线程 执行 **异步任务的回调函数**

## 3. 同步任务 和 异步任务 的执行过程

::: tip 重要

- JavaScript 主线程 **只负责** 执行 **同步任务** 和 **回调函数**
- 异步任务由 **宿主环境** 执行

:::

<tgx-img src="/javascript/event-loop/eventloop.png" 
    alt="同步任务和异步任务的执行过程" 
    title="同步任务和异步任务的执行过程"
    width="740">
</tgx-img>

- 执行过程如下
  1. 同步任务由 **JavaScript 主线程** 次序执行
  2. 异步任务委托给 **宿主环境** 执行
  3. 已完成的 **异步任务对应的回调函数**，会被加入到任务队列中等待执行
  4. **JavaScript 主线程** 的执行栈被清空后，会读取任务队列中的 **回调函数**，次序执行
  5. **JavaScript 主线程不断重复上面的第 4 步** （因此叫事件循环 EventLoop）

## 4. 宏任务 和 微任务 的执行顺序

::: tip 说明

**宏任务** 和 **微任务** 是交替执行的。待执行的微任务被清空后才会执行下一个宏任务

:::

<tgx-img src="/javascript/event-loop/macrotask-microtask.png" 
    alt="宏任务 和 微任务 的执行顺序" 
    title="宏任务 和 微任务 的执行顺序"
    width="740"
    height="300">
</tgx-img>

## 5. 案例分析

### 1. 案例一

::: tip 分析

- 首先遇到宏任务 setTimeout， 那它里面的回调函数将被搁置
- 接着遇到同步任务 new Promise，那它里面的回调函数将会立即执行，**输出 2**
- 接着遇到微任务 .then()，那它里面的回调函数将会被搁置
- 最后遇到同步任务，直接 **输出 4**
- 此时 JS 检查到任务列队中有一个待执行的微任务 .then()，就会执行它的回调函数，**输出 3**
- 最后清空了待执行的微任务后，就执行下一个宏任务 setTimeout 里面的回调函数，**输出 1**
- 所有任务清空完毕

:::

<tgx-img src="/javascript/event-loop/example1.png" 
    alt="案例分析" 
    title="案例分析"
    width="740">
</tgx-img>

### 2. 案例二

::: tip 输出分析

1. **第 1 行** 遇到同步任务，**输出 1**
2. **第 3 行** 遇到第 1 个宏任务 setTimeout，它的回调函数会被搁置
3. **第 13-15 行** 遇到同步任务 new Promise 它的回调函数会立即执行，**输出 5**
4. **第 16 行** 遇到第 1 个微任务 .then()，它的回调函数会被搁置
5. **第 20 行** 遇到第 2 个宏任务 setTimeout，它的回调函数会被搁置
6. 到此为止，同步任务已被清空
7. **第 16-18 行** 开始检查待执行的微任务，则执行它的回调函数，**输出 6**
8. 到此为止，第一轮待执行的微任务已被清空
9. **第 3-4 行** 开始执行第 1 个宏任务 setTimeout 中的回调函数，**输出 2**
10. **第 5-7 行** 继续遇到同步任务 new Promise，则立即执行它的回调函数，**输出 3**
11. **第 8-9 行** 发现 new Promise 后面还有一个 .then() 微任务，则继续执行它的回调函数，**输出 4**
12. 到此为止，第 1 个宏任务 setTimeout 已执行完成
13. **第 20-21 行** 开始执行第 2 个宏任务 setTimeout 中的回调函数，**输出 7**
14. **第 22-24 行** 继续遇到同步任务 new Promise，则立即执行它的回调函数，**输出 8**
15. **第 25-26 行**发现 new Promise 后面还有一个 .then() 微任务，则继续执行它的回调函数，**输出 9**
16. 所有任务清空完毕

:::

::: details 点击查看 案例二

```js
console.log('1')

setTimeout(function () {
  console.log('2')
  new Promise(function (resolve) {
    console.log('3')
    resolve()
  }).then(function () {
    console.log('4')
  })
})

new Promise(function (resolve) {
  console.log('5')
  resolve()
}).then(function () {
  console.log('6')
})

setTimeout(function () {
  console.log('7')
  new Promise(function (resolve) {
    console.log('8')
    resolve()
  }).then(function () {
    console.log('9')
  })
})

// 输出结果 1 5 6 2 3 4 7 8 9
```

:::
