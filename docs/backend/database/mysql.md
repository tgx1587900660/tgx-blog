# MySQL 数据库

::: tip 栏目说明

本栏目收集了一些 MySQL 数据库 的相关知识。

:::

- 要操作数据库，通常有 2 种方式
  - 使用 **图形化软件** 点击界面直接操作数据库
  - 使用 **SQL 编程语言** 代码形式来操作数据库表

## 1. 使用 图形化软件 操作数据库相关

::: tip 说明

使用 图形化软件 workbench 创建表时，要注意的一些字段含义

:::

### dateType 数据类型说明

- ① int 整数
- ② varchar(len) 字符串
- ③ tinyint(1) 布尔值

### 字段的特殊标识说明

- ① PK（Primary Key）主键、唯一标识
- ② NN（Not Null）值不允许为空
- ③ UQ（Unique）值唯一
- ④ AI（Auto Increment）值自动增长

## 2. 使用 SQL 语言 操作数据库相关

::: tip 说明

- sql 是一门编程语言，专门用来操作数据库
- 要在 node 项目中使用 sql 语句操作 MySQL 数据库，通常会借助某些中间件，例如 `mysql`，这里的 `mysql` 指的是一个 node 第三方模块，是用来简化操作 MySQL 数据库的一个依赖包

:::
