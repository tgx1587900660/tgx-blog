<!-- 自定义的 a 链接组件 -->
<template>
  <a class="tgx-link" :title="href" target="_blank" :href="href">
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
  }
}
</script>

<style lang='css' scoped></style>
