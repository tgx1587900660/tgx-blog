# JavaScript 重构小技巧

::: tip 起因

本栏目源于一本书，名为《重构》。书中提倡：一个项目的重构，不应该一次性推倒重写，而应该在不破坏功能的情况下一点一点地优化代码。
在这里，我挑出了一些自己常用的、真正有效果的技巧作为成果，一方面验证自己没有白看此书，另一方也表达我此书观念上的认同。

:::

## 1. 减少重复访问引用类型的属性次数

::: tip 说明

这种技巧常用在 **循环** 中

:::

::: details 点击查看 代码改进 案例

```js{3,9}
// 1. 优化前
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
  console.log(i)
}

// 2. 优化后
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0, l = arr.length; i < l; i++) {
  console.log(i)
}
```

:::

### 1. 前置知识

- 1. for 循环的 **初始化语句** 只执行一次
- 2. 避免重复进行 **引用类型的属性访问**

### 2. 本次代码优化思想

- 优化前，我们在循环过程中多次执行 **判断条件**，也就意味着多次访问了 **引用类型的 length 属性**
- 优化后，我们在进入循环时，把 length 属性放在 **初始化语句** 中，只执行一次，也就避免了多次访问 length 属性

### 3. 思考

- 除了遍历数组这种场景，假如在某些循环中，若某个引用类型的属性会被多次访问，可以考虑用一个 **临时变量** 来存储 **这个数据**

## 2. 提炼函数

::: tip 说明

某段代码被单独挑出来，封装成一段可复用的逻辑函数，称之为提炼函数

:::

- 确保一个函数只做一件事
  - 如果某段逻辑被重复使用了，就应该封装成一个函数
  - 如果要把一组数据处理成另一种格式，应该把处理逻辑封装成一个函数
- 确保各个函数间耦合度低
  - 函数的入参与出参要设计好

## 3. 用管道法代替复杂循环

::: tip 说明

- 像数组的 map(), filter(), every() 这些方法本身就是返回的数组，因此，可以进行链式调用，这种方式也称 **管道法**
- 程序是写给人看的，优先处理可读性
- 循环体内部处理逻辑减少了，即使循环次数变多，也不会消耗多大性能

:::

- 以下代码做了 3 件事
  - 1. 找出大于 5 的数
  - 2. 去重
  - 3. 把数组元素变为字符串类型

::: details 点击查看 代码改进 案例

```js
// 1. 优化前（逻辑较乱，读起来费劲）
const arr = [1, 2, 5, 4, 5, 6, 3, 8, 8, 10]
let newArr = []
arr.forEach(item => {
  if (item > 5 && newArr.indexOf(item) === -1) {
    newArr[newArr.length] = item
  }
})
newArr = newArr.map(String)
console.log(newArr) // [ '6', '8', '10' ]

// 2. 优化后（逻辑清晰，一步只做一件事）
const arr = [1, 2, 5, 4, 5, 6, 3, 8, 8, 10]
let newArr = arr
  .filter(item => item > 5)
  .filter((item, index, array) => array.indexOf(item) === index)
  .map(String)
console.log(newArr) // [ '6', '8', '10' ]
```

:::
