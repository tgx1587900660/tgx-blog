import{_ as a,o as t,c as i,d as s}from"./app.c70e0e1a.js";var r="/tgx-blog/assets/browser-principle.7055e1ca.png",e="/tgx-blog/assets/browser-dom-bom.5f6fef38.png",o="/tgx-blog/assets/environment.57246034.png";const l={},c=s('<h1 id="\u6D4F\u89C8\u5668-\u76F8\u5173\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668-\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a> \u6D4F\u89C8\u5668 \u76F8\u5173\u77E5\u8BC6</h1><div class="custom-container tip"><p class="custom-container-title">\u680F\u76EE\u8BF4\u660E</p><p>\u672C\u680F\u76EE\u6536\u5F55\u4E86\u4E00\u4E9B \u6D4F\u89C8\u5668 \u7684\u76F8\u5173\u77E5\u8BC6</p></div><h2 id="_1-\u6D4F\u89C8\u5668\u4E3A\u4EC0\u4E48\u80FD\u8FD0\u884C-javascript" tabindex="-1"><a class="header-anchor" href="#_1-\u6D4F\u89C8\u5668\u4E3A\u4EC0\u4E48\u80FD\u8FD0\u884C-javascript" aria-hidden="true">#</a> 1. \u6D4F\u89C8\u5668\u4E3A\u4EC0\u4E48\u80FD\u8FD0\u884C JavaScript ?</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u6D4F\u89C8\u5668\u662F JS \u7684 <strong>\u5BBF\u4E3B\u73AF\u5883</strong> \u4E4B\u4E00\u3002\u6D4F\u89C8\u5668\u80FD\u8FD0\u884C JS \u4EE3\u7801\uFF0C\u662F\u56E0\u4E3A\u5B83\u5185\u7F6E\u4E86 <strong>JavaScript \u89E3\u6790\u5F15\u64CE</strong>\u3002</p></div><ul><li>js \u4EE3\u7801\u5728\u6D4F\u89C8\u5668\u88AB\u52A0\u8F7D\u4E4B\u540E\uFF0C\u672C\u8D28\u4E0A\u53EA\u662F\u4E00\u4E9B\u5B57\u7B26\u4E32\u3002\u6D4F\u89C8\u5668\u5229\u7528\u4E86 <strong>JavaScript \u89E3\u6790\u5F15\u64CE</strong> \u6765\u89E3\u6790\u8FD9\u4E9B\u5B57\u7B26\u4E32\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8FD0\u884C js \u4EE3\u7801\u7684\u529F\u80FD</li><li>\u6BCF\u4E2A\u6D4F\u89C8\u5668\u90FD\u6709\u81EA\u5DF1\u7684 JavaScript \u89E3\u6790\u5F15\u64CE \uFF0C\u76EE\u524D\uFF0C<strong>\u6027\u80FD\u6700\u597D\u7684\u89E3\u6790\u5F15\u64CE\u662F V8</strong></li></ul><p><img src="'+r+'" alt="\u6D4F\u89C8\u5668\u4E3A\u4EC0\u4E48\u80FD\u8FD0\u884C JavaScript\u793A\u610F\u56FE" title="\u6D4F\u89C8\u5668\u4E3A\u4EC0\u4E48\u80FD\u8FD0\u884C JavaScript\u793A\u610F\u56FE"></p><h2 id="_2-js-\u4E3A\u4EC0\u4E48\u80FD\u64CD\u4F5C-dom-\u548C-bom" tabindex="-1"><a class="header-anchor" href="#_2-js-\u4E3A\u4EC0\u4E48\u80FD\u64CD\u4F5C-dom-\u548C-bom" aria-hidden="true">#</a> 2. JS \u4E3A\u4EC0\u4E48\u80FD\u64CD\u4F5C DOM \u548C BOM ?</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u56E0\u4E3A\u6D4F\u89C8\u5668\u5185\u7F6E\u4E86\u4E00\u4E9B\u64CD\u4F5C DOM\u3001 BOM \u548C Ajax \u7684 api \u63A5\u53E3\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u53EF\u4EE5\u57FA\u4E8E\u8FD9\u4E9B api \u7F16\u5199\u4E00\u4E9B <strong>\u64CD\u4F5C DOM\u3001BOM\u3001Ajax \u7684 js \u4EE3\u7801</strong>\u3002\u6D4F\u89C8\u5668\u62FF\u5230\u8FD9\u4E9B\u4EE3\u7801\u540E\uFF0C\u5C31\u4EA4\u7ED9 js \u89E3\u6790\u5F15\u64CE\u5904\u7406\uFF0C\u4ECE\u800C\u5B9E\u73B0 js \u4EE3\u7801\u64CD\u4F5C DOM\uFF0CBOM \u548C Ajax \u7684\u529F\u80FD\u3002</p></div><p><img src="'+e+'" alt="JS \u4E3A\u4EC0\u4E48\u80FD\u64CD\u4F5C DOM \u548C BOM\u793A\u610F\u56FE" title="JS \u4E3A\u4EC0\u4E48\u80FD\u64CD\u4F5C DOM \u548C BOM\u793A\u610F\u56FE"></p><h2 id="_3-\u6D4F\u89C8\u5668\u4E2D\u7684-js-\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_3-\u6D4F\u89C8\u5668\u4E2D\u7684-js-\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> 3. \u6D4F\u89C8\u5668\u4E2D\u7684 JS \u8FD0\u884C\u73AF\u5883</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ul><li>\u8FD0\u884C\u73AF\u5883\uFF1A\u662F\u6307\u4EE3\u7801\u6B63\u5E38\u8FD0\u884C\u6240\u9700\u7684\u5FC5\u8981\u73AF\u5883</li><li>\u5C31\u50CF\u79CD\u5B50\u53D1\u82BD\u7684\u5FC5\u8981\u73AF\u5883\u662F\uFF1A\u9002\u5B9C\u7684\u6E29\u5EA6\u3001\u6C27\u6C14\u3001\u6C34\u4E00\u6837\uFF0Cjs \u4EE3\u7801\u8FD0\u884C\u4E5F\u9700\u8981\u7279\u5B9A\u7684\u73AF\u5883</li></ul></div><ul><li>\u5BF9\u4E8E Chrome \u6D4F\u89C8\u5668\u6765\u8BF4\uFF0Cjs \u4EE3\u7801\u8FD0\u884C\u7684\u4E24\u4E2A\u6761\u4EF6\uFF1A <ul><li>V8 \u89E3\u6790\u5F15\u64CE</li><li>\u5185\u7F6E API</li></ul></li></ul><img src="'+o+'" alt="JS \u8FD0\u884C\u73AF\u5883\u793A\u610F\u56FE" title="JS \u8FD0\u884C\u73AF\u5883\u793A\u610F\u56FE"><h2 id="_4-\u6D4F\u89C8\u5668\u7684\u8C03\u8BD5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-\u6D4F\u89C8\u5668\u7684\u8C03\u8BD5\u5DE5\u5177" aria-hidden="true">#</a> 4. \u6D4F\u89C8\u5668\u7684\u8C03\u8BD5\u5DE5\u5177</h2><div class="custom-container tip"><p class="custom-container-title">\u76EE\u5F55</p><ol><li>\u7AEF\u70B9\u8C03\u8BD5</li></ol></div><h3 id="_1-\u7AEF\u70B9\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_1-\u7AEF\u70B9\u8C03\u8BD5" aria-hidden="true">#</a> 1. \u7AEF\u70B9\u8C03\u8BD5</h3><ul><li>\u5355\u6B65\u8DF3\u8FC7 F10\uFF1A\u4F1A\u8BA9\u4EE3\u7801\u4ECE\u4E0A\u5F80\u4E0B\uFF0C\u9010\u884C\u6267\u884C\uFF0C<strong>\u9047\u5230\u51FD\u6570\u8C03\u7528\uFF0C\u4E5F\u76F4\u63A5\u8DF3\u5230\u4E0B\u4E00\u4E2A\u8BED\u53E5</strong></li><li>\u5355\u6B65\u8C03\u8BD5 F11\uFF1A\u4F1A\u8BA9\u4EE3\u7801\u4ECE\u4E0A\u5F80\u4E0B\uFF0C\u9010\u884C\u6267\u884C\uFF0C<strong>\u9047\u5230\u51FD\u6570\u8C03\u7528\uFF0C\u4F1A\u8FDB\u5165\u51FD\u6570\u4F53\u5185\u90E8</strong></li><li>\u5355\u6B65\u8DF3\u51FA shift + F11\uFF1A\u4F1A\u8DF3\u51FA\u5F53\u524D\u51FD\u6570\uFF08\u51FD\u6570\u6267\u884C\u5B8C\u6210\uFF09\uFF0C\u63A5\u7740\u6267\u884C\u51FD\u6570\u8C03\u7528\u4EE5\u540E\u7684\u4EE3\u7801</li></ul>',17),n=[c];function d(p,h){return t(),i("div",null,n)}var u=a(l,[["render",d],["__file","browser.html.vue"]]);export{u as default};
