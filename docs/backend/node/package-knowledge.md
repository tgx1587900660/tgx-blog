# 第三方包 相关知识

## 1. 包管理工具 npm

::: tip 说明

npm 是一个包管理工具，安装 node 时会自动安装。
使用 npm 下载包，默认是从国外拉取资源的，速度慢。可以切换为 **国内淘宝镜像** 提升下载速度

:::

### 1. 直接切换 npm 下载地址

```xml
<!-- 查看当前下载包的镜像源 -->
npm config get registry

<!-- 将下载包的镜像源切换为 淘宝镜像 -->
npm config set registry=https://registry.npm.taobao.org/
```

### 2. 借助 nrm 切换 npm 的下载地址

```xml
<!-- 全局安装 nrm -->
npm i nrm -g

<!-- 查看所有可用的 镜像地址 -->
nrm ls

<!-- 使用某个 镜像地址 -->
nrm use taobao  （这里使用 淘宝地址）
```

- 使用这个插件的命令时有可能出错

::: details 点击查看 错误详情及解决方案

```js{5,6}
// 解决方案 分三步
// 1. 找到 nrm 的位置 C:\Users\你的电脑用户名\AppData\Roaming\npm\node_modules\nrm
// 2. 找到 cli.js 的第 17 行（我的 nrm 版本是 1.2.1）
// 3. 做出以下变更并保存即可
// 报错的：const NRMRC = path.join(process.env.HOME, '.nrmrc'); // 2021/2/9日 更改
// 正常的：const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');



// 以下是 使用 nrm ls 命令时的报错内容
[TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
  at validateString (internal/validators.js:122:11)
  at Object.join (path.js:375:7)
  at Object.<anonymous> (C:\Users\2019\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)
  at Module._compile (internal/modules/cjs/loader.js:1085:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
  at Module.load (internal/modules/cjs/loader.js:950:32)
  at Function.Module._load (internal/modules/cjs/loader.js:791:14)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
  at internal/main/run_main_module.js:17:47
] {
  code: 'ERR_INVALID_ARG_TYPE'
}
```

:::

## 2. 包 的版本管理规范

::: tip 说明
包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如 2.24.0
其中每一位数字所代表的的含义如下：

- 第 1 位数字：大版本
- 第 2 位数字：功能版本
- 第 3 位数字：Bug 修复版本

版本号提升的规则：**只要前面的版本号增长了，则后面的版本号归零**

:::
