# yarn 包管理工具 的使用

::: tip 说明

npm 是 node 默认的包管理工具，但因为各种版本问题，很多时候使用 npm 下载依赖包会出现问题。因此，就有了 yarn

:::

## 1. yarn 是什么？

- yarn 是一个 包管理工具，作用和 npm 一样。
- 只是它们的内部实现不同，以及它们对于包的管理方式不同

## 2. yarn 的安装与配置

::: tip 说明

电脑上安装了 Node 之后，它会自动携带 npm ,但是不会携带 yarn, 所有我们需要手动安装 yarn

:::

> 这里需要先用 `npm -v` 检查一下 npm 是否正常

#### 1. 全局安装 yarn

```xml
<!-- 在终端执行以下命令，全局安装 yarn 包，以便使用 yarn 的命令 -->
npm i -g yarn
```

#### 2. 检查 yarn 是否安装成功了

```xml
<!-- 在终端执行以下命令，检查 yarn 的版本号
(正常的话，会显示一个点分十进制的版本号，形如 1.22.18 ) -->
yarn -v
```

#### 3. 配置 yarn 的安装源

```xml
  <!-- 查看当前源（默认显示）https://registry.yarnpkg.com -->
  yarn config get registry

  <!-- 修改源（我这里改成淘宝源） -->
  yarn config set registry https://registry.npm.taobao.org --global

  <!-- 恢复默认源 -->
  yarn config set registry https://registry.yarnpkg.com --global
```

## 3. yarn 的基本用法

### 1. 初始化 package.json

```xml
<!-- 作用和 npm init -y 差不多，都是用来生成 package.json 文件 -->
yarn init -y
```

### 2. 添加依赖包

```xml
<!-- 作用和 npm install [package] 差不多，都是用来下载包的 -->
yarn add [package]

<!-- 比如 我要下载一个 vuepress 包 -->
yarn add vuepress

<!-- 指定版本号 -->
yarn add vuepress@1.9.7

<!-- 添加到 devDependencies 中 -->
yarn add vuepress@1.9.7 -dev
```

### 3. 升级依赖包

```xml
yarn upgrade [package]

<!-- 比如 我要升级 vuepress 包 -->
yarn upgrade vuepress

<!-- 升级到固定版本 -->
yarn upgrade vuepress@2.0.1
```

### 4. 移除依赖包

```xml
<!-- 相当于 npm uninstall [package] -->
yarn remove [package]

<!-- 比如 我要删除 vuepress 包 -->
yarn remove vuepress
```

### 5. 安装项目全部依赖

```xml
<!-- 相当于 npm i，以下两条命令都可以 -->
yarn
yarn install
```
