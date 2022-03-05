// 1. 传入一个数组, 随机返回它的某一个元素
function getRandomElement(arr) {
  const min = 0
  const max = arr.length - 1
  const random = Math.floor(Math.random() * (max - min + 1)) + min
  return arr[random]
}

// 2. 时间处理器, 传入时间戳, 返回 2020-01-01 08:01:03 格式
function getCurrentTime(timestamp) {
  const date = timestamp
  const y = date.getFullYear()
  const m = padZero(date.getMonth() + 1)
  const d = padZero(date.getDate())

  const hh = padZero(date.getHours())
  const mm = padZero(date.getMinutes())
  const ss = padZero(date.getSeconds())

  // 补零函数
  function padZero(date) {
    return date > 9 ? date : '0' + date
  }

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

module.exports = {
  getRandomElement,
  getCurrentTime
}
