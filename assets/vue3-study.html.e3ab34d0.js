import{_ as n,o as s,c as a,e as t}from"./app.72724b5a.js";var p="/tgx-blog/assets/data-emit.2247a00d.png";const e={},o=t(`<h1 id="vue3-\u76F8\u5173\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#vue3-\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a> Vue3 \u76F8\u5173\u77E5\u8BC6</h1><h2 id="_1-\u7EC4\u4EF6\u4E0A\u7684-v-model" tabindex="-1"><a class="header-anchor" href="#_1-\u7EC4\u4EF6\u4E0A\u7684-v-model" aria-hidden="true">#</a> 1. \u7EC4\u4EF6\u4E0A\u7684 v-model</h2><div class="custom-container tip"><p class="custom-container-title">\u6709\u4EC0\u4E48\u4F5C\u7528</p><p>\u4E3B\u8981\u662F\u4E3A\u4E86 <strong>\u5B9E\u73B0\u7EC4\u4EF6\u5185\u5916\u7684\u6570\u636E\u540C\u6B65</strong></p></div><ul><li>\u9996\u5148\u5728\u7236\u7EC4\u4EF6\u4E2D v-bind: \u524D\u52A0\u4E0A v-model \u6307\u5B9A \u67D0\u4E2A\u6570\u636E \u9700\u8981\u88AB\u540C\u6B65</li><li>\u7136\u540E\u5728\u5B50\u7EC4\u4EF6\u7528 props \u63A5\u6536 \u8FD9\u4E2A\u6570\u636E</li><li>\u63A5\u7740\u5728\u5B50\u7EC4\u4EF6\u7684 emits \u6570\u7EC4\u4E2D\u58F0\u660E <strong>&#39;update:\u88AB\u540C\u6B65\u7684\u6570\u636E&#39;</strong> \u8FD9\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6</li><li>\u6700\u540E\u5728\u67D0\u4E2A\u65F6\u673A\uFF0C\u7528 this.$emit(&#39;update:\u88AB\u540C\u6B65\u7684\u6570\u636E&#39;, newValue) \u53D1\u9001\u4E8B\u4EF6\uFF0C\u5373\u53EF\u540C\u65F6\u5728\u7236\u5B50\u7EC4\u4EF6\u4E2D\u540C\u6B65\u8FD9\u4E2A\u6570\u636E</li></ul><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4F7F\u7528\u6848\u4F8B</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u7236\u7EC4\u4EF6\u4E2D\u6307\u5B9A title \u4F1A\u88AB\u53CC\u5411\u540C\u6B65 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name"><span class="token namespace">v-model:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookTitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// \u5B50\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u63A5\u6536 \u5E76\u7528\u81EA\u5B9A\u4E49\u4E8B\u4EF6 update:title \u66F4\u65B0 title \u7684\u503C</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;update:title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;input type=&quot;text&quot;
        :value=&quot;title&quot;
        @input=&quot;$emit(&#39;update:title&#39;, $event.target.value)&quot;&gt;
  </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7ED3\u679C\uFF1A\u4E0D\u8BBA\u662F\u7236\u7EC4\u4EF6\u7684 bookTitle \uFF0C\u8FD8\u662F\u5B50\u7EC4\u4EF6\u7684 $event.target.value</span>
  <span class="token comment">// \u90FD\u53EF\u4EE5\u4FEE\u6539 title \u7684\u503C\uFF0C\u5B9E\u73B0\u6570\u636E\u540C\u6B65\u7684\u76EE\u7684</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_2-\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u8BAF" tabindex="-1"><a class="header-anchor" href="#_2-\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u8BAF" aria-hidden="true">#</a> 2. \u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u8BAF</h2><h3 id="_1-\u7236\u4F20\u5B50" tabindex="-1"><a class="header-anchor" href="#_1-\u7236\u4F20\u5B50" aria-hidden="true">#</a> 1. \u7236\u4F20\u5B50</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u7236\u7EC4\u4EF6\uFF1A\u7528 v-bind \u4F20\u9012</li><li>\u5B50\u7EC4\u4EF6\uFF1A\u7528 props \u63A5\u6536\uFF08\u8FD9\u79CD\u65B9\u6CD5\u63A5\u6536\u7684\u6570\u636E\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u7236\u7EC4\u4EF6\u6570\u636E\u53D8\u4E86\uFF0C\u5B50\u7EC4\u4EF6\u4E5F\u4F1A\u53D8\uFF09</li></ul></div><h3 id="_2-\u5B50\u4F20\u7236" tabindex="-1"><a class="header-anchor" href="#_2-\u5B50\u4F20\u7236" aria-hidden="true">#</a> 2. \u5B50\u4F20\u7236</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u5B50\u7EC4\u4EF6\uFF1A\u7528 emits \u81EA\u5B9A\u4E49\u4E8B\u4EF6($emit) \u53D1\u9001</li><li>\u7236\u7EC4\u4EF6\uFF1A\u7528 v-on \u76D1\u542C\u81EA\u5B9A\u4E49\u4E8B\u4EF6 \u63A5\u6536</li></ul></div><h3 id="_3-\u7236\u5B50\u7EC4\u4EF6\u53CC\u5411\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#_3-\u7236\u5B50\u7EC4\u4EF6\u53CC\u5411\u540C\u6B65" aria-hidden="true">#</a> 3. \u7236\u5B50\u7EC4\u4EF6\u53CC\u5411\u540C\u6B65</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u7236\u7EC4\u4EF6\uFF1A\u7528 v-model:a=&quot;2&quot; \u7ED1\u5B9A\u4E00\u4E2A\u6570\u636E a \u7ED9\u5B50\u7EC4\u4EF6</li><li>\u5B50\u7EC4\u4EF6\uFF1A\u5148\u7528 props \u63A5\u6536 a , \u518D\u7528 emits \u81EA\u5B9A\u4E49\u4E8B\u4EF6 [&#39;update:a&#39;] \u66F4\u65B0\u6570\u636E a \u5373\u53EF</li></ul></div><h3 id="_4-\u5144\u5F1F\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-\u5144\u5F1F\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E" aria-hidden="true">#</a> 4. \u5144\u5F1F\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u4E8B\u5148\u5B9A\u4E49\u4E00\u4E2A eventBus.js \u6587\u4EF6\uFF0C\u5E76\u5BFC\u51FA\u4E00\u4E2A \u4E8B\u4EF6\u4E2D\u5FC3 bus</li><li>\u7EC4\u4EF6 A\uFF1A\u5F15\u5165 bus \u5E76\u7528 this.$emit(&#39;\u4E8B\u4EF6\u540D\u79F0&#39;, \u53C2\u6570) \u53D1\u9001\u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6</li><li>\u7EC4\u4EF6 B\uFF1A\u5F15\u5165 bus \u5E76\u7528 this.$on(&#39;\u4E8B\u4EF6\u540D\u79F0&#39;, (\u53C2\u6570) =&gt; { \u5904\u7406... }) \u63A5\u6536\u5904\u7406\u7EC4\u4EF6 A \u53D1\u6765\u7684\u6570\u636E</li></ul></div><h3 id="_5-\u540E\u4EE3\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_5-\u540E\u4EE3\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E" aria-hidden="true">#</a> 5. \u540E\u4EE3\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E</h3><div class="custom-container tip"><p class="custom-container-title">\u4F20\u9012\u65B9\u6848\uFF1A provide + inject</p><ul><li>\u6839\u7EC4\u4EF6\uFF1A\u4F7F\u7528 provide \u5171\u4EAB <strong>\u67D0\u4E9B\u6570\u636E</strong></li><li>\u540E\u4EE3\u7EC4\u4EF6\uFF1A\u4F7F\u7528 inject \u63A5\u53D7 <strong>\u8FD9\u4E9B\u6570\u636E</strong></li></ul></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u3010\u975E\u54CD\u5E94\u5F0F\u63A5\u6536\u3011 \u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6839\u8282\u70B9\u4E2D\u7528 provide \u5B9A\u4E49 \u8981\u5171\u4EAB color myNumber \u8FD9\u4E24\u4E2A\u6570\u636E</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
      <span class="token literal-property property">myNumber</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>

<span class="token comment">// \u540E\u4EE3\u8282\u70B9\u4E2D\u7528 inject \u63A5\u53D7 color myNumber \u8FD9\u4E24\u4E2A\u6570\u636E,</span>
<span class="token comment">// \u7136\u540E\u76F4\u63A5\u7528 color myNumber \u4F7F\u7528\u5373\u53EF</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myNumber&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B \u3010\u54CD\u5E94\u5F0F\u63A5\u6536\u3011 \u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6839\u8282\u70B9\u4E2D\u7528 provide \u5B9A\u4E49 \u8981\u5171\u4EAB color myNumber \u8FD9\u4E24\u4E2A\u6570\u636E</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token comment">// \u501F\u52A9 computed \u65B9\u6CD5\u5B9E\u73B0\u54CD\u5E94\u5F0F</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u7ED9 computed \u65B9\u6CD5\u4F20\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570</span>
      <span class="token literal-property property">myNumber</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>

<span class="token comment">// \u540E\u4EE3\u8282\u70B9\u4E2D\u7528 inject \u63A5\u53D7 color myNumber \u8FD9\u4E24\u4E2A\u6570\u636E,</span>
<span class="token comment">// \u7136\u540E\u7528 color.value  myNumber.value \u8BBF\u95EE\u5176\u503C</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myNumber&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u8FD9\u79CD\u65B9\u6848\u8981\u6C42\uFF1A\u7EC4\u4EF6\u6709 <strong>\u5D4C\u5957\u5173\u7CFB</strong></li><li>\u5982\u4E0B\u56FE\uFF1A <ul><li>\u5982\u679C B \u4F5C\u4E3A\u6839\u8282\u70B9\u8981 <strong>\u5171\u4EAB\u6570\u636E</strong>\uFF0C\u53EA\u6709 D\u3001G\u3001H \u53EF\u4EE5\u63A5\u53D7\uFF0CE\u3001F \u8FD9\u4E9B\u7EC4\u4EF6\u65E0\u6CD5\u63A5\u6536</li><li>\u5982\u679C A \u4F5C\u4E3A\u6839\u8282\u70B9\u8981 <strong>\u5171\u4EAB\u6570\u636E</strong>\uFF0C\u5219\u6240\u6709\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u63A5\u53D7</li></ul></li></ul></div><img src="`+p+'" alt="\u7EC4\u4EF6\u5173\u7CFB\u793A\u610F\u56FE" title="\u7EC4\u4EF6\u5173\u7CFB\u793A\u610F\u56FE" width="500"><h3 id="_6-vuex-\u5171\u4EAB\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_6-vuex-\u5171\u4EAB\u6570\u636E" aria-hidden="true">#</a> 6. Vuex \u5171\u4EAB\u6570\u636E</h3><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u4F7F\u7528\u4E00\u4E2A store \u6765\u96C6\u4E2D\u5171\u4EAB\u6570\u636E</p></div><h3 id="_7-\u6D4F\u89C8\u5668\u5B58\u50A8\u529F\u80FD\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#_7-\u6D4F\u89C8\u5668\u5B58\u50A8\u529F\u80FD\u5171\u4EAB" aria-hidden="true">#</a> 7. \u6D4F\u89C8\u5668\u5B58\u50A8\u529F\u80FD\u5171\u4EAB</h3><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u5B58\u50A8\u529F\u80FD\u5171\u4EAB\u6570\u636E\uFF0C\u5982\uFF1Acookie, sessionStorage, localStorage, IndexedDB \u7B49</p></div>',24),l=[o];function c(i,r){return s(),a("div",null,l)}var d=n(e,[["render",c],["__file","vue3-study.html.vue"]]);export{d as default};
