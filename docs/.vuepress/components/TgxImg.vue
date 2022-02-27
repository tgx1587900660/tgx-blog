<!-- 自定义的 img 图片组件 -->
<template>
  <!-- 路径需要加上 项目基准地址 。否则：开发时可能是正常的，但打包后部署线上会出错 -->
  <img class="tgx-img" :title="title" :src="'/tgx-blog' + src" :alt="alt" :width="width" :height="height" />
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
      default: value => (typeof value === 'number' ? value : parseInt(value))
    }
  }
}
</script>

<style scoped>
.tgx-img {
  border: 1px solid #cfd4db;
}
</style>
