// 1. 要求定义一个数组，数组里面是一个又一个的对象，对象当中有 name, path 属性

type namePathArray = { name: string; path: string }[]
const arr: namePathArray = [
  { name: 'zs', path: '/zs' },
  { name: 'ls', path: '/ls' }
  // more...
]

// 1. 要求定义一个数组，数组里面是一个又一个的对象，对象当中有 很多个不确定的属性

interface npArray {
  [key: string]: string
}
const arr2: npArray[] = [
  { name: 'zs' },
  { name: 'ls', path: '/ls' },
  { name: 'ww', path: '/ww', age: '18' }
  // more...
]
