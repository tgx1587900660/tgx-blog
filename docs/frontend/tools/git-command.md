# Git 命令收集

::: tip 起因
工作中`gitlab`的账号和`gitee`的账号不一样，这导致我在码云上提交代码时不被统计到面板中，
每次新开一个项目就忘记设置邮箱的`Git指令`，所以在这里收集了一些 Git 指令
:::

## 1. 设置用户名和邮箱

> 这里 假设我英文名是 telectron, 邮箱是 shuaibi@qq.com

```xml
<!-- 1. 全局设置-语法 -->
git config --global user.name 用户名
git config --global user.email 邮箱地址
<!-- 案例：将会作用于本地电脑上所有项目 -->
git config --global user.name telectron
git config --global user.email shuaibi@qq.com


<!-- 2. 局部设置-语法 -->
git config user.name 用户名
git config user.email 邮箱地址
<!-- 案例：将会作用于当前所在项目 -->
git config user.name telectron
git config user.email shuaibi@qq.com
```

## 2. 查看当前项目的配置

```xml
git config --list
```

## 3. 恢复到某次 commit 版本

```xml
<!-- 语法 -->
git reset --hard [commitID]

<!--
版本在本地回退之后，本地仓库的代码将会落后于远程仓库，此时git是不允许提交的，
所以一般是需要使用 git push -f 强行推送，覆盖远程代码
其中 commitID 号形如 44tte48c59eb8093686ceb517a37ea065a38a676, 缩写为 44tte48c
-->
git reset --hard 44tte48c
git push -f
```

## 4. 删除分支

```xml
<!-- 语法 -->
git branch -d 分支名
git branch -D 分支名 (强制删除)


<!-- 案例：分支名为 telectron_dev, 我要删了它 -->
git branch -d telectron_dev
git branch -D telectron_dev (强制删除，通常是有些需求写完了，又被废弃时使用)
```

## 5. 加入、取出缓存区

::: tip 使用场景

产品让我改个新版本的小需求，我改到一半，预估还有 3 小时才能改完，
然而此时测试告诉我，线上稳定版的 APP 有个严重的 bug 要立马处理。

那我就需要`git stash`剪切了之前的开发到一半的小需求，切个新分支出去改 bug，

改完之后再切回来`git stash pop`粘贴之前的小需求，继续开发
:::

```xml
<!-- 相当于 剪切 本次修改内容 -->
git stash

<!-- 相当于 粘贴 那次修改内容 -->
git stash pop

<!-- 可以查看当前是否有暂存修改 -->
git stash list
```

## 6. 拉取代码

> 初入公司或在 github/gitee 第一次获取项目代码时使用

```xml
<!-- 语法 -->
git clone 远程地址


<!-- 案例 -->
<!-- 我现在要拉这个仓库的代码 https://gitee.com/tgx-1587900660/tgx_vue_vision -->
git clone https://gitee.com/tgx-1587900660/tgx_vue_vision
```

## 7. 给远程地址起别名

```xml
<!-- 语法 -->
git remote add origin 远程地址


<!-- 案例 -->
<!-- 我现在要给这个仓库起别名 https://gitee.com/tgx-1587900660/tgx_vue_vision -->
git remote add origin https://gitee.com/tgx-1587900660/tgx_vue_vision

<!-- 查看别名列表 -->
git remote
```

## 8. 查看分支

```xml
<!-- 查看所有分支(包括远程分支) -->
git branch -a

<!-- 查看本地分支与远程分支的关系 -->
git branch -vv
```

## 9. 同步远程分支内容

::: tip 场景
有时候分支是在远程仓库，鼠标点击创建的，这时我们可以用这个命令在本地获取最新分支，
然后直接 `git checkout 分支名` 切过去，一般修复旧版本的 bug 会这么干
:::

```xml
<!--
我现在在远程仓库手动创了一个分支 dev_tgx,
我先用 git fetch 取过来，再用 git checkout 直接切过去
-->
git fetch
git checkout dev_tgx
```

## 10. 只提取某一次 commit 内容

```xml
<!-- 语法 -->
git cherry-pick [commitID]

<!--
案例：若现在我有两个需求，第一个需求在 tgx_dev1 分支开发，第二个需求在 tgx_dev2 分支开发，
当 我在 tgx_dev1 分支，改了A文件的某一些代码时，并提交了一个 commitId 为 921dc370，
我想把这些改动点，带到分支 tgx_dev2 中去，则在分支 tgx_dev2 中执行以下代码，
这样就只会 把A文件的改动点挪到分支 tgx_dev2 中去
-->
git cherry-pick 921dc370
```

## 11. 高频命令

```xml
<!-- 新建一个 telectron_dev 分支 -->
git checkout -b telectron_dev


<!-- 首次推送这个分支（线上没有 telectron_dev 分支） -->
git push -u origin telectron_dev
<!-- 线上有 telectron_dev 分支后推送 -->
git push


<!-- 拉取 master 分支代码，并且合入当前分支 -->
git pull origin master
```
