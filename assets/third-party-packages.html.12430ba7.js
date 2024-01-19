import{_ as l,o as c,c as d,a as e,b as n,w as i,e as t,d as s,r as o}from"./app.72724b5a.js";const r={},m=t(`<h1 id="\u4F9D\u8D56\u5305-\u7528\u6CD5\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u5305-\u7528\u6CD5\u96C6\u5408" aria-hidden="true">#</a> \u4F9D\u8D56\u5305 \u7528\u6CD5\u96C6\u5408</h1><div class="custom-container tip"><p class="custom-container-title">\u680F\u76EE\u8BF4\u660E</p><p>\u672C\u680F\u76EE\u8BB0\u8F7D\u4E86\u4E00\u4E9B <strong>\u5BA2\u6237\u7AEF</strong> \u76F8\u5173\u7684 <strong>\u7B2C\u4E09\u65B9\u5305</strong> \u4F7F\u7528\u65B9\u6CD5\u3002</p></div><h2 id="_1-mitt-\u521B\u5EFA-eventbus" tabindex="-1"><a class="header-anchor" href="#_1-mitt-\u521B\u5EFA-eventbus" aria-hidden="true">#</a> 1. <code>mitt</code> \u521B\u5EFA eventBus</h2><h4 id="_1-mitt-\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#_1-mitt-\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> 1. <code>mitt</code> \u6709\u4EC0\u4E48\u7528\uFF1F</h4><div class="custom-container tip"><p class="custom-container-title">\u5177\u4F53\u4F5C\u7528</p><ul><li>\u5728 vue3 \u4E2D\uFF1A\u5144\u5F1F\u7EC4\u4EF6\u7684\u6570\u636E\u5171\u4EAB\u9700\u8981\u7528\u5230 eventBus \u65B9\u6848</li><li>\u4F7F\u7528 <code>mitt</code> \u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA \u4E00\u4E2A vue \u5B9E\u4F8B \u4F5C\u4E3A bus</li></ul></div><h4 id="_2-\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u4F7F\u7528\u65B9\u6CD5</h4><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>npm i mitt@2.1.0 -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),u=s("\u7B2C\u4E8C\u6B65\uFF1A\u4F7F\u7528"),p=s("\uFF08\u70B9\u51FB\u67E5\u770B\u5177\u4F53\u4F7F\u7528\u6587\u6863\uFF09"),h=t(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u4F7F\u7528\u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u5305, \u521B\u5EFA bus \u5E76\u5BFC\u51FA, \u5404\u4E2A\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u76F4\u63A5\u5F15\u5165\u4F7F\u7528\u4E86</span>
<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span>
<span class="token keyword">const</span> bus <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> bus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_2-moment-\u683C\u5F0F\u5316\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_2-moment-\u683C\u5F0F\u5316\u65F6\u95F4" aria-hidden="true">#</a> 2. <code>moment</code> \u683C\u5F0F\u5316\u65F6\u95F4</h2><h4 id="_1-moment-\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#_1-moment-\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> 1. <code>moment</code> \u6709\u4EC0\u4E48\u7528\uFF1F</h4><div class="custom-container tip"><p class="custom-container-title">\u5177\u4F53\u4F5C\u7528</p><p>\u4F7F\u7528 <code>moment</code> \u7B2C\u4E09\u65B9\u5305\uFF0C\u53EF\u4EE5\u5FEB\u901F\u628A\u539F\u59CB\u65F6\u95F4\u5904\u7406\u6210\u6307\u5B9A\u7684\u65E5\u671F\u683C\u5F0F\u3002</p></div><h4 id="_2-\u4F7F\u7528\u65B9\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u65B9\u6CD5-1" aria-hidden="true">#</a> 2. \u4F7F\u7528\u65B9\u6CD5</h4><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>npm i moment -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),v=s("\u7B2C\u4E8C\u6B65\uFF1A\u4F7F\u7528"),_=s("\uFF08\u70B9\u51FB\u67E5\u770B\u5177\u4F53\u4F7F\u7528\u6587\u6863\uFF09"),g=t(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u4F7F\u7528\u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span>

<span class="token comment">// \u5F97\u5230\u5F53\u524D\u65F6\u95F4</span>
<span class="token keyword">const</span> nowDate <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u683C\u5F0F\u5316\u65F6\u95F4</span>
nowDate<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2020-03-02 18:05:52</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_3-i5ting-toc-\u8F6C\u5316-md-\u4E3A-html" tabindex="-1"><a class="header-anchor" href="#_3-i5ting-toc-\u8F6C\u5316-md-\u4E3A-html" aria-hidden="true">#</a> 3. <code>i5ting_toc</code> \u8F6C\u5316 md \u4E3A html</h2><h4 id="_1-i5ting-toc-\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#_1-i5ting-toc-\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> 1. <code>i5ting_toc</code> \u6709\u4EC0\u4E48\u7528\uFF1F</h4><div class="custom-container tip"><p class="custom-container-title">\u5177\u4F53\u4F5C\u7528</p><p>\u4F7F\u7528 <code>i5ting_toc</code> \u7B2C\u4E09\u65B9\u5305\uFF0C\u53EF\u4EE5\u5FEB\u901F\u628A .md \u6587\u4EF6\u8F6C\u5316\u4E3A .html \u683C\u5F0F\u7684\u6587\u6863</p></div><h4 id="_2-\u4F7F\u7528\u65B9\u6CD5-2" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u65B9\u6CD5-2" aria-hidden="true">#</a> 2. \u4F7F\u7528\u65B9\u6CD5</h4><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u5168\u5C40\u5B89\u88C5</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>npm install -g i5ting_toc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),b=s("\u7B2C\u4E8C\u6B65\uFF1A\u4F7F\u7528"),k=s("\uFF08\u70B9\u51FB\u67E5\u770B\u5177\u4F53\u4F7F\u7528\u6587\u6863\uFF09"),x=t(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u4F7F\u7528\u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// \u628A\u684C\u9762\u7684 01.md \u8F6C\u4E3A html \u683C\u5F0F\uFF1A</span>
  <span class="token comment">// \u76F4\u63A5\u5728\u684C\u9762\u6253\u5F00\u7EC8\u7AEF\u8F93\u5165\uFF1A</span>
  i5ting_toc <span class="token operator">-</span>f <span class="token number">01</span><span class="token punctuation">.</span>md <span class="token operator">-</span>o    <span class="token comment">// -o \u8868\u793A \u8F6C\u6362\u540E\u518D\u6D4F\u89C8\u5668\u6253\u5F00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_4-live-server-\u5F00\u53D1\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_4-live-server-\u5F00\u53D1\u670D\u52A1\u5668" aria-hidden="true">#</a> 4. <code>live-server</code> \u5F00\u53D1\u670D\u52A1\u5668</h2><h4 id="_1-live-server-\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#_1-live-server-\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> 1. <code>live-server</code> \u6709\u4EC0\u4E48\u7528\uFF1F</h4><div class="custom-container tip"><p class="custom-container-title">\u5177\u4F53\u4F5C\u7528</p><ul><li>\u4F7F\u7528 <code>live-server</code> \u7B2C\u4E09\u65B9\u5305\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u5FEB\u901F\u5F00\u542F\u4E00\u4E2A\u670D\u52A1\u5668\u3002 <ul><li><ol><li>\u53EF\u4EE5\u5229\u7528 ajax/fetch \u6765\u6A21\u62DF\u8BF7\u6C42\u672C\u5730\u6570\u636E</li></ol></li><li><ol start="2"><li>\u53EF\u4EE5\u5B9E\u65F6\u76D1\u542C\u4EE3\u7801\u6539\u52A8\uFF0C\u540C\u6B65\u5230\u6D4F\u89C8\u5668\u9875\u9762</li></ol></li></ul></li></ul></div><h4 id="_2-\u4F7F\u7528\u65B9\u6CD5-3" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u65B9\u6CD5-3" aria-hidden="true">#</a> 2. \u4F7F\u7528\u65B9\u6CD5</h4><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u5168\u5C40\u5B89\u88C5</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>npm install -g live-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),f=s("\u7B2C\u4E8C\u6B65\uFF1A\u4F7F\u7528"),w=s("\uFF08\u70B9\u51FB\u67E5\u770B\u5177\u4F53\u4F7F\u7528\u6587\u6863\uFF09"),y=e("ul",null,[e("li",null,"\u76F4\u63A5\u5728\u8981\u6253\u5F00\u7684 .html \u6587\u4EF6\u7684\u76EE\u5F55\u4E0B \u6253\u5F00\u7EC8\u7AEF\u5E76\u8FD0\u884C\u547D\u4EE4\uFF1A live-server")],-1);function j(B,D){const a=o("tgx-link");return c(),d("div",null,[m,e("ul",null,[e("li",null,[u,n(a,{href:"https://www.npmjs.com/package/mitt"},{default:i(()=>[p]),_:1})])]),h,e("ul",null,[e("li",null,[v,n(a,{href:"https://momentjs.com/docs/#/use-it/"},{default:i(()=>[_]),_:1})])]),g,e("ul",null,[e("li",null,[b,n(a,{href:"https://www.npmjs.com/package/i5ting_toc"},{default:i(()=>[k]),_:1})])]),x,e("ul",null,[e("li",null,[e("p",null,[f,n(a,{href:"https://www.npmjs.com/package/live-server"},{default:i(()=>[w]),_:1})]),y])])])}var V=l(r,[["render",j],["__file","third-party-packages.html.vue"]]);export{V as default};
