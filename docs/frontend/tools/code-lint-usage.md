# 用 husky 阻住不合格的代码提交

::: tip 问题说明

- 需求说明：git commit 提交时，利用 eslint 检测代码。如果不合格，终止这次 commit 提交。
- 实现方案：利用 husky + lint-staged + eslint 这 3 个插件包完成自动化操作。

:::

## 1. 学习目标

- 读完这篇文章，你将知道：
  1. husky 有什么作用？
  2. lint-staged 有什么作用？
  3. eslint 有什么作用？
  4. 三者的触发顺序是怎么样的？
  5. 具体怎么样在项目中一步步实现？

## 2. 这三个插件包的作用

- husky: 用来注册 git 钩子，确保你运行 git 命令时，会 **自动处理一些事情**。例如：
  1. 在运行 git commit 前我要在终端打印一条消息 "pre-commit is running success!"
  2. 在运行 git commit 前我要到 暂存区找到所有文件进行格式校验
  3. 在运行 git commit 前我要检测 你的 commit 消息是否合格
- lint-staged: 主要用来找到那些被 git add 到暂存区的文件
- eslint: 主要用来扫描文件，检测代码格式并报错

## 3. 执行顺序

::: tip 问题说明

- 顺序：**husky --> lint-staged --> eslint**
- 说明：先利**用 husky** 在你运行 git 命令时来**触发某个动作**。这个动作就是，利**用 lint-staged** 去**找到暂存区的文件**，然后利**用 eslint** **检测**暂存区文件中的**代码是否符合规范**

:::

## 4. 具体实现步骤

- 先来看下我的项目依赖以及环境

::: tip 项目说明

1. 这是一个用 vuepress 2.x 搭建的静态文档博客
2. node 版本是 v16.16.0
3. yarn 版本是 v1.22.19 （我使用的 yarn 作为包管理工具）

:::

::: details 点击查看 package.json

```json
{
  "name": "vuepress-blog",
  "version": "2.0.0",
  "description": "my-first-blog",
  "private": true,
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  "author": "telectron",
  "license": "ISC",
  "devDependencies": {
    "@vuepress/plugin-register-components": "^2.0.0-beta.49",
    "@vuepress/plugin-search": "^2.0.0-beta.49",
    "vuepress": "^2.0.0-beta.49"
  }
}
```

:::

<!-- - 2. 在 package.json 文件中添加脚本 "prepare": "husky install"-->
<!-- - 3. 执行命令 yarn run prepare 会自动生成一个 .husky 文件夹 -->
<!-- - 4. 在 .husky 文件夹下新建一个文件，名为 pre-commit -->
