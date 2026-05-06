import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as d,b as n,d as a,a as e,e as i}from"./app-2ea8cdd2.js";const r="/assets/Git工作流程图-056465f3.png",p={},o=i('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="第01章-简介" tabindex="-1"><a class="header-anchor" href="#第01章-简介" aria-hidden="true">#</a> 第01章 简介</h2><p>Git是一个免费的，开源的<strong>分布式版本控制系统</strong>，可以快速高效地处理从小型到大型的各种项目。创始人为Linux创始人<strong>Linux Torvalds</strong>。又称为版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。</p><h2 id="第02章-官网" tabindex="-1"><a class="header-anchor" href="#第02章-官网" aria-hidden="true">#</a> 第02章 官网</h2>',4),u={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"第03章-下载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第03章-下载","aria-hidden":"true"},"#"),a(" 第03章 下载")],-1),m={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},b=i('<div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>下载完后一直下一步不建议修改安装目录，安装的目录路径不要有中文</strong></b></p></div><h2 id="第04章-作用" tabindex="-1"><a class="header-anchor" href="#第04章-作用" aria-hidden="true">#</a> 第04章 作用</h2><p>可以记录文件修改历史记录，从而让用户能够查看历史版本，方便版本切换。能让个人开发过度到团队协作。</p><h2 id="第05章-工作流程图" tabindex="-1"><a class="header-anchor" href="#第05章-工作流程图" aria-hidden="true">#</a> 第05章 工作流程图</h2><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="第06章-命令" tabindex="-1"><a class="header-anchor" href="#第06章-命令" aria-hidden="true">#</a> 第06章 命令</h2><p>下载完成后在某一文件夹下鼠标右键选择<strong>Open Git Bash Here</strong>会打开一个黑窗口，此窗口相当于一个小型的<strong>Linux环境</strong>，能输入Linux命令。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>第一次使用前必须要设置用户签名和邮箱，因为是多人环境，设置用户名和邮箱是为了方便区分。</strong></b></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：设置git的用户名和邮箱
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token punctuation">[</span>username<span class="token punctuation">]</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token punctuation">[</span>email<span class="token punctuation">]</span>
// 说明：只在第一次时候使用，设置后每次提交代码可以知道是谁提交的，多人协作开发时方便管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>提交的文件中单个文件不能超过100MB不然推送不上去</strong></b></p></div><h3 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> Git常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init                      // 创建本地仓库
<span class="token function">git</span> status                    // 查看暂存区与非暂存区有哪些文件
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>                     // 把当前文件夹下的所有文件都上传到暂存区
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;[版本说明文字]&quot;</span>  // 版本说明
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span> // 定义远程
<span class="token function">git</span> remote                    // 查看远程名
<span class="token function">git</span> pull <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>    // 拉取并合并代码
<span class="token function">git</span> push <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>    // 推送代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git命令大全" tabindex="-1"><a class="header-anchor" href="#git命令大全" aria-hidden="true">#</a> Git命令大全</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：查看当前git版本
<span class="token function">git</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：会在当前文件夹下创建本地仓库即.git文件
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：指定文件到暂存区即指定当前文件夹下的哪些文件交给Git管理。FileName是文件的名字，如user.txt
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>FileName<span class="token punctuation">]</span>

// 作用：把当前文件夹下的所有文件都上传到暂存区即都交给Git管理
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：把文件名为FileName的从暂存区删除
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>FileName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：将暂存区的所有文件提交到本地仓库也就是.git文件里，形成一次提交记录。<span class="token string">&quot;版本说明文字&quot;</span>是对这次版本的描述。可以自定义。
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;[版本说明文字]&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：查看暂存区与非暂存区有哪些文件
<span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：查看提交历史。可以看到每次提交的ID、版本描述、提交时间、提交人的用户名和邮箱。
<span class="token function">git</span> log

// 作用：简化提交历史信息的显示
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token parameter variable">--all</span> <span class="token parameter variable">--graph</span> --abbrev-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 为命令设置别名
<span class="token number">1</span>. 输入 <span class="token function">touch</span> ~/.bashrc命令创建~/.bashrc文件
<span class="token number">2</span>. 输入 <span class="token function">nano</span> ~/.bashrc命令编辑~/.bashrc文件
<span class="token number">3</span>. 在~/.bashrc文件中输入
	<span class="token builtin class-name">alias</span> git-log<span class="token operator">=</span><span class="token string">&#39;git log --pretty=oneline --all --graph --abbrev-commit&#39;</span> 命令
	alias是设置别名的意思，上述的意思是将git log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token parameter variable">--all</span> <span class="token parameter variable">--graph</span> --abbrev-commit设置成git-log
