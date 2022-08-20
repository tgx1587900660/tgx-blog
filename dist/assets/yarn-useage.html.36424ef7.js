import{_ as e,o as n,c as a,d as s}from"./app.87218f9e.js";const i={},d=s(`<h1 id="yarn-\u5305\u7BA1\u7406\u5DE5\u5177\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#yarn-\u5305\u7BA1\u7406\u5DE5\u5177\u4F7F\u7528" aria-hidden="true">#</a> yarn \u5305\u7BA1\u7406\u5DE5\u5177\u4F7F\u7528</h1><h2 id="_1-yarn-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-yarn-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. yarn \u662F\u4EC0\u4E48\uFF1F</h2><ul><li>yarn \u662F\u4E00\u4E2A \u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u4F5C\u7528\u548C npm \u4E00\u6837\u3002</li><li>\u53EA\u662F\u5B83\u4EEC\u7684\u5185\u90E8\u5B9E\u73B0\u4E0D\u540C\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u5BF9\u4E8E\u5305\u7684\u7BA1\u7406\u65B9\u5F0F\u4E0D\u540C</li></ul><h2 id="_2-yarn-\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-yarn-\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> 2. yarn \u7684\u5B89\u88C5\u4E0E\u914D\u7F6E</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u7535\u8111\u4E0A\u5B89\u88C5\u4E86 Node \u4E4B\u540E\uFF0C\u5B83\u4F1A\u81EA\u52A8\u643A\u5E26 npm ,\u4F46\u662F\u4E0D\u4F1A\u643A\u5E26 yarn, \u6240\u6709\u6211\u4EEC\u9700\u8981\u624B\u52A8\u5B89\u88C5 yarn</p></div><blockquote><p>\u8FD9\u91CC\u9700\u8981\u5148\u7528 <code>npm -v</code> \u68C0\u67E5\u4E00\u4E0B npm \u662F\u5426\u6B63\u5E38</p></blockquote><h3 id="_1-\u5168\u5C40\u5B89\u88C5-yarn" tabindex="-1"><a class="header-anchor" href="#_1-\u5168\u5C40\u5B89\u88C5-yarn" aria-hidden="true">#</a> 1. \u5168\u5C40\u5B89\u88C5 yarn</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u5728\u7EC8\u7AEF\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5168\u5C40\u5B89\u88C5 yarn \u5305\uFF0C\u4EE5\u4FBF\u4F7F\u7528 yarn \u7684\u547D\u4EE4 --&gt;</span>
npm i -g yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u68C0\u67E5-yarn-\u662F\u5426\u5B89\u88C5\u6210\u529F\u4E86" tabindex="-1"><a class="header-anchor" href="#_2-\u68C0\u67E5-yarn-\u662F\u5426\u5B89\u88C5\u6210\u529F\u4E86" aria-hidden="true">#</a> 2. \u68C0\u67E5 yarn \u662F\u5426\u5B89\u88C5\u6210\u529F\u4E86</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u5728\u7EC8\u7AEF\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u68C0\u67E5 yarn \u7684\u7248\u672C\u53F7
(\u6B63\u5E38\u7684\u8BDD\uFF0C\u4F1A\u663E\u793A\u4E00\u4E2A\u70B9\u5206\u5341\u8FDB\u5236\u7684\u7248\u672C\u53F7\uFF0C\u5F62\u5982 1.22.18 ) --&gt;</span>
yarn -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u914D\u7F6E-yarn-\u7684\u5B89\u88C5\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E-yarn-\u7684\u5B89\u88C5\u6E90" aria-hidden="true">#</a> 3. \u914D\u7F6E yarn \u7684\u5B89\u88C5\u6E90</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>  <span class="token comment">&lt;!-- \u67E5\u770B\u5F53\u524D\u6E90\uFF08\u9ED8\u8BA4\u663E\u793A\uFF09https://registry.yarnpkg.com --&gt;</span>
  yarn config get registry

  <span class="token comment">&lt;!-- \u4FEE\u6539\u6E90\uFF08\u6211\u8FD9\u91CC\u6539\u6210\u6DD8\u5B9D\u6E90\uFF09 --&gt;</span>
  yarn config set registry https://registry.npm.taobao.org --global

  <span class="token comment">&lt;!-- \u6062\u590D\u9ED8\u8BA4\u6E90 --&gt;</span>
  yarn config set registry https://registry.yarnpkg.com --global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-yarn-\u7684\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-yarn-\u7684\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> 3. yarn \u7684\u57FA\u672C\u7528\u6CD5</h2><h3 id="_1-\u521D\u59CB\u5316-package-json" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u59CB\u5316-package-json" aria-hidden="true">#</a> 1. \u521D\u59CB\u5316 package.json</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u4F5C\u7528\u548C npm init -y \u5DEE\u4E0D\u591A\uFF0C\u90FD\u662F\u7528\u6765\u751F\u6210 package.json \u6587\u4EF6 --&gt;</span>
yarn init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u6DFB\u52A0\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 2. \u6DFB\u52A0\u4F9D\u8D56\u5305</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u4F5C\u7528\u548C npm install [package] \u5DEE\u4E0D\u591A\uFF0C\u90FD\u662F\u7528\u6765\u4E0B\u8F7D\u5305\u7684 --&gt;</span>
yarn add [package]

<span class="token comment">&lt;!-- \u6BD4\u5982 \u6211\u8981\u4E0B\u8F7D\u4E00\u4E2A vuepress \u5305 --&gt;</span>
yarn add vuepress

<span class="token comment">&lt;!-- \u6307\u5B9A\u7248\u672C\u53F7 --&gt;</span>
yarn add vuepress@1.9.7

<span class="token comment">&lt;!-- \u6DFB\u52A0\u5230 devDependencies \u4E2D --&gt;</span>
yarn add vuepress@1.9.7 -dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5347\u7EA7\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_3-\u5347\u7EA7\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 3. \u5347\u7EA7\u4F9D\u8D56\u5305</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>yarn upgrade [package]

<span class="token comment">&lt;!-- \u6BD4\u5982 \u6211\u8981\u5347\u7EA7 vuepress \u5305 --&gt;</span>
yarn upgrade vuepress

<span class="token comment">&lt;!-- \u5347\u7EA7\u5230\u56FA\u5B9A\u7248\u672C --&gt;</span>
yarn upgrade vuepress@2.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u79FB\u9664\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_4-\u79FB\u9664\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 4. \u79FB\u9664\u4F9D\u8D56\u5305</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u76F8\u5F53\u4E8E npm uninstall [package] --&gt;</span>
yarn remove [package]

<span class="token comment">&lt;!-- \u6BD4\u5982 \u6211\u8981\u5220\u9664 vuepress \u5305 --&gt;</span>
yarn remove vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u5B89\u88C5\u9879\u76EE\u5168\u90E8\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_5-\u5B89\u88C5\u9879\u76EE\u5168\u90E8\u4F9D\u8D56" aria-hidden="true">#</a> 5. \u5B89\u88C5\u9879\u76EE\u5168\u90E8\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u76F8\u5F53\u4E8E npm i\uFF0C\u4EE5\u4E0B\u4E24\u6761\u547D\u4EE4\u90FD\u53EF\u4EE5 --&gt;</span>
yarn
yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),r=[d];function l(c,t){return n(),a("div",null,r)}var v=e(i,[["render",l],["__file","yarn-useage.html.vue"]]);export{v as default};
