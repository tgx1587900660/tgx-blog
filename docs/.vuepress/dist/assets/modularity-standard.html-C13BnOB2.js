import{_ as s,o as n,c as a,e}from"./app-CkeFUswH.js";const t={},l=e(`<h1 id="前端模块化规范" tabindex="-1"><a class="header-anchor" href="#前端模块化规范"><span>前端模块化规范</span></a></h1><h2 id="_1-说出-4-种模块化规范" tabindex="-1"><a class="header-anchor" href="#_1-说出-4-种模块化规范"><span>1. 说出 4 种模块化规范</span></a></h2><div class="custom-container tip"><p class="custom-container-title">概括</p><p>AMD 和 CMD 已被淘汰，不再需要学习。CommonJS 是 node.js 遵循的规范，未被淘汰但会被逐渐取代。 <strong>ES6 模块化规范</strong> 是官方推出的 <strong>未来模块化规范趋势</strong>。</p></div><ul><li><ol><li><strong>AMD</strong> ---- 不用学，已落伍 <ul><li>js 开发者社区提出（非标准）</li><li>主要用于 <strong>浏览器端</strong></li></ul></li></ol></li><li><ol start="2"><li><strong>CMD</strong> ---- 不用学，已落伍 <ul><li>js 开发者社区提出（非标准）</li><li>主要用于 <strong>浏览器端</strong></li></ul></li></ol></li><li><ol start="3"><li><strong>CommonJS</strong> ---- 要学，node.js 遵循的规范 <ul><li>js 开发者社区提出（非标准）</li><li>主要用于 <strong>服务器端</strong></li><li>会慢慢被 <strong>ES6 模块化</strong> 淘汰</li></ul></li></ol></li><li><ol start="4"><li><strong>ES6 模块化</strong> ---- 必学 <ul><li>官方提出（标准）</li><li>适用于 <strong>浏览器端</strong> 和 <strong>服务器端</strong></li></ul></li></ol></li></ul><h2 id="_2-es6-模块化规范的-3-个定义" tabindex="-1"><a class="header-anchor" href="#_2-es6-模块化规范的-3-个定义"><span>2. ES6 模块化规范的 3 个定义</span></a></h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>以下内容将重点学习 <strong>ES6 模块化规范</strong> 的规则</p></div><ul><li><ol><li>每个 js 文件都是一个独立的模块</li></ol></li><li><ol start="2"><li>导入其它模块成员使用 <strong>import</strong> 关键字</li></ol></li><li><ol start="3"><li>向外共享模块成员使用 <strong>export</strong> 关键字</li></ol></li></ul><h2 id="_3-在-node-js-中体验-es6-模块化" tabindex="-1"><a class="header-anchor" href="#_3-在-node-js-中体验-es6-模块化"><span>3. 在 Node.js 中体验 ES6 模块化</span></a></h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Node.js 默认使用 CommonJS 模块化规范，不支持 ES6 模块化规范。</p></div><p>要想在 node.js 中体验 ES6 模块化，需要两步：</p><ul><li><ol><li>确保 node.js 版本 &gt;= v14.15.1 （具体版本我没验证，需查看 node 官网，经测试 v14.13.0 也能用）</li></ol></li><li><ol start="2"><li>在项目 package.json 的根节点中添加 &quot;type&quot;: &quot;module&quot; 节点（与 name 平级）</li></ol></li></ul><h3 id="_1-默认导出-和-默认导入" tabindex="-1"><a class="header-anchor" href="#_1-默认导出-和-默认导入"><span>1. 默认导出 和 默认导入</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li><strong>默认导出</strong> 一个文件只能用一次</li><li><strong>默认导出</strong> 需要导出一个对象，并挂载需要被访问的成员</li><li><strong>导入时</strong> 需要用 . 操作符访问成员</li></ul></div><details class="custom-container details"><summary>点击查看 默认导出 案例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 01.default-export.js 文件</span>

<span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">let</span> n2 <span class="token operator">=</span> <span class="token number">20</span>

<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 外界只能访问 n1 和 show</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  n1<span class="token punctuation">,</span>
  show
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看配套的 导入 案例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 与 01.default-export.js 配套的导入案例</span>

<span class="token comment">// 直接导入，就可以用 m1.show 来访问 show 方法</span>
<span class="token keyword">import</span> m1 <span class="token keyword">from</span> <span class="token string">&#39;./01.default-export.js&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span> <span class="token comment">// { n1: 10, show: [Function: show] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-按需导出-和-按需导入" tabindex="-1"><a class="header-anchor" href="#_2-按需导出-和-按需导入"><span>2. 按需导出 和 按需导入</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li><strong>按需导出</strong> 一个文件可以使用多次</li><li><strong>按需导出</strong> 直接导出 需要被访问的成员 即可</li><li><strong>导入时</strong> 只需要解构成员，即可直接访问</li><li><strong>导入时</strong> 可以用 as 关键字 给这个成员重命名</li></ul></div><details class="custom-container details"><summary>点击查看 按需导出 案例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 03.export.js 文件</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> m1 <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> m2 <span class="token operator">=</span> <span class="token string">&#39;aaa&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看配套的 导入 案例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 与 03.export.js 配套的按需导入 案例</span>

<span class="token comment">// 通过解构赋值 来导入成员</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  m1<span class="token punctuation">,</span>
  m2 <span class="token keyword">as</span> mm2<span class="token punctuation">,</span> <span class="token comment">// 导入时 给 m2 重命名为了 mm2</span>
  say
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./03.export.js&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> mm2<span class="token punctuation">,</span> say<span class="token punctuation">)</span> <span class="token comment">// 1 aaa [Function: say]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-兼容两种导出方案" tabindex="-1"><a class="header-anchor" href="#_3-兼容两种导出方案"><span>3. 兼容两种导出方案</span></a></h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在实际开发中，为了兼顾 <strong>使用方</strong>，我们作为 <strong>导出方</strong> 需要 <strong>同时提供两种导出方案</strong></p></div><details class="custom-container details"><summary>点击查看 导出方 案例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 05.example-export.js 文件</span>

<span class="token comment">// 按需导出了 3 个成员</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> n2 <span class="token operator">=</span> <span class="token number">20</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 同时，默认导出了这 3 个成员</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  n1<span class="token punctuation">,</span>
  n2<span class="token punctuation">,</span>
  show
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看 导入方 案例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 与 05.example-export.js 配套的导入 案例</span>

<span class="token comment">// 可供 导入方 自由地选择不同的导入语法</span>
<span class="token keyword">import</span> info<span class="token punctuation">,</span> <span class="token punctuation">{</span> n1<span class="token punctuation">,</span> n2 <span class="token keyword">as</span> nn2<span class="token punctuation">,</span> show <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./05.example-export.js&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token comment">// { n1: 10, n2: 20, show: [Function: show] }</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> nn2<span class="token punctuation">,</span> show<span class="token punctuation">)</span> <span class="token comment">// 10 20 [Function: show]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,23),i=[l];function o(c,p){return n(),a("div",null,i)}const d=s(t,[["render",o],["__file","modularity-standard.html.vue"]]),u=JSON.parse('{"path":"/frontend/javascript/modularity-standard.html","title":"前端模块化规范","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 说出 4 种模块化规范","slug":"_1-说出-4-种模块化规范","link":"#_1-说出-4-种模块化规范","children":[]},{"level":2,"title":"2. ES6 模块化规范的 3 个定义","slug":"_2-es6-模块化规范的-3-个定义","link":"#_2-es6-模块化规范的-3-个定义","children":[]},{"level":2,"title":"3. 在 Node.js 中体验 ES6 模块化","slug":"_3-在-node-js-中体验-es6-模块化","link":"#_3-在-node-js-中体验-es6-模块化","children":[{"level":3,"title":"1. 默认导出 和 默认导入","slug":"_1-默认导出-和-默认导入","link":"#_1-默认导出-和-默认导入","children":[]},{"level":3,"title":"2. 按需导出 和 按需导入","slug":"_2-按需导出-和-按需导入","link":"#_2-按需导出-和-按需导入","children":[]},{"level":3,"title":"3. 兼容两种导出方案","slug":"_3-兼容两种导出方案","link":"#_3-兼容两种导出方案","children":[]}]}],"git":{"updatedTime":1658804855000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":2}]},"filePathRelative":"frontend/javascript/modularity-standard.md"}');export{d as comp,u as data};