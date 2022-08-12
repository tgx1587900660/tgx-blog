import{_ as s,o as n,c as a,d as p}from"./app.b7621b50.js";const e={},t=p(`<h1 id="vue3-\u76F8\u5BF9\u4E8E-vue2-\u7684\u67D0\u4E9B\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#vue3-\u76F8\u5BF9\u4E8E-vue2-\u7684\u67D0\u4E9B\u53D8\u5316" aria-hidden="true">#</a> Vue3 \u76F8\u5BF9\u4E8E Vue2 \u7684\u67D0\u4E9B\u53D8\u5316</h1><h2 id="_1-\u5355\u6587\u4EF6\u7EC4\u4EF6\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u5355\u6587\u4EF6\u7EC4\u4EF6\u53D8\u5316" aria-hidden="true">#</a> 1. \u5355\u6587\u4EF6\u7EC4\u4EF6\u53D8\u5316</h2><ul><li>\u4E0D\u518D\u9650\u5236 template \u4E2D\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u8282\u70B9\u6807\u7B7E</li></ul><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u533A\u522B \u6848\u4F8B</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Vue3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>App \u6839\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App \u6839\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>45<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

----------------------------------

<span class="token comment">&lt;!-- Vue2 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root-wapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>App \u6839\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App \u6839\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>45<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_2-\u521B\u5EFA-vue-\u5B9E\u4F8B\u8BED\u6CD5\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA-vue-\u5B9E\u4F8B\u8BED\u6CD5\u53D8\u5316" aria-hidden="true">#</a> 2. \u521B\u5EFA Vue \u5B9E\u4F8B\u8BED\u6CD5\u53D8\u5316</h2><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u533A\u522B \u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Vue3</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>

<span class="token comment">// Vue2</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_3-vue-devtool-\u8C03\u8BD5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_3-vue-devtool-\u8C03\u8BD5\u5DE5\u5177" aria-hidden="true">#</a> 3. vue-devtool \u8C03\u8BD5\u5DE5\u5177</h2><ul><li>vue-devtool \u8C03\u8BD5\u5DE5\u5177\u4E5F\u8981\u66F4\u6539\uFF0C\u5982\u679C\u4F7F\u7528\u7684 vue3 \u7248\u672C\u5C31\u5173\u95ED vue2 \u5BF9\u5E94\u7684 \u8C03\u8BD5\u5DE5\u5177\uFF0C\u8981\u5B89\u88C5 vue3 \u5BF9\u5E94\u7684\u8C03\u8BD5\u5DE5\u5177\u7248\u672C</li></ul><h2 id="_4-\u6837\u5F0F\u7A7F\u900F\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#_4-\u6837\u5F0F\u7A7F\u900F\u53D8\u66F4" aria-hidden="true">#</a> 4. \u6837\u5F0F\u7A7F\u900F\u53D8\u66F4</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>/deep/ \u5199\u6CD5\u4F9D\u7136\u751F\u6548\uFF0C\u4F46\u5728 Vue3 \u4E2D\u4E0D\u518D\u63A8\u8350\uFF0C\u800C\u7528 :deep() \u66FF\u4EE3 <strong>\uFF08\u628A\u9009\u62E9\u5668\u653E\u5728\u62EC\u53F7\u5185\uFF09</strong></p></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u53D8\u66F4 \u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Vue3</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">:</span><span class="token function">deep</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>

<span class="token comment">// Vue2</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">deep</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">.</span>title <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_5-\u81EA\u5B9A\u4E49\u4E8B\u4EF6-emits-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_5-\u81EA\u5B9A\u4E49\u4E8B\u4EF6-emits-\u8282\u70B9" aria-hidden="true">#</a> 5. \u81EA\u5B9A\u4E49\u4E8B\u4EF6 emits \u8282\u70B9</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u867D\u7136\u4E0D\u58F0\u660E emits \u8282\u70B9\u4E5F\u80FD\u5DE5\u4F5C\uFF0C\u4F46\u6709\u4E86 emits \u5C5E\u6027\uFF0C\u5B50\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5C31\u66F4\u52A0\u6E05\u6670\u4E86</p></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u53D8\u66F4 \u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Vue3</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;num-change&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u591A\u4E86 emits \u8282\u70B9, \u5305\u542B\u8BE5\u7EC4\u4EF6\u6240\u6709\u81EA\u5B9A\u4E49\u4E8B\u4EF6</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;num-change&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>

<span class="token comment">// Vue2</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;num-change&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_6-vue-\u5B9E\u4F8B-\u751F\u547D\u5468\u671F\u51FD\u6570-\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_6-vue-\u5B9E\u4F8B-\u751F\u547D\u5468\u671F\u51FD\u6570-\u53D8\u5316" aria-hidden="true">#</a> 6. Vue \u5B9E\u4F8B \u751F\u547D\u5468\u671F\u51FD\u6570 \u53D8\u5316</h2><div class="custom-container tip"><p class="custom-container-title">\u540D\u79F0\u53D8\u66F4</p><ul><li><p>Vue2</p><ul><li>\u521B\u5EFA\u9636\u6BB5\uFF1AbeforeCreate, created \uFF08\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\uFF09</li><li>\u6302\u8F7D\u9636\u6BB5\uFF1AbeforeMount, mounted \uFF08\u6302\u8F7D\u5230 dom \u4E0A\uFF09</li><li>\u66F4\u65B0\u9636\u6BB5\uFF1AbeforeUpdate, undated \uFF08data \u6570\u636E\u66F4\u65B0\uFF09</li><li><strong>\u9500\u6BC1\u9636\u6BB5\uFF1AbeforeDestroy, destroyed \uFF08\u5B9E\u4F8B\u88AB\u9500\u6BC1\uFF09</strong></li></ul></li><li><p>Vue3</p><ul><li>\u521B\u5EFA\u9636\u6BB5\uFF1A beforeCreate, created \uFF08\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\uFF09</li><li>\u6302\u8F7D\u9636\u6BB5\uFF1AbeforeMount, mounted \uFF08\u6302\u8F7D\u5230 dom \u4E0A\uFF09</li><li>\u66F4\u65B0\u9636\u6BB5\uFF1AbeforeUpdate, undated \uFF08data \u6570\u636E\u66F4\u65B0\uFF09</li><li><strong>\u9500\u6BC1\u9636\u6BB5\uFF1AbeforeUnmount, Unmounted \uFF08\u5B9E\u4F8B\u88AB\u9500\u6BC1\uFF09</strong></li></ul></li></ul></div><h2 id="_7-\u6302\u8F7D-axios-\u7B49\u5DE5\u5177\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_7-\u6302\u8F7D-axios-\u7B49\u5DE5\u5177\u53D8\u5316" aria-hidden="true">#</a> 7. \u6302\u8F7D axios \u7B49\u5DE5\u5177\u53D8\u5316</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>vue3 \u4E0D\u518D\u63A8\u8350\u628A\u67D0\u4E9B\u5DE5\u5177\u6302\u8F7D\u5728 \u539F\u578B\u5BF9\u8C61 prototype \u4E0A</li><li>vue3 \u7684\u5B9E\u4F8B app \u63D0\u4F9B\u4E00\u4E2A config.globalProperties \u4EE3\u66FF\u539F\u5148\u7684\u6302\u8F7D\u65B9\u6848</li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u533A\u522B \u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// vue3</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$http <span class="token operator">=</span> axios

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>

<span class="token comment">// vue2</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$http <span class="token operator">=</span> axios

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_8-\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u94A9\u5B50\u51FD\u6570\u540D\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_8-\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u94A9\u5B50\u51FD\u6570\u540D\u53D8\u5316" aria-hidden="true">#</a> 8. \u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u94A9\u5B50\u51FD\u6570\u540D\u53D8\u5316</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>vue3 \u548C vue2 \u7684\u4E24\u4E2A\u94A9\u5B50\u51FD\u6570\u540D\u79F0\u53D8\u5316\uFF0C<strong>\u610F\u4E49\u548C\u7528\u6CD5\u90FD\u4E0D\u53D8</strong></li><li>vue2 \u7684 <strong>bind</strong> \u94A9\u5B50\u662F\u5728\u7B2C\u4E00\u6B21\u7ED1\u5B9A\u5230 dom \u4E0A\u65F6\u89E6\u53D1\uFF0C<strong>update</strong> \u94A9\u5B50\u662F dom \u66F4\u65B0\u65F6\u89E6\u53D1</li><li>vue3 \u7684 <strong>mounted</strong> \u94A9\u5B50\u662F\u5728\u7B2C\u4E00\u6B21\u7ED1\u5B9A\u5230 dom \u4E0A\u65F6\u89E6\u53D1\uFF0C<strong>updated</strong> \u94A9\u5B50\u662F dom \u66F4\u65B0\u65F6\u89E6\u53D1</li></ul></div><h2 id="_9-vue-router-\u8DEF\u7531\u7248\u672C\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_9-vue-router-\u8DEF\u7531\u7248\u672C\u53D8\u5316" aria-hidden="true">#</a> 9. vue-router \u8DEF\u7531\u7248\u672C\u53D8\u5316</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>\u4E24\u4E2A vue-router \u7248\u672C\u7684\u8BED\u6CD5\u6709\u8F83\u5927\u53D8\u5316</li><li>vue2 \u53EA\u80FD\u7528 vue-router3.x \u7248\u672C</li><li>vue3 \u53EA\u80FD\u7528 vue-router4.x \u7248\u672C</li></ul></div>`,23),o=[t];function l(c,i){return n(),a("div",null,o)}var u=s(e,[["render",l],["__file","vue3-change-details.html.vue"]]);export{u as default};
