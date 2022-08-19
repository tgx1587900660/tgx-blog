import{_ as i,o as l,c as t,a as n,e as o,w as p,d as e,b as s,r as c}from"./app.b7934015.js";const r={},d=e(`<h1 id="\u65E7\u9879\u76EE-eslint-\u5347\u7EA7\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u65E7\u9879\u76EE-eslint-\u5347\u7EA7\u4F53\u9A8C" aria-hidden="true">#</a> \u65E7\u9879\u76EE Eslint \u5347\u7EA7\u4F53\u9A8C</h1><div class="custom-container tip"><p class="custom-container-title">\u8D77\u56E0</p><p>\u6211\u4EEC\u9879\u76EE\u4F7F\u7528\u7684 webpack \u7248\u672C\u662F 3.12.0\uFF0C\u4EE3\u7801\u68C0\u6D4B\u529F\u80FD\u4E5F\u4E0D\u591F\u5B8C\u5584\uFF0Ceslint \u5E76\u4E0D\u662F\u6700\u65B0\u7248\u672C\u3002 \u7136\u540E\u516C\u53F8\u6765\u4E86\u4E2A\u524D\u7AEF leader\uFF0C\u8981\u6C42\u6211\u4EEC\u628A\u6240\u6709\u9879\u76EE\u7684 eslint \u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\uFF0C\u5E76\u4E14\u914D\u7F6E\u56E2\u961F\u89C4\u5B9A\u7684 eslint \u68C0\u6D4B\u89C4\u8303\u3002 \u56E0\u6B64\u6709\u4E86\u8FD9\u6B21\u7684\u5347\u7EA7\u4F53\u9A8C\u3002</p></div><h2 id="_1-\u5347\u7EA7eslint\u53CA\u5176\u4F9D\u8D56\u5305\u7684\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_1-\u5347\u7EA7eslint\u53CA\u5176\u4F9D\u8D56\u5305\u7684\u7248\u672C" aria-hidden="true">#</a> 1.\u5347\u7EA7<code>eslint</code>\u53CA\u5176\u4F9D\u8D56\u5305\u7684\u7248\u672C</h2><div class="custom-container tip"><p class="custom-container-title">\u5305\u7BA1\u7406\u5DE5\u5177</p><p>\u8FD9\u91CC\u6211\u9009\u62E9\u4E86<code>cnpm</code>\u4F5C\u4E3A\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u56E0\u4E3A<code>npm</code>\u7ECF\u5E38\u4F1A\u56E0\u4E3A\u7248\u672C\u95EE\u9898\u800C\u62A5\u9519\uFF0C\u5176\u4E2D<code>i</code>\u662F<code>install</code>\u7684\u7F29\u5199</p></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>cnpm i eslint@7.30.0
cnpm i eslint-loader@4.0.2
cnpm i babel-eslint@10.1.0
cnpm i eslint-plugin-standard@3.0.1
cnpm i eslint-plugin-vue@7.12.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5199\u5165eslint\u7684\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-\u5199\u5165eslint\u7684\u89C4\u5219" aria-hidden="true">#</a> 2.\u5199\u5165<code>eslint</code>\u7684\u89C4\u5219</h2><div class="custom-container tip"><p class="custom-container-title">\u89C4\u5219\u6587\u4EF6\u7684\u4F4D\u7F6E</p><p>\u4E0E node_modules \u5E73\u7EA7\u7684\u76EE\u5F55\u4E0B\u5E94\u8BE5\u5B58\u5728\u4E00\u4E2A .eslintrc.js \u6587\u4EF6\uFF0C\u4EE5\u4E0B\u5C31\u662F\u8FD9\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u56E2\u961F\u7684\u4EE3\u7801\u89C4\u8303\u7EA6\u5B9A</p></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u5177\u4F53\u89C4\u5219</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@file</span> eslint config
 * <span class="token keyword">@author</span>
 */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u65E0\u9700\u5411\u7236\u76EE\u5F55\u67E5\u627Eeslint\u6587\u4EF6</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// \u4F7F\u7528babel-eslint\u89E3\u6790\u5668</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;babel-eslint&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6307\u5B9A\u811A\u672C\u7684\u8FD0\u884C\u73AF\u5883,\u6BCF\u79CD\u73AF\u5883\u90FD\u6709\u4E00\u7EC4\u7279\u5B9A\u7684\u9884\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6570\u7EC4\u5F62\u5F0F\uFF0C\u6BCF\u4E2A\u914D\u7F6E\u7EE7\u627F\u5B83\u524D\u9762\u7684\u914D\u7F6E</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;plugin:vue/recommended&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;standard&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7701\u7565\u5305\u540D\u7684\u524D\u7F00 eslint-plugin-</span>
  <span class="token comment">// required to lint *.vue files</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \u914D\u7F6E\u989D\u5916\u7684\u5168\u5C40\u53D8\u91CF</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// value \u4E3A true \u5141\u8BB8\u88AB\u91CD\u5199\uFF0C\u4E3A false \u4E0D\u5141\u8BB8\u88AB\u91CD\u5199</span>
    <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u81EA\u5B9A\u4E49\u89C4\u5219</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528\u5355\u5F15\u53F7</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            let str = &quot;hello world&quot;

            // good code
            let str = &#39;hello world&#39;
        */</span>
    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4E09\u7B49\u53F7</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            if (a == b) {}

            // good code
            if (a === b) {}
        */</span>
    <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u51FA\u73B0\u672A\u4F7F\u7528\u8FC7\u7684\u53D8\u91CF</span>
    <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5F3A\u5236\u5728\u5173\u952E\u5B57\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            if (foo) {
                //...
            }else if (bar) {
                //...
            }else {
                //...
            }

            // good code
            if (foo) {
                //...
            } else if (bar) {
                //...
            } else {
                //...
            }
        */</span>
    <span class="token string-property property">&#39;keyword-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token keyword">for</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token keyword">while</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token keyword">else</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/camelcase</span>
    <span class="token literal-property property">camelcase</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7F29\u8FDB\u4F7F\u7528 4 \u4E2A\u7A7A\u683C\uFF0C\u5E76\u4E14 switch \u8BED\u53E5\u4E2D\u7684 Case \u9700\u8981\u7F29\u8FDB</span>
    <span class="token comment">// https://eslint.org/docs/rules/indent</span>
    <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">SwitchCase</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">flatTernaryExpressions</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u6570\u7EC4\u7684\u62EC\u53F7\u5185\u7684\u524D\u540E\u7981\u6B62\u6709\u7A7A\u683C</span>
    <span class="token comment">// https://eslint.org/docs/rules/array-bracket-spacing</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            const foo = [ &#39;foo&#39; ];
            const foo = [ &#39;foo&#39;];
            const foo = [&#39;foo&#39; ];
            const foo = [ 1 ];

            // good code
            const foo = [&#39;foo&#39;];
            const foo = [1];
        */</span>
    <span class="token string-property property">&#39;array-bracket-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u9700\u8981\u5728\u64CD\u4F5C\u7B26\u4E4B\u524D\u653E\u7F6E\u6362\u884C\u7B26</span>
    <span class="token comment">// https://eslint.org/docs/rules/operator-linebreak</span>
    <span class="token comment">// &#39;operator-linebreak&#39;: [&#39;error&#39;, &#39;before&#39;],</span>

    <span class="token comment">// \u5728\u5F00\u53D1\u9636\u6BB5\u6253\u5F00\u8C03\u8BD5 (\u533A\u5206stag prod)</span>
    <span class="token comment">// https://eslint.org/docs/rules/no-debugger</span>
    <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u65F6\uFF0C\u7BAD\u5934\u51FD\u6570\u4F53\u53EF\u4EE5\u7701\u7565\u5706\u62EC\u53F7</span>
    <span class="token comment">// https://eslint.org/docs/rules/arrow-parens</span>
    <span class="token string-property property">&#39;arrow-parens&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u7A7A\u8BED\u53E5\uFF08\u53EF\u5728\u7A7A\u8BED\u53E5\u5199\u6CE8\u91CA\u907F\u514D\uFF09\uFF0C\u5141\u8BB8\u7A7A\u7684 catch \u8BED\u53E5</span>
    <span class="token comment">// https://eslint.org/docs/rules/no-empty</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            if (foo) {
            }

            while (foo) {
            }

            // good code
            if (foo) {
                // empty
            }
        */</span>
    <span class="token string-property property">&#39;no-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">allowEmptyCatch</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u5728\u8BED\u53E5\u672B\u5C3E\u4F7F\u7528\u5206\u53F7</span>
    <span class="token comment">// https://eslint.org/docs/rules/semi</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            const obj = {};

            // good code
            const obj = {}
        */</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u51FD\u6570\u5706\u62EC\u53F7\u4E4B\u524D\u6CA1\u6709\u7A7A\u683C\uFF08\u633A\u6709\u4E89\u8BAE\u7684\uFF09</span>
    <span class="token comment">// https://eslint.org/docs/rules/space-before-function-paren</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            function foo () {
                // ...
            }

            const bar = function () {
                // ...
            }

            // good code
            function foo() {
                // ...
            }

            const bar = function() {
                // ...
            }
        */</span>
    <span class="token string-property property">&#39;space-before-function-paren&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">anonymous</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F</span>
        <span class="token literal-property property">named</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u547D\u540D\u7684\u51FD\u6570\u8868\u8FBE\u5F0F</span>
        <span class="token literal-property property">asyncArrow</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span> <span class="token comment">// \u5F02\u6B65\u7684\u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u884C\u5C3E\u6709\u7A7A\u683C</span>
    <span class="token comment">// https://eslint.org/docs/rules/no-trailing-spaces</span>
    <span class="token string-property property">&#39;no-trailing-spaces&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u6CE8\u91CA\u7684\u659C\u7EBF\u6216 * \u540E\u5FC5\u987B\u6709\u7A7A\u683C</span>
    <span class="token comment">// https://eslint.org/docs/rules/spaced-comment</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            //This is a comment with no whitespace at the beginning

            // good code
            // This is a comment with a whitespace at the beginning
        */</span>
    <span class="token string-property property">&#39;spaced-comment&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">markers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*package&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u524D\u540E\u7A7A\u683C\u662F\u5426\u5E73\u8861</span>
          <span class="token literal-property property">balanced</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">markers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*package&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;::&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;flow-include&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">exceptions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/no-template-curly-in-string</span>
    <span class="token comment">// \u7981\u6B62\u5728\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u5B57\u7B26\u4E32\u6A21\u677F\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;no-template-curly-in-string&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/no-useless-escape</span>
    <span class="token comment">// \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684\u8F6C\u4E49\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;no-useless-escape&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/no-var</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528 var</span>
    <span class="token string-property property">&#39;no-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/prefer-const</span>
    <span class="token comment">// \u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u4E0D\u4F1A\u88AB\u91CD\u65B0\u8D4B\u503C\uFF0C\u5FC5\u987B\u4F7F\u7528 \`const\` \u8FDB\u884C\u58F0\u660E\u3002</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            let a = 3
            console.log(a)

            // good code
            const a = 3
            console.log(a)
        */</span>
    <span class="token string-property property">&#39;prefer-const&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// eslint-plugin-vue@7 \u65B0\u589E\u7684\u89C4\u5219\uFF0C\u6682\u65F6\u5148\u5168\u90E8\u5173\u95ED</span>
    <span class="token string-property property">&#39;vue/no-dupe-v-else-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/component-definition-name-casing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/one-component-per-file&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/v-slot-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-arrow-functions-in-watch&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-custom-modifiers-on-v-model&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-multiple-template-root&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-mutating-props&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-v-for-template-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-v-model-argument&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/valid-v-bind-sync&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/valid-v-slot&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/experimental-script-setup-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-lone-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4E0D\u5141\u8BB8\u6570\u7EC4\u62EC\u53F7\u5185\u6709\u7A7A\u683C</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/array-bracket-spacing.md</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * var arr = [ &#39;foo&#39;, &#39;bar&#39; ];
     * var arr = [&#39;foo&#39;, &#39;bar&#39; ];
     * var [ x, y ] = z;
     *
     * good code
     * var arr = [&#39;foo&#39;, &#39;bar&#39;, &#39;baz&#39;];
     * var arr = [[&#39;foo&#39;], &#39;bar&#39;, &#39;baz&#39;];
     * var [x, y] = z;
     */</span>
    <span class="token string-property property">&#39;vue/array-bracket-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5728\u7BAD\u5934\u51FD\u6570\u7684\u7BAD\u5934\u4E4B\u524D/\u4E4B\u540E\u9700\u8981\u7A7A\u683C</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/arrow-spacing.md</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * ()=&gt; <span class="token punctuation">{</span><span class="token punctuation">}</span>;
     * () =&gt;<span class="token punctuation">{</span><span class="token punctuation">}</span>;
     * (a)=&gt; <span class="token punctuation">{</span><span class="token punctuation">}</span>;
     * (a) =&gt;<span class="token punctuation">{</span><span class="token punctuation">}</span>;
     *
     * good code
     * () =&gt; <span class="token punctuation">{</span><span class="token punctuation">}</span>;
     * (a) =&gt; <span class="token punctuation">{</span><span class="token punctuation">}</span>;
     * a =&gt; a;
     * () =&gt; <span class="token punctuation">{</span>&#39;\\n&#39;<span class="token punctuation">}</span>;
     */</span>
    <span class="token string-property property">&#39;vue/arrow-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md</span>
    <span class="token comment">// vue html \u5C5E\u6027\u5C0F\u5199\uFF0C\u8FDE\u5B57\u7B26</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * &lt;MyComponent myProp=&quot;prop&quot; /&gt;
     *
     * good code
     * &lt;MyComponent my-prop=&quot;prop&quot; /&gt;
     */</span>
    <span class="token string-property property">&#39;vue/attribute-hyphenation&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attributes-order.md</span>
    <span class="token comment">// \u5C5E\u6027\u987A\u5E8F\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/attributes-order&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5728\u6253\u5F00\u5757\u4E4B\u540E\u548C\u5173\u95ED\u5757\u4E4B\u524D\u5F3A\u5236\u5757\u5185\u7684\u7A7A\u683C</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/block-spacing.md</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * function foo() <span class="token punctuation">{</span>return true;<span class="token punctuation">}</span>
     * if (foo) <span class="token punctuation">{</span> bar = 0;<span class="token punctuation">}</span>
     * (a) =&gt;<span class="token punctuation">{</span><span class="token punctuation">}</span>;function baz() <span class="token punctuation">{</span>let i = 0;
     * return i;
     * <span class="token punctuation">}</span>
     *
     * good code
     * function foo() <span class="token punctuation">{</span> return true; <span class="token punctuation">}</span>
     * if (foo) <span class="token punctuation">{</span> bar = 0; <span class="token punctuation">}</span>
     */</span>
    <span class="token string-property property">&#39;vue/block-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/camelcase.md</span>
    <span class="token comment">// \u540E\u7AEF\u6570\u636E\u5B57\u6BB5\u7ECF\u5E38\u4E0D\u662F\u9A7C\u5CF0\uFF0C\u6240\u4EE5\u4E0D\u9650\u5236 properties\uFF0C\u4E5F\u4E0D\u9650\u5236\u89E3\u6784</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * import <span class="token punctuation">{</span> no_camelcased <span class="token punctuation">}</span> from &quot;external-module&quot;
     * var my_favorite_color = &quot;#112C85&quot;;
     * obj.do_something = function() <span class="token punctuation">{</span>
     * // ...
     * <span class="token punctuation">}</span>;
     *
     * good code
     * import <span class="token punctuation">{</span> no_camelcased as camelCased <span class="token punctuation">}</span> from &quot;external-module&quot;;
     * var myFavoriteColor   = &quot;#112C85&quot;;
     * var _myFavoriteColor  = &quot;#112C85&quot;;
     * var myFavoriteColor_  = &quot;#112C85&quot;;
     */</span>
    <span class="token string-property property">&#39;vue/camelcase&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/comma-dangle.md</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u62D6\u5C3E\u9017\u53F7\uFF0C\u5982 {demo: &#39;test&#39;,}</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * var foo = <span class="token punctuation">{</span>
     * bar: &quot;baz&quot;,
     * qux: &quot;quux&quot;,
     * var arr = [1,2,];
     * <span class="token punctuation">}</span>;
     *
     * good code
     * var foo = <span class="token punctuation">{</span>
     * bar: &quot;baz&quot;,
     * qux: &quot;quux&quot;
     * var arr = [1,2];
     */</span>
    <span class="token string-property property">&#39;vue/comma-dangle&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/comment-directive.md</span>
    <span class="token comment">// vue \u6587\u4EF6 template \u4E2D\u5141\u8BB8 eslint-disable eslint-enable eslint-disable-line eslint-disable-next-line</span>
    <span class="token comment">// \u884C\u5185\u6CE8\u91CA\u542F\u7528/\u7981\u7528\u67D0\u4E9B\u89C4\u5219\uFF0C\u914D\u7F6E\u4E3A 1 \u5373\u5141\u8BB8</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * &lt;div a=&quot;1&quot; /&gt;
     *
     * good code
     * &lt;div a=&quot;1&quot; b=&quot;2&quot; c=&quot;3&quot; d=&quot;4&quot; /&gt;
     */</span>
    <span class="token string-property property">&#39;vue/comment-directive&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/component-name-in-template-casing.md</span>
    <span class="token comment">// \u7EC4\u4EF6 html \u6807\u7B7E\u7684\u5F62\u5F0F\uFF0C\u8FDE\u5B57\u7B26\u5F62\u5F0F\uFF0C\u6240\u6709 html \u6807\u7B7E\u5747\u4F1A\u68C0\u6D4B\uFF0C\u5982\u5F15\u5165\u7B2C\u4E09\u65B9\u4E0D\u53EF\u907F\u514D\uFF0C\u53EF\u901A\u8FC7 ignores \u914D\u7F6E\uFF0C\u652F\u6301\u6B63\u5219\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/component-name-in-template-casing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u9700\u8981 === \u548C !==,\u4E0D\u5C06\u6B64\u89C4\u5219\u5E94\u7528\u4E8Enull</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/eqeqeq.md</span>
    <span class="token doc-comment comment">/**
     * \u793A\u4F8B
     * bad code
     * if (x == 42) <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     * if (&quot;&quot; == text) <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     * if (obj.getStuff() != undefined) <span class="token punctuation">{</span> <span class="token punctuation">}</span>
     * var arr = [1,2,];
     * <span class="token punctuation">}</span>;
     *
     * good code
     * a === b
     * foo === true
     * bananas !== 1
     * value === undefined
     */</span>
    <span class="token string-property property">&#39;vue/eqeqeq&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">null</span><span class="token operator">:</span> <span class="token string">&#39;ignore&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-newline.md</span>
    <span class="token comment">// \u5355\u884C\u5199\u6CD5\u4E0D\u9700\u8981\u6362\u884C\uFF0C\u591A\u884C\u9700\u8981\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/html-closing-bracket-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u81EA\u5173\u95ED\u6807\u7B7E\u9700\u8981\u7A7A\u683C</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-spacing.md</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;!-- bad code --&gt;
            &lt;div &gt;
                &lt;div foo=&quot;bar&quot; &gt;&lt;/div &gt;
            &lt;div/&gt;
            &lt;div foo/&gt;
            &lt;div foo=&quot;bar&quot;/&gt;

            &lt;!-- \u2713 GOOD --&gt;
            &lt;div&gt;
                &lt;div foo=&quot;bar&quot;&gt;&lt;/div&gt;
            &lt;div /&gt;
            &lt;div foo /&gt;
            &lt;div foo=&quot;bar&quot; /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/html-closing-bracket-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">startTag</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">endTag</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selfClosingTag</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u6807\u7B7E\u5FC5\u987B\u6709\u7ED3\u675F\u6807\u7B7E</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;!-- bad code --&gt;
            &lt;div&gt;
            &lt;p&gt;

            &lt;!-- good code --&gt;
            &lt;div&gt;&lt;/div&gt;
            &lt;p&gt;&lt;/p&gt;
        */</span>
    <span class="token string-property property">&#39;vue/html-end-tags&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// html\u7684\u7F29\u8FDB.\u5728\u591A\u884C\u60C5\u51B5\u4E0B\uFF0C\u5C5E\u6027\u4E0D\u4E0E\u7B2C\u4E00\u4E2A\u5C5E\u6027\u5782\u76F4\u5BF9\u9F50</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;!-- bad code --&gt;
            &lt;div id=&quot;&quot;

                 some-attr=&quot;&quot;
            /&gt;

            &lt;!-- good code --&gt;
            &lt;div id=&quot;&quot;

                some-attr=&quot;&quot;
            /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/html-indent&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">attribute</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">baseIndent</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">closeBracket</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">alignAttributesVertically</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5728\u591A\u884C\u60C5\u51B5\u4E0B\uFF0C\u5C5E\u6027\u662F\u5426\u5E94\u4E0E\u7B2C\u4E00\u4E2A\u5C5E\u6027\u5782\u76F4\u5BF9\u9F50</span>
        <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// html\u5C5E\u6027\u5F15\u7528\u91C7\u7528\u53CC\u5F15\u53F7</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-quotes.md</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;!-- bad code --&gt;
            &lt;img src=&#39;./logo.png&#39; /&gt;

            &lt;!-- good code --&gt;
            &lt;img src=&quot;./logo.png&quot; /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/html-quotes&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;double&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md</span>
    <span class="token comment">// html tag \u662F\u5426\u81EA\u95ED\u548C\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/html-self-closing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/jsx-uses-vars.md</span>
    <span class="token comment">// \u5F53\u53D8\u91CF\u5728 \`JSX\` \u4E2D\u88AB\u4F7F\u7528\u4E86\uFF0C\u90A3\u4E48 eslint \u5C31\u4E0D\u4F1A\u62A5\u51FA \`no-unused-vars\` \u7684\u9519\u8BEF\u3002\u9700\u8981\u5F00\u542F eslint no-unused-vars \u89C4\u5219\u624D\u9002\u7528</span>
    <span class="token comment">/*
            import HelloWorld from &#39;./HelloWorld&#39;;

            export default {
                render () {
                    return (
                        &lt;HelloWorld msg=&quot;world&quot;/&gt;
                    )
                },
            }
            \u6B64\u65F6\u4E0D\u4F1A\u62A5 \`no-unused-vars\` \u7684\u9519\u8BEF\uFF0C\u4EC5\u8B66\u544A
        */</span>
    <span class="token string-property property">&#39;vue/jsx-uses-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/key-spacing.md</span>
    <span class="token comment">// \u5C5E\u6027\u5B9A\u4E49\uFF0C\u5192\u53F7\u524D\u6CA1\u6709\u7A7A\u683C\uFF0C\u540E\u9762\u6709\u7A7A\u683C</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            const obj = { a:1 }

            // good code
            const obj = { a: 1 }
        */</span>
    <span class="token string-property property">&#39;vue/key-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">beforeColon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">afterColon</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/match-component-file-name.md</span>
    <span class="token comment">// \u7EC4\u4EF6\u540D\u79F0\u5C5E\u6027\u4E0E\u5176\u6587\u4EF6\u540D\u5339\u914D\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/match-component-file-name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md</span>
    <span class="token comment">// \u6BCF\u884C\u5C5E\u6027\u7684\u6700\u5927\u4E2A\u6570\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/max-attributes-per-line&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/multiline-html-element-content-newline.md</span>
    <span class="token comment">// \u5728\u591A\u884C\u5143\u7D20\u7684\u5185\u5BB9\u524D\u540E\u9700\u8981\u6362\u884C\u7B26\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/multiline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md</span>
    <span class="token comment">// template \u4E2D {{var}}\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/mustache-interpolation-spacing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// name\u5C5E\u6027\u5F3A\u5236\u4F7F\u7528\u8FDE\u5B57\u7B26\u5F62\u5F0F</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            export default {
                name: &#39;MyComponent&#39;
            }

            // good code
            export default {
                name: &#39;my-component&#39;
            }
        */</span>
    <span class="token string-property property">&#39;vue/name-property-casing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;kebab-case&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u6267\u884C\u5F02\u6B65\u64CD\u4F5C</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md</span>
    <span class="token comment">/* \u793A\u4F8B
            computed: {
                // bad code
                pro () {
                  return Promise.all([new Promise((resolve, reject) =&gt; {})])
                },
                foo1: async function () {
                  return await someFunc()
                },
                bar () {
                  return fetch(url).then(response =&gt; {})
                },
                tim () {
                  setTimeout(() =&gt; { }, 0)
                },
                inter () {
                  setInterval(() =&gt; { }, 0)
                },
                anim () {
                  requestAnimationFrame(() =&gt; {})
                },

                // good code
                foo () {
                  var bar = 0
                  try {
                    bar = bar / this.a
                  } catch (e) {
                    return 0
                  } finally {
                    return bar
                  }
                },
            }
        */</span>
    <span class="token string-property property">&#39;vue/no-async-in-computed-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u5E03\u5C14\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-boolean-default.md</span>
    <span class="token string-property property">&#39;vue/no-boolean-default&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-confusing-v-for-v-if.md</span>
    <span class="token string-property property">&#39;vue/no-confusing-v-for-v-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-dupe-keys.md</span>
    <span class="token comment">// \u5C5E\u6027\u540D\u7981\u6B62\u91CD\u590D</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            person: {
               age: &#39;&#39;,
               age: &#39;&#39;
            }

            // good code
            person: {
               age: &#39;&#39;,
               name: &#39;&#39;
            }
        */</span>
    <span class="token string-property property">&#39;vue/no-dupe-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-duplicate-attributes.md</span>
    <span class="token comment">// \u7981\u6B62 html \u5143\u7D20\u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u5C5E\u6027</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div :a=&quot;&quot; :a=&quot;&quot;&gt;&lt;/div&gt;

            // good code
            &lt;div :a=&quot;&quot; :b=&quot;&quot;&gt;&lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-duplicate-attributes&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-multi-spaces.md</span>
    <span class="token comment">// \u5220\u9664 html \u6807\u7B7E\u4E2D\u8FDE\u7EED\u591A\u4E2A\u4E0D\u7528\u4E8E\u7F29\u8FDB\u7684\u7A7A\u683C</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div    :a=&quot;&quot;&gt;&lt;/div&gt;

            // good code
            &lt;div :a=&quot;&quot;&gt;&lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-multi-spaces&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md</span>
    <span class="token comment">// \u7981\u6B62\u8BED\u6CD5\u9519\u8BEF</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div : / @click=&quot;def(&quot;&gt;
                &lt;/span&gt;
            &lt;/div id=&quot;ghi&quot;&gt;

            // good code
            &lt;div id=&quot;&quot; @click=&quot;def()&quot;&gt;
                &lt;span&gt;&lt;/span&gt;
            &lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-parsing-error&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-reserved-keys.md</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u4FDD\u7559\u5B57\uFF0C\u5305\u62ECVue</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            props: {
                $nextTick () {}
            }

            // good code
            props: {
                next () {}
            }
        */</span>
    <span class="token string-property property">&#39;vue/no-reserved-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-restricted-syntax.md</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u7279\u5B9A\u7684\u8BED\u6CD5\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/no-restricted-syntax&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-shared-component-data.md</span>
    <span class="token comment">// data \u5C5E\u6027\u5FC5\u987B\u662F\u51FD\u6570</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            data: {
            }

            // good code
            data() {
                return {}
            }
        */</span>
    <span class="token string-property property">&#39;vue/no-shared-component-data&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-side-effects-in-computed-properties.md</span>
    <span class="token comment">// \u7981\u6B62\u5728\u8BA1\u7B97\u5C5E\u6027\u5BF9\u5C5E\u6027\u8FDB\u884C\u4FEE\u6539\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/no-side-effects-in-computed-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4E0D\u5141\u8BB8\u5728\u5C5E\u6027\u4E2D\u7684\u7B49\u53F7\u5468\u56F4\u6709\u7A7A\u683C</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-spaces-around-equal-signs-in-attribute.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div class = &quot;item&quot;&gt;&lt;/div&gt;

            // good code
            &lt;div&gt;&lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-spaces-around-equal-signs-in-attribute&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-key.md</span>
    <span class="token comment">// \u7981\u6B62\u5728 &lt;template&gt; \u4E2D\u4F7F\u7528 key \u5C5E\u6027\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/no-template-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u518Dtextarea\u4E2D\u4F7F\u7528\u6A21\u677F\u8BED\u8A00</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;textarea&gt;{{ message }}&lt;/textarea&gt;

            // good code
            &lt;textarea v-model=&quot;message&quot; /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-textarea-mustache&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-components.md</span>
    <span class="token comment">// \u7981\u6B62 components \u4E2D\u58F0\u660E\u7684\u7EC4\u4EF6\u5728 template \u4E2D\u6CA1\u6709\u4F7F\u7528</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;template&gt;
                &lt;div&gt;
                    &lt;h2&gt;Lorem ipsum&lt;/h2&gt;
                &lt;/div&gt;
            &lt;/template&gt;

            &lt;script&gt;
                import TheButton from &#39;components/TheButton.vue&#39;

                export default {
                    components: {
                        TheButton // Unused component
                    }
                }
            &lt;/script&gt;

            // good code
            &lt;template&gt;
                &lt;div&gt;
                    &lt;TheButton&gt;CTA&lt;/TheButton&gt;
                &lt;/div&gt;
            &lt;/template&gt;

            &lt;script&gt;
                import TheButton from &#39;components/TheButton.vue&#39;

                export default {
                    components: {
                        TheButton
                    }
                }
            &lt;/script&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-unused-components&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7981\u6B62\u5728v-for\u6216\u4F5C\u7528\u57DF\u5185\u4F7F\u7528\u672A\u4F7F\u7528\u8FC7\u7684\u53D8\u91CF</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-vars.md</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;template&gt;
                // bad code
                &lt;ol v-for=&quot;i in 5&quot;&gt;
                    &lt;li&gt;item&lt;/li&gt;
                &lt;/ol&gt;

                // good code
                &lt;ol v-for=&quot;i in 5&quot;&gt;
                    &lt;li&gt;{{ i }}&lt;/li&gt;
                &lt;/ol&gt;
            &lt;/template&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-use-v-if-with-v-for.md</span>
    <span class="token comment">// \u7981\u6B62 v-for \u548C v-if \u5728\u540C\u4E00\u5143\u7D20\u4E0A\u4F7F\u7528\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/no-use-v-if-with-v-for&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-v-html.md</span>
    <span class="token comment">// \u7981\u6B62\u4F7F\u7528 v-html\uFF0C\u9632\u6B62 xss\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/no-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/object-curly-spacing.md</span>
    <span class="token comment">// \u5BF9\u8C61\u5199\u5728\u4E00\u884C\u65F6\uFF0C\u5927\u62EC\u53F7\u91CC\u9700\u8981\u7A7A\u683C</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            var obj = {&#39;foo&#39;: &#39;bar&#39;};

            // good code
            var obj = { &#39;foo&#39;: &#39;bar&#39; };
        */</span>
    <span class="token string-property property">&#39;vue/object-curly-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md</span>
    <span class="token comment">// \u5B98\u65B9\u63A8\u8350\u987A\u5E8F</span>
    <span class="token string-property property">&#39;vue/order-in-components&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;el&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;functional&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token string">&#39;delimiters&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;comments&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;directives&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;filters&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string">&#39;extends&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;mixins&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;inheritAttrs&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;model&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token string">&#39;props&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;propsData&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;computed&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;watch&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// LIFECYCLE_HOOKS: [&#39;beforeCreate&#39;, &#39;created&#39;, &#39;beforeMount&#39;, &#39;mounted&#39;, &#39;beforeUpdate&#39;, &#39;updated&#39;, &#39;activated&#39;, &#39;deactivated&#39;, &#39;beforeDestroy&#39;, &#39;destroyed&#39;]</span>
          <span class="token string">&#39;LIFECYCLE_HOOKS&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;methods&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token string">&#39;template&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;render&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string">&#39;renderError&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/prop-name-casing.md</span>
    <span class="token comment">// \u7EC4\u4EF6 props \u5C5E\u6027\u540D\u9A7C\u5CF0\u547D\u540D</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;script&gt;
                export default {
                    props: {
                        // bad code
                        &#39;greeting-text&#39;: String,
                        greeting_text: String

                        // good code
                        greetingText: String,
                    }
                }
            &lt;/script&gt;
        */</span>
    <span class="token string-property property">&#39;vue/prop-name-casing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;camelCase&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-component-is.md</span>
    <span class="token comment">// &lt;component&gt; \u5143\u7D20\u5FC5\u987B\u8981\u6709 :is \u5C5E\u6027</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;template&gt;
                // bad code
                &lt;component/&gt;
                &lt;component is=&quot;type&quot;/&gt;

                // good code
                &lt;component :is=&quot;type&quot;/&gt;
                &lt;component v-bind:is=&quot;type&quot;/&gt;
            &lt;/template&gt;
        */</span>
    <span class="token string-property property">&#39;vue/require-component-is&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-default-prop.md</span>
    <span class="token comment">// props \u5FC5\u987B\u8981\u6709\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/require-default-prop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-direct-export.md</span>
    <span class="token comment">// \u7EC4\u4EF6\u5FC5\u987B\u8981\u76F4\u63A5\u88AB export\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/require-direct-export&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-type-constructor.md</span>
    <span class="token comment">// props \u7684 type \u5FC5\u987B\u4E3A\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u80FD\u4E3A\u5B57\u7B26\u4E32</span>
    <span class="token comment">/* \u793A\u4F8B
            &lt;script&gt;
                export default {
                    props: {
                        // bad code
                        myProp: &quot;Number&quot;,
                        anotherProp: [&quot;Number&quot;, &quot;String&quot;],
                        myFieldWithBadType: {
                            type: &quot;Object&quot;,
                            default: function() {
                                return {}
                            },
                        },
                        myOtherFieldWithBadType: {
                            type: &quot;Number&quot;,
                            default: 1,
                        },

                        // good code
                        myProp: Number,
                        anotherProp: [Number, String],
                        myFieldWithBadType: {
                            type: Object,
                            default: function() {
                                return {}
                            },
                        },
                        myOtherFieldWithBadType: {
                            type: Number,
                            default: 1,
                        }
                    }
                }
            &lt;/script&gt;
        */</span>
    <span class="token string-property property">&#39;vue/require-prop-type-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md</span>
    <span class="token comment">// props \u5FC5\u987B\u8981\u6709 type\u3002</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            Vue.component(&#39;bar&#39;, {
                props: [&#39;foo&#39;]
            })

            Vue.component(&#39;baz&#39;, {
                props: {
                foo: {},
                }
            })

            // good code
            Vue.component(&#39;foo&#39;, {
                props: {
                    // Without options, just type reference
                    foo: String,
                    // With options with type field
                    bar: {
                        type: String,
                        required: true,
                    },
                    // With options without type field but with validator field
                    baz: {
                        required: true,
                        validator: function (value) {
                        return (
                            value === null ||
                            Array.isArray(value) &amp;&amp; value.length &gt; 0
                        )
                        }
                    }
                }
            })
        */</span>
    <span class="token string-property property">&#39;vue/require-prop-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-render-return.md</span>
    <span class="token comment">// render \u51FD\u6570\u5FC5\u987B\u8981\u6709\u8FD4\u56DE\u503C</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            export default {
                render (h) {
                    if (foo) {
                        return h(&#39;div&#39;, &#39;hello&#39;)
                    }
                }
            }

            // good code
            export default {
                render (h) {
                    return h(&#39;div&#39;, &#39;hello&#39;)
                }
            }
        */</span>
    <span class="token string-property property">&#39;vue/require-render-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md</span>
    <span class="token comment">// v-for \u6307\u4EE4\u5FC5\u987B\u8981\u6709 key \u5C5E\u6027</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-for=&quot;todo in todos&quot;/&gt;

            // good code
            &lt;div
                v-for=&quot;todo in todos&quot;
                :key=&quot;todo.id&quot;
            /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/require-v-for-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-valid-default-prop.md</span>
    <span class="token comment">// props \u9ED8\u8BA4\u503C\u5FC5\u987B\u6709\u6548\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/require-valid-default-prop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md</span>
    <span class="token comment">// \u8BA1\u7B97\u5C5E\u6027\u5FC5\u987B\u8981\u6709\u8FD4\u56DE\u503C</span>
    <span class="token comment">/* \u793A\u4F8B
            computed: {
                // bad code
                baz () {
                    if (this.baf) {
                        return this.baf
                    }
                },
                baf: function () {}

                // good code
                foo () {
                    if (this.bar) {
                        return this.baz
                    } else {
                        return this.baf
                    }
                },
                bar: function () {
                    return false
                },
            }
        */</span>
    <span class="token string-property property">&#39;vue/return-in-computed-property&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// script\u7F29\u8FDB</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            let a = {
              foo: 1,
              bar: 2
            }

            // good code
            let a = {
                foo: 1,
                bar: 2
            }
        */</span>
    <span class="token string-property property">&#39;vue/script-indent&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">baseIndent</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">switchCase</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/singleline-html-element-content-newline.md</span>
    <span class="token comment">// \u5355\u884C html \u5143\u7D20\u540E\u9762\u5FC5\u987B\u6362\u884C\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/singleline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/space-infix-ops.md</span>
    <span class="token comment">// \u4E8C\u5143\u64CD\u4F5C\u7B26\u4E24\u8FB9\u8981\u6709\u7A7A\u683C</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            a+b
            a?b:c

            // good code
            a + b
            a ? b : c
        */</span>
    <span class="token string-property property">&#39;vue/space-infix-ops&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/space-unary-ops.md</span>
    <span class="token comment">// new, delete, typeof, void, yield \u7B49\u540E\u9762\u5FC5\u987B\u6709\u7A7A\u683C\uFF0C\u4E00\u5143\u64CD\u4F5C\u7B26 -, +, --, ++, !, !! \u7981\u6B62\u6709\u7A7A\u683C</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            typeof!foo
            void{foo:0}
            new[foo][0]
            delete(foo.bar)
            ++ foo

            // good code
            typeof !foo
            void {foo:0}
            foo--
        */</span>
    <span class="token string-property property">&#39;vue/space-unary-ops&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">words</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">nonwords</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/this-in-template.md</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u5728 template \u4E2D\u4F7F\u7528 this</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;a :href=&quot;this.url&quot;&gt;
                {{ this.text }}
            &lt;/a&gt;

            // good code
            &lt;a :href=&quot;url&quot;&gt;
                {{ text }}
            &lt;/a&gt;
        */</span>
    <span class="token string-property property">&#39;vue/this-in-template&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/use-v-on-exact.md</span>
    <span class="token comment">// \u5F3A\u5236\u4F7F\u7528\u7CBE\u786E\u4FEE\u9970\u8BCD\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/use-v-on-exact&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md</span>
    <span class="token comment">// v-bind \u6307\u4EE4\u7684\u5199\u6CD5\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/v-bind-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-function-call.md</span>
    <span class="token comment">// \u5F3A\u5236\u6216\u7981\u6B62\u5728 v-on \u6307\u4EE4\u4E2D\u4E0D\u5E26\u53C2\u6570\u7684\u65B9\u6CD5\u8C03\u7528\u540E\u4F7F\u7528\u62EC\u53F7\u3002\u4E0D\u9650\u5236</span>
    <span class="token string-property property">&#39;vue/v-on-function-call&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-on \u6307\u4EE4\u7684\u5199\u6CD5\uFF0C\u9650\u5236\u7B80\u5199</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-on:click=&quot;foo&quot;/&gt;

            // good code
            &lt;div @click=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/v-on-style&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shorthand&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u6839\u8282\u70B9\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt; template &gt;&lt;/ template &gt;

            // good code
            &lt;template src=&quot;foo.html&quot;&gt;&lt;div&gt;&lt;/div&gt;&lt;/template&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-template-root&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-bind \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-bind/&gt;
            &lt;div :aaa/&gt;

            // good code
            &lt;div v-bind=&quot;foo&quot;/&gt;
            &lt;div :aaa=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-bind&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-cloak \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-cloak:aaa/&gt;
            &lt;div v-cloak.bbb/&gt;
            &lt;div v-cloak=&quot;ccc&quot;/&gt;

            // good code
             &lt;div v-cloak/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-cloak&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-else-if \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-else-if/&gt;
            &lt;div v-else-if:aaa=&quot;foo&quot;/&gt;
            &lt;div v-else-if.bbb=&quot;foo&quot;/&gt;

            // good code
            &lt;div v-if=&quot;foo&quot;/&gt;
            &lt;div v-else-if=&quot;bar&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-else-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-else \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-else=&quot;foo&quot;/&gt;
            &lt;div v-else:aaa/&gt;
            &lt;div v-else.bbb/&gt;

            // good code
            &lt;div v-if=&quot;foo&quot;/&gt;
            &lt;div v-else/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-else&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// valid-v-for \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-for/&gt;
            &lt;div v-for:aaa=&quot;todo in todos&quot;/&gt;
            &lt;div v-for.bbb=&quot;todo in todos&quot;/&gt;
            &lt;div
                v-for=&quot;todo in todos&quot;
                is=&quot;MyComponent&quot;
                /&gt;
                &lt;MyComponent v-for=&quot;todo in todos&quot;/&gt;
                &lt;MyComponent
                    v-for=&quot;todo in todos&quot;
                    :key=&quot;foo&quot;
                /&gt;

            // good code
            &lt;div v-for=&quot;todo in todos&quot;/&gt;
            &lt;MyComponent
                v-for=&quot;todo in todos&quot;
                :key=&quot;todo.id&quot;
            /&gt;
            &lt;div
                v-for=&quot;todo in todos&quot;
                :is=&quot;MyComponent&quot;
                :key=&quot;todo.id&quot;
            /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-for&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-html \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-html/&gt;
            &lt;div v-html:aaa=&quot;foo&quot;/&gt;
            &lt;div v-html.bbb=&quot;foo&quot;/&gt;

            // good code
            &lt;div v-html=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-if \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-if/&gt;
            &lt;div v-if:aaa=&quot;foo&quot;/&gt;
            &lt;div v-if.bbb=&quot;foo&quot;/&gt;
            &lt;div
                v-if=&quot;foo&quot;
                v-else
            /&gt;
            &lt;div
                v-if=&quot;foo&quot;
                v-else-if=&quot;bar&quot;
            /&gt;

            // good code
            &lt;div v-if=&quot;foo&quot;/&gt;
            &lt;div v-else-if=&quot;bar&quot;/&gt;
            &lt;div v-else/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-model \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;input v-model&gt;
            &lt;input v-model:aaa=&quot;foo&quot;&gt;
            &lt;input v-model.bbb=&quot;foo&quot;&gt;
            &lt;input v-model=&quot;foo + bar&quot;&gt;
            &lt;input v-model=&quot;a?.b.c&quot;&gt;
            &lt;input v-model=&quot;(a?.b).c&quot;&gt;
            &lt;div v-model=&quot;foo&quot;/&gt;
            &lt;div v-for=&quot;todo in todos&quot;&gt;
                &lt;input v-model=&quot;todo&quot;&gt;
            &lt;/div&gt;

            // good code
            &lt;input v-model=&quot;foo&quot;&gt;
            &lt;input v-model.lazy=&quot;foo&quot;&gt;
            &lt;textarea v-model=&quot;foo&quot;/&gt;
            &lt;MyComponent v-model=&quot;foo&quot;/&gt;
            &lt;MyComponent v-model:propName=&quot;foo&quot;/&gt;
            &lt;MyComponent v-model.modifier=&quot;foo&quot;/&gt;
            &lt;MyComponent v-model:propName.modifier=&quot;foo&quot;/&gt;
            &lt;div v-for=&quot;todo in todos&quot;&gt;
                &lt;input v-model=&quot;todo.name&quot;&gt;
            &lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-model&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-on \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
             &lt;div v-on/&gt;
             &lt;div v-on:click/&gt;
             &lt;div v-on:click.aaa=&quot;foo&quot;/&gt;
             &lt;div @click/&gt;

            // good code
             &lt;div @click=&quot;foo&quot;/&gt;
             &lt;div @click.left=&quot;foo&quot;/&gt;
             &lt;div @click.prevent/&gt;
             &lt;div @click.stop/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-on&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-once \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-once:aaa/&gt;
            &lt;div v-once.bbb/&gt;
            &lt;div v-once=&quot;ccc&quot;/&gt;

            // good code
            &lt;div v-once/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-once&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-pre \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-pre:aaa/&gt;
            &lt;div v-pre.bbb/&gt;
            &lt;div v-pre=&quot;ccc&quot;/&gt;

            // good code
            &lt;div v-pre/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-pre&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-show \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-show/&gt;
            &lt;div v-show:aaa=&quot;foo&quot;/&gt;
            &lt;div v-show.bbb=&quot;foo&quot;/&gt;
            &lt;template v-show=&quot;condition&quot; /&gt;

            // good code
            &lt;div v-show=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-show&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md</span>
    <span class="token comment">// v-text \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5</span>
    <span class="token comment">/* \u793A\u4F8B
            // bad code
            &lt;div v-text/&gt;
            &lt;div v-text:aaa=&quot;foo&quot;/&gt;
            &lt;div v-text.bbb=&quot;foo&quot;/&gt;

            // good code
            &lt;div v-text=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-text&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_3-\u5728webpack\u4E2D\u914D\u7F6Eeslint-loader" tabindex="-1"><a class="header-anchor" href="#_3-\u5728webpack\u4E2D\u914D\u7F6Eeslint-loader" aria-hidden="true">#</a> 3.\u5728<code>webpack</code>\u4E2D\u914D\u7F6E<code>eslint-loader</code></h2>`,9),v={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"\u914D\u7F6E\u4EE3\u7801\u7684\u4F4D\u7F6E",-1),m=s("\u8FD9\u662F "),b=n("code",null,"eslint-loader",-1),k=s(" \u5728 "),g=n("code",null,"webpack\u914D\u7F6E\u6587\u4EF6",-1),y=s(" \u4E2D\u7684\u4F4D\u7F6E\u3002 \u7136\u800C"),f=n("code",null,"eslint-loader",-1),h=s("\u7684\u5177\u4F53\u914D\u7F6E\uFF0C\u4F60\u9700\u8981\u8FDB\u5165 "),q=s("npm \u5305\u7BA1\u7406\u7F51\u7AD9"),x=s(" \u641C\u7D22\u5E76\u6253\u5F00"),j=n("code",null,"eslint-loader",-1),w=s("\u63D2\u4EF6\u8BF4\u660E\uFF0C\u5148\u627E\u5230\u4F7F\u7528\u6307\u5357"),_=n("code",null,"Usage",-1),C=s("\uFF0C\u7136\u540E\u590D\u5236\u8FC7\u6765\u81EA\u4E3B\u5B9A\u5236\u5373\u53EF"),T=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53EA\u9700\u8981\u5173\u6CE8\u9AD8\u4EAE\u90E8\u5206\u5373\u53EF</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|vue)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u65E7\u4EE3\u7801\u5904\u7406\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_4-\u65E7\u4EE3\u7801\u5904\u7406\u6B65\u9AA4" aria-hidden="true">#</a> 4.\u65E7\u4EE3\u7801\u5904\u7406\u6B65\u9AA4</h2><div class="custom-container tip"><p class="custom-container-title">\u5EFA\u8BAE\u7528 VS Code \u7684 eslint \u63D2\u4EF6\u4FEE\u590D</p><p>\u4F46\u4E00\u822C\u60C5\u51B5\u4E0B\u5FFD\u7565\u4E86\uFF0C\u5C31\u6CA1\u4EBA\u7BA1\u4E86\u3002 \u6240\u4EE5\u6211\u4EEC\u5E94\u8BE5 \u914D\u7F6E eslint \u63D2\u4EF6 \u5728\u6BCF\u6B21\u4FDD\u5B58\u4EE3\u7801\u65F6\u81EA\u52A8\u4FEE\u590D\uFF0C\u4ECE\u800C\u4E00\u6B21\u6027\u4FEE\u590D\u6574\u4E2A\u9879\u76EE\u6240\u6709\u6587\u4EF6</p></div><ul><li><code>eslintignore</code>\u5148\u5FFD\u7565\u4EE5\u524D\u7684\u4EE3\u7801 <blockquote><p>\u4E0E node_modules \u5E73\u7EA7\u7684\u76EE\u5F55\u4E0B\u53EF\u521B\u5EFA\u4E00\u4E2A<code>.eslintignore</code>\u6587\u4EF6\uFF0C\u7528\u6765\u8BBE\u7F6E\u54EA\u4E9B<code>\u4E0D\u60F3\u88AB eslint \u68C0\u6D4B</code>\u7684\u6587\u4EF6(\u6216\u6587\u4EF6\u5939)\u3002</p></blockquote></li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>/dist/
