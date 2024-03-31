import{_ as l,o as i,c as t,e as s}from"./app-CkeFUswH.js";const o="/tgx-blog/assets/session-auth-BgpAzMk2.png",e="/tgx-blog/assets/token-auth-CPDQbXdE.png",n="/tgx-blog/assets/proxy-D7_MLzYK.png",a={},r=s('<h1 id="web-网站身份认证" tabindex="-1"><a class="header-anchor" href="#web-网站身份认证"><span>Web 网站身份认证</span></a></h1><div class="custom-container tip"><p class="custom-container-title">栏目说明</p><p>本栏目收集了一些有关 身份认证（Authentication）的内容。</p></div><h2 id="_1-什么是-身份认证" tabindex="-1"><a class="header-anchor" href="#_1-什么是-身份认证"><span>1. 什么是 身份认证？</span></a></h2><div class="custom-container tip"><p class="custom-container-title">概要</p><ul><li><strong>身份认证</strong> 又称 “<strong>身份验证</strong>”、“<strong>鉴权</strong>”，是指 <strong>通过一定的手段，完成对用户身份的确认</strong>。</li><li>身份认证不止一种方案，根据 web 开发的模式，可以选择不同认证方案 <ul><li><strong>服务端渲染</strong> 推荐使用 <strong>Session 认证机制</strong></li><li><strong>前后端分离</strong> 推荐使用 <strong>JWT 认证机制</strong></li></ul></li></ul></div><h2 id="_2-session-认证机制" tabindex="-1"><a class="header-anchor" href="#_2-session-认证机制"><span>2. Session 认证机制</span></a></h2><div class="custom-container tip"><p class="custom-container-title">前置条件</p><ul><li><p><strong>http 协议无状态性</strong> 指的是客户端的每次 HTTP 请求都是独立的，连续多个请求之间没有直接的关系，服务器不会主动保留每次 HTTP 请求的状态。</p></li><li><p><strong>Cookie</strong> 是存储在用户浏览器中的一段 <strong>不超过 4 KB 的字符串</strong>。它由一个名称（Name）、一个值（Value）和其它几个用于控制 Cookie 有效期、安全性、使用范围的可选属性组成。Cookie 具有以下特性：</p><ul><li>自动发送</li><li>域名独立</li><li>过期时限</li><li>4KB 限制</li></ul></li></ul></div><ul><li>Session 认证机制 的实质就是 Cookie + SessionId 双向认证 <ul><li><ol><li>第一次登录后，服务端验证 帐号 和 密码 成功</li></ol></li><li><ol start="2"><li>会给当前用户<strong>生成一个 SessionId 存在服务端</strong>，<strong>同时生成一串 cookie 返回给客户端</strong></li></ol></li><li><ol start="3"><li>同时生成的 SessionId 和 cookie 有着对应关系，不同用户有着不同的 SessionId 和 cookie</li></ol></li><li><ol start="4"><li>随后客户端存储 cookie <strong>（ Cookie 不能含用户信息 ）</strong></li></ol></li><li><ol start="5"><li>后续每个客户端发送请求都会携带自己的 cookie</li></ol></li><li><ol start="6"><li>当服务端接收到请求后，首先拿着 cookie 信息找到对应的 SessionId，再返回对应的用户信息</li></ol></li><li><ol start="7"><li>只要处于登录状态，且 cookie 和 SessionId 配对成功，说明身份认证成功了</li></ol></li></ul></li></ul><p><img title="Session 认证原理图" alt="Session 认证原理图" src="'+o+'"></p><h2 id="_3-jwt-认证机制" tabindex="-1"><a class="header-anchor" href="#_3-jwt-认证机制"><span>3. JWT 认证机制</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>JWT（即 JSON Web Token）是目前最流行的 <strong>跨域认证解决方案</strong>。</p></div><ul><li><p>Session 认证机制 的局限性</p><ul><li>Session 认证机制需要配合 Cookie 才能实现。</li><li>由于 Cookie 默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域 Session 认证。</li></ul></li><li><p>认证机制选型</p><ul><li>当前端请求后端接口 <strong>不存在跨域问题</strong> 的时候，推荐使用 Session 身份认证机制。</li><li>当前端需要 <strong>跨域请求</strong> 后端接口的时候，推荐使用 JWT 认证机制。</li></ul></li></ul><h3 id="_1-jwt-认证原理" tabindex="-1"><a class="header-anchor" href="#_1-jwt-认证原理"><span>1. JWT 认证原理</span></a></h3><div class="custom-container tip"><p class="custom-container-title">原理</p><p>用户的信息通过 Token 字符串的形式，保存在客户端浏览器中。服务器通过还原 Token 字符串的形式来认证用户的身份。</p></div><ul><li>具体实现步骤： <ul><li><ol><li>浏览器使用 帐号、密码 登录</li></ol></li><li><ol start="2"><li>服务器确认帐号密码后，将 <strong>用户信息对象</strong> 加密成 Token 字符串</li></ol></li><li><ol start="3"><li>返回 加密后的 Token 字符串给客户端存储 <strong>（用户信息存在客户端）</strong></li></ol></li><li><ol start="4"><li>后续客户端发送请求都会携带这个 请求头 Token 字符串</li></ol></li><li><ol start="5"><li>服务器就会拿到 这个 Token 字符串 进行解密，还原成 用户信息对象</li></ol></li><li><ol start="6"><li>解密验证成功后，才返回对应的响应内容</li></ol></li></ul></li></ul><img src="'+e+'" title="JWT 认证原理图" alt="JWT 认证原理图"><h3 id="_2-jwt-的-3-个组成部分" tabindex="-1"><a class="header-anchor" href="#_2-jwt-的-3-个组成部分"><span>2. JWT 的 3 个组成部分</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li>JWT 一般由 Header（头部）、Payload（有效荷载）、Signature（签名）组成</li><li>具体组成格式：Header.Payload.Signature <ul><li>例如： xxxxx.yyyyyy.zzzzzz</li></ul></li></ul></div><ul><li>Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。</li><li>Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性。</li></ul><h2 id="_4-面试题" tabindex="-1"><a class="header-anchor" href="#_4-面试题"><span>4. 面试题</span></a></h2><h4 id="_1-现在要新开发一个系统-需要认证方案-给你来选型-你会怎么选" tabindex="-1"><a class="header-anchor" href="#_1-现在要新开发一个系统-需要认证方案-给你来选型-你会怎么选"><span>1. 现在要新开发一个系统，需要认证方案，给你来选型，你会怎么选？</span></a></h4><ul><li>答：我选用 JWT 认证方式，这是目前主流的身份认证方案。因为目前为了提升开发效率，一般采用前后端分离开发模式，所以难免会有跨域请求问题。然而 Session 认证机制中， Cookie 默认不支持跨域访问，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域 Session 认证，比较麻烦，而 JWT 认证机制就不存在这个问题。</li></ul><h4 id="_2-既然说到了跨域-那你说下怎么解决跨域问题" tabindex="-1"><a class="header-anchor" href="#_2-既然说到了跨域-那你说下怎么解决跨域问题"><span>2. 既然说到了跨域，那你说下怎么解决跨域问题？</span></a></h4><ul><li><p>答：解决跨域问题方式很多。项目中常用的有 2 种，通常使用 proxy 代理解决</p><ul><li><ol><li>服务端开启 <strong>跨域资源共享 CORS</strong></li></ol></li><li><ol start="2"><li><strong>proxy 代理解决</strong>：原理是只有浏览器端有跨域问题，服务端不存在跨域问题。</li></ol></li></ul></li></ul><img src="'+n+'" alt="proxy 代理解决跨域问题示意图" title="proxy 代理解决跨域问题示意图" width="740">',24),c=[r];function p(d,u){return i(),t("div",null,c)}const g=l(a,[["render",p],["__file","authentication.html.vue"]]),_=JSON.parse('{"path":"/frontend/source/article/authentication.html","title":"Web 网站身份认证","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 什么是 身份认证？","slug":"_1-什么是-身份认证","link":"#_1-什么是-身份认证","children":[]},{"level":2,"title":"2. Session 认证机制","slug":"_2-session-认证机制","link":"#_2-session-认证机制","children":[]},{"level":2,"title":"3. JWT 认证机制","slug":"_3-jwt-认证机制","link":"#_3-jwt-认证机制","children":[{"level":3,"title":"1. JWT 认证原理","slug":"_1-jwt-认证原理","link":"#_1-jwt-认证原理","children":[]},{"level":3,"title":"2. JWT 的 3 个组成部分","slug":"_2-jwt-的-3-个组成部分","link":"#_2-jwt-的-3-个组成部分","children":[]}]},{"level":2,"title":"4. 面试题","slug":"_4-面试题","link":"#_4-面试题","children":[]}],"git":{"updatedTime":1681876227000,"contributors":[{"name":"唐干宵","email":"1587900660@qq.com","commits":1}]},"filePathRelative":"frontend/source/article/authentication.md"}');export{g as comp,_ as data};
