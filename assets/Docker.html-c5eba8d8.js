import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as u,d as n,e as s,a as e,w as c,b as l}from"./app-28e2c6cf.js";const m={},k=l('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>一切在云端，万物皆容器。一次镜像，处处运行</strong>。Docker是一个开源的应用容器引擎，基于Go语言并遵从 Apache2.0协议开源。Docker可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的Linux机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口(类似 iPhone的app),更重要的是容器性能开销极低。<strong>可以这么说: Docker的出现实现了从搬家到搬楼。</strong></p><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2>',4),v={href:"http://www.docker.com",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"下载教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载教程","aria-hidden":"true"},"#"),s(" 下载教程")],-1),h={href:"https://www.bilibili.com/video/BV1gr4y1U7CY/?p=7&spm_id_from=pageDriver&vd_source=549482551e5288f70f4ac8e71f20781e",target:"_blank",rel:"noopener noreferrer"},g=l('<h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><p>Docker是一个用于开发，交付和运行应用程序的开放平台。Docker使您能够将应用程序与基础架构分开，从而可以快速交付软件。借助Docker，您可以与管理应用程序相同的方式来管理基础架构。通过利用Docker的方法来快速交付，测试和部署代码，您可以大大减少编写代码和在生产环境中运行代码之间的延迟。</p><p><b style="color:#3e547d;">快速，一致地交付您的应用程序</b></p><p>Docker允许开发人员使用您提供的应用程序或服务的本地容器在标准化环境中工作，从而简化了开发的生命周期。</p><p>容器非常适合持续集成和持续交付(CI / CD)工作流程，请考虑以下示例方案：</p><ul><li>您的开发人员在本地编写代码，并使用Docker容器与同事共享他们的工作。</li><li>他们使用Docker将其应用程序推送到测试环境中，并执行自动或手动测试。</li><li>当开发人员发现错误时，他们可以在开发环境中对其进行修复，然后将其重新部署到测试环境中，以进行测试和验证。</li><li>测试完成后，将修补程序推送给生产环境，就像将更新的镜像推送到生产环境一样简单。</li></ul><p><b style="color:#3e547d;">响应式部署和扩展</b></p><p>Docker 是基于容器的平台，允许高度可移植的工作负载。Docker容器可以在开发人员的本机上，数据中心的物理或虚拟机上，云服务上或混合环境中运行。Docker的可移植性和轻量级的特性，还可以使您轻松地完成动态管理的工作负担，并根据业务需求指示，实时扩展或拆除应用程序和服务。</p><p><b style="color:#3e547d;">在同一硬件上运行更多工作负载</b></p><p>Docker轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情。Docker是内核级虚拟化，其不像传统的虚拟化技术一样需要额外的Hypervisor支持，所以在一台物理机上可以运行很多个容器实例，可大大提升物理服务器的CPU和内存的利用率。</p><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>软件可以带环境安装，解决了MySql、Redis、JDK等的版本不一致问题。让运维和开发的环境版本一致，方便运维部署项目。解决了运维手动改版本的麻烦。</p><h2 id="专有名词解释" tabindex="-1"><a class="header-anchor" href="#专有名词解释" aria-hidden="true">#</a> 专有名词解释</h2><p>Docker包含三个基本概念，分别是<strong>镜像</strong>(Image)、<strong>容器</strong>(Container)和<strong>仓库</strong>(Repository）。镜像是Docker运行容器的前提，仓库是存放镜像的场所，可见镜像是Docker的核心。</p><h3 id="镜像-image" tabindex="-1"><a class="header-anchor" href="#镜像-image" aria-hidden="true">#</a> 镜像(Image)</h3><p><strong>规范的解释：<strong>Docker 镜像可以看作是一个</strong>特殊的文件系统</strong>，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。</p><p><strong>通俗的解释：</strong> 电脑装系统的时候，需要一张盘，我们称其为镜像，镜像是一个固定的文件，这次读盘和下次读盘内容是一样的。但有些开发者会把这个镜像安装到电脑上，再在这个电脑上删删改改，再重新打包一个镜像刻盘，固化出一个镜像来，这就是镜像打包。并且这个镜像和之前的不同。那么其有什么好处呢？比如程序员A实现了一个玩英雄联盟的镜像，这时我们就可以拿来直接玩。那么世界上所有的人都可以去制作各种功能的镜像，并且都可以上传到专门的镜像网站，我们需要哪种功能就可以到镜像网上自己下载。可谓是<strong>前人种树，后人乘凉。</strong></p><h3 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container" aria-hidden="true">#</a> 容器(Container)</h3><p>镜像创建的运行示例，Docker利用容器来运行应用。每个容器都是相互隔离的，保证安全的平台。我们可以把容器看做是一个轻量级的Linux运行环境。</p><h3 id="仓库-repository" tabindex="-1"><a class="header-anchor" href="#仓库-repository" aria-hidden="true">#</a> 仓库(Repository)</h3><p>存放镜像的地方，分为共有仓库和私有仓库。</p><h2 id="镜像网" tabindex="-1"><a class="header-anchor" href="#镜像网" aria-hidden="true">#</a> 镜像网</h2>',22),f={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},x=l(`<p>阿里云镜像网(国内)地址：<a href="Http://mirrors.aliyun.com">Http://mirrors.aliyun.com</a></p><details class="hint-container details"><summary><b style="color:#bf3e73;">问：容器与虚拟机有什么不同</b></summary><p><b style="color:#f19977;">答：容器与虚拟机不同，不需要捆绑一整套操作系统，只需要软件工作所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一地运行。<strong>Docker容器是在操作系统层面上实现虚拟化，直接复用本地主机的操作系统，而传统虚拟机则是在硬件层面实现虚拟化</strong>。Docker优势为启动速度快，占用体积小。</b></p></details><h2 id="linux上安装docker" tabindex="-1"><a class="header-anchor" href="#linux上安装docker" aria-hidden="true">#</a> Linux上安装Docker</h2><div class="hint-container tip"><p class="hint-container-title">小贴士</p><p><b style="color:#A6522C;">以下命令需要在虚拟机上使用root账户登录</b></p></div><p>CentOS 7已经不能直接使用yum这个软件包管理器了，需要先修复好。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份原有repo</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo <span class="token punctuation">\\</span>
   /etc/yum.repos.d/CentOS-Base.repo.bak

<span class="token comment"># 下载阿里云 CentOS 7 repo</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/CentOS-Base.repo <span class="token punctuation">\\</span>
https://mirrors.aliyun.com/repo/Centos-7.repo

<span class="token comment"># 清理缓存</span>
yum clean all

<span class="token comment"># 重建缓存</span>
yum makecache

<span class="token comment"># 验证是否恢复(只要能列出 base / extras / updates，说明已经能使用yum了)</span>
yum repolist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CentOS7上一键安装docker脚本</p>`,7),y={href:"http://install-docker.sh",target:"_blank",rel:"noopener noreferrer"},_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/usr/bin/env bash"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"#  Docker 安装脚本 - CentOS Stream 8 优化版"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token builtin class-name"},"set"),s(),n("span",{class:"token parameter variable"},"-euo"),s(` pipefail