/node_modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5148\u4F7F\u7528\u547D\u4EE4\u5DE5\u5177\u5FAA\u5E8F\u6E10\u8FDB\u6267\u884C\uFF0C\u518D\u624B\u52A8\u5904\u7406(\u516C\u53F8\u9879\u76EE\u90FD\u6BD4\u8F83\u5E9E\u5927\uFF0C\u624B\u52A8\u4FEE\u590D\u4E0D\u592A\u73B0\u5B9E)</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>npx eslint ./src/xxx.vue --fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u4F60\u7528\u7684\u662F vscode \u7F16\u8F91\u5668\uFF0C\u90A3\u5C31\u53EF\u4EE5\u7528\u6269\u5C55 <code>eslint</code> \u6765\u5904\u7406 <ul><li>\u7B2C\u4E00\u6B65\uFF1A\u70B9\u51FB<code>\u6269\u5C55</code>\u641C\u7D22<code>eslint</code>\u5E76\u5B89\u88C5</li><li>\u7B2C\u4E8C\u6B65\uFF1A\u8FDB\u5165\u7F16\u8F91\u5668\u7684 <code>settings.json</code> \u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\u5373\u53EF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// eslint \u81EA\u52A8\u4FEE\u590D</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u6BCF\u6B21\u4FDD\u5B58\u4EE3\u7801\u65F6\uFF0C\u7F16\u8F91\u5668\u7684 <code>eslint\u63D2\u4EF6</code> \u5C31\u4F1A\u53BB\u9879\u76EE\u4E2D\u67E5\u8BE2 <code>\u89C4\u5219\u6587\u4EF6</code> \u5E76\u5E94\u7528\uFF0C\u8FBE\u5230\u4FEE\u590D\u4EE3\u7801\u7684\u76EE\u7684</p></blockquote></li></ul>`,8);function B(N,S){const a=c("tgx-link");return l(),t("div",null,[d,n("div",v,[u,n("p",null,[m,b,k,g,y,f,h,o(a,{href:"https://www.npmjs.com/"},{default:p(()=>[q]),_:1},8,["href"]),x,j,w,_,C])]),T])}var E=i(r,[["render",B],["__file","eslint-upgrade.html.vue"]]);export{E as default};
