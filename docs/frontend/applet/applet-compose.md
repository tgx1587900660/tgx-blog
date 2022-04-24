# 小程序 代码组成

## 1. 小程序的组成部分

::: tip 说明

要开发小程序，首先要了解小程序项目的基本组成部分

:::

### 1. 项目组成结构

::: tip 说明
默认生成的小程序项目中有 7 个部分
:::

<tgx-img src="/frontend/applet/applet-compose/applet-compose-1.png"></tgx-img>

### 2. 页面组成结构

::: tip 说明
小程序的每个页面由 4 部分组成，最终这 4 个文件会被编译成一个完整页面
:::

<tgx-img src="/frontend/applet/applet-compose/applet-compose-2.png"></tgx-img>

## 2. JSON 配置文件

::: tip 说明

JSON 是一种数据个数，一般作为配置文件出现在各类语言当中。

:::

### 1. JSON 配置文件的作用

::: tip 说明

小程序中一般有 4 种配置文件，不同配置文件有不同的作用

:::

<tgx-img src="/frontend/applet/applet-compose/applet-compose-json.png"></tgx-img>

### 2. app.json 文件的节点作用

::: tip 说明

该文件管理一些全局配置

:::

<tgx-img src="/frontend/applet/applet-compose/applet-compose-app.json.png"></tgx-img>

### 3. project.config.json 文件

::: tip 说明

拿到别人的 小程序项目后，要想在自己电脑上运行，第一件事是修改 **appid**

:::

- setting 中保存的是 **小程序开发工具** 里面的项目设置
- 可以在 setting 中 添加节点 "checkSiteMap": true(或者 false), 来控制调试台是否报黄色的警告

<tgx-img src="/frontend/applet/applet-compose/applet-compose-project.json.png"></tgx-img>

### 4. sitemap.json 文件

::: tip 说明

sitemap.json 可以配置搜索相关

:::

- rules 数组可配置页面的 SEO，`action` 用来配置页面是否被搜索，`allow` 表示可以被搜索，`disallow` 表示不被搜索
- page 用来指定哪些页面可以被搜索，`*` 表示匹配所有页面

<tgx-img src="/frontend/applet/applet-compose/applet-compose-sitemap.json.png"></tgx-img>

### 5. 页面中的 .json 配置文件

::: tip 说明

页面中的 .json 配置会覆盖全局 app.json 中的配置

:::

- 例如：头部导航的颜色覆盖，可以设置 "navigationBarBackgroundColor": "#00b26a" 覆盖

<tgx-img src="/frontend/applet/applet-compose/applet-compose-page.json.png"></tgx-img>
