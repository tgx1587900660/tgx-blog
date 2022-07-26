import{_ as l,o as t,c as i,a as s,b as o,w as r,e as a,d as n,r as c}from"./app.e5f32f9f.js";const d={},p=a('<h1 id="sql-\u8BED\u8A00-\u76F8\u5173\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#sql-\u8BED\u8A00-\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a> SQL \u8BED\u8A00 \u76F8\u5173\u77E5\u8BC6</h1><div class="custom-container tip"><p class="custom-container-title">\u680F\u76EE\u8BF4\u660E</p><p>\u672C\u680F\u76EE\u6536\u96C6\u4E86 <strong>SQL \u7F16\u7A0B\u8BED\u8A00</strong> \u7684\u76F8\u5173\u77E5\u8BC6</p></div><h2 id="_1-\u4EC0\u4E48\u662F-sql" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F-sql" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F SQL\uFF1F</h2><div class="custom-container tip"><p class="custom-container-title">\u6982\u5FF5</p><p>SQL\uFF08Structured Query Language\uFF09\u5373 <strong>\u7ED3\u6784\u5316\u67E5\u8BE2\u8BED\u8A00</strong>\uFF0C\u4E13\u95E8\u7528\u6765 <strong>\u8BBF\u95EE\u548C\u5904\u7406\u6570\u636E\u5E93</strong> \u7684\u7F16\u7A0B\u8BED\u8A00\u3002 \u80FD\u591F\u8BA9\u6211\u4EEC\u4EE5\u7F16\u7A0B\u7684\u5F62\u5F0F\uFF0C\u64CD\u4F5C\u6570\u636E\u5E93\u91CC\u9762\u7684\u6570\u636E\u3002</p></div><ul><li>\u4E09\u4E2A\u8981\u70B9\uFF1A <ul><li>SQL \u662F\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\uFF0C\u7528\u6765\u64CD\u4F5C\u6570\u636E\u5E93</li><li>\u4F7F\u7528 SQL \u8BED\u8A00\u7F16\u5199\u51FA\u6765\u7684\u4EE3\u7801\uFF0C\u53EB\u505A SQL \u8BED\u53E5</li><li>SQL \u8BED\u8A00\u53EA\u80FD\u5728\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u4F7F\u7528\uFF08\u4F8B\u5982 MySQL\u3001Oracle\u3001SQL Server\uFF09\u3002\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF08\u4F8B\u5982 Mongodb\uFF09 \u4E0D\u652F\u6301 SQL \u8BED\u8A00</li></ul></li></ul><h2 id="_2-sql-\u5177\u4F53\u80FD\u505A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-sql-\u5177\u4F53\u80FD\u505A\u4EC0\u4E48" aria-hidden="true">#</a> 2. SQL \u5177\u4F53\u80FD\u505A\u4EC0\u4E48\uFF1F</h2>',6),u={class:"custom-container tip"},m=s("p",{class:"custom-container-title"},"\u4F5C\u7528",-1),k=s("li",null,[n("\u5BF9\u6570\u636E\u5E93\u8FDB\u884C "),s("strong",null,"\u589E\u5220\u6539\u67E5")],-1),v=s("li",null,"\u521B\u5EFA \u6570\u636E\u5E93",-1),h=s("li",null,"\u521B\u5EFA \u6570\u636E\u5E93\u7684\u8868",-1),b=s("li",null,"\u53EF\u5728\u6570\u636E\u5E93\u4E2D\u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B\u3001\u89C6\u56FE \u7B49\u7B49",-1),g=n("\u8981\u5728 node \u9879\u76EE\u4E2D\u4F7F\u7528 sql \u8BED\u53E5\u64CD\u4F5C MySQL \u6570\u636E\u5E93\uFF0C\u67E5\u770B "),y=n("\u8FD9\u7BC7\u6587\u7AE0"),w=n(" \u7684\u3010mysql \u4E2D\u95F4\u4EF6\u3011\u7AE0\u8282"),E=a(`<h2 id="_3-sql-\u8BED\u6CD5\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_3-sql-\u8BED\u6CD5\u89C4\u5219" aria-hidden="true">#</a> 3. SQL \u8BED\u6CD5\u89C4\u5219</h2><div class="custom-container tip"><p class="custom-container-title">\u91CD\u8981</p><p>SQL \u4E2D\u7684 <strong>\u5173\u952E\u5B57</strong> \u5BF9\u5927\u5C0F\u5199\u4E0D\u654F\u611F</p></div><h3 id="_1-\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> 1. \u67E5\u8BE2\u6570\u636E</h3><div class="custom-container tip"><p class="custom-container-title">\u5173\u952E\u5B57 SELECT</p><ul><li>SELECT \u8BED\u53E5\u7528\u4E8E <strong>\u4ECE\u8868\u4E2D\u67E5\u8BE2\u6570\u636E</strong>\u3002\u6267\u884C\u7684\u7ED3\u679C\u88AB\u5B58\u50A8\u5728\u4E00\u4E2A <strong>\u7ED3\u679C\u8868</strong> \u4E2D\uFF08\u79F0\u4E3A\u7ED3\u679C\u96C6\uFF09</li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B SELECT \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u6CE8\u91CA\u4F7F\u7528 &#39;--&#39; \u683C\u5F0F</span>

<span class="token comment">-- 1. \u4ECE \u6307\u5B9A\u7684 \u8868\u4E2D \u67E5\u8BE2 \u6240\u6709\u5217\u6570\u636E</span>
<span class="token comment">-- \u8BED\u6CD5\uFF1Aselect * from \u8868\u540D\u79F0</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u4ECE users \u8FD9\u4E2A\u8868\u4E2D\u67E5\u8BE2 \u6240\u6709\u7684\u5217\u6570\u636E</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users

<span class="token comment">-- 2. \u4ECE \u6307\u5B9A\u7684 \u8868\u4E2D \u67E5\u8BE2 \u67D0\u4E00\u5217\u6570\u636E</span>
<span class="token comment">-- \u8BED\u6CD5\uFF1Aselect \u5217\u540D\u79F0 from \u8868\u540D\u79F0</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u4ECE users \u8FD9\u4E2A\u8868\u4E2D\u67E5\u8BE2 username \u8FD9 1 \u5217</span>
<span class="token keyword">select</span> username <span class="token keyword">from</span> users

<span class="token comment">-- 3. \u4ECE \u6307\u5B9A\u7684 \u8868\u4E2D \u67E5\u8BE2 \u591A\u5217\u6570\u636E</span>
<span class="token comment">-- \u8BED\u6CD5\uFF1Aselect \u5217\u540D\u79F01, \u5217\u540D\u79F02 from \u8868\u540D\u79F0\uFF08\u7528\u82F1\u6587\u9017\u53F7\u9694\u5F00\uFF09</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u4ECE users \u8FD9\u4E2A\u8868\u4E2D\u67E5\u8BE2 uname, pwd \u8FD9 2 \u5217</span>
<span class="token keyword">select</span> uname<span class="token punctuation">,</span> pwd <span class="token keyword">from</span> users
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-\u589E\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-\u589E\u52A0\u6570\u636E" aria-hidden="true">#</a> 2. \u589E\u52A0\u6570\u636E</h3><div class="custom-container tip"><p class="custom-container-title">\u5173\u952E\u5B57 INSERT INTO</p><ul><li>INSERT INTO \u8BED\u53E5\u7528\u4E8E <strong>\u4ECE\u8868\u4E2D\u63D2\u5165\u65B0\u6570\u636E\u884C</strong>\u3002</li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B INSERT INTO \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 1. \u5411 \u6307\u5B9A\u8868 \u4E2D \u589E\u52A0 \u4E00\u6761\u6570\u636E\u884C</span>
<span class="token comment">-- \u8BED\u6CD5\uFF1Ainsert into \u8868\u540D (\u5217\u540D1, \u5217\u540D2) values (\u5217\u503C1, \u5217\u503C2)</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u5411\u8868 users \u4E2D \u589E\u52A0\u4E00\u884C\u6570\u636E\uFF0C\u5176 username \u662F &#39;tgx&#39;\uFF0Cpassword \u662F &#39;2121236&#39;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> users <span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;tgx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2121236&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> 3. \u66F4\u65B0\u6570\u636E</h3><div class="custom-container tip"><p class="custom-container-title">\u5173\u952E\u5B57 UPDATE SET</p><ul><li>UPDATE SET \u8BED\u53E5\u7528\u4E8E <strong>\u4ECE\u8868\u4E2D\u66F4\u65B0\u6570\u636E</strong>\u3002</li><li>WHERE \u8BED\u53E5\u7528\u4E8E \u9650\u5B9A\u9009\u62E9\u6807\u51C6(\u4F8B\u5982 \u6307\u5B9A id \u53F7)</li><li><strong>\u4E00\u5B9A\u8981\u52A0 WHERE \u8BED\u53E5\uFF0C\u5426\u5219\u4F1A\u66F4\u65B0\u6574\u4E2A\u8868\u7684\u6570\u636E\uFF01\uFF01</strong></li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B UPDATE SET \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 1. \u5411 \u6307\u5B9A\u8868 \u4E2D \u66F4\u65B0 \u67D0\u4E00\u884C\u7684 \u4E00\u5217\u6570\u636E</span>
<span class="token comment">-- \u8BED\u6CD5: update \u8868\u540D set \u5217\u540D1 = \u65B0\u503C where \u5217\u540D2 = \u5217\u503C</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u4FEE\u6539\u8868 users \u4E2D id \u4E3A 4 \u8FD9\u6761\u6570\u636E\u7684 password \u4E3A &#39;888&#39;</span>
<span class="token keyword">update</span> users <span class="token keyword">set</span> password<span class="token operator">=</span><span class="token string">&#39;888&#39;</span> <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">4</span>

<span class="token comment">-- 2. \u5411 \u6307\u5B9A\u8868 \u4E2D \u66F4\u65B0 \u67D0\u4E00\u884C\u7684 \u591A\u5217\u6570\u636E</span>
<span class="token comment">-- \u8BED\u6CD5: update \u8868\u540D set \u5217\u540D1 = \u65B0\u503C, \u5217\u540D2 = \u65B0\u503C where \u5217\u540D2 = \u5217\u503C</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u4FEE\u6539\u8868 users \u4E2D id\u4E3A4 \u8FD9\u6761\u6570\u636E\u7684 password\u4E3A&#39;888&#39;, status\u4E3A1</span>
<span class="token keyword">update</span> users <span class="token keyword">set</span> password<span class="token operator">=</span><span class="token string">&#39;920&#39;</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">4</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_4-\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> 4. \u5220\u9664\u6570\u636E</h3><div class="custom-container tip"><p class="custom-container-title">\u5173\u952E\u5B57 DELETE</p><ul><li>DELETE \u8BED\u53E5\u7528\u4E8E <strong>\u4ECE\u8868\u4E2D\u5220\u9664\u6570\u636E</strong>\u3002</li><li>WHERE \u8BED\u53E5\u7528\u4E8E \u9650\u5B9A\u9009\u62E9\u6807\u51C6(\u4F8B\u5982 \u6307\u5B9A id \u53F7)</li><li><strong>\u4E00\u5B9A\u8981\u52A0 WHERE \u8BED\u53E5\uFF0C\u5426\u5219\u4F1A\u5220\u9664\u6574\u4E2A\u8868\u7684\u6570\u636E\uFF01\uFF01</strong></li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B DELETE \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 1. \u5411 \u6307\u5B9A\u8868\u4E2D \u5220\u9664 \u67D0\u4E00\u884C\u6570\u636E</span>
<span class="token comment">-- \u8BED\u6CD5: delete from \u8868\u540D where id=4</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u5220\u9664 \u8868users\u4E2D id\u4E3A4 \u7684\u8FD9\u884C\u6570\u636E</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> users <span class="token keyword">from</span> <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">4</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_5-where-\u5B50\u53E5" tabindex="-1"><a class="header-anchor" href="#_5-where-\u5B50\u53E5" aria-hidden="true">#</a> 5. WHERE \u5B50\u53E5</h3><div class="custom-container tip"><p class="custom-container-title">\u5173\u952E\u5B57 WHERE</p><ul><li>WHERE \u8BED\u53E5\u7528\u4E8E \u9650\u5B9A\u9009\u62E9\u6807\u51C6\uFF0C\u4F7F\u5F97\u64CD\u4F5C\u76EE\u6807\u66F4\u52A0\u660E\u786E</li><li>WHERE \u53EF\u4EE5\u7528\u5728 SELECT\uFF08\u67E5\uFF09, UPDATE\uFF08\u6539\uFF09, DELETE\uFF08\u5220\uFF09\u4E2D\uFF0C\u9650\u5B9A\u6761\u4EF6</li></ul></div><ul><li>WHERE \u7684\u8FD0\u7B97\u7B26\uFF08!= \u7684\u5199\u6CD5\u67D0\u4E9B\u7248\u672C\u624D\u652F\u6301\uFF09</li></ul><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th style="text-align:center;">&gt;</th><th>&gt;=</th><th>&lt;</th><th>&lt;=</th><th>=</th><th>!= \u6216 &lt;&gt;</th><th>BETWEEN</th><th>LIKE</th></tr></thead><tbody><tr><td>\u63CF\u8FF0</td><td style="text-align:center;">\u5927\u4E8E</td><td>\u5927\u4E8E\u7B49\u4E8E</td><td>\u5C0F\u4E8E</td><td>\u5C0F\u4E8E\u7B49\u4E8E</td><td>\u7B49\u4E8E</td><td>\u4E0D\u7B49\u4E8E</td><td>\u5728\u67D0\u4E2A\u8303\u56F4\u5185</td><td>\u641C\u7D22\u67D0\u79CD\u6A21\u5F0F</td></tr></tbody></table><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B WHERE \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 1. \u67E5\u8BE2 status \u4E3A 1 \u7684\u6240\u6709\u7528\u6237</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">-- 2. \u67E5\u8BE2 id \u5927\u4E8E 2 \u7684\u6240\u6709\u7528\u6237</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> id<span class="token operator">&gt;</span><span class="token number">2</span>

<span class="token comment">-- 3. \u67E5\u8BE2 id \u4E0D\u7B49\u4E8E 2 \u7684\u6240\u6709\u7528\u6237</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> id<span class="token operator">&lt;&gt;</span><span class="token number">2</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_6-and-\u548C-or-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_6-and-\u548C-or-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 6. AND \u548C OR \u8FD0\u7B97\u7B26</h3><div class="custom-container tip"><p class="custom-container-title">\u5173\u952E\u5B57 AND \u548C OR</p><ul><li>AND \u548C OR \u662F\u7528\u6765\u4FEE\u9970 WHERE \u5B50\u53E5\u7684\u6761\u4EF6\u8FD0\u7B97\u7B26</li><li>AND \u76F8\u5F53\u4E8E js \u4E2D\u7684 &amp;&amp;</li><li>OR \u76F8\u5F53\u4E8E js \u4E2D\u7684 ||</li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B AND \u548C OR \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 1. \u67E5\u8BE2 status\u4E3A1 \u5E76\u4E14 id\u5C0F\u4E8E3 \u7684\u6570\u636E</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator">and</span> id<span class="token operator">&lt;</span><span class="token number">3</span>

<span class="token comment">-- 2. \u67E5\u8BE2 status\u4E3A1 \u6216\u8005 id\u7B49\u4E8E3 \u7684\u6570\u636E</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator">or</span> id<span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_7-order-by-\u5B50\u53E5" tabindex="-1"><a class="header-anchor" href="#_7-order-by-\u5B50\u53E5" aria-hidden="true">#</a> 7. ORDER BY \u5B50\u53E5</h3><div class="custom-container tip"><p class="custom-container-title">\u5173\u952E\u5B57 ORDER BY</p><ul><li>ORDER BY \u662F\u7528\u6765\u6392\u5E8F\u7684\u3002\u53EF\u4EE5\u6839\u636E\u6307\u5B9A\u7684\u5217\u5BF9\u7ED3\u679C\u96C6\u8FDB\u884C\u6392\u5E8F</li><li>ORDER BY <strong>\u9ED8\u8BA4\u4F7F\u7528\u5347\u5E8F\u89C4\u5219</strong> \u6392\u5E8F <ul><li>ASC \u662F\u5347\u5E8F</li><li>DESC \u662F\u964D\u5E8F</li></ul></li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B ORDER BY \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 1. \u5347\u5E8F\u6392\u5217</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u8868\u6839\u636E status \u7684\u503C\u8FDB\u884C \u5347\u5E8F\u6392\u5217</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">status</span>
\u6216 <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">status</span> <span class="token keyword">asc</span>

<span class="token comment">-- 2. \u964D\u5E8F\u6392\u5217</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u8868\u6839\u636E status \u7684\u503C\u8FDB\u884C \u964D\u5E8F\u6392\u5217</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">status</span> <span class="token keyword">desc</span>

<span class="token comment">-- 3. \u591A\u91CD\u6392\u5217</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u8868 \u5148\u6839\u636E status \u7684\u503C\u8FDB\u884C \u964D\u5E8F\u6392\u5217, \u518D\u6839\u636E id \u8FDB\u884C\u5347\u5E8F\u6392\u5217</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">status</span> <span class="token keyword">desc</span><span class="token punctuation">,</span> id <span class="token keyword">asc</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_8-count-\u51FD\u6570-\u548C-as-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_8-count-\u51FD\u6570-\u548C-as-\u5173\u952E\u5B57" aria-hidden="true">#</a> 8. COUNT() \u51FD\u6570 \u548C AS \u5173\u952E\u5B57</h3><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>COUNT() \u51FD\u6570\u7528\u4E8E <strong>\u83B7\u53D6\u67E5\u8BE2\u6570\u636E\u7684\u603B\u6761\u6570</strong></li><li>AS \u7528\u6765 <strong>\u8D77\u522B\u540D</strong></li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B COUNT \u548C AS \u5177\u4F53\u7528\u6CD5</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 1. count() \u83B7\u53D6\u603B\u6761\u6570</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u83B7\u53D6 status\u4E3A0 \u7684\u603B\u6761\u6570\uFF08\u6B64\u65F6\u5B57\u6BB5\u540D\u5C31\u662F count(*), \u5B57\u6BB5\u503C\u5C31\u662F\u6570\u91CF\uFF09</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment">-- 2. as \u7ED9 count(*) \u91CD\u547D\u540D</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u83B7\u53D6 status\u4E3A0 \u7684\u603B\u6761\u6570\uFF08\u6B64\u65F6\u5B57\u6BB5\u540D\u5C31\u662F total, \u5B57\u6BB5\u503C\u5C31\u662F\u6570\u91CF\uFF09</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> total <span class="token keyword">from</span> users <span class="token keyword">where</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment">-- 3. as \u7ED9 username, password \u91CD\u547D\u540D</span>
<span class="token comment">-- \u793A\u4F8B\uFF1A\u83B7\u53D6 username\u548Cpassword \u5217\u6570\u636E\uFF08\u6B64\u65F6\u5B57\u6BB5\u540D\u5C31\u662F uname\u548Cpwd\uFF09</span>
<span class="token keyword">select</span> username <span class="token keyword">as</span> uname<span class="token punctuation">,</span> password <span class="token keyword">as</span> pwd <span class="token keyword">from</span> users
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,28);function _(f,q){const e=c("tgx-link");return t(),i("div",null,[p,s("div",u,[m,s("ul",null,[k,v,h,b,s("li",null,[g,o(e,{href:"/backend/packages/third-party-packages"},{default:r(()=>[y]),_:1}),w])])]),E])}var x=l(d,[["render",_],["__file","sql.html.vue"]]);export{x as default};
