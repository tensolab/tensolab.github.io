import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-d308bbfa.js";const t="/assets/Vue生命周期模型图-9dc9608a.png",p={},c=e('<h1 id="面试-vue" tabindex="-1"><a class="header-anchor" href="#面试-vue" aria-hidden="true">#</a> 面试-Vue</h1><h3 id="谈谈vue生命周期" tabindex="-1"><a class="header-anchor" href="#谈谈vue生命周期" aria-hidden="true">#</a> 谈谈Vue生命周期</h3><details class="hint-container details"><summary><b style="color:#bf3e73;">问：谈谈Vue生命周期</b></summary><p><b style="color:#f19977;">答：Vue的生命周期是指从Vue实例创建、挂载、更新、销毁到最终回收的完整过程中不同阶段所能调用的不同函数。</b></p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><h3 id="vue创建自定义指令" tabindex="-1"><a class="header-anchor" href="#vue创建自定义指令" aria-hidden="true">#</a> Vue创建自定义指令</h3><details class="hint-container details"><summary><b style="color:#bf3e73;">问：Vue创建自定义指令</b></summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;myDirective&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 只调用一次，指令第一次绑定	到元素时调用</span>
  <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化样式、事件监听等</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 2. 被绑定元素插入父节点时调用（保证父节点存在）</span>
  <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 操作 DOM 最常用</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 3. 所在组件更新时调用（可能多次触发）</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 值变化时更新</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 4. 组件 VNode 及其子 VNode 全部更新后调用</span>
  <span class="token function">componentUpdated</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件更新完成后</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 5. 只调用一次，指令与元素解绑时调用</span>
  <span class="token function">unbind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 清除定时器、移除事件监听</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="vue全局事件总线" tabindex="-1"><a class="header-anchor" href="#vue全局事件总线" aria-hidden="true">#</a> Vue全局事件总线</h3><details class="hint-container details"><summary><b style="color:#bf3e73;">问：Vue全局事件总线</b></summary><p><b style="color:#f19977;">答：全局事件总线就是一个空 Vue 实例，用来在任意组件间通信(父子、兄弟、跨级都可以)</b></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 定义全局事件总线（main.js）</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 发送事件（组件A）</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;sendMsg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 接收事件（组件B）</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;sendMsg&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 4. 组件销毁时解绑（避免内存泄漏）</span>
<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;sendMsg&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,7),o=[c];function i(l,u){return s(),a("div",null,o)}const k=n(p,[["render",i],["__file","面试-Vue.html.vue"]]);export{k as default};
