// 1. 传入一个数组, 随机返回它的某一个元素
export function getRandomElement(arr: string[]): string {
  const min = 0
  const max = arr.length - 1
  const random = Math.floor(Math.random() * (max - min + 1)) + min
  return arr[random]
}

// 2. 时间处理器, 传入 '时间戳' 或 '原始时间格式', 返回该格式：2020-10-14 15:01:03
export function getCurrentTime(dateStr: string | number) {
  const date = new Date(dateStr)

  const y = date.getFullYear()
  const m = padZero(date.getMonth() + 1)
  const d = padZero(date.getDate())

  const hh = padZero(date.getHours())
  const mm = padZero(date.getMinutes())
  const ss = padZero(date.getSeconds())

  // 补零函数
  function padZero(date: number) {
    return date > 9 ? date : '0' + date
  }

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 3. 提取 数组 item 项中 path 的函数
/**
 * 将
 * [
 *   { title: '资源整合', path: '/xxx1' },
 *   { title: '使用vue', path: '/xxx2' }
 * ]
 * 变成
 * ['/xxx1', '/xxx2']
 */
type objectArray = { title: string; path: string }[]

export function getDocumentUrl(array: objectArray) {
  return array.map(item => item.path)
}

export default {
  getRandomElement,
  getCurrentTime,
  getDocumentUrl
}
