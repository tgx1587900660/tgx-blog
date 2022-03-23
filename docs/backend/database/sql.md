# SQL 语言 相关知识

::: tip 栏目说明
本栏目收集了 **SQL 编程语言** 的相关知识
:::

## 1. 什么是 SQL？

::: tip 概念

SQL（Structured Query Language）即 **结构化查询语言**，专门用来 **访问和处理数据库** 的编程语言。
能够让我们以编程的形式，操作数据库里面的数据。

:::

- 三个要点：
  - SQL 是一门编程语言，用来操作数据库
  - 使用 SQL 语言编写出来的代码，叫做 SQL 语句
  - SQL 语言只能在关系型数据库中使用（例如 MySQL、Oracle、SQL Server）。非关系型数据库（例如 Mongodb）
    不支持 SQL 语言

## 2. SQL 具体能做什么？

::: tip 作用

- 对数据库进行 **增删改查**
- 创建 数据库
- 创建 数据库的表
- 可在数据库中创建存储过程、视图 等等
- 要在 node 项目中使用 sql 语句操作 MySQL 数据库，查看 <tgx-link href="/backend/packages/third-party-packages">这篇文章</tgx-link> 的【mysql 中间件】章节

:::

## 3. SQL 语法规则

::: tip 重要

SQL 中的 **关键字** 对大小写不敏感

:::

### 1. 查询数据

::: tip 关键字 SELECT

- SELECT 语句用于 **从表中查询数据**。执行的结果被存储在一个 **结果表** 中（称为结果集）

:::

::: details 点击查看 SELECT 具体用法

```sql{3,8,13}
-- 注释使用 '--' 格式

-- 1. 从 指定的 表中 查询 所有列数据
-- 语法：select * from 表名称
-- 示例：从 users 这个表中查询 所有的列数据
select * from users

-- 2. 从 指定的 表中 查询 某一列数据
-- 语法：select 列名称 from 表名称
-- 示例：从 users 这个表中查询 username 这 1 列
select username from users

-- 3. 从 指定的 表中 查询 多列数据
-- 语法：select 列名称1, 列名称2 from 表名称（用英文逗号隔开）
-- 示例：从 users 这个表中查询 uname, pwd 这 2 列
select uname, pwd from users
```

:::

### 2. 增加数据

::: tip 关键字 INSERT INTO

- INSERT INTO 语句用于 **从表中插入新数据行**。

:::

::: details 点击查看 INSERT INTO 具体用法

```sql{1}
-- 1. 向 指定表 中 增加 一条数据行
-- 语法：insert into 表名 (列名1, 列名2) values (列值1, 列值2)
-- 示例：向表 users 中 增加一行数据，其 username 是 'tgx'，password 是 '2121236'
insert into users (username, password) values ('tgx', '2121236')
```

:::

### 3. 更新数据

::: tip 关键字 UPDATE SET

- UPDATE SET 语句用于 **从表中更新数据**。
- WHERE 语句用于 限定选择标准(例如 指定 id 号)
- **一定要加 WHERE 语句，否则会更新整个表的数据！！**

:::

::: details 点击查看 UPDATE SET 具体用法

```sql{1,6}
-- 1. 向 指定表 中 更新 某一行的 一列数据
-- 语法: update 表名 set 列名1 = 新值 where 列名2 = 列值
-- 示例：修改表 users 中 id 为 4 这条数据的 password 为 '888'
update users set password='888' where id=4

-- 2. 向 指定表 中 更新 某一行的 多列数据
-- 语法: update 表名 set 列名1 = 新值, 列名2 = 新值 where 列名2 = 列值
-- 示例：修改表 users 中 id为4 这条数据的 password为'888', status为1
update users set password='920', status=1 where id=4
```

:::

### 4. 删除数据

::: tip 关键字 DELETE

- DELETE 语句用于 **从表中删除数据**。
- WHERE 语句用于 限定选择标准(例如 指定 id 号)
- **一定要加 WHERE 语句，否则会删除整个表的数据！！**

:::

::: details 点击查看 DELETE 具体用法

```sql{1,6}
-- 1. 向 指定表中 删除 某一行数据
-- 语法: delete from 表名 where id=4
-- 示例：删除 表users中 id为4 的这行数据
delete from users from where id=4
```

:::

### 5. WHERE 子句

::: tip 关键字 WHERE

- WHERE 语句用于 限定选择标准，使得操作目标更加明确
- WHERE 可以用在 SELECT（查）, UPDATE（改）, DELETE（删）中，限定条件

:::

- WHERE 的运算符（!= 的写法某些版本才支持）

| 运算符 |  >   | >=       | <    | <=       | =    | != 或 <> | BETWEEN      | LIKE         |
| ------ | :--: | -------- | ---- | -------- | ---- | -------- | ------------ | ------------ |
| 描述   | 大于 | 大于等于 | 小于 | 小于等于 | 等于 | 不等于   | 在某个范围内 | 搜索某种模式 |

::: details 点击查看 WHERE 具体用法

```sql{1,4,7}
-- 1. 查询 status 为 1 的所有用户
select * from users where status=1

-- 2. 查询 id 大于 2 的所有用户
select * from users where id>2

-- 3. 查询 id 不等于 2 的所有用户
select * from users where id<>2
```

:::

### 6. AND 和 OR 运算符

::: tip 关键字 AND 和 OR

- AND 和 OR 是用来修饰 WHERE 子句的条件运算符
- AND 相当于 js 中的 &&
- OR 相当于 js 中的 ||

:::

::: details 点击查看 AND 和 OR 具体用法

```sql{1,4}
-- 1. 查询 status为1 并且 id小于3 的数据
select * from users where status=1 and id<3

-- 2. 查询 status为1 或者 id等于3 的数据
select * from users where status=1 or id=3
```

:::

### 7. ORDER BY 子句

::: tip 关键字 ORDER BY

- ORDER BY 是用来排序的。可以根据指定的列对结果集进行排序
- ORDER BY **默认使用升序规则** 排序
  - ASC 是升序
  - DESC 是降序

:::

::: details 点击查看 ORDER BY 具体用法

```sql{1,6,10}
-- 1. 升序排列
-- 示例：表根据 status 的值进行 升序排列
select * from users order by status
或 select * from users order by status asc

-- 2. 降序排列
-- 示例：表根据 status 的值进行 降序排列
select * from users order by status desc

-- 3. 多重排列
-- 示例：表 先根据 status 的值进行 降序排列, 再根据 id 进行升序排列
select * from users order by status desc, id asc
```

:::

### 8. COUNT() 函数 和 AS 关键字

::: tip 说明

- COUNT() 函数用于 **获取查询数据的总条数**
- AS 用来 **起别名**

:::

::: details 点击查看 COUNT 和 AS 具体用法

```sql{1,5,9}
-- 1. count() 获取总条数
-- 示例：获取 status为0 的总条数（此时字段名就是 count(*), 字段值就是数量）
select count(*) from users where status=0

-- 2. as 给 count(*) 重命名
-- 示例：获取 status为0 的总条数（此时字段名就是 total, 字段值就是数量）
select count(*) as total from users where status=0

-- 3. as 给 username, password 重命名
-- 示例：获取 username和password 列数据（此时字段名就是 uname和pwd）
select username as uname, password as pwd from users
```

:::
