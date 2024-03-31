import{_ as e,o as l,c as i,e as t}from"./app-CkeFUswH.js";const s={},r=t(`<h1 id="powershell-常见问题" tabindex="-1"><a class="header-anchor" href="#powershell-常见问题"><span>Powershell 常见问题</span></a></h1><h2 id="_1-禁止运行脚本问题" tabindex="-1"><a class="header-anchor" href="#_1-禁止运行脚本问题"><span>1. 禁止运行脚本问题</span></a></h2><div class="custom-container tip"><p class="custom-container-title">问题说明</p><p>全局安装了 <code>@vue/cli</code> 这个包之后，想要运行 <code>vue -V</code> 命令 发生报错(只要是全局的命令，在第一次使用时都有可能报错)</p></div><details class="custom-container details"><summary>点击查看报错信息</summary><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>vue: 无法加载文件 ...... 因为在此系统上禁止运行脚本。有关信息，请参阅......
+ vue -V
+
  + CategoryInfo          : SecurityError: (:) []. PSSecurityException
  + FullyQualifiedErrorId : UnauthorizedAccess
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>凡是遇到 <strong>禁止运行脚本</strong> 问题，解决方案： <ul><li><ol><li>管理员身份运行 Powershell</li></ol></li><li><ol start="2"><li>执行 set-ExecutionPolicy RemoteSigned 命令</li></ol></li><li><ol start="3"><li>会提示 <strong>执行策略更改</strong> ，输入字符 Y ，回车即可。</li></ol></li><li><ol start="4"><li>关闭窗口后就可以执行命令了</li></ol></li></ul></li></ul><h2 id="_2-窗口冻结问题" tabindex="-1"><a class="header-anchor" href="#_2-窗口冻结问题"><span>2. 窗口冻结问题</span></a></h2><div class="custom-container tip"><p class="custom-container-title">问题说明</p><p>使用终端 npm i 下载依赖包的时候，如果鼠标乱划，会导致 <strong>终端冻结</strong> （暂停下载依赖包）。</p></div><ul><li>解决方案： <ul><li><ol><li>点击终端内部，按下回车即可继续。</li></ol></li></ul></li></ul>`,8),a=[r];function n(o,c){return l(),i("div",null,a)}const u=e(s,[["render",n],["__file","security-error.html.vue"]]),m=JSON.parse('{"path":"/frontend/source/article/security-error.html","title":"Powershell 常见问题","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 禁止运行脚本问题","slug":"_1-禁止运行脚本问题","link":"#_1-禁止运行脚本问题","children":[]},{"level":2,"title":"2. 窗口冻结问题","slug":"_2-窗口冻结问题","link":"#_2-窗口冻结问题","children":[]}],"git":{"updatedTime":1681979965000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":1}]},"filePathRelative":"frontend/source/article/security-error.md"}');export{u as comp,m as data};