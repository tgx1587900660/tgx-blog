# Powershell （终端）常见问题

## 1. 禁止运行脚本问题

::: tip 问题说明
全局安装了 `@vue/cli` 这个包之后，想要运行 `vue -V` 命令 发生报错(只要是全局的命令，在第一次使用时都有可能报错)
:::

::: details 点击查看报错信息

```xml
vue: 无法加载文件 ...... 因为在此系统上禁止运行脚本。有关信息，请参阅......
+ vue -V
+
  + CategoryInfo          : SecurityError: (:) []. PSSecurityException
  + FullyQualifiedErrorId : UnauthorizedAccess
```

:::

- 解决方案：
  - 1. 管理员身份运行 Powershell
  - 2. 执行 set-ExecutionPolicy RemoteSigned 命令
  - 3. 会提示 **执行策略更改** ，输入字符 Y ，回车即可。
  - 4. 关闭窗口后就可以执行命令了

## 2. 窗口冻结问题

::: tip 问题说明

使用终端 npm i 下载依赖包的时候，如果鼠标乱划，会导致 **终端冻结** （暂停下载依赖包）。

:::

- 解决方案：
  - 1. 点击终端内部，按下回车即可继续。
