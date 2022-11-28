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

## 3. 包 的内部结构

::: tip 说明
一个规范的包，它的组成结构，必须符合以下 3 点要求：

- ① 包必须以单独的目录而存在
- ② 包的顶级目录下要必须包含 package.json 这个包管理配置文件
- ③ package.json 中必须包含 name，version，main 这三个属性，分别代表包的名字、版本号、包的入口。
  - 其中 main 节点用来指定 **外界进行导入时，要导入的那个 js 文件路径**

:::

## 4. 开发一个自己的 npm 包

::: tip 步骤说明
要开发并在 npm 网站上发布一款自己的 npm 包，这里以**开发一个转义html文件的包为例**，总共分为以下 9 个步骤。
:::

### 1. 初始化 包 项目结构

- 文件夹应该包含：
  - package.json --------------依赖管理文件
  - README.md -----------------说明文档
  - index.js ------------------包的入口文件


### 2. 在各个模块中编写逻辑
### 3. 在 index.js 集中引入模块并暴露


### 4. 编写 README.md 说明文档(这里以html文件处理包为例)

- 至少包含以下 6 部分：
  - 安装方式
  - 导入方式
  - 格式化时间
  - 转义 HTML 中的特殊字符
  - 还原  HTML 中的特殊字符
  - 开源协议

### 5. 注册 npm 官网的帐号
  - 去 npm 官网上注册一个自己的帐号（注册帐号是为了能在终端登录）

### 6. 在终端登录自己的 npm 帐号

- 在 npm login 登录之前需要把 下载源 切到 npm 的官方地址（而不是淘宝地址，因为我们要把包发布到 npm 源网站）

```xml
<!-- 运行 login 命令开始登录 -->
npm login

<!-- 然后按提示输入： -->
1. 用户名
2. 密码(密码是盲打的)
3. 邮箱（第一次登录可能要验证邮箱）
```

### 7. 把包发布到 npm 上

```xml
<!-- 成功登录后，在项目的根目录 运行 publish 命令即可开始发包 -->
npm publish
```

### 8. 去 npm 官网查看自己发的包

- 完成发布（此时可以在 npm 搜到自己的包了，也可以在本地 npm install xxx 使用了）

### 9. 删除 npm 包

- **npm unpublish 只能删除 72 小时内的包**
- **npm unpublish 删除的包 24 小时内不能再次发布**
- **发包需要慎重，尽量不发没有意义的包**

```xml
<!-- 在项目的根目录 运行 unpublish 命令即可开始删包 -->
npm unpublish 包名 --force
```
