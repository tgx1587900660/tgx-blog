# webpack 知识
## 1. webpack 定位

::: tip 定位
webpack 是前端工程化的一个具体的解决方案。它可以实现前端工程化的四大原则
:::

现代前端开发四原则：
- 模块化（js 的模块化、css 的模块化、资源的模块化）
- 组件化（复用现有的 UI 结构、样式、行为）
- 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、 Git 分支管理）
- 自动化（自动化构建、自动部署、自动化测试）

## 2. 使用 webpack

::: tip 安装位置
webpack 主要用于打包压缩源码。只需要安装到开发环境
:::
- 1. 第一步：安装两个依赖包
    ```xml
    npm install webpack@5.42.1 webpack-cli@4.7.2 -D
    ```
- 2. 第二步：package.json 中添加脚本
    ```xml
    "dev": "webpack"
    ```
- 3. 第三步：编写 webpack.config.js 配置文件
    ```xml
    module.exports = {...}
    ```

## 3. webpack 插件
::: tip 意义
webpack支持插件功能，扩展性更强，让开发者实现更多自动化功能，使开发人员更专注于业务
:::

### 1. webpack-dev-server 插件
- 插件作用：
    该插件会在内存中生成一个开发阶段的 bundle.js 文件，为了避免频繁读写物理磁盘，
    生成的这个 bundle.js 文件是不可见的，但是可以在根目录下被访问

- 插件使用：
    安装 webpack-dev-server 插件包，并将脚本改为 "dev": "webpack serve" 即可使用自动更新功能

### 2. html-webpack-plugin 插件
- 插件作用：
    为了启动服务时直接进入首页，该插件会自动复制一份模板 index.html 到根目录（内存中）下，同时自动注入同级目录内存中的 bundle.js，从而使得开发页面被自动访问。其中这个 bundle.js 是由插件 webpack-dev-server 生成的。

- 插件使用：
    安装 html-webpack-plugin 插件包，引入它得到一个构造函数，用new的方法创建一个实例对象，并传入一个对象配置它的模板文件，再把这个实例对象放入webpack的配置文件属性plugin数组中

### 3. clean-webpack-plugin 插件
- 插件作用：
    为了让 webpack 每次打包时都自动删一次生成的 dist 目录，因为多次打包会合并文件，容易出现图片或文件重复问题

- 插件使用：
    安装 clean-webpack-plugin 插件包，查阅它的文档复制用法即可

## 4. webpack 加载器
::: tip 意义
webpack 只能识别 .js 文件，因此需要 `加载器(loader)` 来处理其他格式的文件
:::
### 1. 处理 .css 文件

要处理.css文件，需要安装style-loader和css-loader依赖包，当webpack遇到.css文件时，发现处理不了，便前往配置文件module.rules数组中查看loader，接着根据loader顺序从后往前处理，先用css-loader处理，再用style-loader处理，然后将结果合并到bundle.js中

### 2. 处理 .less 文件
要处理.less文件，需要安装less-loader和less，由于less是被less-loader内部依赖的，所有要安装这个包，但只需要配置less-loader即可


### 3. 处理 文件路径
假设在页面在要引入一张图片，就会使用类似./img/logo.png写法，这种路径webpack无法识别。因此要安装url-loader和file-loader依赖包，由于file-loader是被url-loader内部依赖的，所有要安装这个包。

但只需要配置url-loader即可，其中url-loader?limit=470&outputPath=images表示大于470字节的图片就直接使用路径形式，小于等于470字节的图片会被转成base64格式，且图片被打包后要放在dist/images目录下，也可用对象配置参数这两个参数。

### 4. 处理 js 高级语法
webpack只能处理一部分js文件，对于高级语法，需要借助babel-loader来处理。

比如：要处理装饰器语法，就需要安装babel-loader、@babel/core、@babel/plugin-proposal-decorators这3个依赖包，同时创建babel.config.js配置文件，去babel官网找对应的配置复制即可