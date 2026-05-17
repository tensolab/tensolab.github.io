import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as r,b as a,d as n,a as c,e as l}from"./app-a40c7acb.js";const o="/assets/图片1-a3922526.png",p={},d=a("h1",{id:"rabbitmq",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#rabbitmq","aria-hidden":"true"},"#"),n(" RabbitMQ")],-1),b=a("h2",{id:"简介",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),n(" 简介")],-1),m={href:"https://www.rabbitmq.com",target:"_blank",rel:"noopener noreferrer"},u=l('<p>RabbitMQ是一款<strong>基于AMQP、由Erlang语言开发</strong>的消息队列产品，2007年Rabbit技术公司发布了它的1.0版本。</p><h2 id="体系结构" tabindex="-1"><a class="header-anchor" href="#体系结构" aria-hidden="true">#</a> 体系结构</h2><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用docker下载RabbitMq</span>
<span class="token function">docker</span> pull rabbitmq:3.13-management

<span class="token comment"># 后台启动RabbitMQ容器</span>
<span class="token comment"># --name 给容器命名为rabbitmq</span>
<span class="token comment"># -p 映射端口号</span>
<span class="token comment"># -v 挂载插件目录到宿主机数据卷</span>
<span class="token comment"># -e 设置RabbitMQ默认用户名和密码</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> rabbitmq <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> rabbitmq-plugin:/plugins <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>guest <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
rabbitmq:3.13-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(k,h){const s=t("ExternalLinkIcon");return i(),r("div",null,[d,b,a("p",null,[n("官网地址："),a("a",m,[n("https://www.rabbitmq.com"),c(s)])]),u])}const g=e(p,[["render",v],["__file","RabbitMQ.html.vue"]]);export{g as default};
