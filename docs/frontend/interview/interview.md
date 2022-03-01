# 面试题

::: tip 说明
收集了一些面试题
:::

## 1. 怎么解决跨域问题？说下原理

::: tip 说明
解决跨域问题方式很多。项目中常用的有 2 种：

- 1. 服务端开启 **跨域资源共享 CORS**
- 2. **proxy 代理解决**

:::
服务端不存在跨域问题，只有浏览器端有跨域问题。所以可以通过 proxy 代理 解决：

<tgx-img src="/interview/interview/proxy.png" 
    alt="proxy 代理解决跨域问题示意图" 
    title="proxy 代理解决跨域问题示意图"
    width="740">
</tgx-img>
