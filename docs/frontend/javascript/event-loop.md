# EventLoop 事件循环机制
::: tip 说明
JavaScript 是一门单线程执行的编程语言。同一时间只能做一件事情。为了防止某个耗时任务导致程序假死的问题，
JavaScript 把待执行的任务分为了 **同步任务** 和 **异步任务** 两类
:::
## 1. 同步任务
- 又叫做**非耗时任务**，指的是在 **主线程上排队执行** 的那些任务
- 只有前一个任务执行完毕，才能执行后一个任务
- JavaScript 主线程 **只执行 同步任务 和 回调函数**

## 2. 异步任务
::: tip 说明
- 异步任务又分为 **宏任务** 和 **微任务**
    - 宏任务：异步 Ajax 请求 、setTimeout、setInterval、文件操作 、 其它宏任务
    - 微任务：Promise.then、.catch 和 .finally 、 process.nextTick 、 其它微任务
:::
- 又叫做**耗时任务**，异步任务由 JavaScript 委托给 **宿主环境** 进行执行
- **宿主环境** 通常有： node 、浏览器
    - 例如 node 执行异步文件读取任务：
    ```js
    fs.readFile('路径', 'utf8', cbA) // JavaScript 主线程 只负责执行回调函数 cbA
    ```
    - 例如 浏览器 执行异步定时器：
    ```js
    window.setTimeout(cbC, 0) // JavaScript 主线程 只负责执行回调函数 cbC
    ```
- 当异步任务执行完成后，会通知 JavaScript 主线程 执行**异步任务的回调函数**

## 3. 同步任务 和 异步任务 的执行过程
<tgx-img src="/javascript/event-loop/eventloop.png" 
    alt="同步任务和异步任务的执行过程" 
    title="同步任务和异步任务的执行过程"
    width="740"
    height="450">
</tgx-img>

1. 同步任务由 **JavaScript 主线程** 次序执行
2. 异步任务委托给 **宿主环境** 执行
3. 已完成的异步任务对应的 **回调函数**，会被加入到任务队列中等待执行
4. **JavaScript 主线程** 的执行栈被清空后，会读取任务队列中的 **回调函数**，次序执行
5. **JavaScript 主线程不断重复上面的第 4 步** （因此叫事件循环 EventLoop）

## 4. 宏任务 和 微任务 的执行顺序
::: tip 说明
**宏任务** 和 **微任务** 是交替执行的
:::

<tgx-img src="/javascript/event-loop/macrotask-microtask.png" 
    alt="宏任务 和 微任务 的执行顺序" 
    title="宏任务 和 微任务 的执行顺序"
    width="740"
    height="300">
</tgx-img>

## 5. 案例分析
<tgx-img src="/javascript/event-loop/example1.png" 
    alt="案例分析" 
    title="案例分析"
    width="740"
    height="400">
</tgx-img>