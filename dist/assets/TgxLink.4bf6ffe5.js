import{_ as r,o as s,c as a,v as l,b as o}from"./app.1699c2e7.js";const c={name:"tgx-link",props:{href:{type:String,default:"https://gitee.com/tgx-1587900660"}},computed:{localHref(){return this.href.includes("http://")||this.href.includes("https://")?this.href:"/tgx-blog"+this.href}}},n=["title","href"],f=o("\u94FE\u63A5\u540D\u79F0");function i(t,h,_,d,p,e){return s(),a("a",{class:"tgx-link",target:"_blank",title:e.localHref,href:e.localHref},[l(t.$slots,"default",{},()=>[f])],8,n)}var g=r(c,[["render",i],["__file","TgxLink.vue"]]);export{g as default};