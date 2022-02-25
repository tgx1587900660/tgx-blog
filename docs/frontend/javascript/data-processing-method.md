# js 数据处理方法回顾

## 1. 数组

> 记录了一些处理数组的新方法及其特性

### 1. forEach()
::: tip 方法特性
- forEach() 被调用时，**不会改变原数组**（尽管它的回调函数可能会改变原数组）
- 返回值是 undefined
- 循环过程中，不能终止循环
:::

::: details 点击查看方法特性
``` js
// 打印 成员名 和 成员 'c' 的索引

const arr = ['a', 'b', 'c', 'd']

const result = arr.forEach((item, index) => {
    if (item === 'c') {
        console.log('item:', item)
        console.log('index:', index)
        return
    }
    console.log('item:', item)
})

console.log('result:', undefined)

// 打印结果：
// item: a
// item: b
// item: c
// index: 2
// item: d （满足 item === 'c' 条件 return 了，照样输出了 d）
// result: undefined
```
:::

### 2. some()
::: tip 方法特性
- some() 被调用时，**不会改变原数组**
- 返回一个 Boolean 值
- 循环过程中，可以终止循环
- 可用来检测数组成员是否满足需求，也可以按需终止循环
:::

::: details 点击查看方法特性
``` js
// 按需打印成员 (如果 成员是 'c' 就终止循环)

const arr = ['a', 'b', 'c', 'd']

const result = arr.some((item, index) => {
    if (item === 'c') {
        console.log('item:', item)
        console.log('index:', index)
        return true
    }
    console.log('item:', item)
})

console.log('result:', result)

// 打印结果：
// item: a
// item: b
// item: c
// index: 2
// result: true
```
:::

### 3. every()
::: tip 方法特性
- every() 被调用时，**不会改变原数组**
- 返回一个 truthy 值 (一般就认为它返回 true 或 false)
- 循环过程中，可以终止循环
- 用来检测数组成员是否满足需求，只要有一个不满足要求，立即终止循环返回 false
- 使用它的时候 **一定要先判断数组是否为空** 
:::

::: details 点击查看方法特性
``` js
// 判断 是否所有数组元素 都 小于3
const arr = [1, 2, 3, 4]

const result = arr.every(item => item < 3)

console.log('result:', result)

// 打印结果：
// result: false (当 item 是 3 的时候发现不符合要求, 就立即返回 false, 终止循环)
```
:::

::: warning every() 方法的例外
如果测试的是空数组，它会直接返回 true，这种情况属于 **无条件正确**（数学上的概念），
一般在使用 every 时，判断数组是否为空即可
:::

::: details 点击查看特殊例子
``` js
// 判断 是否所有数组元素 都 小于3
const arr = []

const result = arr.every(item => item < 3)

console.log('result:', result)

// 打印结果：
// result: true
```
:::

### 4. filter()
::: tip 方法特性
- filter() 被调用时，**不会改变原数组**
- 返回一个符合测试条件的 **新数组**
- 循环过程中，不能终止循环
- 可以用来过滤数组，也可以用于数组去重
:::

::: details 点击查看方法特性
``` js
// 1. 取出 小于3 的元素

const arr = [1, 2, 3, 4]

const result = arr.filter(item => item < 3)

console.log('result:', result)

// 打印结果：
// result: [1, 2]

-----------------------------------------------------

// 2. 数组去重

const arr = [1, 2, 3, 4, 1, 2, 3, 4, 5]

const result = arr.filter((item, index, arr) => arr.indexOf(item) === index)

console.log('result:', result)

// 打印结果：
// result: [1, 2, 3, 4, 5]
```
:::

### 5. reduce()
::: tip 方法特性
- reduce() 被调用时，**不会改变原数组**
- 返回一个 **累加结果**
- 一般用来做累加器
:::

::: details 点击查看方法特性
``` js
// 计算 (0+1+2+3+4)*10 的结果

const arr = [1, 2, 3, 4]

// arr.reduce((累加的结果, 当前循环项) => 累加的计算表达式, 初始值)
const result = arr.reduce((sum, item) => sum += item * 10, 0)

console.log('result:', result)

// 打印结果：
// result: 100

-----------------------------------------------------

// 对比一下普通累加方法，可以发现 reduce 不需要额外定义一个 sum 来存储累加值
const arr = [1, 2, 3, 4]
let sum = 0
arr.forEach(item => {
    sum += item * 10
})
console.log('result:', sum)

// 打印结果：
// result: 100
```
:::