import{_ as i,r as l,o as t,c as o,a as s,b as n,d as p,w as c,e}from"./app-CkeFUswH.js";const r={},d=e(`<h1 id="旧项目-eslint-升级体验" tabindex="-1"><a class="header-anchor" href="#旧项目-eslint-升级体验"><span>旧项目 Eslint 升级体验</span></a></h1><div class="custom-container tip"><p class="custom-container-title">起因</p><p>我们项目使用的 webpack 版本是 3.12.0，代码检测功能也不够完善，eslint 并不是最新版本。 然后公司来了个前端 leader，要求我们把所有项目的 eslint 升级到最新版本，并且配置团队规定的 eslint 检测规范。 因此有了这次的升级体验。</p></div><h2 id="_1-升级eslint及其依赖包的版本" tabindex="-1"><a class="header-anchor" href="#_1-升级eslint及其依赖包的版本"><span>1.升级<code>eslint</code>及其依赖包的版本</span></a></h2><div class="custom-container tip"><p class="custom-container-title">包管理工具</p><p>这里我选择了<code>cnpm</code>作为包管理工具，因为<code>npm</code>经常会因为版本问题而报错，其中<code>i</code>是<code>install</code>的缩写</p></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>cnpm i eslint@7.30.0
cnpm i eslint-loader@4.0.2
cnpm i babel-eslint@10.1.0
cnpm i eslint-plugin-standard@3.0.1
cnpm i eslint-plugin-vue@7.12.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-写入eslint的规则" tabindex="-1"><a class="header-anchor" href="#_2-写入eslint的规则"><span>2.写入<code>eslint</code>的规则</span></a></h2><div class="custom-container tip"><p class="custom-container-title">规则文件的位置</p><p>与 node_modules 平级的目录下应该存在一个 .eslintrc.js 文件，以下就是这个文件的内容，也就是我们团队的代码规范约定</p></div><details class="custom-container details"><summary>点击查看具体规则</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@file</span> eslint config
 * <span class="token keyword">@author</span>
 */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 无需向父目录查找eslint文件</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 使用babel-eslint解析器</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;babel-eslint&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 指定脚本的运行环境,每种环境都有一组特定的预定义全局变量</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 数组形式，每个配置继承它前面的配置</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;plugin:vue/recommended&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;standard&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 省略包名的前缀 eslint-plugin-</span>
  <span class="token comment">// required to lint *.vue files</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 配置额外的全局变量</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// value 为 true 允许被重写，为 false 不允许被重写</span>
    <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 自定义规则</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用单引号</span>
    <span class="token comment">/* 示例
            // bad code
            let str = &quot;hello world&quot;

            // good code
            let str = &#39;hello world&#39;
        */</span>
    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 三等号</span>
    <span class="token comment">/* 示例
            // bad code
            if (a == b) {}

            // good code
            if (a === b) {}
        */</span>
    <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 禁止出现未使用过的变量</span>
    <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 强制在关键字前后使用一致的空格</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// 缩进使用 4 个空格，并且 switch 语句中的 Case 需要缩进</span>
    <span class="token comment">// https://eslint.org/docs/rules/indent</span>
    <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">SwitchCase</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">flatTernaryExpressions</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 数组的括号内的前后禁止有空格</span>
    <span class="token comment">// https://eslint.org/docs/rules/array-bracket-spacing</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// 需要在操作符之前放置换行符</span>
    <span class="token comment">// https://eslint.org/docs/rules/operator-linebreak</span>
    <span class="token comment">// &#39;operator-linebreak&#39;: [&#39;error&#39;, &#39;before&#39;],</span>

    <span class="token comment">// 在开发阶段打开调试 (区分stag prod)</span>
    <span class="token comment">// https://eslint.org/docs/rules/no-debugger</span>
    <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 只有一个参数时，箭头函数体可以省略圆括号</span>
    <span class="token comment">// https://eslint.org/docs/rules/arrow-parens</span>
    <span class="token string-property property">&#39;arrow-parens&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 禁止空语句（可在空语句写注释避免），允许空的 catch 语句</span>
    <span class="token comment">// https://eslint.org/docs/rules/no-empty</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// 禁止在语句末尾使用分号</span>
    <span class="token comment">// https://eslint.org/docs/rules/semi</span>
    <span class="token comment">/* 示例
            // bad code
            const obj = {};

            // good code
            const obj = {}
        */</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 函数圆括号之前没有空格（挺有争议的）</span>
    <span class="token comment">// https://eslint.org/docs/rules/space-before-function-paren</span>
    <span class="token comment">/* 示例
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
        <span class="token literal-property property">anonymous</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 匿名函数表达式</span>
        <span class="token literal-property property">named</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 命名的函数表达式</span>
        <span class="token literal-property property">asyncArrow</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span> <span class="token comment">// 异步的箭头函数表达式</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 禁止行尾有空格</span>
    <span class="token comment">// https://eslint.org/docs/rules/no-trailing-spaces</span>
    <span class="token string-property property">&#39;no-trailing-spaces&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 注释的斜线或 * 后必须有空格</span>
    <span class="token comment">// https://eslint.org/docs/rules/spaced-comment</span>
    <span class="token comment">/* 示例
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
          <span class="token comment">// 前后空格是否平衡</span>
          <span class="token literal-property property">balanced</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">markers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*package&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;::&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;flow-include&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">exceptions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/no-template-curly-in-string</span>
    <span class="token comment">// 禁止在字符串中使用字符串模板。不限制</span>
    <span class="token string-property property">&#39;no-template-curly-in-string&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/no-useless-escape</span>
    <span class="token comment">// 禁止出现没必要的转义。不限制</span>
    <span class="token string-property property">&#39;no-useless-escape&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/no-var</span>
    <span class="token comment">// 禁止使用 var</span>
    <span class="token string-property property">&#39;no-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://eslint.org/docs/rules/prefer-const</span>
    <span class="token comment">// 如果一个变量不会被重新赋值，必须使用 \`const\` 进行声明。</span>
    <span class="token comment">/* 示例
            // bad code
            let a = 3
            console.log(a)

            // good code
            const a = 3
            console.log(a)
        */</span>
    <span class="token string-property property">&#39;prefer-const&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// eslint-plugin-vue@7 新增的规则，暂时先全部关闭</span>
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

    <span class="token comment">// 不允许数组括号内有空格</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/array-bracket-spacing.md</span>
    <span class="token doc-comment comment">/**
     * 示例
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

    <span class="token comment">// 在箭头函数的箭头之前/之后需要空格</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/arrow-spacing.md</span>
    <span class="token doc-comment comment">/**
     * 示例
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
    <span class="token comment">// vue html 属性小写，连字符</span>
    <span class="token doc-comment comment">/**
     * 示例
     * bad code
     * &lt;MyComponent myProp=&quot;prop&quot; /&gt;
     *
     * good code
     * &lt;MyComponent my-prop=&quot;prop&quot; /&gt;
     */</span>
    <span class="token string-property property">&#39;vue/attribute-hyphenation&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attributes-order.md</span>
    <span class="token comment">// 属性顺序，不限制</span>
    <span class="token string-property property">&#39;vue/attributes-order&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 在打开块之后和关闭块之前强制块内的空格</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/block-spacing.md</span>
    <span class="token doc-comment comment">/**
     * 示例
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
    <span class="token comment">// 后端数据字段经常不是驼峰，所以不限制 properties，也不限制解构</span>
    <span class="token doc-comment comment">/**
     * 示例
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
    <span class="token comment">// 禁止使用拖尾逗号，如 {demo: &#39;test&#39;,}</span>
    <span class="token doc-comment comment">/**
     * 示例
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
    <span class="token comment">// vue 文件 template 中允许 eslint-disable eslint-enable eslint-disable-line eslint-disable-next-line</span>
    <span class="token comment">// 行内注释启用/禁用某些规则，配置为 1 即允许</span>
    <span class="token doc-comment comment">/**
     * 示例
     * bad code
     * &lt;div a=&quot;1&quot; /&gt;
     *
     * good code
     * &lt;div a=&quot;1&quot; b=&quot;2&quot; c=&quot;3&quot; d=&quot;4&quot; /&gt;
     */</span>
    <span class="token string-property property">&#39;vue/comment-directive&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/component-name-in-template-casing.md</span>
    <span class="token comment">// 组件 html 标签的形式，连字符形式，所有 html 标签均会检测，如引入第三方不可避免，可通过 ignores 配置，支持正则，不限制</span>
    <span class="token string-property property">&#39;vue/component-name-in-template-casing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 需要 === 和 !==,不将此规则应用于null</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/eqeqeq.md</span>
    <span class="token doc-comment comment">/**
     * 示例
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
    <span class="token comment">// 单行写法不需要换行，多行需要，不限制</span>
    <span class="token string-property property">&#39;vue/html-closing-bracket-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 自关闭标签需要空格</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-spacing.md</span>
    <span class="token comment">/* 示例
            &lt;!-- bad code --&gt;
            &lt;div &gt;
                &lt;div foo=&quot;bar&quot; &gt;&lt;/div &gt;
            &lt;div/&gt;
            &lt;div foo/&gt;
            &lt;div foo=&quot;bar&quot;/&gt;

            &lt;!-- ✓ GOOD --&gt;
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

    <span class="token comment">// 标签必须有结束标签</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md</span>
    <span class="token comment">/* 示例
            &lt;!-- bad code --&gt;
            &lt;div&gt;
            &lt;p&gt;

            &lt;!-- good code --&gt;
            &lt;div&gt;&lt;/div&gt;
            &lt;p&gt;&lt;/p&gt;
        */</span>
    <span class="token string-property property">&#39;vue/html-end-tags&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// html的缩进.在多行情况下，属性不与第一个属性垂直对齐</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md</span>
    <span class="token comment">/* 示例
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
        <span class="token literal-property property">alignAttributesVertically</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 在多行情况下，属性是否应与第一个属性垂直对齐</span>
        <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// html属性引用采用双引号</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-quotes.md</span>
    <span class="token comment">/* 示例
            &lt;!-- bad code --&gt;
            &lt;img src=&#39;./logo.png&#39; /&gt;

            &lt;!-- good code --&gt;
            &lt;img src=&quot;./logo.png&quot; /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/html-quotes&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;double&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md</span>
    <span class="token comment">// html tag 是否自闭和，不限制</span>
    <span class="token string-property property">&#39;vue/html-self-closing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/jsx-uses-vars.md</span>
    <span class="token comment">// 当变量在 \`JSX\` 中被使用了，那么 eslint 就不会报出 \`no-unused-vars\` 的错误。需要开启 eslint no-unused-vars 规则才适用</span>
    <span class="token comment">/*
            import HelloWorld from &#39;./HelloWorld&#39;;

            export default {
                render () {
                    return (
                        &lt;HelloWorld msg=&quot;world&quot;/&gt;
                    )
                },
            }
            此时不会报 \`no-unused-vars\` 的错误，仅警告
        */</span>
    <span class="token string-property property">&#39;vue/jsx-uses-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/key-spacing.md</span>
    <span class="token comment">// 属性定义，冒号前没有空格，后面有空格</span>
    <span class="token comment">/* 示例
            // bad code
            const obj = { a:1 }

            // good code
            const obj = { a: 1 }
        */</span>
    <span class="token string-property property">&#39;vue/key-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">beforeColon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">afterColon</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/match-component-file-name.md</span>
    <span class="token comment">// 组件名称属性与其文件名匹配，不限制</span>
    <span class="token string-property property">&#39;vue/match-component-file-name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md</span>
    <span class="token comment">// 每行属性的最大个数，不限制</span>
    <span class="token string-property property">&#39;vue/max-attributes-per-line&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/multiline-html-element-content-newline.md</span>
    <span class="token comment">// 在多行元素的内容前后需要换行符，不限制</span>
    <span class="token string-property property">&#39;vue/multiline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md</span>
    <span class="token comment">// template 中 {{var}}，不限制</span>
    <span class="token string-property property">&#39;vue/mustache-interpolation-spacing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// name属性强制使用连字符形式</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// 禁止在计算属性中执行异步操作</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// 禁止布尔默认值，不限制</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-boolean-default.md</span>
    <span class="token string-property property">&#39;vue/no-boolean-default&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-confusing-v-for-v-if.md</span>
    <span class="token string-property property">&#39;vue/no-confusing-v-for-v-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-dupe-keys.md</span>
    <span class="token comment">// 属性名禁止重复</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 禁止 html 元素中出现重复的属性</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div :a=&quot;&quot; :a=&quot;&quot;&gt;&lt;/div&gt;

            // good code
            &lt;div :a=&quot;&quot; :b=&quot;&quot;&gt;&lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-duplicate-attributes&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-multi-spaces.md</span>
    <span class="token comment">// 删除 html 标签中连续多个不用于缩进的空格</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div    :a=&quot;&quot;&gt;&lt;/div&gt;

            // good code
            &lt;div :a=&quot;&quot;&gt;&lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-multi-spaces&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md</span>
    <span class="token comment">// 禁止语法错误</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 禁止使用保留字，包括Vue</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 禁止使用特定的语法，不限制</span>
    <span class="token string-property property">&#39;vue/no-restricted-syntax&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-shared-component-data.md</span>
    <span class="token comment">// data 属性必须是函数</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 禁止在计算属性对属性进行修改，不限制</span>
    <span class="token string-property property">&#39;vue/no-side-effects-in-computed-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 不允许在属性中的等号周围有空格</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-spaces-around-equal-signs-in-attribute.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div class = &quot;item&quot;&gt;&lt;/div&gt;

            // good code
            &lt;div&gt;&lt;/div&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-spaces-around-equal-signs-in-attribute&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-key.md</span>
    <span class="token comment">// 禁止在 &lt;template&gt; 中使用 key 属性，不限制</span>
    <span class="token string-property property">&#39;vue/no-template-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 禁止再textarea中使用模板语言</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;textarea&gt;{{ message }}&lt;/textarea&gt;

            // good code
            &lt;textarea v-model=&quot;message&quot; /&gt;
        */</span>
    <span class="token string-property property">&#39;vue/no-textarea-mustache&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-components.md</span>
    <span class="token comment">// 禁止 components 中声明的组件在 template 中没有使用</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// 禁止在v-for或作用域内使用未使用过的变量</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-vars.md</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 禁止 v-for 和 v-if 在同一元素上使用，不限制</span>
    <span class="token string-property property">&#39;vue/no-use-v-if-with-v-for&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-v-html.md</span>
    <span class="token comment">// 禁止使用 v-html，防止 xss，不限制</span>
    <span class="token string-property property">&#39;vue/no-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/object-curly-spacing.md</span>
    <span class="token comment">// 对象写在一行时，大括号里需要空格</span>
    <span class="token comment">/* 示例
            // bad code
            var obj = {&#39;foo&#39;: &#39;bar&#39;};

            // good code
            var obj = { &#39;foo&#39;: &#39;bar&#39; };
        */</span>
    <span class="token string-property property">&#39;vue/object-curly-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md</span>
    <span class="token comment">// 官方推荐顺序</span>
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
    <span class="token comment">// 组件 props 属性名驼峰命名</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// &lt;component&gt; 元素必须要有 :is 属性</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// props 必须要有默认值，不限制</span>
    <span class="token string-property property">&#39;vue/require-default-prop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-direct-export.md</span>
    <span class="token comment">// 组件必须要直接被 export。不限制</span>
    <span class="token string-property property">&#39;vue/require-direct-export&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-type-constructor.md</span>
    <span class="token comment">// props 的 type 必须为构造函数，不能为字符串</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// props 必须要有 type。</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// render 函数必须要有返回值</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// v-for 指令必须要有 key 属性</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// props 默认值必须有效。不限制</span>
    <span class="token string-property property">&#39;vue/require-valid-default-prop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md</span>
    <span class="token comment">// 计算属性必须要有返回值</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// script缩进</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 单行 html 元素后面必须换行。不限制</span>
    <span class="token string-property property">&#39;vue/singleline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/space-infix-ops.md</span>
    <span class="token comment">// 二元操作符两边要有空格</span>
    <span class="token comment">/* 示例
            // bad code
            a+b
            a?b:c

            // good code
            a + b
            a ? b : c
        */</span>
    <span class="token string-property property">&#39;vue/space-infix-ops&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/space-unary-ops.md</span>
    <span class="token comment">// new, delete, typeof, void, yield 等后面必须有空格，一元操作符 -, +, --, ++, !, !! 禁止有空格</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 不允许在 template 中使用 this</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// 强制使用精确修饰词。不限制</span>
    <span class="token string-property property">&#39;vue/use-v-on-exact&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md</span>
    <span class="token comment">// v-bind 指令的写法。不限制</span>
    <span class="token string-property property">&#39;vue/v-bind-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-function-call.md</span>
    <span class="token comment">// 强制或禁止在 v-on 指令中不带参数的方法调用后使用括号。不限制</span>
    <span class="token string-property property">&#39;vue/v-on-function-call&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-on 指令的写法，限制简写</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-on:click=&quot;foo&quot;/&gt;

            // good code
            &lt;div @click=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/v-on-style&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shorthand&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 根节点必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt; template &gt;&lt;/ template &gt;

            // good code
            &lt;template src=&quot;foo.html&quot;&gt;&lt;div&gt;&lt;/div&gt;&lt;/template&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-template-root&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-bind 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-bind/&gt;
            &lt;div :aaa/&gt;

            // good code
            &lt;div v-bind=&quot;foo&quot;/&gt;
            &lt;div :aaa=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-bind&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-cloak 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-cloak:aaa/&gt;
            &lt;div v-cloak.bbb/&gt;
            &lt;div v-cloak=&quot;ccc&quot;/&gt;

            // good code
             &lt;div v-cloak/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-cloak&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-else-if 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-else-if/&gt;
            &lt;div v-else-if:aaa=&quot;foo&quot;/&gt;
            &lt;div v-else-if.bbb=&quot;foo&quot;/&gt;

            // good code
            &lt;div v-if=&quot;foo&quot;/&gt;
            &lt;div v-else-if=&quot;bar&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-else-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-else 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-else=&quot;foo&quot;/&gt;
            &lt;div v-else:aaa/&gt;
            &lt;div v-else.bbb/&gt;

            // good code
            &lt;div v-if=&quot;foo&quot;/&gt;
            &lt;div v-else/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-else&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// valid-v-for 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// v-html 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-html/&gt;
            &lt;div v-html:aaa=&quot;foo&quot;/&gt;
            &lt;div v-html.bbb=&quot;foo&quot;/&gt;

            // good code
            &lt;div v-html=&quot;foo&quot;/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-if 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// v-model 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// v-on 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md</span>
    <span class="token comment">/* 示例
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

    <span class="token comment">// v-once 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-once:aaa/&gt;
            &lt;div v-once.bbb/&gt;
            &lt;div v-once=&quot;ccc&quot;/&gt;

            // good code
            &lt;div v-once/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-once&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-pre 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md</span>
    <span class="token comment">/* 示例
            // bad code
            &lt;div v-pre:aaa/&gt;
            &lt;div v-pre.bbb/&gt;
            &lt;div v-pre=&quot;ccc&quot;/&gt;

            // good code
            &lt;div v-pre/&gt;
        */</span>
    <span class="token string-property property">&#39;vue/valid-v-pre&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// v-show 指令必须合法</span>
    <span class="token comment">// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md</span>
    <span class="token comment">/* 示例
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
    <span class="token comment">// v-text 指令必须合法</span>
    <span class="token comment">/* 示例
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_3-在webpack中配置eslint-loader" tabindex="-1"><a class="header-anchor" href="#_3-在webpack中配置eslint-loader"><span>3.在<code>webpack</code>中配置<code>eslint-loader</code></span></a></h2>`,9),v={class:"custom-container tip"},u=s("p",{class:"custom-container-title"},"配置代码的位置",-1),m=s("code",null,"eslint-loader",-1),b=s("code",null,"webpack配置文件",-1),k=s("code",null,"eslint-loader",-1),g=s("code",null,"eslint-loader",-1),y=s("code",null,"Usage",-1),f=e(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 只需要关注高亮部分即可</span>

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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-旧代码处理步骤" tabindex="-1"><a class="header-anchor" href="#_4-旧代码处理步骤"><span>4.旧代码处理步骤</span></a></h2><div class="custom-container tip"><p class="custom-container-title">建议用 VS Code 的 eslint 插件修复</p><p>但一般情况下忽略了，就没人管了。 所以我们应该 配置 eslint 插件 在每次保存代码时自动修复，从而一次性修复整个项目所有文件</p></div><ul><li><code>eslintignore</code>先忽略以前的代码 <blockquote><p>与 node_modules 平级的目录下可创建一个<code>.eslintignore</code>文件，用来设置哪些<code>不想被 eslint 检测</code>的文件(或文件夹)。</p></blockquote></li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>/dist/
/node_modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>先使用命令工具循序渐进执行，再手动处理(公司项目都比较庞大，手动修复不太现实)</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>npx eslint ./src/xxx.vue --fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果你用的是 vscode 编辑器，那就可以用扩展 <code>eslint</code> 来处理 <ul><li>第一步：点击<code>扩展</code>搜索<code>eslint</code>并安装</li><li>第二步：进入编辑器的 <code>settings.json</code> 配置文件，添加以下代码即可</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// eslint 自动修复</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>此时，我们每次保存代码时，编辑器的 <code>eslint插件</code> 就会去项目中查询 <code>规则文件</code> 并应用，达到修复代码的目的</p></blockquote></li></ul>`,8);function h(q,x){const a=l("tgx-link");return t(),o("div",null,[d,s("div",v,[u,s("p",null,[n("这是 "),m,n(" 在 "),b,n(" 中的位置。 然而"),k,n("的具体配置，你需要进入 "),p(a,{href:"https://www.npmjs.com/"},{default:c(()=>[n("npm 包管理网站")]),_:1},8,["href"]),n(" 搜索并打开"),g,n("插件说明，先找到使用指南"),y,n("，然后复制过来自主定制即可")])]),f])}const w=i(r,[["render",h],["__file","eslint-upgrade.html.vue"]]),_=JSON.parse('{"path":"/frontend/source/article/eslint-upgrade.html","title":"旧项目 Eslint 升级体验","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1.升级eslint及其依赖包的版本","slug":"_1-升级eslint及其依赖包的版本","link":"#_1-升级eslint及其依赖包的版本","children":[]},{"level":2,"title":"2.写入eslint的规则","slug":"_2-写入eslint的规则","link":"#_2-写入eslint的规则","children":[]},{"level":2,"title":"3.在webpack中配置eslint-loader","slug":"_3-在webpack中配置eslint-loader","link":"#_3-在webpack中配置eslint-loader","children":[]},{"level":2,"title":"4.旧代码处理步骤","slug":"_4-旧代码处理步骤","link":"#_4-旧代码处理步骤","children":[]}],"git":{"updatedTime":1681876227000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":1}]},"filePathRelative":"frontend/source/article/eslint-upgrade.md"}');export{w as comp,_ as data};