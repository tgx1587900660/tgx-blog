<!-- 自定义的 img 图片组件 -->
<template>
  <div class="img-wrapper">
    <!-- 路径需要加上 项目基准地址 。否则：开发时可能是正常的，但打包后部署线上会出错 -->
    <img :title="title" :src="'/tgx-blog' + src" :alt="alt" :width="width" :height="height" />
  </div>
</template>

<script>
export default {
  name: 'tgx-link',
  props: {
    src: {
      type: String,
      default: '/img/logo.png'
    },
    title: {
      type: String,
      default: '我是 title'
    },
    alt: {
      type: String,
      default: '我是 alt'
    },
    width: {
      type: [Number, String],
      default: value => {
        // 只限定宽度，不限定高度。因为 img 标签会自动设置图片的高度
        if (!value) {
          return 738
        } else {
          return typeof value === 'number' ? value : parseInt(value)
        }
      }
    },
    height: {
      type: [Number, String],
      default: value => {
        // 如果没传，就不设置该属性
        if (!value) {
          return undefined
        } else {
          return typeof value === 'number' ? value : parseInt(value)
        }
      }
    }
  }
}
</script>

<style scoped>
.img-wrapper {
  text-align: center;
  border: 1px solid #cfd4db;
}
</style>