`),n("span",{class:"token assign-left variable"},"RED"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'\\033[0;31m'"),s(`
`),n("span",{class:"token assign-left variable"},"GREEN"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'\\033[0;32m'"),s(`
`),n("span",{class:"token assign-left variable"},"YELLOW"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'\\033[1;33m'"),s(`
`),n("span",{class:"token assign-left variable"},"NC"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'\\033[0m'"),s(`

`),n("span",{class:"token function-name function"},"log_info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("[INFO]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$*"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function-name function"},"log_warn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${YELLOW}"),s("[WARN]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$*"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function-name function"},"log_error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${RED}"),s("[ERROR]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$*"),s('"')]),s(),n("span",{class:"token operator"},">"),n("span",{class:"token file-descriptor important"},"&2"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 1. 检查权限和系统"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token environment constant"},"$EUID"),s(),n("span",{class:"token parameter variable"},"-ne"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    log_error `),n("span",{class:"token string"},'"请以 root 权限运行"'),s(`
    `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token comment"},"# 检测系统版本"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},'"CentOS Stream 8\\|CentOS Linux 8"'),s(" /etc/redhat-release "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    log_info `),n("span",{class:"token string"},'"检测到 CentOS Stream 8 系统"'),s(`
    `),n("span",{class:"token assign-left variable"},"OS_VERSION"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"8"),s(`
`),n("span",{class:"token keyword"},"elif"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},'"CentOS Linux 7"'),s(" /etc/redhat-release "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    log_info `),n("span",{class:"token string"},'"检测到 CentOS 7 系统"'),s(`
    `),n("span",{class:"token assign-left variable"},"OS_VERSION"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"7"),s(`
`),n("span",{class:"token keyword"},"else"),s(`
    log_warn `),n("span",{class:"token string"},'"未识别的系统版本，尝试继续..."'),s(`
    `),n("span",{class:"token assign-left variable"},"OS_VERSION"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"8"),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 2. 卸载旧版本"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
