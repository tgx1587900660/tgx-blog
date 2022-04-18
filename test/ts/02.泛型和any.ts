// 面试题： 说说 泛型 和 any 有啥区别？
// 1. 泛型可以保证类型的灵活性，同时不丢失类型保护，而 any 可以实现灵活性，但会丢失类型保护
// 2. 泛型还可以保证 ts 的类型推断，any 不具备该能力

// 泛型
function getUserName<T>(uname: T): T {
  console.log(uname);
  return uname
}
const res =  getUserName<string>('小明')
console.log(res);
const ress =  getUserName<number>(111)
console.log(ress);


// any
function getUserName2(uname: any): any {
  console.log(uname);
  return uname
}
const res2 =  getUserName2('小明')
console.log(res2);