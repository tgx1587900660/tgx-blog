import{_ as e,o as n,c as i,e as s}from"./app.69e92f7f.js";const a={},l=s(`<h1 id="git-\u547D\u4EE4\u6536\u96C6" tabindex="-1"><a class="header-anchor" href="#git-\u547D\u4EE4\u6536\u96C6" aria-hidden="true">#</a> Git \u547D\u4EE4\u6536\u96C6</h1><div class="custom-container tip"><p class="custom-container-title">\u8D77\u56E0</p><p>\u5DE5\u4F5C\u4E2D<code>gitlab</code>\u7684\u8D26\u53F7\u548C<code>gitee</code>\u7684\u8D26\u53F7\u4E0D\u4E00\u6837\uFF0C\u8FD9\u5BFC\u81F4\u6211\u5728\u7801\u4E91\u4E0A\u63D0\u4EA4\u4EE3\u7801\u65F6\u4E0D\u88AB\u7EDF\u8BA1\u5230\u9762\u677F\u4E2D\uFF0C \u6BCF\u6B21\u65B0\u5F00\u4E00\u4E2A\u9879\u76EE\u5C31\u5FD8\u8BB0\u8BBE\u7F6E\u90AE\u7BB1\u7684<code>Git\u6307\u4EE4</code>\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u6536\u96C6\u4E86\u4E00\u4E9B Git \u6307\u4EE4</p></div><h2 id="_1-\u8BBE\u7F6E\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#_1-\u8BBE\u7F6E\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> 1. \u8BBE\u7F6E\u7528\u6237\u540D\u548C\u90AE\u7BB1</h2><blockquote><p>\u8FD9\u91CC \u5047\u8BBE\u6211\u82F1\u6587\u540D\u662F telectron, \u90AE\u7BB1\u662F shuaibi@qq.com</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- 1. \u5168\u5C40\u8BBE\u7F6E-\u8BED\u6CD5 --&gt;</span>
git config --global user.name \u7528\u6237\u540D
git config --global user.email \u90AE\u7BB1\u5730\u5740
<span class="token comment">&lt;!-- \u6848\u4F8B\uFF1A\u5C06\u4F1A\u4F5C\u7528\u4E8E\u672C\u5730\u7535\u8111\u4E0A\u6240\u6709\u9879\u76EE --&gt;</span>
git config --global user.name telectron
git config --global user.email shuaibi@qq.com


<span class="token comment">&lt;!-- 2. \u5C40\u90E8\u8BBE\u7F6E-\u8BED\u6CD5 --&gt;</span>
git config user.name \u7528\u6237\u540D
git config user.email \u90AE\u7BB1\u5730\u5740
<span class="token comment">&lt;!-- \u6848\u4F8B\uFF1A\u5C06\u4F1A\u4F5C\u7528\u4E8E\u5F53\u524D\u6240\u5728\u9879\u76EE --&gt;</span>
git config user.name telectron
git config user.email shuaibi@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u67E5\u770B\u5F53\u524D\u9879\u76EE\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u5F53\u524D\u9879\u76EE\u7684\u914D\u7F6E" aria-hidden="true">#</a> 2. \u67E5\u770B\u5F53\u524D\u9879\u76EE\u7684\u914D\u7F6E</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>git config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u6062\u590D\u5230\u67D0\u6B21-commit-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_3-\u6062\u590D\u5230\u67D0\u6B21-commit-\u7248\u672C" aria-hidden="true">#</a> 3. \u6062\u590D\u5230\u67D0\u6B21 commit \u7248\u672C</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u8BED\u6CD5 --&gt;</span>
git reset --hard [commitID]

<span class="token comment">&lt;!--
\u7248\u672C\u5728\u672C\u5730\u56DE\u9000\u4E4B\u540E\uFF0C\u672C\u5730\u4ED3\u5E93\u7684\u4EE3\u7801\u5C06\u4F1A\u843D\u540E\u4E8E\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u6B64\u65F6git\u662F\u4E0D\u5141\u8BB8\u63D0\u4EA4\u7684\uFF0C
\u6240\u4EE5\u4E00\u822C\u662F\u9700\u8981\u4F7F\u7528 git push -f \u5F3A\u884C\u63A8\u9001\uFF0C\u8986\u76D6\u8FDC\u7A0B\u4EE3\u7801
\u5176\u4E2D commitID \u53F7\u5F62\u5982 44tte48c59eb8093686ceb517a37ea065a38a676, \u7F29\u5199\u4E3A 44tte48c
--&gt;</span>
git reset --hard 44tte48c
git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_4-\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> 4. \u5220\u9664\u5206\u652F</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u8BED\u6CD5 --&gt;</span>
git branch -d \u5206\u652F\u540D
git branch -D \u5206\u652F\u540D (\u5F3A\u5236\u5220\u9664)


<span class="token comment">&lt;!-- \u6848\u4F8B\uFF1A\u5206\u652F\u540D\u4E3A telectron_dev, \u6211\u8981\u5220\u4E86\u5B83 --&gt;</span>
git branch -d telectron_dev
git branch -D telectron_dev (\u5F3A\u5236\u5220\u9664\uFF0C\u901A\u5E38\u662F\u6709\u4E9B\u9700\u6C42\u5199\u5B8C\u4E86\uFF0C\u53C8\u88AB\u5E9F\u5F03\u65F6\u4F7F\u7528)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u52A0\u5165\u3001\u53D6\u51FA\u7F13\u5B58\u533A" tabindex="-1"><a class="header-anchor" href="#_5-\u52A0\u5165\u3001\u53D6\u51FA\u7F13\u5B58\u533A" aria-hidden="true">#</a> 5. \u52A0\u5165\u3001\u53D6\u51FA\u7F13\u5B58\u533A</h2><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u573A\u666F</p><p>\u4EA7\u54C1\u8BA9\u6211\u6539\u4E2A\u65B0\u7248\u672C\u7684\u5C0F\u9700\u6C42\uFF0C\u6211\u6539\u5230\u4E00\u534A\uFF0C\u9884\u4F30\u8FD8\u6709 3 \u5C0F\u65F6\u624D\u80FD\u6539\u5B8C\uFF0C \u7136\u800C\u6B64\u65F6\u6D4B\u8BD5\u544A\u8BC9\u6211\uFF0C\u7EBF\u4E0A\u7A33\u5B9A\u7248\u7684 APP \u6709\u4E2A\u4E25\u91CD\u7684 bug \u8981\u7ACB\u9A6C\u5904\u7406\u3002</p><p>\u90A3\u6211\u5C31\u9700\u8981<code>git stash</code>\u526A\u5207\u4E86\u4E4B\u524D\u7684\u5F00\u53D1\u5230\u4E00\u534A\u7684\u5C0F\u9700\u6C42\uFF0C\u5207\u4E2A\u65B0\u5206\u652F\u51FA\u53BB\u6539 bug\uFF0C</p><p>\u6539\u5B8C\u4E4B\u540E\u518D\u5207\u56DE\u6765<code>git stash pop</code>\u7C98\u8D34\u4E4B\u524D\u7684\u5C0F\u9700\u6C42\uFF0C\u7EE7\u7EED\u5F00\u53D1</p></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u76F8\u5F53\u4E8E \u526A\u5207 \u672C\u6B21\u4FEE\u6539\u5185\u5BB9 --&gt;</span>
git stash

<span class="token comment">&lt;!-- \u76F8\u5F53\u4E8E \u7C98\u8D34 \u90A3\u6B21\u4FEE\u6539\u5185\u5BB9 --&gt;</span>
git stash pop

<span class="token comment">&lt;!-- \u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u662F\u5426\u6709\u6682\u5B58\u4FEE\u6539 --&gt;</span>
git stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u62C9\u53D6\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_6-\u62C9\u53D6\u4EE3\u7801" aria-hidden="true">#</a> 6. \u62C9\u53D6\u4EE3\u7801</h2><blockquote><p>\u521D\u5165\u516C\u53F8\u6216\u5728 github/gitee \u7B2C\u4E00\u6B21\u83B7\u53D6\u9879\u76EE\u4EE3\u7801\u65F6\u4F7F\u7528</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u8BED\u6CD5 --&gt;</span>
git clone \u8FDC\u7A0B\u5730\u5740


<span class="token comment">&lt;!-- \u6848\u4F8B --&gt;</span>
<span class="token comment">&lt;!-- \u6211\u73B0\u5728\u8981\u62C9\u8FD9\u4E2A\u4ED3\u5E93\u7684\u4EE3\u7801 https://gitee.com/tgx-1587900660/tgx_vue_vision --&gt;</span>
git clone https://gitee.com/tgx-1587900660/tgx_vue_vision
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u7ED9\u8FDC\u7A0B\u5730\u5740\u8D77\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#_7-\u7ED9\u8FDC\u7A0B\u5730\u5740\u8D77\u522B\u540D" aria-hidden="true">#</a> 7. \u7ED9\u8FDC\u7A0B\u5730\u5740\u8D77\u522B\u540D</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u8BED\u6CD5 --&gt;</span>
git remote add origin \u8FDC\u7A0B\u5730\u5740


<span class="token comment">&lt;!-- \u6848\u4F8B --&gt;</span>
<span class="token comment">&lt;!-- \u6211\u73B0\u5728\u8981\u7ED9\u8FD9\u4E2A\u4ED3\u5E93\u8D77\u522B\u540D https://gitee.com/tgx-1587900660/tgx_vue_vision --&gt;</span>
git remote add origin https://gitee.com/tgx-1587900660/tgx_vue_vision

<span class="token comment">&lt;!-- \u67E5\u770B\u522B\u540D\u5217\u8868 --&gt;</span>
git remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u67E5\u770B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_8-\u67E5\u770B\u5206\u652F" aria-hidden="true">#</a> 8. \u67E5\u770B\u5206\u652F</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u67E5\u770B\u6240\u6709\u5206\u652F(\u5305\u62EC\u8FDC\u7A0B\u5206\u652F) --&gt;</span>
git branch -a

<span class="token comment">&lt;!-- \u67E5\u770B\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u5173\u7CFB --&gt;</span>
git branch -vv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-\u540C\u6B65\u8FDC\u7A0B\u5206\u652F\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_9-\u540C\u6B65\u8FDC\u7A0B\u5206\u652F\u5185\u5BB9" aria-hidden="true">#</a> 9. \u540C\u6B65\u8FDC\u7A0B\u5206\u652F\u5185\u5BB9</h2><div class="custom-container tip"><p class="custom-container-title">\u573A\u666F</p><p>\u6709\u65F6\u5019\u5206\u652F\u662F\u5728\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u9F20\u6807\u70B9\u51FB\u521B\u5EFA\u7684\uFF0C\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u7528\u8FD9\u4E2A\u547D\u4EE4\u5728\u672C\u5730\u83B7\u53D6\u6700\u65B0\u5206\u652F\uFF0C \u7136\u540E\u76F4\u63A5 <code>git checkout \u5206\u652F\u540D</code> \u5207\u8FC7\u53BB\uFF0C\u4E00\u822C\u4FEE\u590D\u65E7\u7248\u672C\u7684 bug \u4F1A\u8FD9\u4E48\u5E72</p></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--
\u6211\u73B0\u5728\u5728\u8FDC\u7A0B\u4ED3\u5E93\u624B\u52A8\u521B\u4E86\u4E00\u4E2A\u5206\u652F dev_tgx,
\u6211\u5148\u7528 git fetch \u53D6\u8FC7\u6765\uFF0C\u518D\u7528 git checkout \u76F4\u63A5\u5207\u8FC7\u53BB
--&gt;</span>
git fetch
git checkout dev_tgx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-\u53EA\u63D0\u53D6\u67D0\u4E00\u6B21-commit-\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_10-\u53EA\u63D0\u53D6\u67D0\u4E00\u6B21-commit-\u5185\u5BB9" aria-hidden="true">#</a> 10. \u53EA\u63D0\u53D6\u67D0\u4E00\u6B21 commit \u5185\u5BB9</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u8BED\u6CD5 --&gt;</span>
git cherry-pick [commitID]

<span class="token comment">&lt;!--
\u6848\u4F8B\uFF1A\u82E5\u73B0\u5728\u6211\u6709\u4E24\u4E2A\u9700\u6C42\uFF0C\u7B2C\u4E00\u4E2A\u9700\u6C42\u5728 tgx_dev1 \u5206\u652F\u5F00\u53D1\uFF0C\u7B2C\u4E8C\u4E2A\u9700\u6C42\u5728 tgx_dev2 \u5206\u652F\u5F00\u53D1\uFF0C
\u5F53 \u6211\u5728 tgx_dev1 \u5206\u652F\uFF0C\u6539\u4E86A\u6587\u4EF6\u7684\u67D0\u4E00\u4E9B\u4EE3\u7801\u65F6\uFF0C\u5E76\u63D0\u4EA4\u4E86\u4E00\u4E2A commitId \u4E3A 921dc370\uFF0C
\u6211\u60F3\u628A\u8FD9\u4E9B\u6539\u52A8\u70B9\uFF0C\u5E26\u5230\u5206\u652F tgx_dev2 \u4E2D\u53BB\uFF0C\u5219\u5728\u5206\u652F tgx_dev2 \u4E2D\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801\uFF0C
\u8FD9\u6837\u5C31\u53EA\u4F1A \u628AA\u6587\u4EF6\u7684\u6539\u52A8\u70B9\u632A\u5230\u5206\u652F tgx_dev2 \u4E2D\u53BB
--&gt;</span>
git cherry-pick 921dc370
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-\u9AD8\u9891\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_11-\u9AD8\u9891\u547D\u4EE4" aria-hidden="true">#</a> 11. \u9AD8\u9891\u547D\u4EE4</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u65B0\u5EFA\u4E00\u4E2A telectron_dev \u5206\u652F --&gt;</span>
git checkout -b telectron_dev


<span class="token comment">&lt;!-- \u9996\u6B21\u63A8\u9001\u8FD9\u4E2A\u5206\u652F\uFF08\u7EBF\u4E0A\u6CA1\u6709 telectron_dev \u5206\u652F\uFF09 --&gt;</span>
git push -u origin telectron_dev
<span class="token comment">&lt;!-- \u7EBF\u4E0A\u6709 telectron_dev \u5206\u652F\u540E\u63A8\u9001 --&gt;</span>
git push


<span class="token comment">&lt;!-- \u62C9\u53D6 master \u5206\u652F\u4EE3\u7801\uFF0C\u5E76\u4E14\u5408\u5165\u5F53\u524D\u5206\u652F --&gt;</span>
git pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),d=[l];function c(t,r){return n(),i("div",null,d)}var v=e(a,[["render",c],["__file","git-command.html.vue"]]);export{v as default};
