import{_ as n,o as s,c as a,d as e}from"./app.b7934015.js";const t={},p=e(`<h1 id="vue-\u95EE\u7B54\u6574\u7406" tabindex="-1"><a class="header-anchor" href="#vue-\u95EE\u7B54\u6574\u7406" aria-hidden="true">#</a> Vue \u95EE\u7B54\u6574\u7406</h1><h2 id="_1-\u8BF4\u4E0B\u4F60\u5BF9-mvvm-\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-\u8BF4\u4E0B\u4F60\u5BF9-mvvm-\u7684\u7406\u89E3" aria-hidden="true">#</a> 1. \u8BF4\u4E0B\u4F60\u5BF9 MVVM \u7684\u7406\u89E3 ?</h2><ul><li>M \u6307 model \u662F\u9875\u9762\u6240\u4F9D\u8D56\u7684\u6570\u636E\u6E90</li><li>V \u6307 view \u662F\u9875\u9762\u7684 dom \u7ED3\u6784</li><li>VM \u6307 ViewModel \u662F Vue \u5B9E\u4F8B\uFF0C\u8054\u7CFB M \u548C V \u7684\u6865\u6881</li></ul><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u9875\u9762\u3001\u6570\u636E\u90FD\u662F\u5343\u53D8\u4E07\u5316\u7684\uFF0C\u4F46\u4E8C\u8005\u8054\u7CFB\u7684\u6865\u6881\u662F\u53EF\u4EE5\u4E0D\u53D8\u7684\u3002</p></div><p>\u82E5\u6211\u4EEC\u628A\u9875\u9762\u770B\u6210 UI \uFF0C\u628A\u6570\u636E\u770B\u6210 data\uFF0C\u5219\u5F97\u5230\u4E00\u4E2A\u516C\u5F0F\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>UI = render(data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>render() \u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u628A\u6570\u636E(data)\u586B\u5145\u5230\u4E86\u9875\u9762(UI)\u4E2D\uFF0C\u4ECE\u800C\u5F62\u6210\u4E86\u6211\u4EEC\u770B\u5230\u7684\u9875\u9762\u3002\u5F00\u53D1 Vue \u5C31\u662F\u5728\u5F00\u53D1\u4E00\u4E2A render() \u65B9\u6CD5\uFF0C \u800C\u5B66\u4E60 Vue \u5C31\u662F\u5728\u5B66\u4E60 render() \u8FD9\u4E2A\u65B9\u6CD5\u600E\u4E48\u4F7F\u7528\u3002</p><h2 id="_2-\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F-spa-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F-spa-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2. \u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F\uFF08SPA\uFF09\u4F18\u7F3A\u70B9 ?</h2><div class="custom-container tip"><p class="custom-container-title">SPA \u7684\u7279\u70B9</p><p>SPA \u5C06\u6240\u6709\u7684\u529F\u80FD\u5C40\u9650\u4E8E\u4E00\u4E2A web \u9875\u9762\u4E2D\uFF0C\u4EC5\u5728\u8BE5 web \u9875\u9762\u521D\u59CB\u5316\u65F6\u52A0\u8F7D\u76F8\u5E94\u7684\u8D44\u6E90\uFF08 HTML\u3001 JavaScript \u548C CSS\uFF09\u3002 \u4E00\u65E6\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u4E86\uFF0CSPA \u4E0D\u4F1A\u56E0\u4E3A\u7528\u6237\u7684\u64CD\u4F5C\u800C\u8FDB\u884C\u9875\u9762\u7684\u91CD\u65B0\u52A0\u8F7D\u6216\u8DF3\u8F6C\uFF0C\u800C\u662F\u5229\u7528 JavaScript \u52A8\u6001\u5730\u53D8\u6362 HTML \u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u5B9E\u73B0\u9875\u9762\u4E0E\u7528\u6237\u7684\u4EA4\u4E92\u3002</p></div><h3 id="_1-\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u4F18\u70B9" aria-hidden="true">#</a> 1. \u4F18\u70B9</h3><div class="custom-container tip"><p class="custom-container-title">\u4E3B\u8981 3 \u4E2A\u4F18\u70B9</p><ul><li>\u826F\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C <ul><li>\u5185\u5BB9\u6539\u53D8\u65E0\u9700\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762</li><li>\u7F51\u9875\u6570\u636E\u4E5F\u662F Ajax \u5F02\u6B65\u83B7\u53D6\u7684</li><li>\u6CA1\u6709\u9875\u9762\u8DF3\u8F6C\uFF0C\u4E0D\u4F1A\u51FA\u73B0 \u201C\u767D\u5C4F\u73B0\u8C61\u201D</li></ul></li><li>\u826F\u597D\u7684\u524D\u540E\u7AEF\u5DE5\u4F5C\u5206\u79BB\u6A21\u5F0F <ul><li>\u540E\u7AEF\u4E13\u6CE8\u4E8E\u63D0\u4F9B API\uFF0C\u66F4\u5BB9\u6613\u5B9E\u73B0 API \u63A5\u53E3\u7684\u590D\u7528</li><li>\u524D\u7AEF\u4E13\u6CE8\u4E8E\u9875\u9762\u6E32\u67D3\uFF0C\u66F4\u5229\u4E8E\u524D\u7AEF\u5DE5\u7A0B\u5316\u7684\u53D1\u5C55</li></ul></li><li>\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B <ul><li>\u670D\u52A1\u5668\u53EA\u63D0\u4F9B\u6570\u636E\uFF0C\u4E0D\u8D1F\u8D23\u9875\u9762\u7684\u5408\u6210\u4E0E\u903B\u8F91\u7684\u5904\u7406\uFF0C\u541E\u5410\u80FD\u529B\u4F1A\u63D0\u9AD8\u51E0\u500D</li></ul></li></ul></div><h3 id="_2-\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u7F3A\u70B9" aria-hidden="true">#</a> 2. \u7F3A\u70B9</h3><div class="custom-container tip"><p class="custom-container-title">\u4E3B\u8981 2 \u4E2A\u7F3A\u70B9</p><ul><li>\u9996\u5C4F\u52A0\u8F7D\u6162\uFF084 \u79CD\u89E3\u51B3\u65B9\u6848\uFF09 <ul><li>\u8DEF\u7531\u61D2\u52A0\u8F7D</li><li>\u4EE3\u7801\u538B\u7F29</li><li>CDN \u52A0\u901F</li><li>\u7F51\u7EDC\u4F20\u8F93\u538B\u7F29</li></ul></li><li>\u4E0D\u5229\u4E8E SEO \uFF081 \u79CD\u89E3\u51B3\u65B9\u6848\uFF09 - SSR \u670D\u52A1\u5668\u7AEF\u6E32\u67D3</li></ul></div><h2 id="_3-\u8BA1\u7B97\u5C5E\u6027-vs-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u8BA1\u7B97\u5C5E\u6027-vs-\u65B9\u6CD5" aria-hidden="true">#</a> 3. \u8BA1\u7B97\u5C5E\u6027 VS \u65B9\u6CD5</h2><div class="custom-container tip"><p class="custom-container-title">\u4E3B\u8981\u533A\u522B</p><ul><li>\u8BA1\u7B97\u5C5E\u6027\uFF1A\u4F1A\u7F13\u5B58\u8BA1\u7B97\u7ED3\u679C\u3002\u5982\u679C\u5728\u6A21\u7248\u4E2D\u88AB\u591A\u6B21\u4F7F\u7528\uFF0C\u53EA\u8981 <strong>\u4F9D\u8D56\u7684\u6570\u636E</strong> \u4E0D\u53D8\uFF0C\u5C31\u53EA\u6267\u884C\u4E00\u6B21</li><li>\u65B9\u6CD5\uFF1A\u4E0D\u4F1A\u505A\u7279\u6B8A\u5904\u7406\u3002\u5982\u679C\u5728\u6A21\u7248\u4E2D\u88AB\u591A\u6B21\u8C03\u7528\uFF0C\u5185\u90E8\u903B\u8F91\u5C31\u4F1A\u6267\u884C\u591A\u6B21</li></ul></div><h2 id="_4-\u8BA1\u7B97\u5C5E\u6027-vs-\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#_4-\u8BA1\u7B97\u5C5E\u6027-vs-\u76D1\u542C\u5668" aria-hidden="true">#</a> 4. \u8BA1\u7B97\u5C5E\u6027 VS \u76D1\u542C\u5668</h2><div class="custom-container tip"><p class="custom-container-title">\u4FA7\u91CD\u70B9\u4E0D\u540C</p><ul><li>\u8BA1\u7B97\u5C5E\u6027\uFF1A\u4F1A\u76D1\u542C <strong>\u591A\u4E2A\u503C</strong>\uFF0C\u59CB\u7EC8\u7F13\u5B58\u5E76\u8FD4\u56DE <strong>\u4E00\u4E2A\u503C</strong></li><li>\u76D1\u542C\u5668\uFF1A\u4F1A\u76D1\u542C <strong>\u4E00\u4E2A\u503C</strong>\uFF0C\u5E76\u6267\u884C\u4E00\u4E9B\u903B\u8F91\uFF0C<strong>\u65E0\u9700\u8FD4\u56DE\u503C</strong></li></ul></div><h2 id="_5-\u5199\u4E00\u4E0B-dom-diff-\u7684-patch-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-\u5199\u4E00\u4E0B-dom-diff-\u7684-patch-\u51FD\u6570" aria-hidden="true">#</a> 5. \u5199\u4E00\u4E0B DOM-Diff \u7684 patch \u51FD\u6570 \uFF1F</h2><ul><li>DOM-Diff \u5206\u4E3A 2 \u6761\u4E3B\u7EBF\uFF0C\u5927\u81F4\u5199\u4E00\u4E0B\u5B83\u7684\u5185\u90E8\u903B\u8F91\uFF1A <ul><li><ol><li>\u521D\u6B21\u6E32\u67D3</li></ol></li><li><ol start="2"><li>\u66F4\u65B0\u6E32\u67D3</li></ol></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u521D\u59CB\u5316\uFF08\u51C6\u5907\u4E00\u4E2A \u8282\u70B9\uFF0C\u76EE\u7684\u662F\u521B\u5EFA\u8BE5\u8282\u70B9\uFF09</span>
<span class="token keyword">function</span> <span class="token function">creatElement</span><span class="token punctuation">(</span><span class="token parameter">vNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u5143\u7D20\u4E09\u8981\u7D20\uFF1A\u6807\u7B7E\u540D\u3001\u6807\u7B7E\u7684\u5C5E\u6027\u3001\u5B50\u8282\u70B9</span>
  <span class="token keyword">const</span> tag <span class="token operator">=</span> vNode<span class="token punctuation">.</span>tag <span class="token comment">// \u62FF\u5230\u6807\u7B7E\u540D</span>
  <span class="token keyword">const</span> attrs <span class="token operator">=</span> vNode<span class="token punctuation">.</span>attrs <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// \u62FF\u5230\u6240\u6709\u5C5E\u6027</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> vNode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u62FF\u5230\u5B50\u8282\u70B9</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6709\u6807\u7B7E\uFF0C\u5219\u521B\u5EFA\u5143\u7D20\u3001\u6DFB\u52A0\u5C5E\u6027\u3001\u6DFB\u52A0\u5B50\u8282\u70B9</span>
  <span class="token keyword">const</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">creatElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> attName <span class="token keyword">in</span> attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>attrs<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>attName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ele<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>arrName<span class="token punctuation">,</span> attrs<span class="token punctuation">[</span>arrName<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">childVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ele<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">creatElement</span><span class="token punctuation">(</span>childVnode<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> ele
<span class="token punctuation">}</span>

<span class="token comment">// 2. \u66F4\u65B0\u51FD\u6570\uFF08\u51C6\u5907 \u4E00\u4E2A\u65E7\u8282\u70B9 \u548C \u4E00\u4E2A\u65B0\u8282\u70B9\uFF0C\u76EE\u7684\u662F\u628A\u65E7\u8282\u70B9\u5C40\u90E8\u66F4\u65B0\u4E3A\u65B0\u8282\u70B9\uFF09</span>
<span class="token keyword">function</span> <span class="token function">updateChildren</span><span class="token punctuation">(</span><span class="token parameter">vNode<span class="token punctuation">,</span> newVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> children <span class="token operator">=</span> vNode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u65E7 DOM \u7684\u5B50\u8282\u70B9</span>
  <span class="token keyword">let</span> newChildren <span class="token operator">=</span> newVnode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u65B0 DOM \u7684\u5B50\u8282\u70B9</span>

  <span class="token comment">// \u5FAA\u73AF\u5BF9\u6BD4</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">childVnode<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5148\u5047\u8BBE\u65E0\u53D8\u5316\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7 \u65E7\u8282\u70B9\u7D22\u5F15 \u6765\u83B7\u53D6 \u65B0\u8282\u70B9</span>
    <span class="token keyword">let</span> newChildrenVnode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

    <span class="token comment">// \u5BF9\u6BD4\u6807\u7B7E</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>newChildrenVnode<span class="token punctuation">.</span>tag <span class="token operator">===</span> childVnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7B2C\u4E00\u5C42\u6CA1\u53D8\u5316, \u9012\u5F52\u66F4\u65B0\u5B50\u8282\u70B9</span>
      <span class="token function">updateChildren</span><span class="token punctuation">(</span>childVnode<span class="token punctuation">,</span> newChildrenVnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6807\u7B7E\u53D8\u4E86\uFF0C\u5C31\u9700\u8981\u628A\u65E7\u8282\u70B9\u6362\u6210\u65B0\u7684</span>
      <span class="token function">replaceNode</span><span class="token punctuation">(</span>childVnode<span class="token punctuation">,</span> newChildrenVnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[p];function c(l,o){return s(),a("div",null,i)}var d=n(t,[["render",c],["__file","vue-questions-answers.html.vue"]]);export{d as default};