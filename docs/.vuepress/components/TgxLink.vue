<!-- 自定义的 a 链接组件 -->
<template>
  <a class="tgx-link" target="_blank" :title="localHref" :href="localHref">
    <slot name="default">链接名称</slot>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  }
})

const localHref = computed(() => {
  const { href } = props
  if (href.includes('http://') || href.includes('https://')) {
    return href
  }
  return '/tgx-blog' + href
})
</script>

<style lang="css" scoped></style>
