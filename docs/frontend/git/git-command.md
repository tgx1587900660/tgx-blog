# Git 命令收集

::: tip 起因
工作中`gitlab`的账号和`gitee`的账号不一样，这导致我在码云上提交代码时不被统计到面板中，
每次新开一个项目就忘记设置邮箱的`Git指令`，所以在这里收集了一些 Git 指令
:::

## 1.设置用户名和邮箱

> user.name 支持中文

- 全局设置

```xml
<!-- 语法 -->
git config --global user.name 用户名
git config --global user.email 邮箱地址


<!-- 案例 -->
<!--
假设我英文名是 telectron, 邮箱是 shuaibi@qq.com
我要让今后 所有新老项目 中，都默认使用这个 用户名 和 邮箱 提交代码
-->
git config --global user.name telectron
git config --global user.email shuaibi@qq.com
```

- 局部设置

```xml
<!-- 语法 -->
git config user.name 用户名
git config user.email 邮箱地址


<!-- 案例 -->
<!--
假设我英文名是 telectron, 邮箱是 shuaibi@qq.com
我要在 某一个项目 中，日后都使用这个 用户名 和 邮箱 提交代码
-->
git config user.name telectron
git config user.email shuaibi@qq.com
```

## 2.查看当前项目的配置

> 一般不会用到

```xml
git config --list
```

## 3.恢复到某次 commit 提交的版本

> 用得较少，很少有人经常搞坏项目

```xml
<!-- 语法 -->
git reset --hard commitID


<!-- 案例 -->
<!--
假设我因为工作失误, 导致某个功能不能用了, 现在又有其他事要处理, 没办法及时排查问题,
且改动又不多, 那我干脆回退到之前的稳定版本, 首先我要找到当时稳定版的 commit ID 号,
点开提交记录, 右侧有个简短的 id 号(44tte48c), 复制出来, 粘贴一看,
发现完整 id 号形如 44tte48c59eb8093686ceb517a37ea065a38a676
-->
git reset --hard 44tte48c59eb8093686ceb517a37ea065a38a676
```

## 4.删除分支

> D 表示强制删除, 有时候会用到，比如两个人写了重复代码，另一个人的代码废弃了，得删掉

```xml
<!-- 语法 -->
git branch -d 分支名
git branch -D 分支名 (强制删除)


<!-- 案例 -->
<!-- 分支名为 telectron_dev, 我要删了它 -->
git branch -d telectron_dev
git branch -D telectron_dev (强制删除)
```

## 5.加入、取出缓存区

::: tip 使用场景

产品让我改个新版本的小需求，我改到一半，预估还有 3 小时才能改完，
然而此时测试告诉我，线上稳定版的 APP 有个严重的 bug 要立马处理。

那我就需要`git stash`剪切了之前的开发到一半的小需求，切个新分支出去改 bug，

改完之后再切回来`git stash pop`粘贴之前的小需求，继续开发
:::

> git stash 和 git stash pop 用得较少，基本上都要执行一次。也不推荐用，因为开发一段时间之后，经常会忘掉 git stash 里面还有内容

```xml
<!-- 相当于 剪切 本次修改内容 -->
git stash

<!-- 相当于 粘贴 那次修改内容 -->
git stash pop
```

## 6.拉取代码

> 初入公司或在 github/gitee 第一次获取项目代码时使用

```xml
<!-- 语法 -->
git clone 远程地址


<!-- 案例 -->
<!-- 我现在要拉这个仓库的代码 https://gitee.com/tgx-1587900660/tgx_vue_vision -->
git clone https://gitee.com/tgx-1587900660/tgx_vue_vision
```

## 7.给远程地址起别名

> 方便提交代码时，少敲点字符

```xml
<!-- 语法 -->
git remote add origin 远程地址


<!-- 案例 -->
<!-- 我现在要给这个仓库起别名 https://gitee.com/tgx-1587900660/tgx_vue_vision -->
git remote add origin https://gitee.com/tgx-1587900660/tgx_vue_vision
```

## 8.查看所有分支名称(包括远程分支)

```xml
git branch -a
```

## 9.同步远程分支内容

::: tip 场景
有时候分支是在线上，点点点创建的，这时我们可以用这个命令在本地获取最新分支，
然后直接 `git checkout 分支名` 切过去，一般修复旧版本的 bug 会这么干
:::

```xml
git fetch
```

## 10.只提取某一次 commit 内容

::: tip 场景
多人协作时用的比较频繁
:::

```xml
<!-- 语法 -->
git cherry-pick commitID


<!-- 案例 -->
<!--
有时候你一个人负责了 2 个项目，你正在开发 B 项目，此时 A 项目的后端跑来找你修个 bug，
你本地打开 A 项目，发现他还没来得及推送后端代码，前端代码也走了很远，
而且这 bug 只要改 2 行代码就 OK 了，此时你就可以直接修改，然后 commit 提交，
接着把这次 commit ID 给后端，让他提取这段代码自己打包即可。
这里的 commit ID 用了缩写，也支持完整的 ID
-->
git cherry-pick 921dc370
```

## 11. 高频不会忘的命令

```xml
<!-- 新建一个 telectron_dev 分支 -->
git checkout -b telectron_dev


<!-- 首次推送这个分支 -->
git push -u origin telectron_dev
<!-- 线上有 telectron_dev 分支后推送 -->
git push


<!-- 拉取 master 分支代码，并且合入当前分支 -->
git pull origin master
```
