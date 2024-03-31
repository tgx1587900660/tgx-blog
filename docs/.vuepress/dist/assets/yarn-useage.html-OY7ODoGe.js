import{_ as n,o as e,c as a,e as s}from"./app-CkeFUswH.js";const l={},i=s(`<h1 id="yarn-包管理工具-的使用" tabindex="-1"><a class="header-anchor" href="#yarn-包管理工具-的使用"><span>yarn 包管理工具 的使用</span></a></h1><div class="custom-container tip"><p class="custom-container-title">说明</p><p>npm 是 node 默认的包管理工具，但因为各种版本问题，很多时候使用 npm 下载依赖包会出现问题。因此，就有了 yarn</p></div><h2 id="_1-yarn-是什么" tabindex="-1"><a class="header-anchor" href="#_1-yarn-是什么"><span>1. yarn 是什么？</span></a></h2><ul><li>yarn 是一个 包管理工具，作用和 npm 一样。</li><li>只是它们的内部实现不同，以及它们对于包的管理方式不同</li></ul><h2 id="_2-yarn-的安装与配置" tabindex="-1"><a class="header-anchor" href="#_2-yarn-的安装与配置"><span>2. yarn 的安装与配置</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>电脑上安装了 Node 之后，它会自动携带 npm ,但是不会携带 yarn, 所有我们需要手动安装 yarn</p></div><blockquote><p>这里需要先用 <code>npm -v</code> 检查一下 npm 是否正常</p></blockquote><h4 id="_1-全局安装-yarn" tabindex="-1"><a class="header-anchor" href="#_1-全局安装-yarn"><span>1. 全局安装 yarn</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 在终端执行以下命令，全局安装 yarn 包，以便使用 yarn 的命令 --&gt;</span>
npm i -g yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-检查-yarn-是否安装成功了" tabindex="-1"><a class="header-anchor" href="#_2-检查-yarn-是否安装成功了"><span>2. 检查 yarn 是否安装成功了</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 在终端执行以下命令，检查 yarn 的版本号
(正常的话，会显示一个点分十进制的版本号，形如 1.22.18 ) --&gt;</span>
yarn -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-配置-yarn-的安装源" tabindex="-1"><a class="header-anchor" href="#_3-配置-yarn-的安装源"><span>3. 配置 yarn 的安装源</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!-- 查看当前源（默认显示）https://registry.yarnpkg.com --&gt;</span>
  yarn config get registry

  <span class="token comment">&lt;!-- 修改源（我这里改成淘宝源） --&gt;</span>
  yarn config set registry https://registry.npm.taobao.org --global

  <span class="token comment">&lt;!-- 恢复默认源 --&gt;</span>
  yarn config set registry https://registry.yarnpkg.com --global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-yarn-的基本用法" tabindex="-1"><a class="header-anchor" href="#_3-yarn-的基本用法"><span>3. yarn 的基本用法</span></a></h2><h3 id="_1-初始化-package-json" tabindex="-1"><a class="header-anchor" href="#_1-初始化-package-json"><span>1. 初始化 package.json</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 作用和 npm init -y 差不多，都是用来生成 package.json 文件 --&gt;</span>
yarn init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-添加依赖包" tabindex="-1"><a class="header-anchor" href="#_2-添加依赖包"><span>2. 添加依赖包</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 作用和 npm install [package] 差不多，都是用来下载包的 --&gt;</span>
yarn add [package]

<span class="token comment">&lt;!-- 比如 我要下载一个 vuepress 包 --&gt;</span>
yarn add vuepress

<span class="token comment">&lt;!-- 指定版本号 --&gt;</span>
yarn add vuepress@1.9.7

<span class="token comment">&lt;!-- 添加到 devDependencies 中 --&gt;</span>
yarn add vuepress@1.9.7 -dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-升级依赖包" tabindex="-1"><a class="header-anchor" href="#_3-升级依赖包"><span>3. 升级依赖包</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>yarn upgrade [package]

<span class="token comment">&lt;!-- 比如 我要升级 vuepress 包 --&gt;</span>
yarn upgrade vuepress

<span class="token comment">&lt;!-- 升级到固定版本 --&gt;</span>
yarn upgrade vuepress@2.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-移除依赖包" tabindex="-1"><a class="header-anchor" href="#_4-移除依赖包"><span>4. 移除依赖包</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 相当于 npm uninstall [package] --&gt;</span>
yarn remove [package]

<span class="token comment">&lt;!-- 比如 我要删除 vuepress 包 --&gt;</span>
yarn remove vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-安装项目全部依赖" tabindex="-1"><a class="header-anchor" href="#_5-安装项目全部依赖"><span>5. 安装项目全部依赖</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 相当于 npm i，以下两条命令都可以 --&gt;</span>
yarn
yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),d=[i];function r(t,c){return e(),a("div",null,d)}const v=n(l,[["render",r],["__file","yarn-useage.html.vue"]]),p=JSON.parse('{"path":"/backend/node/yarn-useage.html","title":"yarn 包管理工具 的使用","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. yarn 是什么？","slug":"_1-yarn-是什么","link":"#_1-yarn-是什么","children":[]},{"level":2,"title":"2. yarn 的安装与配置","slug":"_2-yarn-的安装与配置","link":"#_2-yarn-的安装与配置","children":[]},{"level":2,"title":"3. yarn 的基本用法","slug":"_3-yarn-的基本用法","link":"#_3-yarn-的基本用法","children":[{"level":3,"title":"1. 初始化 package.json","slug":"_1-初始化-package-json","link":"#_1-初始化-package-json","children":[]},{"level":3,"title":"2. 添加依赖包","slug":"_2-添加依赖包","link":"#_2-添加依赖包","children":[]},{"level":3,"title":"3. 升级依赖包","slug":"_3-升级依赖包","link":"#_3-升级依赖包","children":[]},{"level":3,"title":"4. 移除依赖包","slug":"_4-移除依赖包","link":"#_4-移除依赖包","children":[]},{"level":3,"title":"5. 安装项目全部依赖","slug":"_5-安装项目全部依赖","link":"#_5-安装项目全部依赖","children":[]}]}],"git":{"updatedTime":1681896054000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":1}]},"filePathRelative":"backend/node/yarn-useage.md"}');export{v as comp,p as data};
