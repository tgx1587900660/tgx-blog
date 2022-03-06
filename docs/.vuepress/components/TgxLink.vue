<!-- 自定义的 a 链接组件 -->
<template>
  <a class="tgx-link" :title="localHref" target="_blank" :href="localHref">
    <slot name="default">链接名称</slot>
  </a>
</template>

<script>
export default {
  name: 'tgx-link',
  props: {
    href: {
      type: String,
      default: 'https://gitee.com/tgx-1587900660'
    }
  },
  computed: {
    // 在线地址, 原样返回; 内部链接, 补上前缀
    localHref() {
      if (this.href.includes('http://') || this.href.includes('https://')) {
        return this.href
      }
      return '/tgx-blog' + this.href
    }
  }
}
</script>

<style lang='css' scoped></style>
