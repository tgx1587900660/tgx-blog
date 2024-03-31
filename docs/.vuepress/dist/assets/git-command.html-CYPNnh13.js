import{_ as e,o as n,c as i,e as s}from"./app-CkeFUswH.js";const l={},a=s(`<h1 id="git-命令收集" tabindex="-1"><a class="header-anchor" href="#git-命令收集"><span>Git 命令收集</span></a></h1><div class="custom-container tip"><p class="custom-container-title">起因</p><p>工作中<code>gitlab</code>的账号和<code>gitee</code>的账号不一样，这导致我在码云上提交代码时不被统计到面板中， 每次新开一个项目就忘记设置邮箱的<code>Git指令</code>，所以在这里收集了一些 Git 指令</p></div><h2 id="_1-设置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#_1-设置用户名和邮箱"><span>1. 设置用户名和邮箱</span></a></h2><blockquote><p>这里 假设我英文名是 telectron, 邮箱是 shuaibi@qq.com</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 1. 全局设置-语法 --&gt;</span>
git config --global user.name 用户名
git config --global user.email 邮箱地址
<span class="token comment">&lt;!-- 案例：将会作用于本地电脑上所有项目 --&gt;</span>
git config --global user.name telectron
git config --global user.email shuaibi@qq.com


<span class="token comment">&lt;!-- 2. 局部设置-语法 --&gt;</span>
git config user.name 用户名
git config user.email 邮箱地址
<span class="token comment">&lt;!-- 案例：将会作用于当前所在项目 --&gt;</span>
git config user.name telectron
git config user.email shuaibi@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-查看当前项目的配置" tabindex="-1"><a class="header-anchor" href="#_2-查看当前项目的配置"><span>2. 查看当前项目的配置</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>git config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-恢复到某次-commit-版本" tabindex="-1"><a class="header-anchor" href="#_3-恢复到某次-commit-版本"><span>3. 恢复到某次 commit 版本</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 语法 --&gt;</span>
git reset --hard [commitID]

<span class="token comment">&lt;!--
版本在本地回退之后，本地仓库的代码将会落后于远程仓库，此时git是不允许提交的，
所以一般是需要使用 git push -f 强行推送，覆盖远程代码
其中 commitID 号形如 44tte48c59eb8093686ceb517a37ea065a38a676, 缩写为 44tte48c
--&gt;</span>
git reset --hard 44tte48c
git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-删除分支" tabindex="-1"><a class="header-anchor" href="#_4-删除分支"><span>4. 删除分支</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 语法 --&gt;</span>
git branch -d 分支名
git branch -D 分支名 (强制删除)


<span class="token comment">&lt;!-- 案例：分支名为 telectron_dev, 我要删了它 --&gt;</span>
git branch -d telectron_dev
git branch -D telectron_dev (强制删除，通常是有些需求写完了，又被废弃时使用)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-加入、取出缓存区" tabindex="-1"><a class="header-anchor" href="#_5-加入、取出缓存区"><span>5. 加入、取出缓存区</span></a></h2><div class="custom-container tip"><p class="custom-container-title">使用场景</p><p>产品让我改个新版本的小需求，我改到一半，预估还有 3 小时才能改完， 然而此时测试告诉我，线上稳定版的 APP 有个严重的 bug 要立马处理。</p><p>那我就需要<code>git stash</code>剪切了之前的开发到一半的小需求，切个新分支出去改 bug，</p><p>改完之后再切回来<code>git stash pop</code>粘贴之前的小需求，继续开发</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 相当于 剪切 本次修改内容 --&gt;</span>
git stash

<span class="token comment">&lt;!-- 相当于 粘贴 那次修改内容 --&gt;</span>
git stash pop

<span class="token comment">&lt;!-- 可以查看当前是否有暂存修改 --&gt;</span>
git stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-拉取代码" tabindex="-1"><a class="header-anchor" href="#_6-拉取代码"><span>6. 拉取代码</span></a></h2><blockquote><p>初入公司或在 github/gitee 第一次获取项目代码时使用</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 语法 --&gt;</span>
git clone 远程地址


<span class="token comment">&lt;!-- 案例 --&gt;</span>
<span class="token comment">&lt;!-- 我现在要拉这个仓库的代码 https://gitee.com/tgx-1587900660/tgx_vue_vision --&gt;</span>
git clone https://gitee.com/tgx-1587900660/tgx_vue_vision
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-给远程地址起别名" tabindex="-1"><a class="header-anchor" href="#_7-给远程地址起别名"><span>7. 给远程地址起别名</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 语法 --&gt;</span>
git remote add origin 远程地址


<span class="token comment">&lt;!-- 案例 --&gt;</span>
<span class="token comment">&lt;!-- 我现在要给这个仓库起别名 https://gitee.com/tgx-1587900660/tgx_vue_vision --&gt;</span>
git remote add origin https://gitee.com/tgx-1587900660/tgx_vue_vision

<span class="token comment">&lt;!-- 查看别名列表 --&gt;</span>
git remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-查看分支" tabindex="-1"><a class="header-anchor" href="#_8-查看分支"><span>8. 查看分支</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 查看所有分支(包括远程分支) --&gt;</span>
git branch -a

<span class="token comment">&lt;!-- 查看本地分支与远程分支的关系 --&gt;</span>
git branch -vv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-同步远程分支内容" tabindex="-1"><a class="header-anchor" href="#_9-同步远程分支内容"><span>9. 同步远程分支内容</span></a></h2><div class="custom-container tip"><p class="custom-container-title">场景</p><p>有时候分支是在远程仓库，鼠标点击创建的，这时我们可以用这个命令在本地获取最新分支， 然后直接 <code>git checkout 分支名</code> 切过去，一般修复旧版本的 bug 会这么干</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--
我现在在远程仓库手动创了一个分支 dev_tgx,
我先用 git fetch 取过来，再用 git checkout 直接切过去
--&gt;</span>
git fetch
git checkout dev_tgx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-只提取某一次-commit-内容" tabindex="-1"><a class="header-anchor" href="#_10-只提取某一次-commit-内容"><span>10. 只提取某一次 commit 内容</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 语法 --&gt;</span>
git cherry-pick [commitID]

<span class="token comment">&lt;!--
案例：若现在我有两个需求，第一个需求在 tgx_dev1 分支开发，第二个需求在 tgx_dev2 分支开发，
当 我在 tgx_dev1 分支，改了A文件的某一些代码时，并提交了一个 commitId 为 921dc370，
我想把这些改动点，带到分支 tgx_dev2 中去，则在分支 tgx_dev2 中执行以下代码，
这样就只会 把A文件的改动点挪到分支 tgx_dev2 中去
--&gt;</span>
git cherry-pick 921dc370
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-高频命令" tabindex="-1"><a class="header-anchor" href="#_11-高频命令"><span>11. 高频命令</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 新建一个 telectron_dev 分支 --&gt;</span>
git checkout -b telectron_dev


<span class="token comment">&lt;!-- 首次推送这个分支（线上没有 telectron_dev 分支） --&gt;</span>
git push -u origin telectron_dev
<span class="token comment">&lt;!-- 线上有 telectron_dev 分支后推送 --&gt;</span>
git push


<span class="token comment">&lt;!-- 拉取 master 分支代码，并且合入当前分支 --&gt;</span>
git pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),t=[a];function d(c,m){return n(),i("div",null,t)}const v=e(l,[["render",d],["__file","git-command.html.vue"]]),o=JSON.parse('{"path":"/frontend/tools/git-command.html","title":"Git 命令收集","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 设置用户名和邮箱","slug":"_1-设置用户名和邮箱","link":"#_1-设置用户名和邮箱","children":[]},{"level":2,"title":"2. 查看当前项目的配置","slug":"_2-查看当前项目的配置","link":"#_2-查看当前项目的配置","children":[]},{"level":2,"title":"3. 恢复到某次 commit 版本","slug":"_3-恢复到某次-commit-版本","link":"#_3-恢复到某次-commit-版本","children":[]},{"level":2,"title":"4. 删除分支","slug":"_4-删除分支","link":"#_4-删除分支","children":[]},{"level":2,"title":"5. 加入、取出缓存区","slug":"_5-加入、取出缓存区","link":"#_5-加入、取出缓存区","children":[]},{"level":2,"title":"6. 拉取代码","slug":"_6-拉取代码","link":"#_6-拉取代码","children":[]},{"level":2,"title":"7. 给远程地址起别名","slug":"_7-给远程地址起别名","link":"#_7-给远程地址起别名","children":[]},{"level":2,"title":"8. 查看分支","slug":"_8-查看分支","link":"#_8-查看分支","children":[]},{"level":2,"title":"9. 同步远程分支内容","slug":"_9-同步远程分支内容","link":"#_9-同步远程分支内容","children":[]},{"level":2,"title":"10. 只提取某一次 commit 内容","slug":"_10-只提取某一次-commit-内容","link":"#_10-只提取某一次-commit-内容","children":[]},{"level":2,"title":"11. 高频命令","slug":"_11-高频命令","link":"#_11-高频命令","children":[]}],"git":{"updatedTime":1696952228000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":3}]},"filePathRelative":"frontend/tools/git-command.md"}');export{v as comp,o as data};
