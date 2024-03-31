import{_ as n,o as s,c as a,e as t}from"./app-CkeFUswH.js";const e="/tgx-blog/assets/node-environment-u7E50UXl.png",p={},i=t('<h1 id="node-js-概念及其内置-api" tabindex="-1"><a class="header-anchor" href="#node-js-概念及其内置-api"><span>Node.js 概念及其内置 API</span></a></h1><div class="custom-container tip"><p class="custom-container-title">Node 是什么</p><p><strong>node.js 是</strong> 一个 <strong>基于 Chrome V8 引擎</strong> 的 <strong>JavaScript 运行环境</strong></p></div><h2 id="_1-node-js-中的-js-运行环境" tabindex="-1"><a class="header-anchor" href="#_1-node-js-中的-js-运行环境"><span>1. Node.js 中的 JS 运行环境</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li>浏览器：是 js 的 <strong>前端运行环境</strong></li><li>Node：是 js 的 <strong>后端运行环境</strong></li></ul></div><ul><li>要想用 js 做前端开发，就要学习 浏览器 的 内置 API</li><li>要想用 js 做后端开发，就要学习 Node 的 内置 API</li></ul><img src="'+e+`" alt="JS 运行环境示意图" title="JS 运行环境示意图" width="740"><h2 id="_2-怎么样学习-node-js" tabindex="-1"><a class="header-anchor" href="#_2-怎么样学习-node-js"><span>2. 怎么样学习 Node.js ?</span></a></h2><div class="custom-container tip"><p class="custom-container-title">学习计划</p><ul><li><strong>浏览器的 js 学习路径</strong><ul><li><ol><li>js 基础语法</li></ol></li><li><ol start="2"><li>浏览器内置 API（DOM, BOM...）</li></ol></li><li><ol start="3"><li>第三方库（Vue, JQuery, Art-template...）</li></ol></li></ul></li><li><strong>Node 的 js 学习路径</strong><ul><li><ol><li>js 基础语法</li></ol></li><li><ol start="2"><li>Node.js 内置 API（fs, path, http...）</li></ol></li><li><ol start="3"><li>第三方库（express, mysql...）</li></ol></li></ul></li></ul></div><h2 id="_3-fs-文件系统模块" tabindex="-1"><a class="header-anchor" href="#_3-fs-文件系统模块"><span>3. fs 文件系统模块</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。</p><ul><li>fs.readFile() 方法，用来 <strong>读取</strong> 指定文件中的内容</li><li>fs.writeFile() 方法，用来向指定的文件中 <strong>写入</strong> 内容</li></ul></div><h3 id="_1-fs-readfile-方法使用" tabindex="-1"><a class="header-anchor" href="#_1-fs-readfile-方法使用"><span>1. fs.readFile() 方法使用</span></a></h3><ul><li>语法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>

<span class="token comment">// path: 必须参数。指定文件的路径</span>
<span class="token comment">// options: 可选参数。指定用什么 编码格式 来读取文件</span>
<span class="token comment">// callback: 必选参数。文件读取完成后，要做什么操作（无论成功，失败，都会执行该回调函数）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例</li></ul><details class="custom-container details"><summary>点击查看用法示例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./01.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> docStr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取文件失败：&#39;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取文件成功，内容是：&#39;</span> <span class="token operator">+</span> docStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-fs-writefile-方法使用" tabindex="-1"><a class="header-anchor" href="#_2-fs-writefile-方法使用"><span>2. fs.writeFile() 方法使用</span></a></h3><div class="custom-container tip"><p class="custom-container-title">注意点</p><ul><li>该方法 <strong>只能写入文件，不能创建文件夹</strong>。这就意味着你如果要在一个不存在的文件夹里面写入一个文件是不可行的</li><li>该方法 重复写入内容，会进行覆盖操作</li></ul></div><ul><li>语法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>

<span class="token comment">// path: 必须参数。指定文件的路径</span>
<span class="token comment">// data: 必填参数。要写入的具体内容</span>
<span class="token comment">// options: 可选参数。指定用什么 编码格式 来写入文件，默认是 utf8</span>
<span class="token comment">// callback: 必选参数。文件写入完成后，要执行的回调函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例</li></ul><details class="custom-container details"><summary>点击查看用法示例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;./02.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc123一二三32131232131&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件写入失败：&#39;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件写入成功！&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_4-path-路径模块" tabindex="-1"><a class="header-anchor" href="#_4-path-路径模块"><span>4. path 路径模块</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>path 模块是 Node.js 官方提供的、用来处理文件路径的模块。它提供了一系列的方法和属性，用来满足用户对文件路径的操作需求。</p><ul><li>path.join() 方法，用来将多个路径片段拼接成一个 <strong>完整的路径字符串</strong></li><li>path.basename() 方法，用来从路径字符串中，将 <strong>文件名</strong> 解析出来</li><li>path.extname() 方法，用来从路径字符串中，将 <strong>文件后缀名</strong> 解析出来</li></ul></div><h3 id="_1-path-join-方法使用" tabindex="-1"><a class="header-anchor" href="#_1-path-join-方法使用"><span>1. path.join() 方法使用</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>__dirname 是 node 提供的成员，用来表示当前文件所处的目录，常与 path.join() 方法一起使用</p></div><details class="custom-container details"><summary>点击查看用法示例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> newPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b/c/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newPath<span class="token punctuation">)</span> <span class="token comment">//  \\a\\b\\d\\e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-path-basename-方法使用" tabindex="-1"><a class="header-anchor" href="#_2-path-basename-方法使用"><span>2. path.basename() 方法使用</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>path.basename() 用来拿到文件的名称（可以是完整文件名，也可以去掉文件后缀名）</p></div><details class="custom-container details"><summary>点击查看用法示例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fname1 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;/a/b/c/index.html&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fname1<span class="token punctuation">)</span> <span class="token comment">// index.html  （不管这个文件是否真的存在都会输出）</span>

<span class="token comment">// 第二个参数表示 要剔除的后缀名</span>
<span class="token keyword">const</span> fname2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;/a/b/c/index.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.html&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fname2<span class="token punctuation">)</span> <span class="token comment">// index  （不管这个文件是否真的存在都会输出）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-path-extname-方法使用" tabindex="-1"><a class="header-anchor" href="#_3-path-extname-方法使用"><span>3. path.extname() 方法使用</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>path.extname() 用来拿到文件的后缀名称</p></div><details class="custom-container details"><summary>点击查看用法示例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> extname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;/a/b/c/index.html&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>extname<span class="token punctuation">)</span> <span class="token comment">// .html  （不管这个文件是否真的存在都会输出）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_5-http-服务器模块" tabindex="-1"><a class="header-anchor" href="#_5-http-服务器模块"><span>5. http 服务器模块</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，就能把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务</p></div><details class="custom-container details"><summary>点击查看 如何创建一台简易服务器</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 1. 创建一个 http 服务器 实例对象</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 监听一个 request 事件 (req 是请求对象，res 是响应对象)</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 解决中文乱码</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json; charset=utf8&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 响应给客户端一段文本</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">访问的地址是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 请求的方法是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 监听一个端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server is running at: http://localhost&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_6-querystring-字符串处理模块" tabindex="-1"><a class="header-anchor" href="#_6-querystring-字符串处理模块"><span>6. querystring 字符串处理模块</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li>querystring 模块是 Node.js 内置的、用来处理字符串数据格式的模块, 与 fs, path 模块类似。</li></ul></div><details class="custom-container details"><summary>点击查看 如何在 Express 中使用 querystring 模块</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> qs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 自定义一个处理数据的中间件 customBodyParser</span>
<span class="token keyword">const</span> <span class="token function-variable function">customBodyParser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 当客户端发送数据时触发 data 事件，监听并拼接客户端发来的数据</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token parameter">chunk</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据是分片发送的，可能需要多次接收</span>
    str <span class="token operator">+=</span> chunk
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 2. 当数据发送完成时触发 end 事件</span>
  req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// qs.parse 方法 可以把字符串解析为对象</span>
    req<span class="token punctuation">.</span>body <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> customBodyParser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,38),o=[i];function c(l,u){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","node.html.vue"]]),k=JSON.parse('{"path":"/backend/node/node.html","title":"Node.js 概念及其内置 API","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. Node.js 中的 JS 运行环境","slug":"_1-node-js-中的-js-运行环境","link":"#_1-node-js-中的-js-运行环境","children":[]},{"level":2,"title":"2. 怎么样学习 Node.js ?","slug":"_2-怎么样学习-node-js","link":"#_2-怎么样学习-node-js","children":[]},{"level":2,"title":"3. fs 文件系统模块","slug":"_3-fs-文件系统模块","link":"#_3-fs-文件系统模块","children":[{"level":3,"title":"1. fs.readFile() 方法使用","slug":"_1-fs-readfile-方法使用","link":"#_1-fs-readfile-方法使用","children":[]},{"level":3,"title":"2. fs.writeFile() 方法使用","slug":"_2-fs-writefile-方法使用","link":"#_2-fs-writefile-方法使用","children":[]}]},{"level":2,"title":"4. path 路径模块","slug":"_4-path-路径模块","link":"#_4-path-路径模块","children":[{"level":3,"title":"1. path.join() 方法使用","slug":"_1-path-join-方法使用","link":"#_1-path-join-方法使用","children":[]},{"level":3,"title":"2. path.basename() 方法使用","slug":"_2-path-basename-方法使用","link":"#_2-path-basename-方法使用","children":[]},{"level":3,"title":"3. path.extname() 方法使用","slug":"_3-path-extname-方法使用","link":"#_3-path-extname-方法使用","children":[]}]},{"level":2,"title":"5. http 服务器模块","slug":"_5-http-服务器模块","link":"#_5-http-服务器模块","children":[]},{"level":2,"title":"6. querystring 字符串处理模块","slug":"_6-querystring-字符串处理模块","link":"#_6-querystring-字符串处理模块","children":[]}],"git":{"updatedTime":1681896054000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":12}]},"filePathRelative":"backend/node/node.md"}');export{d as comp,k as data};