<span class="token number">4</span>. 输入 <span class="token builtin class-name">source</span> ~/.bashrc命令 重新加载~/.bashrc文件
<span class="token number">5</span>. 成功，即可用git-log表示git log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token parameter variable">--all</span> <span class="token parameter variable">--graph</span> --abbrev-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：回退到之前的版本commitID可以使用git log指令查看
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commitID<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：查看回退版本的所有历史记录，有时候回退到前一版本之后，又想回退到现在的版本，用git log是看不到现在的版本ID，因为你回退到了上一个版本。这时候需要使用git reflog命令查看，他记录了你回退的所有操作以及对应的版本ID。
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 忽略文件
// 在.git的同目录下创建.gitignore文件，然后在里面填写忽略的文件即不想让git管理的文件。git会自动读取.gitignore文件里面的忽略文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：查看所有的分支列表
<span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：创建分支，BranchName是自定义的分支名
<span class="token function">git</span> branch <span class="token punctuation">[</span>BranchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：切换分支，BranchName是要切换的分支名
<span class="token function">git</span> checkout <span class="token punctuation">[</span>BranchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：创建一个不存在的分支，并切换到这个不存在的分支。BranchName是当前不存在的分支名
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>BranchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：合并分支，一般都是先切换到master分支上，然后合并BranchName分支
<span class="token function">git</span> merge <span class="token punctuation">[</span>BranchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：删除名字为BranchName的分支，需要做各种检查
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>BranchName<span class="token punctuation">]</span>

// 作用：删除名字为BranchName的分支，不做任何检查，强制删除
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token punctuation">[</span>BranchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 解决冲突
<span class="token number">1</span>. 先手动解决冲突
<span class="token number">2</span>. 然后 <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token number">3</span>. 然后 <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;[Version Description]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：增加远程仓库。origin是这个远程仓库的名字可以自定义，url是仓库在gitee或者github上面的仓库地址。
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：查看当前定义的远程仓库名字
<span class="token function">git</span> remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：推送代码到远程仓库 origin是当前定义的远程仓库名字，master是想要推送到哪一个分支。
<span class="token function">git</span> push <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：从远程仓库克隆代码到本地，在哪里打开的git bash，会在打开git bash文件路径下创建一个文件夹并将克隆下来的代码放到此文件夹中。文件夹名字为url中最后一个/之后.git之前的符号。
<span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

// 作用：从远程仓库克隆代码到本地，在哪里打开的git bash，会在打开git bash文件路径下创建一个文件夹并将克隆下来的代码放到此文件夹中。文件夹名字为自定义的FileName。
<span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span> <span class="token punctuation">[</span>FileName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：只拉取别人更改之后的代码，而不进行合并。origin是自定义的远程仓库名字，master是分支名。
<span class="token function">git</span> fetch <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：拉取别人更改之后的代码并与你的进行合并。origin是自定义的远程仓库名字，master是分支名。
<span class="token function">git</span> pull <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux命令" tabindex="-1"><a class="header-anchor" href="#linux命令" aria-hidden="true">#</a> Linux命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 命令：ll
// 作用：用于列出目录中的文件和目录的详细信息。它实际上是ls -l命令的一个别名，显示的结果
包括文件类型、权限、硬链接数、所有者、组、文件大小、最后修改时间和文件名等详细信息。
// 扩展命令：
ll -a：包括隐藏文件在内的所有文件。
ll -h：以人类可读的格式显示文件大小（例如，1K、234M、2G）。
ll -t：根据修改时间排序。
ll -r：逆序排列。
ll -R：递归列出子目录中的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：在当前文件夹下创建文件，FileName是文件名称，如touch demo.txt。
<span class="token function">touch</span> <span class="token punctuation">[</span>FileName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 作用：清除当前所有文字
<span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第07章-提交代码方式" tabindex="-1"><a class="header-anchor" href="#第07章-提交代码方式" aria-hidden="true">#</a> 第07章 提交代码方式</h2><h3 id="https方式" tabindex="-1"><a class="header-anchor" href="#https方式" aria-hidden="true">#</a> Https方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// <span class="token number">1</span>.直接在主分支上提交。
<span class="token function">git</span> status
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;[版本信息]&quot;</span>
<span class="token function">git</span> pull <span class="token punctuation">[</span>远程名<span class="token punctuation">]</span> <span class="token punctuation">[</span>主分支名<span class="token punctuation">]</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>远程名<span class="token punctuation">]</span> <span class="token punctuation">[</span>主分支名<span class="token punctuation">]</span>

// <span class="token number">2</span>.本地自己创建一个分支，然后合并到主分支上，此种方法更安全。
<span class="token function">git</span> branch <span class="token punctuation">[</span>SelfBranchName<span class="token punctuation">]</span> // 创建自己的分支名-只需执行一次
<span class="token function">git</span> status
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;[版本信息]&quot;</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>主分支名<span class="token punctuation">]</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>自己的分支<span class="token punctuation">]</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>远程名<span class="token punctuation">]</span> <span class="token punctuation">[</span>主分支<span class="token punctuation">]</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>自己的分支<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh方式" tabindex="-1"><a class="header-anchor" href="#ssh方式" aria-hidden="true">#</a> SSH方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span> 在Git Bash黑窗口执行：ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;[自己的邮箱]&quot;</span>
如：ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;1413468037@qq.com&quot;</span>
一路回车即可<span class="token punctuation">(</span>密钥默认保存在 ~/.ssh/id_rsa<span class="token punctuation">)</span>

