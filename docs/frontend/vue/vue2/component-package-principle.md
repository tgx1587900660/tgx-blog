# Vue 组件封装原则

::: tip 组件封装原则

- 组件的 **DOM 结构、style 样式** 要尽量复用
- 组件中 **要展示的数据** 尽量让 组件使用者提供

:::

## 1. 属性具体化

要把属性分开接收，不要只接收一个 config 对象。（不然维护起来如同噩梦，无法复用 UI 结构）

::: details 点击查看封装案例

```js
// 正确的做法
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
// -----------------------------------------------------

// 错误的做法
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
```

:::
