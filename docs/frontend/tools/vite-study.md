# Vite 相关知识
## 1. vite 和 vue-cli 对比
::: tip 说明
vue 提供了 2 种快速创建项目的方式
- 基于 vue-cli 创建
- 基于 vite 创建
:::
|                             | vite                 | vue-cli             |
| --------------------------- |:------------------:|:----------------------:|
| 支持的 vue 版本              | 仅支持 vue3.x      | 支持 3.x 和 2.x       |
| 是否基于 webpack             | 否                 | 是                   |
| 运行速度                     | 快                 | 较慢                 |
| 功能完整度                   | 小而巧（逐渐完善）  | 大而全                |
| 是否建议在企业级开发中使用    | 目前不建议         | 建议在企业级开发中使用 |

## 2. 基于 vite 快速创建工程化项目
::: tip 提示
第一次使用会被提示安装一个包，按 y 确认即可
:::
- 创建步骤
```xml
npm init vite-app 项目名称
<!-- 这里可能要提示安装一个 create-vite-app 包 -->
cd 项目名称
npm install
npm run dev
<!-- 到此 就可以打开 http://localhost:3000/ 访问项目了 -->
```

## 3. 单文件组件中使用 less 预处理器
::: tip 提示
使用 Vite 搭建的 vue 工程化项目，不需要像以前 webpack 那样手动配置 less-loader预处理器。安装好包，直接就可以使用
:::
- 使用 less 只需两步
```xml
<!-- 第一步：安装 less 包 -->
npm i less -D

<!-- 第二步：在 .vue 组件的 style 标签中添加 lang="less" 属性 -->
<style lang="less">
...
</style>
```