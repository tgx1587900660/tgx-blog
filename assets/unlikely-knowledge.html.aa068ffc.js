import{_ as n,o as s,c as a,e}from"./app.72724b5a.js";const t={},p=e(`<h1 id="vue-\u6613\u5FD8\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#vue-\u6613\u5FD8\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> Vue \u6613\u5FD8\u77E5\u8BC6\u70B9</h1><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u6536\u96C6\u4E86\u4E00\u4E9B\u5E73\u5E38\u5DE5\u4F5C\u4E2D\u7528\u7684\u975E\u5E38\u5C11\uFF0C\u4F46\u53C8\u4E0D\u80FD\u5FD8\u4E86\u7684\u77E5\u8BC6\u70B9\u3002</p></div><h2 id="_1-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-\u6307\u4EE4" aria-hidden="true">#</a> 1. \u6307\u4EE4</h2><ul><li>v-html\uFF1A\u628A\u540E\u7AEF\u8FD4\u56DE\u5E26\u6709 html \u6807\u7B7E\u7684\u6570\u636E\uFF0C\u6E32\u67D3\u6210\u5BF9\u5E94\u7684\u7F51\u9875 UI\u3002\u4F7F\u7528\u65F6\u4F1A\u8986\u76D6\u6807\u7B7E\u5305\u88F9\u7684\u5185\u5BB9</li><li>v-for\uFF1A <ul><li>\u6807\u8BC6 key \u503C\u7C7B\u578B\uFF1A\u4E3A String \u6216 Number</li><li>\u5FAA\u73AF\u5BF9\u8C61\uFF08\u503C\u540D\u7D22\uFF09\uFF1A v-for=&quot;(value, key, index) in obj&quot; \u4E2D value \u662F\u952E\u503C, key \u662F\u952E\u540D, index \u662F\u7D22\u5F15</li></ul></li><li>v-slot\uFF1A <ul><li>\u5177\u540D\u63D2\u69FD\uFF1Av-slot:name1 \u7B80\u5199\u6210 #name1\uFF0C\u53EA\u80FD\u7528\u5728 \u7EC4\u4EF6\u540D\u6216 template \u4E0A</li><li>\u4F5C\u7528\u4E8E\u63D2\u69FD\uFF1A\u7F16\u5199\u57FA\u7840\u7EC4\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u5728 slot \u6807\u7B7E\u4E0A\u7ED1\u5B9A\u4E00\u4E9B\u5C5E\u6027\uFF0C\u7236\u7EC4\u4EF6\u4F7F\u7528\u65F6\u5C31\u53EF\u4EE5\u7528 #name1=&quot;obj&quot; \u4E2D\u7684 obj \u6765\u63A5\u6536\u8FD9\u4E9B\u5C5E\u6027\u3002\uFF08\u76F8\u5F53\u4E8E\u6570\u636E\u7684\u5B50\u4F20\u7236\uFF09</li></ul></li><li>\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF1A <ul><li>\u6CE8\u518C\u81EA\u5B9A\u4E49\u6307\u4EE4\u53CA\u5176\u5185\u90E8\u7684\u51FD\u6570\u89E6\u53D1\u65F6\u673A</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u5168\u5C40\u5B9A\u4E49\u81EA\u5B9A\u4E49\u6307\u4EE4 t-copy</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;t-copy&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7B2C\u4E00\u6B21\u7ED1\u5B9A\u5230 dom \u5143\u7D20\u65F6\u89E6\u53D1\uFF08el \u662F\u88AB\u7ED1\u5B9A\u7684 dom \u5143\u7D20\uFF0Cbinding \u662F\u6307\u4EE4\u540E\u9762\u7684\u5185\u5BB9\uFF09</span>
  <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u89E6\u53D1\u4E86 v-t-copy \u6307\u4EE4\u7684 bing \u51FD\u6570&#39;</span><span class="token punctuation">)</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7B2C\u4E00\u6B21\u7ED1\u5B9A\u65F6\u4E0D\u89E6\u53D1\uFF0Cdom \u66F4\u65B0\u65F6\u89E6\u53D1</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u89E6\u53D1\u4E86 v-t-copy \u6307\u4EE4\u7684 update \u51FD\u6570&#39;</span><span class="token punctuation">)</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ----------------------------------------------------------</span>
<span class="token comment">// 2. \u5982\u679C bind \u548C update \u903B\u8F91\u5B8C\u5168\u4E00\u6837\uFF0C\u53EF\u4EE5\u7B80\u5199</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;t-copy&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>

<span class="token comment">// 3. \u7EC4\u4EF6\u5185\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u4EE4 t-copy</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p v<span class="token operator">-</span>t<span class="token operator">-</span>copy<span class="token operator">=</span><span class="token string">&quot;bindingDate&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a> 2. \u4E8B\u4EF6\u7ED1\u5B9A</h2><ul><li>$event\uFF1A <ul><li>\u82E5\u4E8B\u4EF6\u4E0D\u643A\u5E26\u53C2\u6570\uFF0C\u5219\u65B9\u6CD5\u9ED8\u8BA4\u63A5\u6536\u539F\u59CB dom \u4E8B\u4EF6\u5BF9\u8C61 e</li><li>\u82E5\u4E8B\u4EF6\u643A\u5E26\u4E86\u53C2\u6570\uFF0C\u8FD8\u60F3\u5728\u65B9\u6CD5\u4E2D\u62FF\u5230 \u539F\u59CB dom \u4E8B\u4EF6\u5BF9\u8C61 e \u5C31\u7528 $event</li><li>\u82E5\u5B50\u7EC4\u4EF6\u4F20\u4E86\u53C2\u6570\u8FC7\u6765\uFF0C\u5E76\u4E14\u81EA\u5DF1\u53C8\u643A\u5E26\u4E86\u53C2\u6570\uFF0C\u5219\u65B9\u6CD5\u4E2D\u81EA\u5DF1\u7684\u53C2\u6570\u4F1A\u8986\u76D6\u5B50\u7EC4\u4EF6\u7684\u53C2\u6570\uFF0C\u6B64\u65F6\u53EF\u7528 $event \u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u53C2\u6570</li></ul></li></ul><h2 id="_3-\u4E8B\u4EF6\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#_3-\u4E8B\u4EF6\u4FEE\u9970\u7B26" aria-hidden="true">#</a> 3. \u4E8B\u4EF6\u4FEE\u9970\u7B26</h2><ul><li>@click.prevent\uFF1A\u963B\u6B62\u4E8B\u4EF6\u9ED8\u8BA4\u884C\u4E3A\u3002\u4F8B\u5982\uFF1A\u963B\u6B62 submit \u63D0\u4EA4\u3001\u963B\u6B62 a \u94FE\u63A5\u8DF3\u8F6C</li><li>@click.stop\uFF1A\u963B\u6B62\u5192\u6CE1</li></ul><h2 id="_4-\u6309\u952E\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#_4-\u6309\u952E\u4FEE\u9970\u7B26" aria-hidden="true">#</a> 4. \u6309\u952E\u4FEE\u9970\u7B26</h2><ul><li>@keyup.esc\uFF1A\u5F39\u8D77 esc \u65F6\u89E6\u53D1</li><li>@keyup.enter\uFF1A\u5F39\u8D77 enter \u65F6\u89E6\u53D1</li></ul><h2 id="_5-\u6307\u4EE4\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#_5-\u6307\u4EE4\u4FEE\u9970\u7B26" aria-hidden="true">#</a> 5. \u6307\u4EE4\u4FEE\u9970\u7B26</h2><ul><li>v-model.number\uFF1A\u628A\u8868\u5355\u503C\u8F6C\u4E3A\u6570\u503C\u7C7B\u578B</li><li>v-model.trim\uFF1A\u53BB\u6389\u8868\u5355\u9996\u5C3E\u7A7A\u5B57\u7B26</li><li>v-model.lazy\uFF1A\u8868\u5355\u5931\u53BB\u7126\u70B9\u65F6\u624D\u66F4\u65B0 data \u4E2D\u7684\u6570\u636E</li></ul>`,13),o=[p];function l(i,c){return s(),a("div",null,o)}var u=n(t,[["render",l],["__file","unlikely-knowledge.html.vue"]]);export{u as default};
