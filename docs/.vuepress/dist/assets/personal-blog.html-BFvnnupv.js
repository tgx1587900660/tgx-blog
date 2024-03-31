import{_ as s,o as n,c as e,e as a}from"./app-CkeFUswH.js";const l="/tgx-blog/assets/vuepress_catalogue-DY8jD4gF.png",i={},t=a(`<h1 id="使用-vuepress-搭建个人博客" tabindex="-1"><a class="header-anchor" href="#使用-vuepress-搭建个人博客"><span>使用 vuepress 搭建个人博客</span></a></h1><div class="custom-container tip"><p class="custom-container-title">起因</p><p>以前做笔记都是写在书本上，但随着新技术的探索，知识点不断增多，本子上根本写不下。 且笔记本太厚不好携带。因此有了搭建博客的想法。</p></div><h2 id="_1-技术选型" tabindex="-1"><a class="header-anchor" href="#_1-技术选型"><span>1.技术选型</span></a></h2><div class="custom-container tip"><p class="custom-container-title">选型依据</p><p>相比 Jekyll、Hugo、Hexo，我选择了 vuepress。如果你也具有以下需求，可以考虑使用它。</p></div><ul><li>想要快速上手。在短时间内完成博客搭建</li><li>注重内容。专注于文档内容，而非花哨的页面</li><li>多端适配。开发部署后，不管是手机、平板、还是 PC 端都可以随时查看</li></ul><h2 id="_2-开始搭建" tabindex="-1"><a class="header-anchor" href="#_2-开始搭建"><span>2.开始搭建</span></a></h2><h3 id="_1-新建项目文件夹" tabindex="-1"><a class="header-anchor" href="#_1-新建项目文件夹"><span>1.新建项目文件夹</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>也可以用鼠标手动新建一个文件夹，在这个文件夹内打开终端， 在这里，我直接用了终端命令新建文件夹，并切到该文件夹目录下</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>mkdir vuepress-blog
cd vuepress-blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-初始化包管理" tabindex="-1"><a class="header-anchor" href="#_2-初始化包管理"><span>2.初始化包管理</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>也可以用其他的包管理器，比如 yarn。在这里，我用了 npm 并使用它默认配置</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-安装-vuepress" tabindex="-1"><a class="header-anchor" href="#_3-安装-vuepress"><span>3.安装 vuepress</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>vuepress 局部安装就好，在这里我用了 cnpm 来安装，你可以直接使用 npm 安装。</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>cnpm install -D vuepress


<span class="token comment">&lt;!-- 此时 package.json 会多出这个(日后可能版本会变更，这里以 1.9.7 为例) --&gt;</span>
{
  &quot;devDependencies&quot;: {
    &quot;vuepress&quot;: &quot;^1.9.7&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-添加脚本" tabindex="-1"><a class="header-anchor" href="#_4-添加脚本"><span>4.添加脚本</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>在 package.json 的 scripts 下添加<code>dev</code>和<code>build</code>命令。</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>{
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;build&quot;: &quot;vuepress build docs&quot;
  }
}


<span class="token comment">&lt;!-- 推荐手动搭建项目结构，如果你照着官网来创建首页 README.md，有可能跑起来是乱码 --&gt;</span>
<span class="token comment">&lt;!-- 完成后，你应该保证项目大概长这样，请自建文件夹 --&gt;</span>
vuepress-blog           (项目根文件夹)
├── docs                (文档存放地)
│ ├── .vuepress         (配置目录)
│ │ ├── components      (自动注册的vue组件)
│ │ ├── public          (静态图片)
│ │ └── config.js       (vuepress配置)
│ │
│ └── README.md         (首页定制地)
|
├── package.json        (包相关)
└── package-lock.json   (包相关)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-终端跑起来-浏览器访问" tabindex="-1"><a class="header-anchor" href="#_5-终端跑起来-浏览器访问"><span>5.终端跑起来，浏览器访问</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。打开浏览器访问即可</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 使用以下命令启动项目 --&gt;</span>
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-定制博客内容" tabindex="-1"><a class="header-anchor" href="#_6-定制博客内容"><span>6.定制博客内容</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>百度搜索并打开 vuepress 中文文档，找到 <code>指南</code> 查看详细文档。要想定制 <code>.vuepress/config.js</code> 内容， 就要找到 <code>默认主题配置</code> 对应的文档。在这里，我就不当复读机了，但请你一定要搞明白<code>config.js</code>里面的<code>图片路径</code>和<code>文件路径匹配机制</code>。</p><p>值得一提的是，当你修改<code>vuepress的默认配置文件</code>后，需要重新<code>npm run dev</code>启动一下项目，才能生效。 因为我们的开发服务器是基于配置文件运行的，如果不重启项目，它依然使用上一次的配置文件，而不会发生更新。</p></div><ul><li>可以参考一下我的部分配置。</li></ul><details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 1.9.7版本的配置（日后可能会变动）</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 部署站点的基准路径, 默认是 /</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/tgx-blog/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 左上角的标题</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;telectron 的博客&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 网站的 SEO 描述</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;一个普通上班族的博客&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 需要被注入到 &lt;head&gt; 标签的内容</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token comment">// 添加一个 link 标签到 &lt;head&gt; 中</span>
      <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// link 标签具有以下属性</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;shortcut icon&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 路径指向 .vuepress/public</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/xiao.ico&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 指定 build 的输出目录, 默认打包到 docs/.vuepress/dist 下</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 现在会打包到与 docs 平级的目录下</span>
  <span class="token comment">// markdown 相关配置</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 给 .md 文件中每个代码块显示行号</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 插件</span>
  <span class="token comment">// plugins: [&#39;@vuepress/last-updated&#39;],</span>

  <span class="token comment">// vuepress 默认主题 的配置</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 左上角网站 Logo</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/img/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 顶部导航栏</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;前端学习&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 1️. 如果 link 为 &#39;/test/&#39;, vuepress 会去 docs/test 文件夹中查找 README.md</span>
          <span class="token comment">// 2. 如果 link 为 &#39;/test/README&#39;, 会出错404(即使有 README.md 文件)</span>
          <span class="token comment">// 3. 如果 link 为 &#39;/test/README.md&#39;, 会出错404(即使有 README.md 文件)</span>
          <span class="token comment">// 4. 如果 link 为 &#39;/test/test-001&#39;, vuepress 会去 docs/test 文件夹中查找 test-001.md</span>
          <span class="token comment">// 5. 如果 link 为 &#39;/test/test-001.md&#39;, vuepress 会去 docs/test 文件夹中查找 test-001.md</span>
          <span class="token comment">// { text: &#39;test&#39;, link: &#39;/test/test-001&#39; },</span>
          <span class="token comment">// 为了可读性, 我们将采取 方案4 来管理文章链接</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;vue2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/frontend/vue2/personal-blog&#39;</span> <span class="token punctuation">}</span>
          <span class="token comment">// { text: &#39;vue3&#39;, link: &#39;/frontend/vue3/&#39; }</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 侧边栏菜单(将来文章多了，可能会考虑把 nav 和 sidebar 抽成一个.js单独维护，你现在就可以这么做)</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 设置一级标题(子标题会从.md文档中自动提取)</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;使用 vuepress 搭建个人博客&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 对应的文章路径(nav 里面的 link 就跳到这里, 采取方案4)</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/frontend/vue2/personal-blog&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;资源整合&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/frontend/vue2/bk-open-source&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Git 命令收集&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/frontend/vue2/git-command&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 标题深度，2 表示提取 h2 和 h3 标题</span>
    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>

    <span class="token comment">// 是否启用页面滚动效果</span>
    <span class="token literal-property property">smoothScroll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 最后更新时间</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;最后更新时间&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 是否开启页面底部的 下一篇 链接</span>
    <span class="token literal-property property">nextLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否开启页面底部的 上一篇 链接</span>
    <span class="token literal-property property">prevLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 仓库链接文字</span>
    <span class="token literal-property property">repoLabel</span><span class="token operator">:</span> <span class="token string">&#39;Gitee 仓库&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 仓库地址</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;https://gitee.com/tgx-1587900660/tgx-blog&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_3-发布部署-这里有坑" tabindex="-1"><a class="header-anchor" href="#_3-发布部署-这里有坑"><span>3.发布部署 (这里有坑)</span></a></h2><h3 id="_1-正常流程" tabindex="-1"><a class="header-anchor" href="#_1-正常流程"><span>1. 正常流程</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>码云 Gitee 提供了一个 Git pages 服务，可以把静态页面直接部署在 Gitee 上。以实现让所有人访问，且不需要你自己购买服务器。</p><p>假设我的项目仓库地址是 <strong>https://gitee.com/tgx-1587900660/tgx-blog</strong></p><p>那么使用了 Git pages 服务后，就会自动生成一个在线地址，</p><p>形如：<strong>https://tgx-1587900660.gitee.io/tgx-blog</strong> 就可以让所有人访问了</p></div><ul><li><p>第一步：本地项目与云端仓库建立链接</p><ul><li>首先，我们的项目在本地搭建好，要使用 Gitee 服务，就要在线上先创建一个仓库</li><li>接着，让<code>线上仓库</code>与<code>本地仓库</code>建立连接（在新建线上仓库时，gitee 会有提示，它会让你在本地目录中运行 2 条终端命令，与远程仓库建立连接）</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 一定要确保你本地项目文件 .vuepress/config.js 中的
 base 为 &#39;/项目名/&#39;，形如 &#39;/tgx-blog/&#39; --&gt;</span>


<span class="token comment">&lt;!-- 例如：我的仓库地址如下，末尾 tgx-blog 是云端项目名 (那.vuepress/config.js中的
base 配置就是 &#39;/tgx-blog/&#39; --&gt;</span>
https://gitee.com/tgx-1587900660/tgx-blog
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第二步：本地打包</p><ul><li>运行打包命令， 把所有 md 文档打成静态的 html 文件</li><li>我打包到了 与 docs 同级的目录下，也就是根目录，方便部署。(具体打包路径设置，请看 第 2 节的第 6 点定制博客内容 配置文件 config.js)</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>npm run build

<span class="token comment">&lt;!-- 正常情况下，运行完成后，会生成一个 dist 静态资源目录 (如果你不给他换名字的话)
这个 dist 文件就是你将来要部署到线上的所有页面 --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>以下是打包后的目录结构</p><img src="`+l+`" alt="目录结构" title="目录结构"></li></ul></li><li><p>第三步：开启 Gitee pages 服务</p><ul><li>进入你线上码云项目仓库</li><li>看到与 <code>代码</code>、<code>Issues</code>、<code>Pull Requests</code>、<code>Wiki</code>、<code>统计</code> 平级的 tab 栏后面有个 <strong>服务</strong></li><li>点开 <strong>服务</strong> 里面的 <code>Gitee Pages</code></li><li>部署分支：选择 master 分支 (我就只有一个 master 分支)</li><li>部署目录：填写 dist 四个字母 <strong>(不要加 / 这类路径，不然会 404 或丢失样式)</strong></li><li>网站生成：点击部署，等待生成在线地址</li></ul></li><li><p>第四步：打开自己的网站，PC、手机都可以访问</p></li></ul><h3 id="_2-异常可能" tabindex="-1"><a class="header-anchor" href="#_2-异常可能"><span>2. 异常可能</span></a></h3><ul><li><p>错误一：部署后样式丢失了，点击链接 404 了</p><ul><li>检查你开启 Gitee pages 服务的时候 <strong>部署目录</strong> 是否填对了</li><li>检测你的 <code>.vuepress.config</code> 里面的 <code>base</code> 属性是否设对了</li></ul></li><li><p>错误二：<code>npm run dev</code> 正常，<code>npm run build</code> 报错</p><div class="custom-container tip"><p class="custom-container-title">报错说明</p><p>我以前学习 node.js 时，跟着老师学习系统环境变量时，设置过一个 <code>NODE_ENV=development</code></p><p>然而 vuepress 在你执行<code>npm run dev</code>和<code>npm run build</code>命令时，就会去查找你的系统环境变量，假如你曾经手动设置了<code>NODE_ENV=development</code>那不管你执行哪条命令，他都会以<code>development</code>模式运行打包，所以<code>dev</code>不报错<code>build</code>就报错了</p></div><blockquote><p>从哪里找到？--- 在电脑桌面 点击此电脑-右键点属性-点左边高级系统设置-点右下角环境变量-点系统环境变量 就可以修改 NODE_ENV 相关配置，修改后要重启下终端和项目</p></blockquote><ul><li>方案一：删掉这个环境变量，vuepress 会自动设置 NODE_ENV 的值 <strong>(我就是这样干的)</strong></li><li>方案二：每次 dev 和 build 时就设置一下 NODE_ENV 的值，但设置死了总有一边会报错</li><li>方案三：像 webpack 一样设置两种入口文件，手动设置 NODE_ENV 的值，但这有学习成本</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 这是我的报错内容 --&gt;</span>
Error: Cannot find module &#39;F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\dist\\manifest\\client.json&#39;
Require stack:
- F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\node_modules\\_@vuepress_core@1.9.7@@vuepress\\core\\lib\\node\\build\\index.js
- F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\node_modules\\_@vuepress_core@1.9.7@@vuepress\\core\\lib\\node\\App.js
- F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\node_modules\\_@vuepress_core@1.9.7@@vuepress\\core\\lib\\index.js
- F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\node_modules\\_vuepress@1.9.7@vuepress\\lib\\registerCoreCommands.js
- F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\node_modules\\_vuepress@1.9.7@vuepress\\cli.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:747:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Build.render (F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\node_modules\\_@vuepress_core@1.9.7@@vuepress\\core\\lib\\node\\build\\index.js:57:28)
    at runMicrotasks (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>anonymous</span><span class="token punctuation">&gt;</span></span>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async App.build (F:\\3.Project\\1.VS Code project\\5.vuepress-blog\\vuepress-blog\\node_modules\\_@vuepress_core@1.9.7@@vuepress\\core\\lib\\node\\App.js:499:5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,31),p=[t];function o(c,r){return n(),e("div",null,p)}const u=s(i,[["render",o],["__file","personal-blog.html.vue"]]),v=JSON.parse('{"path":"/frontend/source/article/personal-blog.html","title":"使用 vuepress 搭建个人博客","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1.技术选型","slug":"_1-技术选型","link":"#_1-技术选型","children":[]},{"level":2,"title":"2.开始搭建","slug":"_2-开始搭建","link":"#_2-开始搭建","children":[{"level":3,"title":"1.新建项目文件夹","slug":"_1-新建项目文件夹","link":"#_1-新建项目文件夹","children":[]},{"level":3,"title":"2.初始化包管理","slug":"_2-初始化包管理","link":"#_2-初始化包管理","children":[]},{"level":3,"title":"3.安装 vuepress","slug":"_3-安装-vuepress","link":"#_3-安装-vuepress","children":[]},{"level":3,"title":"4.添加脚本","slug":"_4-添加脚本","link":"#_4-添加脚本","children":[]},{"level":3,"title":"5.终端跑起来，浏览器访问","slug":"_5-终端跑起来-浏览器访问","link":"#_5-终端跑起来-浏览器访问","children":[]},{"level":3,"title":"6.定制博客内容","slug":"_6-定制博客内容","link":"#_6-定制博客内容","children":[]}]},{"level":2,"title":"3.发布部署 (这里有坑)","slug":"_3-发布部署-这里有坑","link":"#_3-发布部署-这里有坑","children":[{"level":3,"title":"1. 正常流程","slug":"_1-正常流程","link":"#_1-正常流程","children":[]},{"level":3,"title":"2. 异常可能","slug":"_2-异常可能","link":"#_2-异常可能","children":[]}]}],"git":{"updatedTime":1681876227000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":1}]},"filePathRelative":"frontend/source/article/personal-blog.md"}');export{u as comp,v as data};
