import{_ as l,o as s,c as i,b as r,e,r as d}from"./app.e5f32f9f.js";const c={},t=e('<h1 id="webpack-\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#webpack-\u77E5\u8BC6" aria-hidden="true">#</a> webpack \u77E5\u8BC6</h1><h2 id="_1-webpack-\u7684\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-webpack-\u7684\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> 1. webpack \u7684\u5DE5\u4F5C\u6D41\u7A0B</h2><div class="custom-container tip"><p class="custom-container-title">\u5DE5\u4F5C\u6D41\u7A0B</p><ul><li>\u5148\u5224\u65AD\u8FD9\u4E2A\u6587\u4EF6\u662F\u4E0D\u662F .js \u6587\u4EF6\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u5C31\u53BB\u627E\u5BF9\u5E94\u7684 loader\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5C31\u62A5\u9519</li><li>\u5982\u679C\u627E\u5230\u4E86 loader\uFF0C\u5C31\u4EA4\u7ED9 loader \u5904\u7406</li><li>\u5982\u679C\u6587\u4EF6\u662F .js \u6587\u4EF6\uFF0C\u4E14\u4E0D\u5305\u542B\u9AD8\u7EA7\u8BED\u6CD5\uFF0C\u5C31\u76F4\u63A5\u5904\u7406</li><li>\u5982\u679C\u6587\u4EF6\u662F .js \u6587\u4EF6\uFF0C\u4E14\u5305\u542B\u9AD8\u7EA7\u8BED\u6CD5\uFF0C\u5C31\u8981\u627E babel-loader \u5904\u7406</li><li>\u5982\u679C babel-loader \u6CA1\u6709\u914D\u7F6E\uFF0C\u5C31\u62A5\u9519\uFF0C\u914D\u7F6E\u4E86\uFF0C\u5C31\u5728\u5904\u7406\u6210 .js \u540E\u518D\u4EA4\u7ED9 webpack</li></ul></div>',3),n=e(`<blockquote><p>webpack \u662F\u524D\u7AEF\u5DE5\u7A0B\u5316\u7684\u4E00\u4E2A\u5177\u4F53\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5B83\u53EF\u4EE5\u5B9E\u73B0\u524D\u7AEF\u5DE5\u7A0B\u5316\u7684\u56DB\u5927\u539F\u5219</p></blockquote><p>\u73B0\u4EE3\u524D\u7AEF\u5F00\u53D1\u56DB\u539F\u5219\uFF1A</p><ul><li>\u6A21\u5757\u5316\uFF08js \u7684\u6A21\u5757\u5316\u3001css \u7684\u6A21\u5757\u5316\u3001\u8D44\u6E90\u7684\u6A21\u5757\u5316\uFF09</li><li>\u7EC4\u4EF6\u5316\uFF08\u590D\u7528\u73B0\u6709\u7684 UI \u7ED3\u6784\u3001\u6837\u5F0F\u3001\u884C\u4E3A\uFF09</li><li>\u89C4\u8303\u5316\uFF08\u76EE\u5F55\u7ED3\u6784\u7684\u5212\u5206\u3001\u7F16\u7801\u89C4\u8303\u5316\u3001\u63A5\u53E3\u89C4\u8303\u5316\u3001\u6587\u6863\u89C4\u8303\u5316\u3001 Git \u5206\u652F\u7BA1\u7406\uFF09</li><li>\u81EA\u52A8\u5316\uFF08\u81EA\u52A8\u5316\u6784\u5EFA\u3001\u81EA\u52A8\u90E8\u7F72\u3001\u81EA\u52A8\u5316\u6D4B\u8BD5\uFF09</li></ul><h2 id="_2-\u4F7F\u7528-webpack" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-webpack" aria-hidden="true">#</a> 2. \u4F7F\u7528 webpack</h2><div class="custom-container tip"><p class="custom-container-title">\u5B89\u88C5\u4F4D\u7F6E</p><p>webpack \u4E3B\u8981\u7528\u4E8E\u6253\u5305\u538B\u7F29\u6E90\u7801\u3002\u53EA\u9700\u8981\u5B89\u88C5\u5230\u5F00\u53D1\u73AF\u5883</p></div><ul><li><ol><li>\u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5\u4E24\u4E2A\u4F9D\u8D56\u5305</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>npm install webpack@5.42.1 webpack-cli@4.7.2 -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><ol start="2"><li>\u7B2C\u4E8C\u6B65\uFF1Apackage.json \u4E2D\u6DFB\u52A0\u811A\u672C</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&quot;dev&quot;: &quot;webpack&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><ol start="3"><li>\u7B2C\u4E09\u6B65\uFF1A\u7F16\u5199 webpack.config.js \u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>module.exports = {...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_3-webpack-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-webpack-\u63D2\u4EF6" aria-hidden="true">#</a> 3. webpack \u63D2\u4EF6</h2><div class="custom-container tip"><p class="custom-container-title">\u610F\u4E49</p><p>webpack \u652F\u6301\u63D2\u4EF6\u529F\u80FD\uFF0C\u6269\u5C55\u6027\u66F4\u5F3A\uFF0C\u8BA9\u5F00\u53D1\u8005\u5B9E\u73B0\u66F4\u591A\u81EA\u52A8\u5316\u529F\u80FD\uFF0C\u4F7F\u5F00\u53D1\u4EBA\u5458\u66F4\u4E13\u6CE8\u4E8E\u4E1A\u52A1</p></div><h3 id="_1-webpack-dev-server-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-webpack-dev-server-\u63D2\u4EF6" aria-hidden="true">#</a> 1. webpack-dev-server \u63D2\u4EF6</h3><ul><li><p><strong>\u63D2\u4EF6\u4F5C\u7528\uFF1A</strong> \u8BE5\u63D2\u4EF6\u4F1A\u5728\u5185\u5B58\u4E2D\u751F\u6210\u4E00\u4E2A\u5F00\u53D1\u9636\u6BB5\u7684 bundle.js \u6587\u4EF6\uFF0C\u4E3A\u4E86\u907F\u514D\u9891\u7E41\u8BFB\u5199\u7269\u7406\u78C1\u76D8\uFF0C \u751F\u6210\u7684\u8FD9\u4E2A bundle.js \u6587\u4EF6\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u4E0B\u88AB\u8BBF\u95EE</p></li><li><p><strong>\u63D2\u4EF6\u4F7F\u7528\uFF1A</strong> \u5B89\u88C5 webpack-dev-server \u63D2\u4EF6\u5305\uFF0C\u5E76\u5C06\u811A\u672C\u6539\u4E3A &quot;dev&quot;: &quot;webpack serve&quot; \u5373\u53EF\u4F7F\u7528\u81EA\u52A8\u66F4\u65B0\u529F\u80FD</p></li></ul><h3 id="_2-html-webpack-plugin-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-html-webpack-plugin-\u63D2\u4EF6" aria-hidden="true">#</a> 2. html-webpack-plugin \u63D2\u4EF6</h3><ul><li><p><strong>\u63D2\u4EF6\u4F5C\u7528\uFF1A</strong> \u4E3A\u4E86\u542F\u52A8\u670D\u52A1\u65F6\u76F4\u63A5\u8FDB\u5165\u9996\u9875\uFF0C\u8BE5\u63D2\u4EF6\u4F1A\u81EA\u52A8\u590D\u5236\u4E00\u4EFD\u6A21\u677F index.html \u5230\u6839\u76EE\u5F55\uFF08\u5185\u5B58\u4E2D\uFF09\u4E0B\uFF0C\u540C\u65F6\u81EA\u52A8\u6CE8\u5165\u540C\u7EA7\u76EE\u5F55\u5185\u5B58\u4E2D\u7684 bundle.js\uFF0C\u4ECE\u800C\u4F7F\u5F97\u5F00\u53D1\u9875\u9762\u88AB\u81EA\u52A8\u8BBF\u95EE\u3002\u5176\u4E2D\u8FD9\u4E2A bundle.js \u662F\u7531\u63D2\u4EF6 webpack-dev-server \u751F\u6210\u7684\u3002</p></li><li><p><strong>\u63D2\u4EF6\u4F7F\u7528\uFF1A</strong> \u5B89\u88C5 html-webpack-plugin \u63D2\u4EF6\u5305\uFF0C\u5F15\u5165\u5B83\u5F97\u5230\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u7528 new \u7684\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5E76\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u914D\u7F6E\u5B83\u7684\u6A21\u677F\u6587\u4EF6\uFF0C\u518D\u628A\u8FD9\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u653E\u5165 webpack \u7684\u914D\u7F6E\u6587\u4EF6\u5C5E\u6027 plugin \u6570\u7EC4\u4E2D</p></li></ul><h3 id="_3-clean-webpack-plugin-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-clean-webpack-plugin-\u63D2\u4EF6" aria-hidden="true">#</a> 3. clean-webpack-plugin \u63D2\u4EF6</h3><ul><li><p><strong>\u63D2\u4EF6\u4F5C\u7528\uFF1A</strong> \u4E3A\u4E86\u8BA9 webpack \u6BCF\u6B21\u6253\u5305\u65F6\u90FD\u81EA\u52A8\u5220\u4E00\u6B21\u751F\u6210\u7684 dist \u76EE\u5F55\uFF0C\u56E0\u4E3A\u591A\u6B21\u6253\u5305\u4F1A\u5408\u5E76\u6587\u4EF6\uFF0C\u5BB9\u6613\u51FA\u73B0\u56FE\u7247\u6216\u6587\u4EF6\u91CD\u590D\uFF0C\u4F7F\u5F97\u5F00\u53D1\u4EBA\u5458\u5BF9\u591A\u4F59\u7684\u6587\u4EF6\u611F\u5230\u56F0\u60D1</p></li><li><p><strong>\u63D2\u4EF6\u4F7F\u7528\uFF1A</strong> \u5B89\u88C5 clean-webpack-plugin \u63D2\u4EF6\u5305\uFF0C\u67E5\u9605\u5B83\u7684\u6587\u6863\u590D\u5236\u7528\u6CD5\u5373\u53EF</p></li></ul><h2 id="_4-webpack-\u52A0\u8F7D\u5668" tabindex="-1"><a class="header-anchor" href="#_4-webpack-\u52A0\u8F7D\u5668" aria-hidden="true">#</a> 4. webpack \u52A0\u8F7D\u5668</h2><div class="custom-container tip"><p class="custom-container-title">\u610F\u4E49</p><p>webpack \u53EA\u80FD\u8BC6\u522B .js \u6587\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981 <code>\u52A0\u8F7D\u5668(loader)</code> \u6765\u5904\u7406\u5176\u4ED6\u683C\u5F0F\u7684\u6587\u4EF6</p></div><h3 id="_1-\u5904\u7406-css-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5904\u7406-css-\u6587\u4EF6" aria-hidden="true">#</a> 1. \u5904\u7406 .css \u6587\u4EF6</h3><p>\u8981\u5904\u7406.css \u6587\u4EF6\uFF0C\u9700\u8981\u5B89\u88C5 style-loader \u548C css-loader \u4F9D\u8D56\u5305\uFF0C\u5F53 webpack \u9047\u5230.css \u6587\u4EF6\u65F6\uFF0C\u53D1\u73B0\u5904\u7406\u4E0D\u4E86\uFF0C\u4FBF\u524D\u5F80\u914D\u7F6E\u6587\u4EF6 module.rules \u6570\u7EC4\u4E2D\u67E5\u770B loader\uFF0C\u63A5\u7740\u6839\u636E loader \u987A\u5E8F\u4ECE\u540E\u5F80\u524D\u5904\u7406\uFF0C\u5148\u7528 css-loader \u5904\u7406\uFF0C\u518D\u7528 style-loader \u5904\u7406\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u5408\u5E76\u5230 bundle.js \u4E2D</p><h3 id="_2-\u5904\u7406-less-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u5904\u7406-less-\u6587\u4EF6" aria-hidden="true">#</a> 2. \u5904\u7406 .less \u6587\u4EF6</h3><p>\u8981\u5904\u7406.less \u6587\u4EF6\uFF0C\u9700\u8981\u5B89\u88C5 less-loader \u548C less\uFF0C\u7531\u4E8E less \u662F\u88AB less-loader \u5185\u90E8\u4F9D\u8D56\u7684\uFF0C\u6240\u6709\u8981\u5B89\u88C5\u8FD9\u4E2A\u5305\uFF0C\u4F46\u53EA\u9700\u8981\u914D\u7F6E less-loader \u5373\u53EF</p><h3 id="_3-\u5904\u7406-\u6587\u4EF6\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_3-\u5904\u7406-\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> 3. \u5904\u7406 \u6587\u4EF6\u8DEF\u5F84</h3><p>\u5047\u8BBE\u5728\u9875\u9762\u5728\u8981\u5F15\u5165\u4E00\u5F20\u56FE\u7247\uFF0C\u5C31\u4F1A\u4F7F\u7528\u7C7B\u4F3C./img/logo.png \u5199\u6CD5\uFF0C\u8FD9\u79CD\u8DEF\u5F84 webpack \u65E0\u6CD5\u8BC6\u522B\u3002\u56E0\u6B64\u8981\u5B89\u88C5 url-loader \u548C file-loader \u4F9D\u8D56\u5305\uFF0C\u7531\u4E8E file-loader \u662F\u88AB url-loader \u5185\u90E8\u4F9D\u8D56\u7684\uFF0C\u6240\u6709\u8981\u5B89\u88C5\u8FD9\u4E2A\u5305\u3002</p><p>\u4F46\u53EA\u9700\u8981\u914D\u7F6E url-loader \u5373\u53EF\uFF0C\u5176\u4E2D url-loader?limit=470&amp;outputPath=images \u8868\u793A\u5927\u4E8E 470 \u5B57\u8282\u7684\u56FE\u7247\u5C31\u76F4\u63A5\u4F7F\u7528\u8DEF\u5F84\u5F62\u5F0F\uFF0C\u5C0F\u4E8E\u7B49\u4E8E 470 \u5B57\u8282\u7684\u56FE\u7247\u4F1A\u88AB\u8F6C\u6210 base64 \u683C\u5F0F\uFF0C\u4E14\u56FE\u7247\u88AB\u6253\u5305\u540E\u8981\u653E\u5728 dist/images \u76EE\u5F55\u4E0B\uFF0C\u4E5F\u53EF\u7528\u5BF9\u8C61\u914D\u7F6E\u53C2\u6570\u8FD9\u4E24\u4E2A\u53C2\u6570\u3002</p><h3 id="_4-\u5904\u7406-js-\u9AD8\u7EA7\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-\u5904\u7406-js-\u9AD8\u7EA7\u8BED\u6CD5" aria-hidden="true">#</a> 4. \u5904\u7406 js \u9AD8\u7EA7\u8BED\u6CD5</h3><p>webpack \u53EA\u80FD\u5904\u7406\u4E00\u90E8\u5206 js \u6587\u4EF6\uFF0C\u5BF9\u4E8E\u9AD8\u7EA7\u8BED\u6CD5\uFF0C\u9700\u8981\u501F\u52A9 babel-loader \u6765\u5904\u7406\u3002</p><p>\u6BD4\u5982\uFF1A\u8981\u5904\u7406\u88C5\u9970\u5668\u8BED\u6CD5\uFF0C\u5C31\u9700\u8981\u5B89\u88C5 babel-loader\u3001@babel/core\u3001@babel/plugin-proposal-decorators \u8FD9 3 \u4E2A\u4F9D\u8D56\u5305\uFF0C\u540C\u65F6\u521B\u5EFA babel.config.js \u914D\u7F6E\u6587\u4EF6\uFF0C\u53BB babel \u5B98\u7F51\u627E\u5BF9\u5E94\u7684\u914D\u7F6E\u590D\u5236\u5373\u53EF</p><h3 id="_5-\u5904\u7406-ts-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u5904\u7406-ts-\u6587\u4EF6" aria-hidden="true">#</a> 5. \u5904\u7406 .ts \u6587\u4EF6</h3><p>\u5982\u679C\u9879\u76EE\u4E2D\u7528\u5230\u4E86 typescript \uFF0C\u9700\u8981\u501F\u52A9 ts-loader \u52A0\u8F7D\u5668\u6765\u628A .ts \u6587\u4EF6\u5904\u7406\u6210 js \u6587\u4EF6\u3002</p>`,28);function o(p,u){const a=d("tgx-img");return s(),i("div",null,[t,r(a,{src:"/tools/webpack-study/loader-study.png",title:"loader \u8C03\u7528\u8FC7\u7A0B\u793A\u610F\u56FE",alt:"loader \u8C03\u7528\u8FC7\u7A0B\u793A\u610F\u56FE"}),n])}var h=l(c,[["render",o],["__file","webpack-study.html.vue"]]);export{h as default};
