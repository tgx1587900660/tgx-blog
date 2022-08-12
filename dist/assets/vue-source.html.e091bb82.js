import{_ as n,o as a,c as s,d as e}from"./app.b7621b50.js";const l={},i=e(`<h1 id="vue-\u6E90\u7801\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#vue-\u6E90\u7801\u5B66\u4E60" aria-hidden="true">#</a> Vue \u6E90\u7801\u5B66\u4E60</h1><div class="custom-container tip"><p class="custom-container-title">\u680F\u76EE\u8BF4\u660E</p><p>\u672C\u680F\u76EE\u6536\u96C6\u4E86\u90E8\u5206 vue 2.6 \u7684\u6E90\u7801\u5B66\u4E60\u5185\u5BB9</p></div><ul><li>\u5B66\u4E60\u8DEF\u7EBF <ul><li><ol><li>\u53D8\u5316\u4FA6\u6D4B\uFF1A\u600E\u4E48\u6837\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\u7684\uFF1F</li></ol></li><li><ol start="2"><li>\u865A\u62DF DOM\uFF1A \u4E3A\u4EC0\u4E48\u6709\u865A\u62DF DOM\uFF1F\u600E\u4E48\u6837\u8FDB\u884C DOM-Diff \u8282\u70B9\u5BF9\u6BD4\uFF1F</li></ol></li><li><ol start="3"><li>\u6A21\u7248\u89E3\u6790\uFF1A\u600E\u4E48\u6837\u628A <code>template</code> \u6807\u7B7E\u4E2D\u7684\u5B57\u7B26\u4E32\u4E00\u6B65\u6B65\u89E3\u6790\u6210 DOM?</li></ol></li><li><ol start="4"><li>\u751F\u547D\u5468\u671F\uFF1A\u4E00\u4E2A\u7EC4\u4EF6\u4ECE\u521B\u5EFA\u5230\u9500\u6BC1\u7ECF\u5386\u4E86\u4EC0\u4E48\uFF1F</li></ol></li><li><ol start="5"><li>\u5B9E\u4F8B\u65B9\u6CD5\uFF1A\u4E3A\u4EC0\u4E48\u6709 this.$set() this.$delete()... \u8FD9\u4E9B\u65B9\u6CD5\uFF1F</li></ol></li></ul></li></ul><h2 id="_1-\u53D8\u5316\u4FA6\u6D4B" tabindex="-1"><a class="header-anchor" href="#_1-\u53D8\u5316\u4FA6\u6D4B" aria-hidden="true">#</a> 1. \u53D8\u5316\u4FA6\u6D4B</h2><div class="custom-container tip"><p class="custom-container-title">\u6982\u8981</p><p>\u672C\u5C0F\u8282\u5927\u81F4\u5B66\u4E60 Vue \u662F\u5982\u4F55\u5B9E\u73B0 <code>Object</code> \u548C <code>Array</code> \u6570\u636E\u7684\u54CD\u5E94\u5F0F\u76D1\u542C\u7684</p></div><h3 id="_1-\u5BF9\u8C61\u52AB\u6301" tabindex="-1"><a class="header-anchor" href="#_1-\u5BF9\u8C61\u52AB\u6301" aria-hidden="true">#</a> 1. \u5BF9\u8C61\u52AB\u6301</h3><ul><li><p>\u5BF9\u8C61\u7684\u8BBF\u95EE\u60C5\u51B5\uFF0C\u53EF\u4EE5\u901A\u8FC7 Object.defineProperty \u65B9\u6CD5\u7684 getter \u6355\u83B7</p></li><li><p>\u5BF9\u8C61\u7684\u53D8\u5316\u60C5\u51B5\uFF0C\u53EF\u4EE5\u901A\u8FC7 Object.defineProperty \u65B9\u6CD5\u7684 setter \u6355\u83B7</p></li><li><p>Object.defineProperty() \u65B9\u6CD5\u4F1A\u76F4\u63A5\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF0C\u6216\u8005\u4FEE\u6539\u4E00\u4E2A\u5BF9\u8C61\u7684\u73B0\u6709\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u6B64\u5BF9\u8C61\u3002</p></li><li><p>Vue \u5C01\u88C5\u4E86\u4E00\u4E2A <code>Observer \u7C7B</code> \u6765\u8BA9\u67D0\u4E2A\u6570\u636E\u53D8\u5F97 \u201C\u53EF\u89C2\u6D4B\u201D\uFF0C\u5185\u90E8\u7528\u5230\u4E86 Object.defineProperty() \u65B9\u6CD5</p><ul><li>\u4E0D\u8DB3\uFF1A\u76F4\u63A5\u7ED9\u5BF9\u8C61\u6DFB\u52A0/\u5220\u9664\u5C5E\u6027\uFF0C\u5219\u8FD9\u4E2A\u5C5E\u6027\u65E0\u6CD5\u53D8\u6210 <code>\u53EF\u89C2\u6D4B</code></li></ul></li><li><p>Vue \u5C01\u88C5\u4E86\u4E00\u4E2A <code>Dep \u7C7B</code> \u6765\u6536\u96C6\u67D0\u4E2A <code>\u4F9D\u8D56</code> \u5BF9\u5E94\u7684 <code>\u4F9D\u8D56\u8005</code></p><ul><li>\u4F9D\u8D56 \u53EF\u4EE5\u770B\u6210\u662F \u6570\u636E</li><li>\u4F9D\u8D56\u8005 \u53EF\u4EE5\u770B\u6210\u662F \u7EC4\u4EF6</li></ul></li></ul><h3 id="_2-\u6570\u7EC4\u52AB\u6301" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u7EC4\u52AB\u6301" aria-hidden="true">#</a> 2. \u6570\u7EC4\u52AB\u6301</h3><ul><li>\u6570\u7EC4\u7684\u8BBF\u95EE\u60C5\u51B5\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 getter \u6355\u83B7</li><li>\u6570\u7EC4\u7684\u53D8\u5316\u60C5\u51B5\uFF0C\u9700\u8981\u901A\u8FC7\u62E6\u622A\u5B9E\u73B0\u3002\u539F\u7406\u662F\uFF1A\u62E6\u622A\u539F\u6570\u7EC4\u539F\u578B\u4E0A\u7684\u65B9\u6CD5 <ul><li>\u4E0D\u8DB3\uFF1A\u76F4\u63A5\u7528\u4E0B\u6807\u548C length \u53D8\u66F4\u7684\u6570\u7EC4\u5143\u7D20\uFF0C\u65E0\u6CD5\u6355\u83B7</li></ul></li><li>Vue \u91CD\u5199\u4E86\u6570\u7EC4 7 \u4E2A\u65B9\u6CD5 push, unshift, pop, shift, splice, sort, reverse\uFF0C\u5728\u5185\u90E8\u8C03\u7528\u4E86\u539F\u65B9\u6CD5<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5927\u81F4\u50CF\u8FD9\u6837\uFF0C\u65E2\u4E0D\u6539\u53D8 push \u65B9\u6CD5\uFF0C\u53C8\u53EF\u4EE5\u901A\u77E5\u53D8\u5316</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">newPush</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;arr \u88AB\u4FEE\u6539\u4E86\uFF0C\u8BF7\u901A\u77E5\u4F9D\u8D56\u8005&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
arr<span class="token punctuation">.</span><span class="token function">newPush</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-\u865A\u62DF-dom" tabindex="-1"><a class="header-anchor" href="#_2-\u865A\u62DF-dom" aria-hidden="true">#</a> 2. \u865A\u62DF DOM</h2><h3 id="_1-\u4EC0\u4E48\u662F-\u865A\u62DF-dom" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F-\u865A\u62DF-dom" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F \u865A\u62DF DOM\uFF1F</h3><ul><li>\u865A\u62DF DOM \u5C31\u662F\u4E00\u4E2A js \u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u4E00\u4E2A\u53C8\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7528\u6765\u63CF\u8FF0\u771F\u6B63\u7684 DOM \u8282\u70B9</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;navbar&quot;</span><span class="token operator">&gt;</span>\u5BFC\u822A\u6761<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// \u5143\u7D20\u6807\u7B7E\u540D</span>
  <span class="token literal-property property">attrs</span><span class="token operator">:</span><span class="token punctuation">{</span>             <span class="token comment">// \u5C5E\u6027</span>
    <span class="token keyword">class</span><span class="token operator">:</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7C7B\u540D</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;navbar&#39;</span>       <span class="token comment">// id \u53F7</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;\u5BFC\u822A\u6761&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// \u6807\u7B7E\u5305\u88F9\u7684\u6587\u672C\u5185\u5BB9</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>         <span class="token comment">// \u5B50\u5143\u7D20</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4E3A\u4EC0\u4E48\u8981\u6709-\u865A\u62DF-dom" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u8981\u6709-\u865A\u62DF-dom" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u8981\u6709 \u865A\u62DF DOM\uFF1F</h3><ul><li>\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9 <strong>js \u7684\u8BA1\u7B97\u6027\u80FD</strong> \u6765\u6362\u53D6 <strong>dom \u7684\u64CD\u4F5C\u6027\u80FD</strong>\uFF08\u51CF\u5C11\u56DE\u6D41\u548C\u91CD\u7ED8\uFF09</li><li>\u5F53\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u5229\u7528 \u865A\u62DF DOM \u8FDB\u884C\u5BF9\u6BD4\uFF0C\u627E\u51FA\u53D8\u5316\u7684\u5730\u65B9\uFF0C\u7528\u6700\u5C11\u6B21\u6570\u6765\u66F4\u65B0\u771F\u5B9E\u7684\u7F51\u9875 DOM</li><li>\u5BF9\u6BD4 DOM \u53D8\u5316\u7684\u8FC7\u7A0B\u5C31\u662F <code>DOM-Diff</code> \u7B97\u6CD5\u7684\u8FC7\u7A0B</li></ul><h3 id="_3-dom-diff-\u7B97\u6CD5-\u5177\u4F53\u505A\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_3-dom-diff-\u7B97\u6CD5-\u5177\u4F53\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> 3. <code>DOM-Diff</code> \u7B97\u6CD5 \u5177\u4F53\u505A\u4E86\u4EC0\u4E48\uFF1F</h3><ul><li><code>DOM-Diff</code> \u7B97\u6CD5 \u4E3B\u8981\u505A 3 \u4EF6\u4E8B\uFF1A <ul><li><ol><li>\u4EE5 \u65B0 DOM \u4E3A\u57FA\u51C6\uFF0C\u5982\u679C \u65E7 DOM \u6CA1\u6709\uFF0C\u65B0 DOM \u6709\uFF0C\u5219\u6DFB\u52A0\u8282\u70B9</li></ol></li><li><ol start="2"><li>\u4EE5 \u65B0 DOM \u4E3A\u57FA\u51C6\uFF0C\u5982\u679C \u65E7 DOM \u6709\uFF0C\u65B0 DOM \u6CA1\u6709\uFF0C\u5219\u5220\u9664\u8282\u70B9</li></ol></li><li><ol start="3"><li>\u4EE5 \u65B0 DOM \u4E3A\u57FA\u51C6\uFF0C\u5982\u679C \u65E7 DOM \u548C\u65B0 DOM \u90FD\u6709\uFF0C\u5219\u66F4\u65B0\u8282\u70B9\u3002\u66F4\u65B0\u8282\u70B9\u53C8\u5206 3 \u79CD\u60C5\u51B5\uFF1A</li></ol><ul><li>3.1 \u9759\u6001\u8282\u70B9\u3002\u65E0\u9700\u53D8\u5316</li><li>3.2 \u6587\u672C\u8282\u70B9\u3002\u5BF9\u6BD4\u6587\u672C\u5185\u5BB9\uFF0C\u8FDB\u884C\u66F4\u65B0</li><li>3.3 \u5143\u7D20\u8282\u70B9\u3002\u5143\u7D20\u8282\u70B9\u53C8\u5206 2 \u79CD\uFF1A <ul><li>\u4E0D\u5305\u542B\u5B50\u8282\u70B9\u3002\u76F4\u63A5\u6E05\u7A7A</li><li>\u5305\u542B\u5B50\u8282\u70B9\u3002\u8FDB\u884C\u8BE6\u7EC6\u5BF9\u6BD4\uFF08\u76F8\u5F53\u4E8E\u5BF9\u6BD4\u4E24\u4E2A\u6570\u7EC4\uFF0C\u6311\u4E86 4 \u79CD\u7279\u6B8A\u60C5\u51B5\uFF0C\u6700\u540E\u518D\u8FDB\u884C\u53CC\u91CD for \u5FAA\u73AF\u4E00\u4E00\u5BF9\u6BD4\uFF09</li></ul></li></ul></li></ul></li></ul><h2 id="_3-\u6A21\u7248\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_3-\u6A21\u7248\u89E3\u6790" aria-hidden="true">#</a> 3. \u6A21\u7248\u89E3\u6790</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>AST\uFF08AbstractSyntaxTree\uFF09 \u662F\u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u53EF\u4EE5\u5229\u7528 js \u5BF9\u8C61\u6765\u63CF\u8FF0\u4E00\u4E2A html \u8282\u70B9\uFF08DOM \u8282\u70B9\uFF09</li><li>\u89E3\u6790\u6A21\u7248\uFF0C\u5C31\u662F\u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5339\u914D template \u4E2D\u7684\u5B57\u7B26\u4E32\uFF0C\u89E3\u6790\u51FA html \u3001\u6587\u672C\u3001\u8FC7\u6EE4\u5668\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u8F6C\u5316\u4E3A AST</li></ul></div><h3 id="_1-\u89E3\u6790\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_1-\u89E3\u6790\u9636\u6BB5" aria-hidden="true">#</a> 1. \u89E3\u6790\u9636\u6BB5</h3><ul><li><p>\u89E3\u6790\u6A21\u7248\u5B57\u7B26\u4E32\u8FC7\u7A0B\u4E2D\u4F1A\u5728\u5BF9\u5E94\u7684\u65F6\u673A\uFF0C\u8C03\u7528\u5BF9\u5E94\u7684\u89E3\u6790\u5668\u548C\u94A9\u5B50\u51FD\u6570\uFF0C\u5C06<code>\u6A21\u677F\u5B57\u7B26\u4E32</code>\u8F6C\u5316\u6210 <code>AST</code></p><ul><li><ol><li>\u8C03\u7528 parse \u51FD\u6570\u89E3\u6790\u6A21\u7248\u5B57\u7B26\u4E32</li></ol></li><li><ol start="2"><li>parse \u51FD\u6570\u5305\u542B 3 \u90E8\u5206\uFF1Ahtml \u89E3\u6790\u5668\u3001\u6587\u672C\u89E3\u6790\u5668\u3001\u8FC7\u6EE4\u5668\u89E3\u6790\u5668</li></ol></li><li><ol start="3"><li>\u5728 html \u89E3\u6790\u5668\u4E2D\u8FDB\u884C\u89E3\u6790\uFF0C\u9047\u5230\u6587\u672C\u5C31\u8C03\u7528\u6587\u672C\u89E3\u6790\u5668\uFF0C\u9047\u5230\u8FC7\u6EE4\u5668\u5C31\u8C03\u7528\u8FC7\u6EE4\u5668\u89E3\u6790\u5668</li></ol></li></ul></li><li><p>HTML \u89E3\u6790\u5668</p><ul><li>\u901A\u8FC7\u4E00\u7CFB\u5217\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5339\u914D\u5BF9\u5E94\u7684\u5185\u5BB9\uFF0C\u8C03\u7528\u5BF9\u5E94\u7684\u94A9\u5B50\u51FD\u6570</li><li>\u5185\u90E8\u7EF4\u62A4\u4E00\u4E2A stack \u6808\uFF0C\u6765\u786E\u4FDD<code>AST\u8282\u70B9\u5C42\u7EA7</code>\u4E0E<code>\u771F\u6B63DOM\u5C42\u7EA7</code>\u4E00\u81F4\u3002</li></ul></li><li><p>\u6587\u672C \u89E3\u6790\u5668</p><ul><li>\u4E8C\u6B21\u5904\u7406<code>HTML \u89E3\u6790\u5668</code>\u89E3\u6790\u51FA\u6765\u7684\u6587\u672C\u53CA\u5176\u53D8\u91CF\uFF0C\u5E76\u6784\u9020 render \u51FD\u6570\u9700\u8981\u7684\u6570\u636E\u7ED3\u6784</li></ul></li></ul><h3 id="_2-\u4F18\u5316\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-\u4F18\u5316\u9636\u6BB5" aria-hidden="true">#</a> 2. \u4F18\u5316\u9636\u6BB5</h3><ul><li>\u4E3A <strong>\u9759\u6001\u8282\u70B9</strong> \u6253\u4E0A\u6807\u8BB0\uFF0C\u63D0\u5347 \u865A\u62DF DOM \u4E2D \u66F4\u65B0\u8FC7\u7A0B\u7684\u6027\u80FD</li><li>\u627E\u51FA <strong>\u9759\u6001\u8282\u70B9</strong> \u548C <strong>\u9759\u6001\u6839\u8282\u70B9</strong></li></ul><h3 id="_3-\u4EE3\u7801\u751F\u6210\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u751F\u6210\u9636\u6BB5" aria-hidden="true">#</a> 3. \u4EE3\u7801\u751F\u6210\u9636\u6BB5</h3><ul><li>\u8BE5\u9636\u6BB5\u4F1A\u751F\u6210\u4E00\u4E2A render \u51FD\u6570\u7684\u5B57\u7B26\u4E32\u7ED9 render \u51FD\u6570\u4F7F\u7528</li><li>render \u51FD\u6570\u662F\u53EF\u9009\u7684\uFF0C\u53EF\u4EE5\u7531\u7528\u6237\u81EA\u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4EE5\u8BA9 Vue \u81EA\u5DF1\u751F\u6210\uFF0C\u53D6\u51B3\u4E8E\u6211\u4EEC\u5199\u4EE3\u7801\u65F6\u6709\u6CA1\u6709\u4F20\u5165</li><li>\u8C03\u7528\u7684\u8FD9\u4E2A <code>render \u51FD\u6570</code>\u5C31\u53EF\u4EE5\u5F97\u5230 <code>AST \u5BF9\u5E94\u7684\u865A\u62DF DOM \u7684 VNode</code></li></ul><h2 id="_4-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_4-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 4. \u751F\u547D\u5468\u671F</h2><h3 id="_1-\u521D\u59CB\u5316\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u59CB\u5316\u9636\u6BB5" aria-hidden="true">#</a> 1. \u521D\u59CB\u5316\u9636\u6BB5</h3><ul><li>\u6267\u884C\u4E86 <code>new Vue</code> \u521B\u5EFA\u4E86\u4E00\u4E2A Vue \u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5E76\u5728\u5185\u90E8\u5408\u5E76\u914D\u7F6E\uFF0C\u521D\u59CB\u5316\u4E00\u4E9B\u51FD\u6570\uFF0C\u987A\u5E8F\u5982\u4E0B\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316\u751F\u547D\u5468\u671F</span>
<span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316\u4E8B\u4EF6</span>
<span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316\u6E32\u67D3</span>
<span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</span>
<span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316 injections</span>
<span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316 props, methods, data, computed, watch</span>
<span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u5316 provide</span>
<span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-\u6A21\u7248\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-\u6A21\u7248\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> 2. \u6A21\u7248\u7F16\u8BD1\u9636\u6BB5</h3><ul><li>\u8BE5\u9636\u6BB5\u5C31\u662F\u628A template \u6A21\u7248\u5B57\u7B26\u4E32\u7F16\u8BD1\u6210 render \u51FD\u6570\u4F9B Vue \u6267\u884C\uFF08\u5DE5\u7A0B\u5316\u9879\u76EE\u4E2D\uFF0C\u8BE5\u9636\u6BB5\u53EF\u4EE5\u501F\u52A9\u63D2\u4EF6 vue-loader \u5B9E\u73B0\uFF09</li><li>\u7136\u540E\u8C03\u7528 $mount \u65B9\u6CD5\uFF0C\u51C6\u5907\u6302\u8F7D DOM \u5143\u7D20</li></ul><h3 id="_3-\u6302\u8F7D\u66F4\u65B0\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_3-\u6302\u8F7D\u66F4\u65B0\u9636\u6BB5" aria-hidden="true">#</a> 3. \u6302\u8F7D\u66F4\u65B0\u9636\u6BB5</h3><ul><li>\u8BE5\u9636\u6BB5\u4E3B\u8981 \u83B7\u53D6 el \u5C5E\u6027\u5BF9\u5E94\u7684 id \u8282\u70B9\uFF0C\u5E76\u7528 App \u7EC4\u4EF6\u6765\u66FF\u6362\uFF0C\u5BF9\u5176\u5185\u5BB9\u8FDB\u884C\u63A7\u5236</li></ul><h3 id="_4-\u9500\u6BC1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_4-\u9500\u6BC1\u9636\u6BB5" aria-hidden="true">#</a> 4. \u9500\u6BC1\u9636\u6BB5</h3><ul><li>\u8BE5\u9636\u6BB5\u4E3B\u8981\u5C06\u5F53\u524D\u7684 Vue \u5B9E\u4F8B\u4ECE\u5176\u7236\u7EA7\u5B9E\u4F8B\u4E2D\u5220\u9664\uFF0C\u53D6\u6D88\u5F53\u524D\u5B9E\u4F8B\u4E0A\u7684\u6240\u6709\u4F9D\u8D56\u8FFD\u8E2A\u5E76\u4E14\u79FB\u9664\u5B9E\u4F8B\u4E0A\u7684\u6240\u6709\u4E8B\u4EF6\u76D1\u542C\u5668</li></ul><h2 id="_5-\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> 5. \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="_1-set" tabindex="-1"><a class="header-anchor" href="#_1-set" aria-hidden="true">#</a> 1. $set()</h3><ul><li>\u8FD9\u4E2A\u65B9\u6CD5\u662F\u7528\u6765\u7ED3\u5C40\u4EE5\u4E0B\u4E24\u4E2A\u95EE\u9898\uFF1A <ul><li>Vue \u65E0\u6CD5\u54CD\u5E94\u5F0F\u76D1\u6D4B\u5BF9\u8C61\u901A\u8FC7 key/value \u5F62\u5F0F\u65B0\u589E\u7684\u5C5E\u6027</li><li>Vue \u65E0\u6CD5\u54CD\u5E94\u5F0F\u76D1\u6D4B\u6570\u7EC4\u901A\u8FC7\u4E0B\u6807\u6765\u5C31\u8BE5\u503C\u548C\u957F\u5EA6</li></ul></li></ul><h3 id="_2-delete" tabindex="-1"><a class="header-anchor" href="#_2-delete" aria-hidden="true">#</a> 2. $delete()</h3><ul><li>\u8FD9\u4E2A\u65B9\u6CD5\u662F\u7528\u6765\u7ED3\u5C40\u4EE5\u4E0B\u95EE\u9898\uFF1A <ul><li>Vue \u65E0\u6CD5\u54CD\u5E94\u5F0F\u76D1\u6D4B\u5BF9\u8C61\u901A\u8FC7 delete \u5173\u952E\u5B57\u6765\u5220\u9664\u7684\u67D0\u4E2A\u5C5E\u6027</li></ul></li></ul><h3 id="_3-on-emit-off-once" tabindex="-1"><a class="header-anchor" href="#_3-on-emit-off-once" aria-hidden="true">#</a> 3. $on(), $emit(), $off(), $once()</h3><ul><li>$on() \u548C $emit() \u662F\u901A\u8FC7\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u521B\u5EFA\u4E00\u4E2A <strong>\u4E8B\u4EF6\u4E2D\u5FC3</strong> \u6765\u5EFA\u7ACB\u8054\u7CFB\u7684 <ul><li>$on() \u7528\u4E8E\u8BA2\u9605\u67D0\u4E2A\u4E8B\u4EF6</li><li>$emit() \u7528\u4E8E\u89E6\u53D1\u67D0\u4E2A\u4E8B\u4EF6</li></ul></li><li>$off() \u7528\u6765\u6E05\u9664 <strong>\u4E8B\u4EF6\u4E2D\u5FC3</strong> \u5F53\u4E2D\u7684\u4E8B\u4EF6</li><li>$once() \u5229\u7528\u5B50\u51FD\u6570\u6765\u8BA9\u67D0\u4E2A\u51FD\u6570\u6267\u884C\u4E00\u6B21\u5C31\u9500\u6BC1\uFF08\u5185\u90E8\u4F7F\u7528\u4E86 $off() \u89E3\u7ED1\u4E8B\u4EF6 \uFF09</li></ul><h3 id="_4-nexttick" tabindex="-1"><a class="header-anchor" href="#_4-nexttick" aria-hidden="true">#</a> 4. $nextTick()</h3><ul><li>$nextTick()\u7528\u4E8E\u5F02\u6B65\u66F4\u65B0\u5185\u5BB9\uFF0C\u56E0\u4E3A Vue \u7684 DOM \u66F4\u65B0\u662F\u5F02\u6B65\u7684</li><li>\u5F53\u6211\u4EEC\u9700\u8981\u8BA9 DOM \u66F4\u65B0\u540E\u624D\u64CD\u4F5C\u67D0\u4E9B\u4E8B\u60C5\uFF0C\u5C31\u8981\u4F7F\u7528\u8BE5\u51FD\u6570</li></ul>`,43),t=[i];function o(c,p){return a(),s("div",null,t)}var d=n(l,[["render",o],["__file","vue-source.html.vue"]]);export{d as default};