<span class="token number">2</span> 查看生成的公钥：cat ~/.ssh/id_rsa.pub
你会看到以下内容：
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCLYYFdLy5WHKWNdEc5SXzZcV3XxSxkI22+0Qim0DdyCvspcgoftNrq/U7uj136bm72aIHZ851bO8hj6/6/GL6ODTgLoJT1JLBoN3zZmLfR1Z7UxcwB06IKSq3kqQBiPtdTOwpgKUIfZZOeDJjjrFOUm01eIBabOyxUFFUYI0ZNBqxZuLGDnPj39jefxjB0eqAKYxjsJO1h6cgsyVZE3mxwn7N2HZfMQ3NqF/TFktASUEN0BIZ8WiiSo+551yzJ/zGo2lbF4eiBytirdiQEEbHB/PKr6mnEHhGWGARKKJJrrf9bqIoitvWndNoKYk5SkFIPg1KDMH9LQ<span class="token operator">==</span> <span class="token number">1413468037</span>@qq.com

<span class="token number">3</span> 复制第2步输出的全部内容，到 GitHub → Settings → SSH and GPG keys → New SSH key → 粘贴保存。

<span class="token number">4</span> 测试连接：ssh <span class="token parameter variable">-T</span> git@github.com
如果配置正确，就会看到：
Hi TenSorFlow<span class="token operator">!</span> You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上步骤只需第一次使用SSH提交代码时操作一次即可。之后就可以使用正常的Git命令提交代码了。</p><h2 id="第08章-git使用经典坑" tabindex="-1"><a class="header-anchor" href="#第08章-git使用经典坑" aria-hidden="true">#</a> 第08章 Git使用经典坑</h2><h3 id="gitignore配置未生效" tabindex="-1"><a class="header-anchor" href="#gitignore配置未生效" aria-hidden="true">#</a> .gitignore配置未生效</h3><p><strong>可能原因</strong>：<code>.gitignore</code>配置文件其中内容未写对</p><p><strong>解决方法</strong>：写对配置文件</p><p><strong>可能原因</strong>：如果已经确保<code>.gitignore</code>中的配置都是正确的，但是其没有生效，极可能你是中途创建的<code>.gitignore</code>文件。<code>.gitignore</code> 只能忽略未被Git跟踪的文件，不能忽略已经被Git跟踪过的文件。</p><p><strong>解决方法</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移除被git跟踪的所有文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 重新定义git跟踪的文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 重新提交一次</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;[refresh gitignore]&quot;</span>

<span class="token comment"># 重新推送一次</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54);function g(h,k){const s=l("ExternalLinkIcon");return c(),d("div",null,[o,n("p",null,[a("Git官网："),n("a",u,[a("https://git-scm.com/"),e(s)])]),v,n("p",null,[a("Git下载："),n("a",m,[a("https://git-scm.com/"),e(s)])]),b])}const N=t(p,[["render",g],["__file","Git.html.vue"]]);export{N as default};
