// 面试题： 说说 interface 和 type 有什么不同
// 1. 写法不同
// 2. 专注点不同， interface 一般用于 某种对象类型，而 type 是为某个类型起一个别名
// 3. 功能不同，interface 可以实现同名 接口 合并，而 type 定义同名类型会报错
interface Point {
  a: number
}
interface Point {
  b: string
}

const username: Point = {
  a: 1,
  b: 'sdf'
}
console.log(username);


type OhterName = string[]
const header: OhterName = ['sdfs']
console.log(header);

// type OhterName = number[] // 同名报错
