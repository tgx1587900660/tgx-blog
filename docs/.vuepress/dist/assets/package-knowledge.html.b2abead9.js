import{_ as n,o as s,c as a,d as e}from"./app.1651efa3.js";const t={},p=e(`<h1 id="\u7B2C\u4E09\u65B9\u5305-\u76F8\u5173\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u5305-\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u5305 \u76F8\u5173\u77E5\u8BC6</h1><h2 id="_1-\u5305\u7BA1\u7406\u5DE5\u5177-npm" tabindex="-1"><a class="header-anchor" href="#_1-\u5305\u7BA1\u7406\u5DE5\u5177-npm" aria-hidden="true">#</a> 1. \u5305\u7BA1\u7406\u5DE5\u5177 npm</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>npm \u662F\u4E00\u4E2A\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u5B89\u88C5 node \u65F6\u4F1A\u81EA\u52A8\u5B89\u88C5\u3002 \u4F7F\u7528 npm \u4E0B\u8F7D\u5305\uFF0C\u9ED8\u8BA4\u662F\u4ECE\u56FD\u5916\u62C9\u53D6\u8D44\u6E90\u7684\uFF0C\u901F\u5EA6\u6162\u3002\u53EF\u4EE5\u5207\u6362\u4E3A <strong>\u56FD\u5185\u6DD8\u5B9D\u955C\u50CF</strong> \u63D0\u5347\u4E0B\u8F7D\u901F\u5EA6</p></div><h3 id="_1-\u76F4\u63A5\u5207\u6362-npm-\u4E0B\u8F7D\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_1-\u76F4\u63A5\u5207\u6362-npm-\u4E0B\u8F7D\u5730\u5740" aria-hidden="true">#</a> 1. \u76F4\u63A5\u5207\u6362 npm \u4E0B\u8F7D\u5730\u5740</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u67E5\u770B\u5F53\u524D\u4E0B\u8F7D\u5305\u7684\u955C\u50CF\u6E90 --&gt;</span>
npm config get registry

<span class="token comment">&lt;!-- \u5C06\u4E0B\u8F7D\u5305\u7684\u955C\u50CF\u6E90\u5207\u6362\u4E3A \u6DD8\u5B9D\u955C\u50CF --&gt;</span>
npm config set registry=https://registry.npm.taobao.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u501F\u52A9-nrm-\u5207\u6362-npm-\u7684\u4E0B\u8F7D\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-\u501F\u52A9-nrm-\u5207\u6362-npm-\u7684\u4E0B\u8F7D\u5730\u5740" aria-hidden="true">#</a> 2. \u501F\u52A9 nrm \u5207\u6362 npm \u7684\u4E0B\u8F7D\u5730\u5740</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u5168\u5C40\u5B89\u88C5 nrm --&gt;</span>
npm i nrm -g

<span class="token comment">&lt;!-- \u67E5\u770B\u6240\u6709\u53EF\u7528\u7684 \u955C\u50CF\u5730\u5740 --&gt;</span>
nrm ls

<span class="token comment">&lt;!-- \u4F7F\u7528\u67D0\u4E2A \u955C\u50CF\u5730\u5740 --&gt;</span>
nrm use taobao  \uFF08\u8FD9\u91CC\u4F7F\u7528 \u6DD8\u5B9D\u5730\u5740\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u8FD9\u4E2A\u63D2\u4EF6\u7684\u547D\u4EE4\u65F6\u6709\u53EF\u80FD\u51FA\u9519</li></ul><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u9519\u8BEF\u8BE6\u60C5\u53CA\u89E3\u51B3\u65B9\u6848</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u89E3\u51B3\u65B9\u6848 \u5206\u4E09\u6B65</span>
<span class="token comment">// 1. \u627E\u5230 nrm \u7684\u4F4D\u7F6E C:\\Users\\\u4F60\u7684\u7535\u8111\u7528\u6237\u540D\\AppData\\Roaming\\npm\\node_modules\\nrm</span>
<span class="token comment">// 2. \u627E\u5230 cli.js \u7684\u7B2C 17 \u884C\uFF08\u6211\u7684 nrm \u7248\u672C\u662F 1.2.1\uFF09</span>
<span class="token comment">// 3. \u505A\u51FA\u4EE5\u4E0B\u53D8\u66F4\u5E76\u4FDD\u5B58\u5373\u53EF</span>
<span class="token comment">// \u62A5\u9519\u7684\uFF1Aconst NRMRC = path.join(p<wbr>rocess.env.HOME, &#39;.nrmrc&#39;); // 2021/2/9\u65E5 \u66F4\u6539</span>
<span class="token comment">// \u6B63\u5E38\u7684\uFF1Aconst NRMRC = path.join(p<wbr>rocess.env[(process.platform == &#39;win32&#39;) ? &#39;USERPROFILE&#39; : &#39;HOME&#39;], &#39;.nrmrc&#39;);</span>



<span class="token comment">// \u4EE5\u4E0B\u662F \u4F7F\u7528 nrm ls \u547D\u4EE4\u65F6\u7684\u62A5\u9519\u5185\u5BB9</span>
<span class="token punctuation">[</span>TypeError <span class="token punctuation">[</span><span class="token constant">ERR_INVALID_ARG_TYPE</span><span class="token punctuation">]</span><span class="token operator">:</span> The <span class="token string">&quot;path&quot;</span> argument must be <span class="token keyword">of</span> type string<span class="token punctuation">.</span> Received <span class="token keyword">undefined</span>
  at <span class="token function">validateString</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>validators<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">122</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">)</span>
  at Object<span class="token punctuation">.</span><span class="token function">join</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">375</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">)</span>
  at Object<span class="token punctuation">.</span><span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token constant">C</span><span class="token operator">:</span>\\Users\\<span class="token number">2019</span>\\AppData\\Roaming\\npm\\node_modules\\nrm\\cli<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">17</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">)</span>
  at Module<span class="token punctuation">.</span><span class="token function">_compile</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>cjs<span class="token operator">/</span>loader<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">1085</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">)</span>
  at Object<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>_extensions<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">js</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>cjs<span class="token operator">/</span>loader<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">1114</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">)</span>
  at Module<span class="token punctuation">.</span><span class="token function">load</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>cjs<span class="token operator">/</span>loader<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">950</span><span class="token operator">:</span><span class="token number">32</span><span class="token punctuation">)</span>
  at Function<span class="token punctuation">.</span>Module<span class="token punctuation">.</span><span class="token function">_load</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>cjs<span class="token operator">/</span>loader<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">791</span><span class="token operator">:</span><span class="token number">14</span><span class="token punctuation">)</span>
  at Function<span class="token punctuation">.</span>executeUserEntryPoint <span class="token punctuation">[</span><span class="token keyword">as</span> runMain<span class="token punctuation">]</span> <span class="token punctuation">(</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>run_main<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">72</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">)</span>
  at internal<span class="token operator">/</span>main<span class="token operator">/</span>run_main_module<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">17</span><span class="token operator">:</span><span class="token number">47</span>
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;ERR_INVALID_ARG_TYPE&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_2-\u5305-\u7684\u7248\u672C\u7BA1\u7406\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_2-\u5305-\u7684\u7248\u672C\u7BA1\u7406\u89C4\u8303" aria-hidden="true">#</a> 2. \u5305 \u7684\u7248\u672C\u7BA1\u7406\u89C4\u8303</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u5305\u7684\u7248\u672C\u53F7\u662F\u4EE5\u201C\u70B9\u5206\u5341\u8FDB\u5236\u201D\u5F62\u5F0F\u8FDB\u884C\u5B9A\u4E49\u7684\uFF0C\u603B\u5171\u6709\u4E09\u4F4D\u6570\u5B57\uFF0C\u4F8B\u5982 2.24.0 \u5176\u4E2D\u6BCF\u4E00\u4F4D\u6570\u5B57\u6240\u4EE3\u8868\u7684\u7684\u542B\u4E49\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C 1 \u4F4D\u6570\u5B57\uFF1A\u5927\u7248\u672C</li><li>\u7B2C 2 \u4F4D\u6570\u5B57\uFF1A\u529F\u80FD\u7248\u672C</li><li>\u7B2C 3 \u4F4D\u6570\u5B57\uFF1ABug \u4FEE\u590D\u7248\u672C</li></ul><p>\u7248\u672C\u53F7\u63D0\u5347\u7684\u89C4\u5219\uFF1A<strong>\u53EA\u8981\u524D\u9762\u7684\u7248\u672C\u53F7\u589E\u957F\u4E86\uFF0C\u5219\u540E\u9762\u7684\u7248\u672C\u53F7\u5F52\u96F6</strong></p></div><h2 id="_3-\u5305-\u7684\u5185\u90E8\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-\u5305-\u7684\u5185\u90E8\u7ED3\u6784" aria-hidden="true">#</a> 3. \u5305 \u7684\u5185\u90E8\u7ED3\u6784</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u4E00\u4E2A\u89C4\u8303\u7684\u5305\uFF0C\u5B83\u7684\u7EC4\u6210\u7ED3\u6784\uFF0C\u5FC5\u987B\u7B26\u5408\u4EE5\u4E0B 3 \u70B9\u8981\u6C42\uFF1A</p><ul><li>\u2460 \u5305\u5FC5\u987B\u4EE5\u5355\u72EC\u7684\u76EE\u5F55\u800C\u5B58\u5728</li><li>\u2461 \u5305\u7684\u9876\u7EA7\u76EE\u5F55\u4E0B\u8981\u5FC5\u987B\u5305\u542B package.json \u8FD9\u4E2A\u5305\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6</li><li>\u2462 package.json \u4E2D\u5FC5\u987B\u5305\u542B name\uFF0Cversion\uFF0Cmain \u8FD9\u4E09\u4E2A\u5C5E\u6027\uFF0C\u5206\u522B\u4EE3\u8868\u5305\u7684\u540D\u5B57\u3001\u7248\u672C\u53F7\u3001\u5305\u7684\u5165\u53E3\u3002 <ul><li>\u5176\u4E2D main \u8282\u70B9\u7528\u6765\u6307\u5B9A <strong>\u5916\u754C\u8FDB\u884C\u5BFC\u5165\u65F6\uFF0C\u8981\u5BFC\u5165\u7684\u90A3\u4E2A js \u6587\u4EF6\u8DEF\u5F84</strong></li></ul></li></ul></div><h2 id="_4-\u5F00\u53D1\u4E00\u4E2A\u81EA\u5DF1\u7684-npm-\u5305" tabindex="-1"><a class="header-anchor" href="#_4-\u5F00\u53D1\u4E00\u4E2A\u81EA\u5DF1\u7684-npm-\u5305" aria-hidden="true">#</a> 4. \u5F00\u53D1\u4E00\u4E2A\u81EA\u5DF1\u7684 npm \u5305</h2><div class="custom-container tip"><p class="custom-container-title">\u6B65\u9AA4\u8BF4\u660E</p><p>\u8981\u5F00\u53D1\u5E76\u5728 npm \u7F51\u7AD9\u4E0A\u53D1\u5E03\u4E00\u6B3E\u81EA\u5DF1\u7684 npm \u5305\uFF0C\u8FD9\u91CC\u4EE5<strong>\u5F00\u53D1\u4E00\u4E2A\u8F6C\u4E49html\u6587\u4EF6\u7684\u5305\u4E3A\u4F8B</strong>\uFF0C\u603B\u5171\u5206\u4E3A\u4EE5\u4E0B 9 \u4E2A\u6B65\u9AA4\u3002</p></div><h3 id="_1-\u521D\u59CB\u5316-\u5305-\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u59CB\u5316-\u5305-\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> 1. \u521D\u59CB\u5316 \u5305 \u9879\u76EE\u7ED3\u6784</h3><ul><li>\u6587\u4EF6\u5939\u5E94\u8BE5\u5305\u542B\uFF1A <ul><li>package.json --------------\u4F9D\u8D56\u7BA1\u7406\u6587\u4EF6</li><li>README.md -----------------\u8BF4\u660E\u6587\u6863</li><li>index.js ------------------\u5305\u7684\u5165\u53E3\u6587\u4EF6</li></ul></li></ul><h3 id="_2-\u5728\u5404\u4E2A\u6A21\u5757\u4E2D\u7F16\u5199\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#_2-\u5728\u5404\u4E2A\u6A21\u5757\u4E2D\u7F16\u5199\u903B\u8F91" aria-hidden="true">#</a> 2. \u5728\u5404\u4E2A\u6A21\u5757\u4E2D\u7F16\u5199\u903B\u8F91</h3><h3 id="_3-\u5728-index-js-\u96C6\u4E2D\u5F15\u5165\u6A21\u5757\u5E76\u66B4\u9732" tabindex="-1"><a class="header-anchor" href="#_3-\u5728-index-js-\u96C6\u4E2D\u5F15\u5165\u6A21\u5757\u5E76\u66B4\u9732" aria-hidden="true">#</a> 3. \u5728 index.js \u96C6\u4E2D\u5F15\u5165\u6A21\u5757\u5E76\u66B4\u9732</h3><h3 id="_4-\u7F16\u5199-readme-md-\u8BF4\u660E\u6587\u6863-\u8FD9\u91CC\u4EE5html\u6587\u4EF6\u5904\u7406\u5305\u4E3A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-\u7F16\u5199-readme-md-\u8BF4\u660E\u6587\u6863-\u8FD9\u91CC\u4EE5html\u6587\u4EF6\u5904\u7406\u5305\u4E3A\u4F8B" aria-hidden="true">#</a> 4. \u7F16\u5199 README.md \u8BF4\u660E\u6587\u6863(\u8FD9\u91CC\u4EE5html\u6587\u4EF6\u5904\u7406\u5305\u4E3A\u4F8B)</h3><ul><li>\u81F3\u5C11\u5305\u542B\u4EE5\u4E0B 6 \u90E8\u5206\uFF1A <ul><li>\u5B89\u88C5\u65B9\u5F0F</li><li>\u5BFC\u5165\u65B9\u5F0F</li><li>\u683C\u5F0F\u5316\u65F6\u95F4</li><li>\u8F6C\u4E49 HTML \u4E2D\u7684\u7279\u6B8A\u5B57\u7B26</li><li>\u8FD8\u539F HTML \u4E2D\u7684\u7279\u6B8A\u5B57\u7B26</li><li>\u5F00\u6E90\u534F\u8BAE</li></ul></li></ul><h3 id="_5-\u6CE8\u518C-npm-\u5B98\u7F51\u7684\u5E10\u53F7" tabindex="-1"><a class="header-anchor" href="#_5-\u6CE8\u518C-npm-\u5B98\u7F51\u7684\u5E10\u53F7" aria-hidden="true">#</a> 5. \u6CE8\u518C npm \u5B98\u7F51\u7684\u5E10\u53F7</h3><ul><li>\u53BB npm \u5B98\u7F51\u4E0A\u6CE8\u518C\u4E00\u4E2A\u81EA\u5DF1\u7684\u5E10\u53F7\uFF08\u6CE8\u518C\u5E10\u53F7\u662F\u4E3A\u4E86\u80FD\u5728\u7EC8\u7AEF\u767B\u5F55\uFF09</li></ul><h3 id="_6-\u5728\u7EC8\u7AEF\u767B\u5F55\u81EA\u5DF1\u7684-npm-\u5E10\u53F7" tabindex="-1"><a class="header-anchor" href="#_6-\u5728\u7EC8\u7AEF\u767B\u5F55\u81EA\u5DF1\u7684-npm-\u5E10\u53F7" aria-hidden="true">#</a> 6. \u5728\u7EC8\u7AEF\u767B\u5F55\u81EA\u5DF1\u7684 npm \u5E10\u53F7</h3><ul><li>\u5728 npm login \u767B\u5F55\u4E4B\u524D\u9700\u8981\u628A \u4E0B\u8F7D\u6E90 \u5207\u5230 npm \u7684\u5B98\u65B9\u5730\u5740\uFF08\u800C\u4E0D\u662F\u6DD8\u5B9D\u5730\u5740\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8981\u628A\u5305\u53D1\u5E03\u5230 npm \u6E90\u7F51\u7AD9\uFF09</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u8FD0\u884C login \u547D\u4EE4\u5F00\u59CB\u767B\u5F55 --&gt;</span>
npm login

<span class="token comment">&lt;!-- \u7136\u540E\u6309\u63D0\u793A\u8F93\u5165\uFF1A --&gt;</span>
1. \u7528\u6237\u540D
2. \u5BC6\u7801(\u5BC6\u7801\u662F\u76F2\u6253\u7684)
3. \u90AE\u7BB1\uFF08\u7B2C\u4E00\u6B21\u767B\u5F55\u53EF\u80FD\u8981\u9A8C\u8BC1\u90AE\u7BB1\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u628A\u5305\u53D1\u5E03\u5230-npm-\u4E0A" tabindex="-1"><a class="header-anchor" href="#_7-\u628A\u5305\u53D1\u5E03\u5230-npm-\u4E0A" aria-hidden="true">#</a> 7. \u628A\u5305\u53D1\u5E03\u5230 npm \u4E0A</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u6210\u529F\u767B\u5F55\u540E\uFF0C\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55 \u8FD0\u884C publish \u547D\u4EE4\u5373\u53EF\u5F00\u59CB\u53D1\u5305 --&gt;</span>
npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u53BB-npm-\u5B98\u7F51\u67E5\u770B\u81EA\u5DF1\u53D1\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#_8-\u53BB-npm-\u5B98\u7F51\u67E5\u770B\u81EA\u5DF1\u53D1\u7684\u5305" aria-hidden="true">#</a> 8. \u53BB npm \u5B98\u7F51\u67E5\u770B\u81EA\u5DF1\u53D1\u7684\u5305</h3><ul><li>\u5B8C\u6210\u53D1\u5E03\uFF08\u6B64\u65F6\u53EF\u4EE5\u5728 npm \u641C\u5230\u81EA\u5DF1\u7684\u5305\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u5728\u672C\u5730 npm install xxx \u4F7F\u7528\u4E86\uFF09</li></ul><h3 id="_9-\u5220\u9664-npm-\u5305" tabindex="-1"><a class="header-anchor" href="#_9-\u5220\u9664-npm-\u5305" aria-hidden="true">#</a> 9. \u5220\u9664 npm \u5305</h3><ul><li><strong>npm unpublish \u53EA\u80FD\u5220\u9664 72 \u5C0F\u65F6\u5185\u7684\u5305</strong></li><li><strong>npm unpublish \u5220\u9664\u7684\u5305 24 \u5C0F\u65F6\u5185\u4E0D\u80FD\u518D\u6B21\u53D1\u5E03</strong></li><li><strong>\u53D1\u5305\u9700\u8981\u614E\u91CD\uFF0C\u5C3D\u91CF\u4E0D\u53D1\u6CA1\u6709\u610F\u4E49\u7684\u5305</strong></li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55 \u8FD0\u884C unpublish \u547D\u4EE4\u5373\u53EF\u5F00\u59CB\u5220\u5305 --&gt;</span>
npm unpublish \u5305\u540D --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,33),l=[p];function i(o,r){return s(),a("div",null,l)}var d=n(t,[["render",i],["__file","package-knowledge.html.vue"]]);export{d as default};
