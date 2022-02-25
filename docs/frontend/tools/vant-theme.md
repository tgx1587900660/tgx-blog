# Vant 主题定制
::: tip 说明
这里总结了移动端 Vant UI 组件库的自定义主题定制操作。
<tgx-link href="https://vant-contrib.gitee.io/vant/v2/#/zh-CN/theme">查看官网主题定制步骤</tgx-link>
:::

## 1. 第一步：引入 less 样式文件
在 main.js 入口文件中引入
```js
// 引入全部样式
import 'vant/lib/index.less'

// 引入单个组件样式
import 'vant/lib/button/style/less'
```

## 2. 第二步：根据变量名来修改主题
- 方法一：在配置文件中修改（不推荐，每次修改完就要打包）
- 方案二：单独维护一个 .less 主题文件，并在配置文件中引入（推荐，每次改动就会实时更新）
::: details 点击查看 webpack 构建的项目怎么修改
```js
// webpack.config.js

const path = require('path')
const fullPath = path.join(__dirname, './src/theme.less')

module.exports = {
    rules: [
        {
            test: /\.less$/,
            use: [
                // ...其他 loader 配置
                {
                    loader: 'less-loader',
                    options: {
                        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                        lessOptions: {
                            // 方案一 和 方案二选一个就可以了
                            modifyVars: {
                                // 方案一：直接覆盖变量
                                'text-color': '#111',
                                'border-color': '#eee',

                                // 方案二：通过 less 文件覆盖（文件路径为绝对路径）
                                hack: `true; @import "${fullPath}";`
                            }
                        }
                    }
                }
            ]
        }
    ]
}
```
:::

::: details 点击查看 vue-cli 构建的项目怎么修改
```js
// vue.config.js

const path = require('path')
const fullPath = path.join(__dirname, './src/theme.less')

module.exports = {
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    // 方案一 和 方案二选一个就可以了
                    modifyVars: {
                        // 方案一：直接覆盖变量
                        'text-color': '#111',
                        'border-color': '#eee',

                        // 方案二：通过 less 文件覆盖（文件路径为绝对路径）
                        hack: `true; @import "${fullPath}";`
                    }
                }
            }
        }
    }
}
```
:::