import{_ as e,r as t,o as p,c as l,a as n,b as s,d as o,w as i,e as c}from"./app-CkeFUswH.js";const r={},u=n("h1",{id:"vant-主题定制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vant-主题定制"},[n("span",null,"Vant 主题定制")])],-1),d={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"专栏说明",-1),k=c(`<h2 id="_1-第一步-引入-less-样式文件" tabindex="-1"><a class="header-anchor" href="#_1-第一步-引入-less-样式文件"><span>1. 第一步：引入 less 样式文件</span></a></h2><p>在 main.js 入口文件中引入</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引入全部样式</span>
<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/index.less&#39;</span>

<span class="token comment">// 引入单个组件样式</span>
<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/button/style/less&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-第二步-根据变量名来修改主题" tabindex="-1"><a class="header-anchor" href="#_2-第二步-根据变量名来修改主题"><span>2. 第二步：根据变量名来修改主题</span></a></h2><ul><li>方案一：在配置文件中修改（不推荐，每次修改完就要打包）</li><li>方案二：单独维护一个 .less 主题文件，并在配置文件中引入（推荐，每次改动就会实时更新）</li></ul><details class="custom-container details"><summary>点击查看 webpack 构建的项目怎么修改</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fullPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/theme.less&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...其他 loader 配置</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。</span>
            <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 方案一 和 方案二选一个就可以了</span>
              <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 方案一：直接覆盖变量</span>
                <span class="token string-property property">&#39;text-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#111&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;border-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span><span class="token punctuation">,</span>

                <span class="token comment">// 方案二：通过 less 文件覆盖（文件路径为绝对路径）</span>
                <span class="token literal-property property">hack</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true; @import &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fullPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;;</span><span class="token template-punctuation string">\`</span></span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看 vue-cli 构建的项目怎么修改</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fullPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/theme.less&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。</span>
        <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 方案一 和 方案二选一个就可以了</span>
          <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 方案一：直接覆盖变量</span>
            <span class="token string-property property">&#39;text-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#111&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;border-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">// 方案二：通过 less 文件覆盖（文件路径为绝对路径）</span>
            <span class="token literal-property property">hack</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true; @import &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fullPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;;</span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,7);function m(b,g){const a=t("tgx-link");return p(),l("div",null,[u,n("div",d,[v,n("p",null,[s("这里总结了移动端 Vant UI 组件库的自定义主题定制操作。"),o(a,{href:"https://vant-contrib.gitee.io/vant/v2/#/zh-CN/theme"},{default:i(()=>[s("查看官网主题定制步骤")]),_:1})])]),k])}const y=e(r,[["render",m],["__file","vant-theme.html.vue"]]),_=JSON.parse('{"path":"/frontend/tools/vant-theme.html","title":"Vant 主题定制","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 第一步：引入 less 样式文件","slug":"_1-第一步-引入-less-样式文件","link":"#_1-第一步-引入-less-样式文件","children":[]},{"level":2,"title":"2. 第二步：根据变量名来修改主题","slug":"_2-第二步-根据变量名来修改主题","link":"#_2-第二步-根据变量名来修改主题","children":[]}],"git":{"updatedTime":1660892690000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":4}]},"filePathRelative":"frontend/tools/vant-theme.md"}');export{y as comp,_ as data};
