<!-- 自定义的 a 链接组件 -->
<template>
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
            default: value => typeof value === 'number' ? value : parseInt(value)
        },
        height: {
            type: [Number, String],
            default: value => typeof value === 'number' ? value : parseInt(value)
        }
    }
}
</script>

<style scoped>
.tgx-img {
    border: 1px solid #cfd4db
}
</style>
