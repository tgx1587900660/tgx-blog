import{_ as a,o as r,c,b as i,w as e,e as t,a as d,d as l,r as n}from"./app.e5f32f9f.js";const u={},h=t('<h1 id="\u7F51\u7AD9\u7684-\u8EAB\u4EFD\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7AD9\u7684-\u8EAB\u4EFD\u8BA4\u8BC1" aria-hidden="true">#</a> \u7F51\u7AD9\u7684 \u8EAB\u4EFD\u8BA4\u8BC1</h1><div class="custom-container tip"><p class="custom-container-title">\u680F\u76EE\u8BF4\u660E</p><p>\u672C\u680F\u76EE\u6536\u96C6\u4E86\u4E00\u4E9B\u6709\u5173 \u8EAB\u4EFD\u8BA4\u8BC1\uFF08Authentication\uFF09\u7684\u5185\u5BB9\u3002</p></div><h2 id="_1-\u4EC0\u4E48\u662F-\u8EAB\u4EFD\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F-\u8EAB\u4EFD\u8BA4\u8BC1" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F \u8EAB\u4EFD\u8BA4\u8BC1\uFF1F</h2><div class="custom-container tip"><p class="custom-container-title">\u6982\u8981</p><ul><li><strong>\u8EAB\u4EFD\u8BA4\u8BC1</strong> \u53C8\u79F0 \u201C<strong>\u8EAB\u4EFD\u9A8C\u8BC1</strong>\u201D\u3001\u201C<strong>\u9274\u6743</strong>\u201D\uFF0C\u662F\u6307 <strong>\u901A\u8FC7\u4E00\u5B9A\u7684\u624B\u6BB5\uFF0C\u5B8C\u6210\u5BF9\u7528\u6237\u8EAB\u4EFD\u7684\u786E\u8BA4</strong>\u3002</li><li>\u8EAB\u4EFD\u8BA4\u8BC1\u4E0D\u6B62\u4E00\u79CD\u65B9\u6848\uFF0C\u6839\u636E web \u5F00\u53D1\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u9009\u62E9\u4E0D\u540C\u8BA4\u8BC1\u65B9\u6848 <ul><li><strong>\u670D\u52A1\u7AEF\u6E32\u67D3</strong> \u63A8\u8350\u4F7F\u7528 <strong>Session \u8BA4\u8BC1\u673A\u5236</strong></li><li><strong>\u524D\u540E\u7AEF\u5206\u79BB</strong> \u63A8\u8350\u4F7F\u7528 <strong>JWT \u8BA4\u8BC1\u673A\u5236</strong></li></ul></li></ul></div><h2 id="_2-session-\u8BA4\u8BC1\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_2-session-\u8BA4\u8BC1\u673A\u5236" aria-hidden="true">#</a> 2. Session \u8BA4\u8BC1\u673A\u5236</h2><div class="custom-container tip"><p class="custom-container-title">\u524D\u7F6E\u6761\u4EF6</p><ul><li><p><strong>http \u534F\u8BAE\u65E0\u72B6\u6001\u6027</strong> \u6307\u7684\u662F\u5BA2\u6237\u7AEF\u7684\u6BCF\u6B21 HTTP \u8BF7\u6C42\u90FD\u662F\u72EC\u7ACB\u7684\uFF0C\u8FDE\u7EED\u591A\u4E2A\u8BF7\u6C42\u4E4B\u95F4\u6CA1\u6709\u76F4\u63A5\u7684\u5173\u7CFB\uFF0C\u670D\u52A1\u5668\u4E0D\u4F1A\u4E3B\u52A8\u4FDD\u7559\u6BCF\u6B21 HTTP \u8BF7\u6C42\u7684\u72B6\u6001\u3002</p></li><li><p><strong>Cookie</strong> \u662F\u5B58\u50A8\u5728\u7528\u6237\u6D4F\u89C8\u5668\u4E2D\u7684\u4E00\u6BB5 <strong>\u4E0D\u8D85\u8FC7 4 KB \u7684\u5B57\u7B26\u4E32</strong>\u3002\u5B83\u7531\u4E00\u4E2A\u540D\u79F0\uFF08Name\uFF09\u3001\u4E00\u4E2A\u503C\uFF08Value\uFF09\u548C\u5176\u5B83\u51E0\u4E2A\u7528\u4E8E\u63A7\u5236 Cookie \u6709\u6548\u671F\u3001\u5B89\u5168\u6027\u3001\u4F7F\u7528\u8303\u56F4\u7684\u53EF\u9009\u5C5E\u6027\u7EC4\u6210\u3002Cookie \u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A</p><ul><li>\u81EA\u52A8\u53D1\u9001</li><li>\u57DF\u540D\u72EC\u7ACB</li><li>\u8FC7\u671F\u65F6\u9650</li><li>4KB \u9650\u5236</li></ul></li></ul></div><ul><li>Session \u8BA4\u8BC1\u673A\u5236 \u7684\u5B9E\u8D28\u5C31\u662F Cookie + SessionId \u53CC\u5411\u8BA4\u8BC1 <ul><li><ol><li>\u7B2C\u4E00\u6B21\u767B\u5F55\u540E\uFF0C\u670D\u52A1\u7AEF\u9A8C\u8BC1 \u5E10\u53F7 \u548C \u5BC6\u7801 \u6210\u529F</li></ol></li><li><ol start="2"><li>\u4F1A\u7ED9\u5F53\u524D\u7528\u6237<strong>\u751F\u6210\u4E00\u4E2A SessionId \u5B58\u5728\u670D\u52A1\u7AEF</strong>\uFF0C<strong>\u540C\u65F6\u751F\u6210\u4E00\u4E32 cookie \u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF</strong></li></ol></li><li><ol start="3"><li>\u540C\u65F6\u751F\u6210\u7684 SessionId \u548C cookie \u6709\u7740\u5BF9\u5E94\u5173\u7CFB\uFF0C\u4E0D\u540C\u7528\u6237\u6709\u7740\u4E0D\u540C\u7684 SessionId \u548C cookie</li></ol></li><li><ol start="4"><li>\u968F\u540E\u5BA2\u6237\u7AEF\u5B58\u50A8 cookie <strong>\uFF08 Cookie \u4E0D\u80FD\u542B\u7528\u6237\u4FE1\u606F \uFF09</strong></li></ol></li><li><ol start="5"><li>\u540E\u7EED\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u53D1\u9001\u8BF7\u6C42\u90FD\u4F1A\u643A\u5E26\u81EA\u5DF1\u7684 cookie</li></ol></li><li><ol start="6"><li>\u5F53\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u9996\u5148\u62FF\u7740 cookie \u4FE1\u606F\u627E\u5230\u5BF9\u5E94\u7684 SessionId\uFF0C\u518D\u8FD4\u56DE\u5BF9\u5E94\u7684\u7528\u6237\u4FE1\u606F</li></ol></li><li><ol start="7"><li>\u53EA\u8981\u5904\u4E8E\u767B\u5F55\u72B6\u6001\uFF0C\u4E14 cookie \u548C SessionId \u914D\u5BF9\u6210\u529F\uFF0C\u8BF4\u660E\u8EAB\u4EFD\u8BA4\u8BC1\u6210\u529F\u4E86</li></ol></li></ul></li></ul>',7),p=d("p",null,"\u8981\u5728 express \u9879\u76EE\u4E2D\u4F7F\u7528 Session \u8BA4\u8BC1\u673A\u5236\uFF0C\u8BF7\u67E5\u770B",-1),g=l("\u8FD9\u7BC7\u6587\u7AE0"),_=t(' \u7684 \u3010express-session \u4E2D\u95F4\u4EF6\u3011 \u7528\u6CD5 <h2 id="_3-jwt-\u8BA4\u8BC1\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_3-jwt-\u8BA4\u8BC1\u673A\u5236" aria-hidden="true">#</a> 3. JWT \u8BA4\u8BC1\u673A\u5236</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>JWT\uFF08\u5373 JSON Web Token\uFF09\u662F\u76EE\u524D\u6700\u6D41\u884C\u7684 <strong>\u8DE8\u57DF\u8BA4\u8BC1\u89E3\u51B3\u65B9\u6848</strong>\u3002</p></div><ul><li><p>Session \u8BA4\u8BC1\u673A\u5236 \u7684\u5C40\u9650\u6027</p><ul><li>Session \u8BA4\u8BC1\u673A\u5236\u9700\u8981\u914D\u5408 Cookie \u624D\u80FD\u5B9E\u73B0\u3002</li><li>\u7531\u4E8E Cookie \u9ED8\u8BA4\u4E0D\u652F\u6301\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u6240\u4EE5\uFF0C\u5F53\u6D89\u53CA\u5230\u524D\u7AEF\u8DE8\u57DF\u8BF7\u6C42\u540E\u7AEF\u63A5\u53E3\u7684\u65F6\u5019\uFF0C\u9700\u8981\u505A\u5F88\u591A\u989D\u5916\u7684\u914D\u7F6E\uFF0C\u624D\u80FD\u5B9E\u73B0\u8DE8\u57DF Session \u8BA4\u8BC1\u3002</li></ul></li><li><p>\u8BA4\u8BC1\u673A\u5236\u9009\u578B</p><ul><li>\u5F53\u524D\u7AEF\u8BF7\u6C42\u540E\u7AEF\u63A5\u53E3 <strong>\u4E0D\u5B58\u5728\u8DE8\u57DF\u95EE\u9898</strong> \u7684\u65F6\u5019\uFF0C\u63A8\u8350\u4F7F\u7528 Session \u8EAB\u4EFD\u8BA4\u8BC1\u673A\u5236\u3002</li><li>\u5F53\u524D\u7AEF\u9700\u8981 <strong>\u8DE8\u57DF\u8BF7\u6C42</strong> \u540E\u7AEF\u63A5\u53E3\u7684\u65F6\u5019\uFF0C\u63A8\u8350\u4F7F\u7528 JWT \u8BA4\u8BC1\u673A\u5236\u3002</li></ul></li></ul><h3 id="_1-jwt-\u8BA4\u8BC1\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-jwt-\u8BA4\u8BC1\u539F\u7406" aria-hidden="true">#</a> 1. JWT \u8BA4\u8BC1\u539F\u7406</h3><div class="custom-container tip"><p class="custom-container-title">\u539F\u7406</p><p>\u7528\u6237\u7684\u4FE1\u606F\u901A\u8FC7 Token \u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\uFF0C\u4FDD\u5B58\u5728\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u4E2D\u3002\u670D\u52A1\u5668\u901A\u8FC7\u8FD8\u539F Token \u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u6765\u8BA4\u8BC1\u7528\u6237\u7684\u8EAB\u4EFD\u3002</p></div><ul><li>\u5177\u4F53\u5B9E\u73B0\u6B65\u9AA4\uFF1A <ul><li><ol><li>\u6D4F\u89C8\u5668\u4F7F\u7528 \u5E10\u53F7\u3001\u5BC6\u7801 \u767B\u5F55</li></ol></li><li><ol start="2"><li>\u670D\u52A1\u5668\u786E\u8BA4\u5E10\u53F7\u5BC6\u7801\u540E\uFF0C\u5C06 <strong>\u7528\u6237\u4FE1\u606F\u5BF9\u8C61</strong> \u52A0\u5BC6\u6210 Token \u5B57\u7B26\u4E32</li></ol></li><li><ol start="3"><li>\u8FD4\u56DE \u52A0\u5BC6\u540E\u7684 Token \u5B57\u7B26\u4E32\u7ED9\u5BA2\u6237\u7AEF\u5B58\u50A8 <strong>\uFF08\u7528\u6237\u4FE1\u606F\u5B58\u5728\u5BA2\u6237\u7AEF\uFF09</strong></li></ol></li><li><ol start="4"><li>\u540E\u7EED\u5BA2\u6237\u7AEF\u53D1\u9001\u8BF7\u6C42\u90FD\u4F1A\u643A\u5E26\u8FD9\u4E2A \u8BF7\u6C42\u5934 Token \u5B57\u7B26\u4E32</li></ol></li><li><ol start="5"><li>\u670D\u52A1\u5668\u5C31\u4F1A\u62FF\u5230 \u8FD9\u4E2A Token \u5B57\u7B26\u4E32 \u8FDB\u884C\u89E3\u5BC6\uFF0C\u8FD8\u539F\u6210 \u7528\u6237\u4FE1\u606F\u5BF9\u8C61</li></ol></li><li><ol start="6"><li>\u89E3\u5BC6\u9A8C\u8BC1\u6210\u529F\u540E\uFF0C\u624D\u8FD4\u56DE\u5BF9\u5E94\u7684\u54CD\u5E94\u5185\u5BB9</li></ol></li></ul></li></ul>',7),k=t('<h3 id="_2-jwt-\u7684-3-\u4E2A\u7EC4\u6210\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_2-jwt-\u7684-3-\u4E2A\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a> 2. JWT \u7684 3 \u4E2A\u7EC4\u6210\u90E8\u5206</h3><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>JWT \u4E00\u822C\u7531 Header\uFF08\u5934\u90E8\uFF09\u3001Payload\uFF08\u6709\u6548\u8377\u8F7D\uFF09\u3001Signature\uFF08\u7B7E\u540D\uFF09\u7EC4\u6210</li><li>\u5177\u4F53\u7EC4\u6210\u683C\u5F0F\uFF1AHeader.Payload.Signature <ul><li>\u4F8B\u5982\uFF1A xxxxx.yyyyyy.zzzzzz</li></ul></li></ul></div><ul><li>Payload \u90E8\u5206\u624D\u662F\u771F\u6B63\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u5B83\u662F\u7528\u6237\u4FE1\u606F\u7ECF\u8FC7\u52A0\u5BC6\u4E4B\u540E\u751F\u6210\u7684\u5B57\u7B26\u4E32\u3002</li><li>Header \u548C Signature \u662F\u5B89\u5168\u6027\u76F8\u5173\u7684\u90E8\u5206\uFF0C\u53EA\u662F\u4E3A\u4E86\u4FDD\u8BC1 Token \u7684\u5B89\u5168\u6027\u3002</li></ul><p>\u8981\u5728 express \u9879\u76EE\u4E2D\u4F7F\u7528 JWT \u8BA4\u8BC1\u673A\u5236\uFF0C\u8BF7\u67E5\u770B</p>',4),m=l("\u8FD9\u7BC7\u6587\u7AE0"),x=l(" \u7684 \u3010jsonwebtoken \u548C express-jwt\u3011 \u7528\u6CD5 ");function T(S,f){const o=n("tgx-img"),s=n("tgx-link");return r(),c("div",null,[h,i(o,{title:"Session \u8BA4\u8BC1\u539F\u7406\u56FE",alt:"Session \u8BA4\u8BC1\u539F\u7406\u56FE",src:"/browser/authentication/session-auth.png"}),p,i(s,{href:"/backend/packages/third-party-packages"},{default:e(()=>[g]),_:1}),_,i(o,{title:"JWT \u8BA4\u8BC1\u539F\u7406\u56FE",alt:"JWT \u8BA4\u8BC1\u539F\u7406\u56FE",src:"/browser/authentication/token-auth.png"}),k,i(s,{href:"/backend/packages/third-party-packages"},{default:e(()=>[m]),_:1}),x])}var b=a(u,[["render",T],["__file","authentication.html.vue"]]);export{b as default};
