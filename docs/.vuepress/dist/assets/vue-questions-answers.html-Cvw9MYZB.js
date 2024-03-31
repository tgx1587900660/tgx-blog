import{_ as n,o as s,c as a,e}from"./app-CkeFUswH.js";const t={},p=e(`<h1 id="vue-问答整理" tabindex="-1"><a class="header-anchor" href="#vue-问答整理"><span>Vue 问答整理</span></a></h1><h2 id="_1-说下你对-mvvm-的理解" tabindex="-1"><a class="header-anchor" href="#_1-说下你对-mvvm-的理解"><span>1. 说下你对 MVVM 的理解 ?</span></a></h2><ul><li>M 指 model 是页面所依赖的数据源</li><li>V 指 view 是页面的 dom 结构</li><li>VM 指 ViewModel 是 Vue 实例，联系 M 和 V 的桥梁</li></ul><div class="custom-container tip"><p class="custom-container-title">说明</p><p>页面、数据都是千变万化的，但二者联系的桥梁是可以不变的。</p></div><p>若我们把页面看成 UI ，把数据看成 data，则得到一个公式：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>UI = render(data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>render() 是一个方法，它把数据(data)填充到了页面(UI)中，从而形成了我们看到的页面。开发 Vue 就是在开发一个 render() 方法， 而学习 Vue 就是在学习 render() 这个方法怎么使用。</p><h2 id="_2-单页面应用程序-spa-优缺点" tabindex="-1"><a class="header-anchor" href="#_2-单页面应用程序-spa-优缺点"><span>2. 单页面应用程序（SPA）优缺点 ?</span></a></h2><div class="custom-container tip"><p class="custom-container-title">SPA 的特点</p><p>SPA 将所有的功能局限于一个 web 页面中，仅在该 web 页面初始化时加载相应的资源（ HTML、 JavaScript 和 CSS）。 一旦页面加载完成了，SPA 不会因为用户的操作而进行页面的重新加载或跳转，而是利用 JavaScript 动态地变换 HTML 的内容，从而实现页面与用户的交互。</p></div><h3 id="_1-优点" tabindex="-1"><a class="header-anchor" href="#_1-优点"><span>1. 优点</span></a></h3><div class="custom-container tip"><p class="custom-container-title">主要 3 个优点</p><ul><li>良好的交互体验 <ul><li>内容改变无需重新加载整个页面</li><li>网页数据也是 Ajax 异步获取的</li><li>没有页面跳转，不会出现 “白屏现象”</li></ul></li><li>良好的前后端工作分离模式 <ul><li>后端专注于提供 API，更容易实现 API 接口的复用</li><li>前端专注于页面渲染，更利于前端工程化的发展</li></ul></li><li>减轻服务器压力 <ul><li>服务器只提供数据，不负责页面的合成与逻辑的处理，吞吐能力会提高几倍</li></ul></li></ul></div><h3 id="_2-缺点" tabindex="-1"><a class="header-anchor" href="#_2-缺点"><span>2. 缺点</span></a></h3><div class="custom-container tip"><p class="custom-container-title">主要 2 个缺点</p><ul><li>首屏加载慢（4 种解决方案） <ul><li>路由懒加载</li><li>代码压缩</li><li>CDN 加速</li><li>网络传输压缩</li></ul></li><li>不利于 SEO （1 种解决方案） - SSR 服务器端渲染</li></ul></div><h2 id="_3-计算属性-vs-方法" tabindex="-1"><a class="header-anchor" href="#_3-计算属性-vs-方法"><span>3. 计算属性 VS 方法</span></a></h2><div class="custom-container tip"><p class="custom-container-title">主要区别</p><ul><li>计算属性：会缓存计算结果。如果在模版中被多次使用，只要 <strong>依赖的数据</strong> 不变，就只执行一次</li><li>方法：不会做特殊处理。如果在模版中被多次调用，内部逻辑就会执行多次</li></ul></div><h2 id="_4-计算属性-vs-监听器" tabindex="-1"><a class="header-anchor" href="#_4-计算属性-vs-监听器"><span>4. 计算属性 VS 监听器</span></a></h2><div class="custom-container tip"><p class="custom-container-title">侧重点不同</p><ul><li>计算属性：会监听 <strong>多个值</strong>，始终缓存并返回 <strong>一个值</strong></li><li>监听器：会监听 <strong>一个值</strong>，并执行一些逻辑，<strong>无需返回值</strong></li></ul></div><h2 id="_5-写一下-dom-diff-的-patch-函数" tabindex="-1"><a class="header-anchor" href="#_5-写一下-dom-diff-的-patch-函数"><span>5. 写一下 DOM-Diff 的 patch 函数 ？</span></a></h2><ul><li>DOM-Diff 分为 2 条主线，大致写一下它的内部逻辑： <ul><li><ol><li>初次渲染</li></ol></li><li><ol start="2"><li>更新渲染</li></ol></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 1. 初始化（准备一个 节点，目的是创建该节点）</span>
<span class="token keyword">function</span> <span class="token function">creatElement</span><span class="token punctuation">(</span><span class="token parameter">vNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建元素三要素：标签名、标签的属性、子节点</span>
  <span class="token keyword">const</span> tag <span class="token operator">=</span> vNode<span class="token punctuation">.</span>tag <span class="token comment">// 拿到标签名</span>
  <span class="token keyword">const</span> attrs <span class="token operator">=</span> vNode<span class="token punctuation">.</span>attrs <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 拿到所有属性</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> vNode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 拿到子节点</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 有标签，则创建元素、添加属性、添加子节点</span>
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

<span class="token comment">// 2. 更新函数（准备 一个旧节点 和 一个新节点，目的是把旧节点局部更新为新节点）</span>
<span class="token keyword">function</span> <span class="token function">updateChildren</span><span class="token punctuation">(</span><span class="token parameter">vNode<span class="token punctuation">,</span> newVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> children <span class="token operator">=</span> vNode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 旧 DOM 的子节点</span>
  <span class="token keyword">let</span> newChildren <span class="token operator">=</span> newVnode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 新 DOM 的子节点</span>

  <span class="token comment">// 循环对比</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">childVnode<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先假设无变化，则可以通过 旧节点索引 来获取 新节点</span>
    <span class="token keyword">let</span> newChildrenVnode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

    <span class="token comment">// 对比标签</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>newChildrenVnode<span class="token punctuation">.</span>tag <span class="token operator">===</span> childVnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 第一层没变化, 递归更新子节点</span>
      <span class="token function">updateChildren</span><span class="token punctuation">(</span>childVnode<span class="token punctuation">,</span> newChildrenVnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 标签变了，就需要把旧节点换成新的</span>
      <span class="token function">replaceNode</span><span class="token punctuation">(</span>childVnode<span class="token punctuation">,</span> newChildrenVnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[p];function i(c,o){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","vue-questions-answers.html.vue"]]),r=JSON.parse('{"path":"/frontend/vue/vue2/vue-questions-answers.html","title":"Vue 问答整理","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 说下你对 MVVM 的理解 ?","slug":"_1-说下你对-mvvm-的理解","link":"#_1-说下你对-mvvm-的理解","children":[]},{"level":2,"title":"2. 单页面应用程序（SPA）优缺点 ?","slug":"_2-单页面应用程序-spa-优缺点","link":"#_2-单页面应用程序-spa-优缺点","children":[{"level":3,"title":"1. 优点","slug":"_1-优点","link":"#_1-优点","children":[]},{"level":3,"title":"2. 缺点","slug":"_2-缺点","link":"#_2-缺点","children":[]}]},{"level":2,"title":"3. 计算属性 VS 方法","slug":"_3-计算属性-vs-方法","link":"#_3-计算属性-vs-方法","children":[]},{"level":2,"title":"4. 计算属性 VS 监听器","slug":"_4-计算属性-vs-监听器","link":"#_4-计算属性-vs-监听器","children":[]},{"level":2,"title":"5. 写一下 DOM-Diff 的 patch 函数 ？","slug":"_5-写一下-dom-diff-的-patch-函数","link":"#_5-写一下-dom-diff-的-patch-函数","children":[]}],"git":{"updatedTime":1660215767000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":1}]},"filePathRelative":"frontend/vue/vue2/vue-questions-answers.md"}');export{d as comp,r as data};