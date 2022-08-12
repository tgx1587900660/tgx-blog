import{_ as n,o as s,c as a,d as t}from"./app.b7621b50.js";const e={},p=t(`<h1 id="vue-\u7EC4\u4EF6\u5C01\u88C5\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#vue-\u7EC4\u4EF6\u5C01\u88C5\u539F\u5219" aria-hidden="true">#</a> Vue \u7EC4\u4EF6\u5C01\u88C5\u539F\u5219</h1><div class="custom-container tip"><p class="custom-container-title">\u7EC4\u4EF6\u5C01\u88C5\u539F\u5219</p><ul><li>\u7EC4\u4EF6\u7684 <strong>DOM \u7ED3\u6784\u3001style \u6837\u5F0F</strong> \u8981\u5C3D\u91CF\u590D\u7528</li><li>\u7EC4\u4EF6\u4E2D <strong>\u8981\u5C55\u793A\u7684\u6570\u636E</strong> \u5C3D\u91CF\u8BA9 \u7EC4\u4EF6\u4F7F\u7528\u8005\u63D0\u4F9B</li></ul></div><h2 id="_1-\u5C5E\u6027\u5177\u4F53\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u5C5E\u6027\u5177\u4F53\u5316" aria-hidden="true">#</a> 1. \u5C5E\u6027\u5177\u4F53\u5316</h2><p>\u8981\u628A\u5C5E\u6027\u5206\u5F00\u63A5\u6536\uFF0C\u4E0D\u8981\u53EA\u63A5\u6536\u4E00\u4E2A config \u5BF9\u8C61\u3002\uFF08\u4E0D\u7136\u7EF4\u62A4\u8D77\u6765\u5982\u540C\u5669\u68A6\uFF0C\u65E0\u6CD5\u590D\u7528 UI \u7ED3\u6784\uFF09</p><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u5C01\u88C5\u6848\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6B63\u786E\u7684\u505A\u6CD5</span>
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

<span class="token comment">// \u9519\u8BEF\u7684\u505A\u6CD5</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5),o=[p];function l(i,r){return s(),a("div",null,o)}var u=n(e,[["render",l],["__file","component-package-principle.html.vue"]]);export{u as default};
