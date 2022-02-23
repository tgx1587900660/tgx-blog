# 组件封装原则
::: tip 封装组件目的（一切违背这两点的代码都应该被优化）
- 为了 UI 结构 的复用
- 为了 简单逻辑 的复用
:::
## 1. 属性具体化
要把属性分开接收，不要只接收一个 config 对象。（不然维护起来如同噩梦，无法复用UI结构）

::: details 点击查看封装案例
``` js
// 正确的做法
<templete>...</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'test-title'
        },
        color: {
            type: String,
            default: 'red'
        }
    }
}
</script>

<style>...</style>

-----------------------------------------------------

// 错误的做法
<templete>...</template>

<script>
export default {
    props: {
        config: {
            type: Object,
            default: () => ({
                title: 'test-title',
                color: 'red'
            })
        }
    }
}
</script>

<style>...</style>
```
:::