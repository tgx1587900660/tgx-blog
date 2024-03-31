import{_ as n,o as s,c as a,e as t}from"./app-CkeFUswH.js";const e={},p=t(`<h1 id="vue-组件封装原则" tabindex="-1"><a class="header-anchor" href="#vue-组件封装原则"><span>Vue 组件封装原则</span></a></h1><div class="custom-container tip"><p class="custom-container-title">组件封装原则</p><ul><li>组件的 <strong>DOM 结构、style 样式</strong> 要尽量复用</li><li>组件中 <strong>要展示的数据</strong> 尽量让 组件使用者提供</li></ul></div><h2 id="_1-属性具体化" tabindex="-1"><a class="header-anchor" href="#_1-属性具体化"><span>1. 属性具体化</span></a></h2><p>要把属性分开接收，不要只接收一个 config 对象。（不然维护起来如同噩梦，无法复用 UI 结构）</p><details class="custom-container details"><summary>点击查看封装案例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 正确的做法</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
			<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;test-title&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
			<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// -----------------------------------------------------</span>

<span class="token comment">// 错误的做法</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
			<span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;test-title&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","component-package-principle.html.vue"]]),d=JSON.parse('{"path":"/frontend/vue/vue2/component-package-principle.html","title":"Vue 组件封装原则","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 属性具体化","slug":"_1-属性具体化","link":"#_1-属性具体化","children":[]}],"git":{"updatedTime":1660215767000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":1}]},"filePathRelative":"frontend/vue/vue2/component-package-principle.md"}');export{u as comp,d as data};
