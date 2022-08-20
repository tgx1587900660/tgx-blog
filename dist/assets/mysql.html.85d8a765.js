import{_ as l,o as n,c,a as e,e as i,w as s,d as o,b as t,r}from"./app.b7934015.js";const d={},h=o('<h1 id="mysql-\u6570\u636E\u5E93-\u76F8\u5173\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#mysql-\u6570\u636E\u5E93-\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a> MySQL \u6570\u636E\u5E93 \u76F8\u5173\u77E5\u8BC6</h1><div class="custom-container tip"><p class="custom-container-title">\u680F\u76EE\u8BF4\u660E</p><p>\u672C\u680F\u76EE\u6536\u96C6\u4E86\u4E00\u4E9B MySQL \u6570\u636E\u5E93 \u7684\u76F8\u5173\u77E5\u8BC6\u3002</p><ul><li>\u53EF\u4EE5\u4F7F\u7528 <strong>\u56FE\u5F62\u5316\u8F6F\u4EF6</strong> \u70B9\u70B9\u70B9\u6765\u64CD\u4F5C\u6570\u636E\u5E93\u8868</li><li>\u4E5F\u53EF\u4EE5\u4F7F\u7528 <strong>SQL \u7F16\u7A0B\u8BED\u8A00</strong> \u4EE3\u7801\u5F62\u5F0F\u6765\u64CD\u4F5C\u6570\u636E\u5E93\u8868</li></ul></div><h2 id="_1-\u4F7F\u7528-\u56FE\u5F62\u5316\u8F6F\u4EF6-\u64CD\u4F5C\u6570\u636E\u5E93\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528-\u56FE\u5F62\u5316\u8F6F\u4EF6-\u64CD\u4F5C\u6570\u636E\u5E93\u76F8\u5173" aria-hidden="true">#</a> 1. \u4F7F\u7528 \u56FE\u5F62\u5316\u8F6F\u4EF6 \u64CD\u4F5C\u6570\u636E\u5E93\u76F8\u5173</h2><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u4F7F\u7528 \u56FE\u5F62\u5316\u8F6F\u4EF6 workbench \u521B\u5EFA\u8868\u65F6\uFF0C\u8981\u6CE8\u610F\u7684\u4E00\u4E9B\u5B57\u6BB5\u542B\u4E49</p></div><h3 id="_1-datetype-\u6570\u636E\u7C7B\u578B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-datetype-\u6570\u636E\u7C7B\u578B\u8BF4\u660E" aria-hidden="true">#</a> 1. dateType \u6570\u636E\u7C7B\u578B\u8BF4\u660E</h3><ul><li>\u2460 int \u6574\u6570</li><li>\u2461 varchar(len) \u5B57\u7B26\u4E32</li><li>\u2462 tinyint(1) \u5E03\u5C14\u503C</li></ul><h3 id="_2-\u5B57\u6BB5\u7684\u7279\u6B8A\u6807\u8BC6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-\u5B57\u6BB5\u7684\u7279\u6B8A\u6807\u8BC6\u8BF4\u660E" aria-hidden="true">#</a> 2. \u5B57\u6BB5\u7684\u7279\u6B8A\u6807\u8BC6\u8BF4\u660E</h3><ul><li>\u2460 PK\uFF08Primary Key\uFF09\u4E3B\u952E\u3001\u552F\u4E00\u6807\u8BC6</li><li>\u2461 NN\uFF08Not Null\uFF09\u503C\u4E0D\u5141\u8BB8\u4E3A\u7A7A</li><li>\u2462 UQ\uFF08Unique\uFF09\u503C\u552F\u4E00</li><li>\u2463 AI\uFF08Auto Increment\uFF09\u503C\u81EA\u52A8\u589E\u957F</li></ul><h2 id="_2-\u4F7F\u7528-sql-\u8BED\u8A00-\u64CD\u4F5C\u6570\u636E\u5E93\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-sql-\u8BED\u8A00-\u64CD\u4F5C\u6570\u636E\u5E93\u76F8\u5173" aria-hidden="true">#</a> 2. \u4F7F\u7528 SQL \u8BED\u8A00 \u64CD\u4F5C\u6570\u636E\u5E93\u76F8\u5173</h2>',9),_={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"\u8BF4\u660E",-1),p=e("li",null,"sql \u662F\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4E13\u95E8\u7528\u6765\u64CD\u4F5C\u6570\u636E\u5E93",-1),m=t("sql \u8BED\u6CD5\u76F8\u5173 "),f=t("\u70B9\u51FB\u8FD9\u91CC"),y=t("\u8981\u5728 node \u9879\u76EE\u4E2D\u4F7F\u7528 sql \u8BED\u53E5\u64CD\u4F5C MySQL \u6570\u636E\u5E93\uFF0C\u67E5\u770B "),q=t("\u8FD9\u7BC7\u6587\u7AE0"),x=t(" \u7684\u3010mysql \u4E2D\u95F4\u4EF6\u3011\u7AE0\u8282");function b(v,k){const a=r("tgx-link");return n(),c("div",null,[h,e("div",_,[u,e("ul",null,[p,e("li",null,[m,i(a,{href:"/backend/database/sql"},{default:s(()=>[f]),_:1})]),e("li",null,[y,i(a,{href:"/backend/packages/third-party-packages"},{default:s(()=>[q]),_:1}),x])])])])}var N=l(d,[["render",b],["__file","mysql.html.vue"]]);export{N as default};