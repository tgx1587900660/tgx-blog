module.exports = {
    // 传入一个数组, 随机返回它的某一个元素
    getRandomElement(arr) {
        const min = 0
        const max = arr.length - 1
        const random = Math.floor(Math.random() * (max - min + 1)) + min
        return arr[random]
    }
}
