# 特殊需求 及其解决方案

::: tip 说明
这里记录了一些日常开发中遇到的需求，及其解决的方案。
:::

## 1. 给定 id 集合，分片请求数据

::: tip 需求说明
给定一个不确定长度的 ID 数组，要求以 5 个 ID 为一组，请求 ID 对应的数据。例如：

- 给定数组 [1, 2, 3, 4, 5, 6, 7, 8], 则需要发送 2 次请求
- 第一次是 [1, 2, 3, 4, 5], 返回 5 条数据
- 第二次是 [6, 7, 8], 返回 3 条数据

:::

::: details 点击查看解决方案

```js
// 1. 第一步：
// 数组分区间：(完整数组, 每组的个数) => 分隔后的二维数组集合
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 5) ====> [[1, 2, 3, 4, 5], [6, 7, 8]]
chunk(arr, size) {
    let [start, end] = [0, 0]
    const result = []
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        start = i * size
        end = start + size
        result.push(arr.slice(start, end))
    }
    return result
}


// 2.第二步：
// 根据模型id获取主机数（只需关注逻辑处理，无需关注变量名）
getObjList() {
    // 以 5 个 id 为一组 分区间
    const objList = this.chunk(this.idList, 5)

    // 循环最外层，每个区间作为一次请求数据
    objList.forEach(async ids => {
        const res = await this.$http.post('getObjList', { obj_ids: ids })
        // 业务逻辑......
    })
}
```

:::

## 2. 限制 input 组件的最小值 min

::: tip 需求说明
封装一个 input 输入框，限制用户输入非数字，小数点 等非法操作
:::

::: details 点击查看封装思路

```html
<!-- 组件使用者 -->
<my-counter :number="7" :min="1"></my-counter>

<!-- 组件本身 -->
<template>
  <div class="counter-container">
    <button type="button" @click="onSubClick">-</button>
    <input type="number" v-model.number.lazy="number" />
    <button type="button" @click="onAddClick">+</button>
  </div>
</template>

<script>
  export default {
    name: 'MyCounter',
    props: {
      number: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: NaN
      }
    },
    data() {
      return {
        // 转存 props 到 本地
        localNumber: this.number
      }
    },
    emits: ['number-change'],
    watch: {
      localNumber(newVal) {
        // 1. 将输入的新值转化为整数
        const parseResult = parseInt(newVal)

        // 2. 如果转换的结果不是数字，或小于1，则强制 localNumber 的值等于1
        if (isNaN(parseResult) || parseResult < 1) {
          this.localNumber = 1
          return
        }

        // 3. 如果新值为小数，则把转换的结果赋值给 localNumber
        if (String(newVal).includes('.')) {
          this.localNumber = parseResult
          return
        }

        // 触发自定义事件，把最新的 localNumber 数值传递给组件的使用者
        this.$emit('number-change', this.localNumber)
      }
    },
    methods: {
      // 点击 - 号时触发
      onSubClick() {
        if (!isNaN(this.min) && this.localNumber - 1 < this.min) return
        this.localNumber--
      },
      // 点击 + 号时触发
      onAddClick() {
        this.localNumber++
      }
    }
  }
</script>
```

:::
