# 1. 禁止运行脚本问题

::: tip 问题说明
全局安装了 `@vue/cli` 这个包之后，想要运行 `vue -V` 命令 发生报错
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
  - 3. 会提示 **执行策略更改** ，输入字符 Y ，回车即可
