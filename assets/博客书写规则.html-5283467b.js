import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as l}from"./app-28e2c6cf.js";const a={},d=l(`<h1 id="博客书写规则" tabindex="-1"><a class="header-anchor" href="#博客书写规则" aria-hidden="true">#</a> 博客书写规则</h1><h2 id="规则一-标题表示" tabindex="-1"><a class="header-anchor" href="#规则一-标题表示" aria-hidden="true">#</a> 规则一 标题表示</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 一级标题
## 二级标题
### 三级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">四级标题用此颜色表示</b><br><b style="color:#6E8B74;">五级标题用此颜色表示</b><br><b style="color:#5CB3CC;">六级标题用此颜色表示</b><br><b style="color:#F8BFB5;">七级标题用此颜色表示</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;b style=&quot;color:#3e547d&quot;&gt;四级标题用此颜色表示&lt;/b&gt;
&lt;b style=&quot;color:#6E8B74&quot;&gt;五级标题用此颜色表示&lt;/b&gt;
&lt;b style=&quot;color:#5CB3CC&quot;&gt;六级标题用此颜色表示&lt;/b&gt;
&lt;b style=&quot;color:#F8BFB5&quot;&gt;七级标题用此颜色表示&lt;/b&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为Vuepress-theme-hope渲染Markdown规则规定一级标题用于做笔记总标题且只能用一次。并且也只能渲染Markdown中的前三级标题，因此用以不同的颜色表示四到七级标题。<br> 二级标题之间用一行隔开，二级标题以下不用隔开。</p><h2 id="规则二-不同提示的表示" tabindex="-1"><a class="header-anchor" href="#规则二-不同提示的表示" aria-hidden="true">#</a> 规则二 不同提示的表示</h2><div class="hint-container tip"><p class="hint-container-title">小贴士</p><p><b style="color:#A6522C;">小贴士</b></p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: tip 小贴士

&lt;b style=&quot;color:#A6522C &quot;&gt;小贴士&lt;/b&gt;

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;">注意容器</b></p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: warning 注意

&lt;b style=&quot;color:#8f71e0&quot;&gt;注意容器&lt;/b&gt;

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">危险</p><p>危险容器</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: danger 危险

危险容器

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">信息</p><p>信息容器。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: info 信息

信息容器。
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注释</p><p>注释容器。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: note 注释

注释容器。
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary><b style="color:#bf3e73;">问：</b></summary><p><b style="color:#f19977;">答：</b></p></details><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: details &lt;b style=&quot;color:#bf3e73&quot;&gt;问：&lt;/b&gt;

&lt;b style=&quot;color:#f19977&quot;&gt;答：&lt;/b&gt;

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="规则三-tab切换" tabindex="-1"><a class="header-anchor" href="#规则三-tab切换" aria-hidden="true">#</a> 规则三 tab切换</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: code-tabs

@tab settings.xml

​\`\`\`xml
    &lt;mirrors&gt;
        &lt;!--此配置可实现非内网环境下，使用公网阿里云仓库--&gt;
        &lt;mirror&gt;
            &lt;id&gt;aliyunmaven&lt;/id&gt;
            &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
            &lt;name&gt;阿里云公共仓库&lt;/name&gt;
            &lt;url&gt;https://maven.aliyun.com/repository/public&lt;/url&gt;
        &lt;/mirror&gt;
    &lt;/mirrors&gt;
​\`\`\`

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="规则四-章节标题" tabindex="-1"><a class="header-anchor" href="#规则四-章节标题" aria-hidden="true">#</a> 规则四 章节标题</h2><p>如遇到按章节取标题</p><p>则章节和内容之间隔一个空格如下所示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一章 科学边界
第二章 台球
第三章 射手和农场主
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="规则五-标点符号" tabindex="-1"><a class="header-anchor" href="#规则五-标点符号" aria-hidden="true">#</a> 规则五 标点符号</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>逗号：中文逗号，而不是,
句号：中文句号。而不是.
顿号：中文、用来分割多个并列如图片、链接、文字、声音、视频
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="规则六" tabindex="-1"><a class="header-anchor" href="#规则六" aria-hidden="true">#</a> 规则六 [ ]</h2><p>用[ ]括起来的内容表示可以自定义</p>`,29),s=[d];function t(r,c){return i(),n("div",null,s)}const o=e(a,[["render",t],["__file","博客书写规则.html.vue"]]);export{o as default};
