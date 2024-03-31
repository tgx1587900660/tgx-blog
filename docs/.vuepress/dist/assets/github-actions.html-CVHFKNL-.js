import{_ as n,o as s,c as a,e}from"./app-CkeFUswH.js";const t="/tgx-blog/assets/github-actions1-CL2hWCkR.jpg",p="/tgx-blog/assets/github-actions2-CdRu0iyX.jpg",c="/tgx-blog/assets/github-actions3-AyOTIzuq.jpg",l={},o=e('<h1 id="利用-github-actions-自动部署博客" tabindex="-1"><a class="header-anchor" href="#利用-github-actions-自动部署博客"><span>利用 Github Actions 自动部署博客</span></a></h1><div class="custom-container tip"><p class="custom-container-title">读完这篇文章，你将能够：</p><ul><li><ol><li>初步认识 Github Actions 是什么东西</li></ol></li><li><ol start="2"><li>知道 Github Actions 运行的大概流程</li></ol></li><li><ol start="3"><li>可以免费自动化部署 自己的静态站点</li></ol></li></ul></div><ul><li>我用 Vuepress 做了个静态网页博客，源码放在 github 仓库中。我的目的是想要：每次写完代码后，只要把代码 push 上去，就能自动更新博客。并且无需购买任何服务器，就能让所有人访问。</li></ul><h2 id="_1-创建-workflows-文件夹" tabindex="-1"><a class="header-anchor" href="#_1-创建-workflows-文件夹"><span>1. 创建 <code>workflows</code> 文件夹</span></a></h2><p>在根目录下创建 <code>.github/workflows</code> 文件夹。这个文件夹中存放一些 <code>workflow</code> 文件。 <code>workflow</code> 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为 <code>.yml</code>，比如 <code>foo.yml</code>。一个库可以有多个 workflow 文件。GitHub 只要发现 <code>.github/workflows</code> 目录里面有 <code>.yml</code> 文件，就会自动运行该文件。</p><img src="'+t+`" alt="workflows目录示意图" title="workflows目录示意图"><h2 id="_2-创建并书写-yml-内容" tabindex="-1"><a class="header-anchor" href="#_2-创建并书写-yml-内容"><span>2. 创建并书写 <code>.yml</code> 内容</span></a></h2><p>在 <code>.github/workflows</code> 文件夹中创建一个 <code>github-actions-demo.yml</code> 文件。并写入以下代码：</p><details class="custom-container details"><summary>点击查看 github-actions-demo.yml 内容</summary><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># workflow 的名字，如果省略该字段，默认为当前 workflow 的文件名</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub Actions Demo

<span class="token comment"># workflow run 的名字，如果省略该字段，就取 commit 信息</span>
<span class="token key atrule">run-name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.actor <span class="token punctuation">}</span><span class="token punctuation">}</span> is testing out GitHub Actions 🚀

<span class="token comment"># 触发事件, 这里是指 git push 时触发该 workflow, 事件有很多, push 只是其中之一,更多需要查文档</span>
<span class="token comment"># on: [push]</span>
<span class="token comment"># 指定触发事件时，也可以限定分支或标签。以下代码指: 只有在 master 分支 push 时才触发 workflow</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>

<span class="token comment"># jobs字段是主体，表示要执行的一项或多项任务。这里有3步。其中 name 是任务说明，没填就取 job 名</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># 该 job 的名字</span>
  <span class="token key atrule">Demo-Actions1</span><span class="token punctuation">:</span>
    <span class="token comment"># 指定 job 名会覆盖 Demo-Actions1</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> This is Actions1
    <span class="token comment"># 指定运行的环境</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;这是第一步<span class="token punctuation">:</span>Demo<span class="token punctuation">-</span>Actions1&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;🎉 The job was automatically triggered by a $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event_name <span class="token punctuation">}</span><span class="token punctuation">}</span> event.&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;🐧 This job is now running on a $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span> server hosted by GitHub<span class="token tag">!</span>&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;🔎 The name of your branch is $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span> and your repository is $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.repository <span class="token punctuation">}</span><span class="token punctuation">}</span>.&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check out repository code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;💡 The $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.repository <span class="token punctuation">}</span><span class="token punctuation">}</span> repository has been cloned to the runner.&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;🖥️ The workflow is now ready to test your code on the runner.&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> List files in the repository
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ls \${{ github.workspace }}</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;🍏 This job&#39;s status is $<span class="token punctuation">{</span><span class="token punctuation">{</span> job.status <span class="token punctuation">}</span><span class="token punctuation">}</span>.&quot;
  <span class="token key atrule">Demo-Actions2</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token comment"># 表示依赖，必须要在 Demo-Actions1 执行完之后，在执行该 job</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> Demo<span class="token punctuation">-</span>Actions1
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;这是第二步<span class="token punctuation">:</span>Demo<span class="token punctuation">-</span>Actions2&quot;
  <span class="token key atrule">Demo-Actions3</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token comment"># 表示依赖，必须要在 Demo-Actions1, Demo-Actions2 执行完之后，在执行该 job</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Demo<span class="token punctuation">-</span>Actions1<span class="token punctuation">,</span> Demo<span class="token punctuation">-</span>Actions2<span class="token punctuation">]</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;这是第三步<span class="token punctuation">:</span>Demo<span class="token punctuation">-</span>Actions3&quot;
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印我的问候
        <span class="token comment"># 指定环境变量</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">MY_CONST</span><span class="token punctuation">:</span> Hi<span class="token tag">!</span> My name is
          <span class="token key atrule">FIRST_NAME</span><span class="token punctuation">:</span> Tele
          <span class="token key atrule">LAST_NAME</span><span class="token punctuation">:</span> ctron
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;$MY_CONST $FIRST_NAME$LAST_NAME.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><blockquote><p>补充说明</p></blockquote><ul><li>jobs 中的 runs-on 字段指定 虚拟机环境为 ubuntu-latest, 是必填字段</li><li>jobs 中的 needs 字段指定 运行顺序，选填。如果不写，就并行运行任务</li><li>jobs 中 steps 字段指定每个 job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定某些字段 <ul><li>name: 步骤名称。如果没有指定 name 就直接取 run 的内容</li><li>run: 该步骤运行的命令</li><li>env: 该步骤所需的环境变量</li></ul></li><li><code>\${{ github.event_name }}</code> 取到的值是 <code>push</code>，也就是 on 指定的事件</li><li><code>\${{ runner.os }}</code> 取到的值是 <code>Linux</code></li><li><code>\${{ github.ref }}</code> 取到的值是 <code>refs/heads/master</code></li><li><code>\${{ github.repository }}</code> 取到的值是 <code>tgx1587900660/tgx-blog</code>，也就是仓库名</li><li><code>\${{ github.workspace }}</code> 取到的值是 <code>/home/runner/work/tgx-blog/tgx-blog</code></li><li><code>\${{ job.status }}</code> 取到的值是 <code>success</code>，指该 job 的状态</li></ul><blockquote><p>字段的说明图</p></blockquote><img src="`+p+'" alt="补充说明图" title="补充说明图"><blockquote><p>needs 字段效果图</p></blockquote><img src="'+c+`" alt="needs 字段效果图" title="needs 字段效果图"><ul><li>到此为止，Github Actions 运行的大概流程，就学习完成了。接下来，要完成 Vuepress 的部署实战。</li></ul><h2 id="_3-实现-vuepress-自动部署" tabindex="-1"><a class="header-anchor" href="#_3-实现-vuepress-自动部署"><span>3. 实现 Vuepress 自动部署</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>在 <code>github-actions-demo.yml</code> 平级目录新建一个 <code>docs.yml</code> 文件（可任起，只要是 .yml 结尾就行），并写入以下内容即可。每次 push 代码之后，以下内容就会被重跑。</p></div><ul><li>👇 这是 docs.yml 的 1.0.0 版本，实现了自动更新博客功能（随着 docs.yml 的更新，咱会了解更多的 workflow 知识）</li></ul><details class="custom-container details"><summary>点击查看 docs.yml 完整代码</summary><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 以下是实现自动化部署 Vuepress 博客的完整内容</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Docs
<span class="token key atrule">run-name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.actor <span class="token punctuation">}</span><span class="token punctuation">}</span> is deploying docs to github pages 🚀

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">My-Job1</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Build And Deploy Docs
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 获取 git 日志，用于博客底部更新信息</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> get git info
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token comment"># 设置 node 的版本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> set Node version
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;16&#39;</span>
      <span class="token comment"># 缓存 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache Dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>
      <span class="token comment"># 如果缓存没有命中，安装依赖</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
      <span class="token comment"># 打包生成 静态网页</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn build
      <span class="token comment"># 部署上线</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to gitHub pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>👇 这是 docs.yml 的 1.0.1 版本，新增了 strategy 变量及其获取方式、steps 步骤通过 id 来取值方式</li></ul><details class="custom-container details"><summary>点击查看 docs.yml 完整代码</summary><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Docs
<span class="token key atrule">run-name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.actor <span class="token punctuation">}</span><span class="token punctuation">}</span> is deploying docs to github pages 🚀

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">My-Job1</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Build And Deploy Docs
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token comment"># See supported Node.js release schedule at https://nodejs.org/en/about/releases/</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>16.x<span class="token punctuation">]</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 获取 git 日志，用于博客底部更新信息</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> get git info
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token comment"># 设置 node 的版本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token comment"># 缓存 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache Dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">id</span><span class="token punctuation">:</span> modules<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&#39;**/node_modules&#39;</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>modules<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token comment"># 如果缓存没有命中，安装依赖， cache-hit 是固定值</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.modules<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39; <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
      <span class="token comment"># 打包生成 静态网页</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn run build
      <span class="token comment"># 部署上线</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to gitHub pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>


</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,22),i=[o];function u(k,r){return s(),a("div",null,i)}const v=n(l,[["render",u],["__file","github-actions.html.vue"]]),m=JSON.parse('{"path":"/frontend/source/article/github-actions.html","title":"利用 Github Actions 自动部署博客","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 创建 workflows 文件夹","slug":"_1-创建-workflows-文件夹","link":"#_1-创建-workflows-文件夹","children":[]},{"level":2,"title":"2. 创建并书写 .yml 内容","slug":"_2-创建并书写-yml-内容","link":"#_2-创建并书写-yml-内容","children":[]},{"level":2,"title":"3. 实现 Vuepress 自动部署","slug":"_3-实现-vuepress-自动部署","link":"#_3-实现-vuepress-自动部署","children":[]}],"git":{"updatedTime":1682417707000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":14}]},"filePathRelative":"frontend/source/article/github-actions.md"}');export{v as comp,m as data};