log_info `),n("span",{class:"token string"},'"卸载旧版本 Docker..."'),s(`
yum remove `),n("span",{class:"token parameter variable"},"-y"),s(),n("span",{class:"token function"},"docker"),s(" docker-client docker-client-latest docker-common "),n("span",{class:"token punctuation"},"\\"),s(`
              docker-latest docker-logrotate docker-engine `),n("span",{class:"token punctuation"},"\\"),s(`
              `),n("span",{class:"token function"},"podman"),s(" buildah containerd runc "),n("span",{class:"token punctuation"},"\\"),s(`
              docker-ce docker-ce-cli containerd.io `),n("span",{class:"token punctuation"},"\\"),s(`
              docker-buildx-plugin docker-compose-plugin `),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token boolean"},"true"),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 3. 清理并安装依赖"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
log_info `),n("span",{class:"token string"},'"清理缓存并安装依赖..."'),s(`
yum clean all
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` /var/cache/yum /var/cache/dnf

yum `),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(" yum-utils device-mapper-persistent-data lvm2 "),n("span",{class:"token function"},"wget"),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 4. 配置 Docker CE 源（完全手动）"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
log_info `),n("span",{class:"token string"},'"配置 Docker CE 软件源..."'),s(`

`),n("span",{class:"token comment"},"# 删除所有 Docker 相关 repo"),s(`
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-f"),s(` /etc/yum.repos.d/docker*.repo

`),n("span",{class:"token comment"},"# 创建清华源配置"),s(`
`),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /etc/yum.repos.d/docker-ce.repo "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},[s(`EOF
[docker-ce-stable]
name=Docker CE Stable - \\`),n("span",{class:"token variable"},"$basearch"),s(`
baseurl=https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/\\`),n("span",{class:"token variable"},"$releasever"),s("/\\"),n("span",{class:"token variable"},"$basearch"),s(`/stable
enabled=1
gpgcheck=0
module_hotfixes=1

[docker-ce-stable-debuginfo]
name=Docker CE Stable - Debuginfo \\`),n("span",{class:"token variable"},"$basearch"),s(`
baseurl=https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/\\`),n("span",{class:"token variable"},"$releasever"),s("/debug-\\"),n("span",{class:"token variable"},"$basearch"),s(`/stable
enabled=0
gpgcheck=0
module_hotfixes=1

[docker-ce-stable-source]
name=Docker CE Stable - Sources
baseurl=https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/\\`),n("span",{class:"token variable"},"$releasever"),s(`/source/stable
enabled=0
gpgcheck=0
module_hotfixes=1
EOF`)]),s(`

log_info `),n("span",{class:"token string"},'"已创建清华大学镜像源配置"'),s(`

`),n("span",{class:"token comment"},"# 重建缓存"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$OS_VERSION"),s(),n("span",{class:"token parameter variable"},"-eq"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    yum makecache
`),n("span",{class:"token keyword"},"else"),s(`
    yum makecache fast `),n("span",{class:"token operator"},"||"),s(` yum makecache
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token comment"},"# 验证 repo 可用性"),s(`
log_info `),n("span",{class:"token string"},'"验证 Docker 源..."'),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" yum repolist "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(" docker-ce-stable"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    log_error `),n("span",{class:"token string"},'"Docker 源配置失败"'),s(`
    `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 5. 安装 Docker"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
log_info `),n("span",{class:"token string"},'"安装 Docker 及组件..."'),s(`

`),n("span",{class:"token comment"},"# 尝试 1：标准安装"),s(`
`),n("span",{class:"token keyword"},"if"),s(" yum "),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(" docker-ce docker-ce-cli containerd.io "),n("span",{class:"token punctuation"},"\\"),s(`
                  docker-buildx-plugin docker-compose-plugin`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    log_info `),n("span",{class:"token string"},'"Docker 安装成功"'),s(`
`),n("span",{class:"token keyword"},"else"),s(`
    log_warn `),n("span",{class:"token string"},'"标准安装失败，尝试修复..."'),s(`
    
    `),n("span",{class:"token comment"},"# 尝试 2：禁用模块化依赖冲突"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$OS_VERSION"),s(),n("span",{class:"token parameter variable"},"-eq"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        log_info `),n("span",{class:"token string"},'"禁用 container-tools 模块..."'),s(`
        yum module disable `),n("span",{class:"token parameter variable"},"-y"),s(` container-tools
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 重试安装"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" yum "),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(" docker-ce docker-ce-cli containerd.io "),n("span",{class:"token punctuation"},"\\"),s(`
                      docker-buildx-plugin docker-compose-plugin`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        log_info `),n("span",{class:"token string"},'"Docker 安装成功（修复后）"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        `),n("span",{class:"token comment"},"# 尝试 3：跳过问题包"),s(`
        log_warn `),n("span",{class:"token string"},'"尝试跳过损坏的包..."'),s(`
        yum `),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(" --skip-broken "),n("span",{class:"token parameter variable"},"--nobest"),s(),n("span",{class:"token punctuation"},"\\"),s(`
            docker-ce docker-ce-cli containerd.io `),n("span",{class:"token punctuation"},"\\"),s(`
            docker-buildx-plugin docker-compose-plugin
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token comment"},"# 验证安装"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token operator"},"&>"),s("/dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    log_error `),n("span",{class:"token string"},'"Docker 安装失败"'),s(`
    `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 6. 配置 Docker"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
log_info `),n("span",{class:"token string"},'"配置 Docker 镜像加速器..."'),s(`
`),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` /etc/docker

`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token parameter variable"},"-f"),s(" /etc/docker/daemon.json "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token function"},"cp"),s(" /etc/docker/daemon.json "),n("span",{class:"token string"},[s('"/etc/docker/daemon.json.backup.'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(" +%s"),n("span",{class:"token variable"},")")]),s('"')]),s(`

`),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /etc/docker/daemon.json "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`'EOF'
{
  "registry-mirrors": [
    "https://docker.1ms.run",
    "https://docker.xuanyuan.me",
    "https://docker.m.daocloud.io",
    "https://hub.rat.dev"
  ],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m",
    "max-file": "3"
  },
  "storage-driver": "overlay2",
  "exec-opts": ["native.cgroupdriver=systemd"]
}
EOF`),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 7. 启动服务"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
log_info `),n("span",{class:"token string"},'"启动 Docker 服务..."'),s(`
systemctl daemon-reload
systemctl `),n("span",{class:"token builtin class-name"},"enable"),s(),n("span",{class:"token function"},"docker"),s(`
systemctl restart `),n("span",{class:"token function"},"docker"),s(`

`),n("span",{class:"token function"},"sleep"),s(),n("span",{class:"token number"},"3"),s(`

`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token comment"},"# 8. 验证安装"),s(`
`),n("span",{class:"token comment"},"# ======================================"),s(`
`),n("span",{class:"token keyword"},"if"),s(" systemctl is-active "),n("span",{class:"token parameter variable"},"--quiet"),s(),n("span",{class:"token function"},"docker"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("  ✓ Docker 安装成功！"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token parameter variable"},"--version"),s(`
    `),n("span",{class:"token function"},"docker"),s(` compose version
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${YELLOW}"),s("测试命令："),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"  docker run hello-world"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${YELLOW}"),s("查看镜像源："),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},`"  docker info | grep -A 5 'Registry Mirrors'"`),s(`
`),n("span",{class:"token keyword"},"else"),s(`
    log_error `),n("span",{class:"token string"},'"Docker 服务启动失败"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"查看日志："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"  journalctl -xeu docker"'),s(`
    `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"fi"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=l(`<p>在Linux上创建好install-docker.sh脚本后，需要在脚本文件所在目录打开终端然后分别执行下面两条命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 给脚本添加可执行权限</span>
<span class="token function">chmod</span> +x install-docker.sh
<span class="token comment"># 执行当前目录下的install-docker安装脚本</span>
./install-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-命令" tabindex="-1"><a class="header-anchor" href="#docker-命令" aria-hidden="true">#</a> Docker 命令</h2><h3 id="运行docker" tabindex="-1"><a class="header-anchor" href="#运行docker" aria-hidden="true">#</a> 运行Docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置docker开机自动启动" tabindex="-1"><a class="header-anchor" href="#设置docker开机自动启动" aria-hidden="true">#</a> 设置Docker开机自动启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="镜像-搜索" tabindex="-1"><a class="header-anchor" href="#镜像-搜索" aria-hidden="true">#</a> 镜像-搜索</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 镜像名称一般是 名称:版本 </span>
<span class="token comment"># 如 nginx:latest 表示nginx最新版</span>
<span class="token comment"># 如 nginx:1.26.0 表示nginx1.26.0版</span>
<span class="token function">docker</span> search <span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span>

<span class="token comment"># 例子：搜索nginx镜像</span>
<span class="token function">docker</span> search nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像-下载" tabindex="-1"><a class="header-anchor" href="#镜像-下载" aria-hidden="true">#</a> 镜像-下载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 镜像名称一般是 名称:版本 </span>
<span class="token comment"># 如 nginx:latest 表示nginx最新版</span>
<span class="token comment"># 如 nginx:1.26.0 表示nginx1.26.0版</span>
<span class="token function">docker</span> pull <span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span>

<span class="token comment"># 例子：下载nginx镜像</span>
<span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像-删除" tabindex="-1"><a class="header-anchor" href="#镜像-删除" aria-hidden="true">#</a> 镜像-删除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 镜像名称一般是 名称:版本 </span>
<span class="token comment"># 如 nginx:latest 表示nginx最新版</span>
<span class="token comment"># 如 nginx:1.26.0 表示nginx1.26.0版</span>
<span class="token function">docker</span> rmi <span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span>

<span class="token comment"># 例子：删除nginx:1.26.0版本镜像</span>
<span class="token function">docker</span> rmi nginx:1.26.0

<span class="token comment"># 删除也可先使用docker images查看镜像唯一ID然后再根据ID删除</span>
<span class="token comment"># [root@tensoflowEdu01 ~]# docker images</span>
<span class="token comment"># REPOSITORY   TAG       IMAGE ID       CREATED        SIZE</span>
<span class="token comment"># nginx        latest    5cdef4ac3335   28 hours ago   161MB</span>
<span class="token function">docker</span> rmi 5cdef4ac3335
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像-已下载列表" tabindex="-1"><a class="header-anchor" href="#镜像-已下载列表" aria-hidden="true">#</a> 镜像-已下载列表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="容器-运行" tabindex="-1"><a class="header-anchor" href="#容器-运行" aria-hidden="true">#</a> 容器-运行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 镜像名称一般是 名称:版本 </span>
<span class="token comment"># 如 nginx:latest 表示nginx最新版</span>
<span class="token comment"># 如 nginx:1.26.0 表示nginx1.26.0版</span>
<span class="token comment"># 不写版本号则表示运行最新镜像</span>
<span class="token function">docker</span> run <span class="token punctuation">[</span>镜像名称<span class="token punctuation">]</span>

<span class="token comment"># 例子：运行nginx</span>
<span class="token function">docker</span> run nginx

<span class="token comment"># -d表示后台启动</span>
<span class="token comment"># --name xxx 为容器起名为xxx</span>
<span class="token comment"># -p 80:80 设置主机的80端口去映射nginx容器中的80端口</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mynginx <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-查看运行中容器" tabindex="-1"><a class="header-anchor" href="#容器-查看运行中容器" aria-hidden="true">#</a> 容器-查看运行中容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看运行中的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># 查看所有容器包括停止了的</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-启动" tabindex="-1"><a class="header-anchor" href="#容器-启动" aria-hidden="true">#</a> 容器-启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新启动已经停止的容器</span>

<span class="token comment"># 先使用docker ps -a查看所有容器获取容器名字或者ID</span>
<span class="token comment"># [root@tensoflowEdu01 ~]# docker ps -a</span>
<span class="token comment"># CONTAINER ID    NAMES</span>
<span class="token comment"># fd566ed2955b    youthful_agnesi</span>

<span class="token comment"># 使用容器ID重新启动</span>
<span class="token function">docker</span> start fd566ed2955b
<span class="token comment"># 使用容器名称重新启动</span>
<span class="token function">docker</span> start youthful_agnesi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-停止" tabindex="-1"><a class="header-anchor" href="#容器-停止" aria-hidden="true">#</a> 容器-停止</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先使用docker ps -a查看所有容器获取容器名字或者ID</span>
<span class="token comment"># [root@tensoflowEdu01 ~]# docker ps -a</span>
<span class="token comment"># CONTAINER ID    NAMES</span>
<span class="token comment"># fd566ed2955b    youthful_agnesi</span>

<span class="token comment"># 使用容器ID停止</span>
<span class="token function">docker</span> stop fd566ed2955b
<span class="token comment"># 使用容器名称停止</span>
<span class="token function">docker</span> stop youthful_agnesi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-重启" tabindex="-1"><a class="header-anchor" href="#容器-重启" aria-hidden="true">#</a> 容器-重启</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先使用docker ps -a查看所有容器获取容器名字或者ID</span>
<span class="token comment"># [root@tensoflowEdu01 ~]# docker ps -a</span>
<span class="token comment"># CONTAINER ID    NAMES</span>
<span class="token comment"># fd566ed2955b    youthful_agnesi</span>

<span class="token comment"># 使用容器ID重启</span>
<span class="token function">docker</span> restart fd566ed2955b
<span class="token comment"># 使用容器名称重启</span>
<span class="token function">docker</span> restart youthful_agnesi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-状态" tabindex="-1"><a class="header-anchor" href="#容器-状态" aria-hidden="true">#</a> 容器-状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以查看容器CPU占用率等信息</span>

<span class="token comment"># 先使用docker ps -a查看所有容器获取容器名字或者ID</span>
<span class="token comment"># [root@tensoflowEdu01 ~]# docker ps -a</span>
<span class="token comment"># CONTAINER ID    NAMES</span>
<span class="token comment"># fd566ed2955b    youthful_agnesi</span>

<span class="token comment"># 使用容器ID查看状态</span>
<span class="token function">docker</span> stats fd566ed2955b
<span class="token comment"># 使用容器名称查看状态</span>
<span class="token function">docker</span> stats youthful_agnesi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-日志" tabindex="-1"><a class="header-anchor" href="#容器-日志" aria-hidden="true">#</a> 容器-日志</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看容器运行中产生的日志</span>

<span class="token comment"># 先使用docker ps -a查看所有容器获取容器名字或者ID</span>
<span class="token comment"># [root@tensoflowEdu01 ~]# docker ps -a</span>
<span class="token comment"># CONTAINER ID    NAMES</span>
<span class="token comment"># fd566ed2955b    youthful_agnesi</span>

<span class="token comment"># 使用容器ID查看状态</span>
<span class="token function">docker</span> logs fd566ed2955b
<span class="token comment"># 使用容器名称查看状态</span>
<span class="token function">docker</span> logs youthful_agnesi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-删除" tabindex="-1"><a class="header-anchor" href="#容器-删除" aria-hidden="true">#</a> 容器-删除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 想要删除一个容器必须得先停止或者加上-f参数强制删除</span>

<span class="token comment"># 先使用docker ps -a查看所有容器获取容器名字或者ID</span>
<span class="token comment"># [root@tensoflowEdu01 ~]# docker ps -a</span>
<span class="token comment"># CONTAINER ID    NAMES</span>
<span class="token comment"># fd566ed2955b    youthful_agnesi</span>

<span class="token comment"># 使用容器ID删除</span>
<span class="token function">docker</span> <span class="token function">rm</span> fd566ed2955b
<span class="token comment"># 使用容器名称删除</span>
<span class="token function">docker</span> <span class="token function">rm</span> youthful_agnesi
<span class="token comment"># 使用-f参数强制删除</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> fd566ed2955b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器-进入" tabindex="-1"><a class="header-anchor" href="#容器-进入" aria-hidden="true">#</a> 容器-进入</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 每个容器可以看成单轻量级的Linux</span>
<span class="token comment"># 使用exec可以进入到容器所在的linux环境</span>

<span class="token comment"># -it 表示以交互模式进入</span>
<span class="token comment"># mynginx 容器名称</span>
<span class="token comment"># /bin/bash 表示以终端形式交互</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mynginx /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function E(w,C){const a=i("ExternalLinkIcon"),o=i("CodeTabs");return p(),u("div",null,[k,n("p",null,[s("官网地址："),n("a",v,[s("http://www.docker.com"),e(a)])]),b,n("p",null,[s("B站："),n("a",h,[s("07_docker官网介绍_哔哩哔哩_bilibili"),e(a)])]),g,n("p",null,[s("最大镜像网DockerHub(国外)网址："),n("a",f,[s("https://hub.docker.com/"),e(a)])]),x,e(o,{id:"132",data:[{id:'<a href="http://install-docker.sh" target="_blank" rel="noopener noreferrer">install-docker.sh<ExternalLinkIcon/></a>'}]},{title0:c(({value:t,isActive:r})=>[n("a",y,[s("install-docker.sh"),e(a)])]),tab0:c(({value:t,isActive:r})=>[_]),_:1},8,["data"]),D])}const O=d(m,[["render",E],["__file","Docker.html.vue"]]);export{O as default};
