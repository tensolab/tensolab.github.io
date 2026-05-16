import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as s}from"./app-d308bbfa.js";const d={},a=s(`<h1 id="bat" tabindex="-1"><a class="header-anchor" href="#bat" aria-hidden="true">#</a> Bat</h1><p><strong>Bat脚本</strong>(Batch Script，也叫批处理脚本)是windows系统下一种以<code>.bat</code>或<code>.cmd</code>为扩展名的脚本文件，用于<strong>自动化执行一系列命令</strong>。是基于Windows命令行(CMD)的一种脚本语言。</p><h2 id="cmd-命令提示符" tabindex="-1"><a class="header-anchor" href="#cmd-命令提示符" aria-hidden="true">#</a> CMD(命令提示符)</h2><h3 id="cd-切换目录" tabindex="-1"><a class="header-anchor" href="#cd-切换目录" aria-hidden="true">#</a> cd 切换目录</h3><p>主要用于显示或切换当前目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 不带参数时会显示当前所在的工作目录
<span class="token builtin class-name">cd</span>

// 返回上一级目录
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

// 返回根目录
<span class="token builtin class-name">cd</span> <span class="token punctuation">\\</span>

// 切换盘符直接用盘符名加:
D:

// /d 表示同时切换盘符和目录
<span class="token builtin class-name">cd</span> /d D:<span class="token punctuation">\\</span>Desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dir-查看目录" tabindex="-1"><a class="header-anchor" href="#dir-查看目录" aria-hidden="true">#</a> dir 查看目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dir</span> <span class="token punctuation">[</span>路径<span class="token punctuation">]</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
路径：要查看的目录<span class="token punctuation">(</span>默认是当前目录<span class="token punctuation">)</span>
参数：控制输出格式、显示内容等

// 查看当前目录内容
<span class="token function">dir</span>

// 查看指定目录内容
<span class="token function">dir</span> D:<span class="token punctuation">\\</span>Desktop

// 分页显示<span class="token punctuation">(</span>按空格翻页<span class="token punctuation">)</span>
<span class="token function">dir</span> /p

// 宽列表显示<span class="token punctuation">(</span>多列排列<span class="token punctuation">)</span>
<span class="token function">dir</span> /w

// 显示所有文件<span class="token punctuation">(</span>包含隐藏、系统文件<span class="token punctuation">)</span>
<span class="token function">dir</span> /a

// 按名称排序
<span class="token function">dir</span> /o:n

// 按时间倒序排序
<span class="token function">dir</span> /o:-d

// 显示子目录下所有文件<span class="token punctuation">(</span>递归<span class="token punctuation">)</span>
<span class="token function">dir</span> /s

// 简洁模式<span class="token punctuation">(</span>只显示文件名，适合导出<span class="token punctuation">)</span>
<span class="token function">dir</span> /b

// 组合参数：显示所有文件 + 递归子目录 + 分页
<span class="token function">dir</span> /a /s /p

// 查找当前目录及子目录下所有 txt 文件
<span class="token function">dir</span> /s *.txt

// 导出目录下的文件名到 list.txt
<span class="token function">dir</span> D:<span class="token punctuation">\\</span>Desktop /b <span class="token operator">&gt;</span> list.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cls-清屏" tabindex="-1"><a class="header-anchor" href="#cls-清屏" aria-hidden="true">#</a> cls 清屏</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 清空屏幕内容
cls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exit-退出" tabindex="-1"><a class="header-anchor" href="#exit-退出" aria-hidden="true">#</a> exit 退出</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 退出
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="netstat-网络状态查看" tabindex="-1"><a class="header-anchor" href="#netstat-网络状态查看" aria-hidden="true">#</a> netstat 网络状态查看</h3><p><strong>PID</strong>(Process ID)进程编号。每个正在运行的程序(进程)在操作系统中都会分配一个唯一的PID用来标识它、</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 查看某个端口是谁占用了
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr <span class="token number">8080</span>

// 显示所有连接和监听端口
<span class="token function">netstat</span> <span class="token parameter variable">-a</span>

// 常用组合命令: 查询端口占用 + 找出具体进程 + 杀进程
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr <span class="token number">8080</span> // 查询端口占用
tasklist <span class="token operator">|</span> findstr <span class="token punctuation">[</span>PID<span class="token punctuation">]</span>    // 找出具体进程
taskkill /PID <span class="token number">18456</span> /F      // 杀死PID为18456的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bat命令" tabindex="-1"><a class="header-anchor" href="#bat命令" aria-hidden="true">#</a> Bat命令</h2><h3 id="echo-off-标配开头" tabindex="-1"><a class="header-anchor" href="#echo-off-标配开头" aria-hidden="true">#</a> @echo off 标配开头</h3><p><strong>@echo off</strong> 是批处理脚本的标配开头，核心作用是<strong>关闭脚本执行过程中所有命令的回显(即不显示要执行的命令本身，只显示命令的执行结果)</strong>，让控制台输出更整洁、易读。</p><p><b style="color:#3e547d;">(1)关闭回显</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
chcp 65001 &gt; nul
:: Empty
echo tensoflow
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tensoflow
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(2)开启回显</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>:: Empty
chcp 65001 &gt; nul
echo tensoflow
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\Desktop&gt;echo tensoflow
tensoflow

D:\\Desktop&gt;pause
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chcp-切换字符编码" tabindex="-1"><a class="header-anchor" href="#chcp-切换字符编码" aria-hidden="true">#</a> chcp 切换字符编码</h3><p>是Windows控制台(CMD)中用于<strong>切换/查看字符编码</strong>的核心命令，也是解决处理<strong>中文乱码</strong>的关键。</p><div class="hint-container tip"><p class="hint-container-title">小贴士</p><p><b style="color:#A6522C;">永久解决Bat文件中文乱码问题可以保存时选择ANSI编码。</b></p></div><p><b style="color:#3e547d;">(1)查看当前代码页</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
chcp
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>活动代码页: 936
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>936 是 GBK/GB2312 编码的代码页编号，也是中文 Windows 的默认值。</p></blockquote><p><b style="color:#3e547d;">(2)切换代码页</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
rem 切换到UTF-8 &gt; nul屏蔽切换提示
chcp 65001 &gt; nul
echo 切换后编码:
chcp
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>切换后编码:
Active code page: 65001
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签注释" tabindex="-1"><a class="header-anchor" href="#标签注释" aria-hidden="true">#</a> :: 标签注释</h3><p><strong>::</strong> 并不是批处理官方定义的注释命令，而是<strong>标签的特殊写法</strong>(标签以 <strong>:</strong> 开头，用于 <strong>goto</strong> 跳转)，但因为 <strong>::</strong> 不符合标签的命名规则(标签不能以第二个 <strong>:</strong> 开头)，所以解释器会忽略这一行，从而起到注释的效果。</p><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
:: 这是一行注释，不会被执行
echo tensoflow
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tensoflow
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;">::注释不能在 if/for 等块内使用<br>不能在命令行末尾使用。</b></p></div><h3 id="rem-标准注释" tabindex="-1"><a class="header-anchor" href="#rem-标准注释" aria-hidden="true">#</a> rem 标准注释</h3><p>官方标准的注释命令是<strong>rem</strong>(全称<strong>remark</strong>意为&quot;备注&quot;)。</p><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
rem 这是一行注释，不会被执行
echo tensoflow
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tensoflow
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;">rem注释能在 if/for 等块内使用<br>不能在命令行末尾使用。</b></p></div><h3 id="echo-打印" tabindex="-1"><a class="header-anchor" href="#echo-打印" aria-hidden="true">#</a> echo 打印</h3><p>在控制台窗口中输出文本、变量值、或控制批处理的命令回显功能，简单来说就是打印内容。</p><p><b style="color:#3e547d;">(1) 输出普通文本</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
echo 你好，这是echo命令的基础用法
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你好，这是echo命令的基础用法
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pause-暂停" tabindex="-1"><a class="header-anchor" href="#pause-暂停" aria-hidden="true">#</a> pause 暂停</h3><p><strong>pause</strong> 命令的主要功能是<strong>暂停批处理脚本的执行</strong>，并在控制台窗口中显示提示信息，等待用户按下任意键后，脚本才会继续执行后续命令。</p><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
echo 这是执行 pause 前的内容
pause
echo 这是按下任意键后才会显示的内容
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这是执行 pause 前的内容
请按任意键继续. . .(按下任意键后)
这是按下任意键后才会显示的内容
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start-运行" tabindex="-1"><a class="header-anchor" href="#start-运行" aria-hidden="true">#</a> start 运行</h3><p>运行某个目录下的某一文件</p><p><b style="color:#3e547d;">语法</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>start /d [目录路径] [可执行文件名称]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(1)标准启动</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off

rem 第一个&quot;&quot;里面是窗口标题，不填时表示为空
rem 第一个&quot;&quot;不填都不要省略，因为Bat是按照空格分隔的如果程序路径含空格就会解析路径失败。
start &quot;&quot; &quot;D:\\TenSoFlow\\Projects\\Java_Exe\\Reminder\\RunReminder\\Reminder.exe&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><p>会运行D:\\TenSoFlow\\Projects\\Java_Exe\\Reminder\\RunReminder目录下的Reminder.exe文件</p><p><b style="color:#3e547d;">(2)/d 参数启动</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
start /d &quot;D:\\TenSoFlow\\Projects\\Java_Exe\\Reminder\\RunReminder&quot; Reminder.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><p>会运行D:\\TenSoFlow\\Projects\\Java_Exe\\Reminder\\RunReminder目录下的Reminder.exe文件</p><h3 id="set-设置变量" tabindex="-1"><a class="header-anchor" href="#set-设置变量" aria-hidden="true">#</a> set 设置变量</h3><p><b style="color:#3e547d;">语法</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code># = 前后不能有空格否则空格会被计入变量名/值
set 变量名=变量值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(1)定义/修改自定义变量</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
:: 定义普通变量
set name=tensoflow
set age=18
set address=梦想国度

:: 修改变量值(直接重新赋值即可)
set age=23

:: 输出变量(用%变量名%包裹)
echo 姓名：%name%
echo 年龄：%age%
echo 地址：%address%
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>姓名：tensoflow
年龄：23
地址：梦想国度
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(2)查看所有变量(系统 + 自定义)</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
echo 所有变量列表：
echo ----------------
set
echo ----------------
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><p>会显示 <code>PATH</code>、<code>USERNAME</code>、<code>TEMP</code> 等系统变量，以及你自定义的 <code>name</code>、<code>age</code> 等变量</p><p><b style="color:#3e547d;">(3)查看指定变量</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
set name=张三
set name1=李四
rem 查看所有以name开头的变量
set name
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name=张三
name1=李四
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(4)接收用户输入</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
rem 接收用户输入的姓名和年龄
set /p username=请输入你的姓名：
set /p userage=请输入你的年龄：
rem 输出用户输入的内容
echo 你好，%username%！你的年龄是%userage%岁。
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请输入你的姓名：tensoflow
请输入你的年龄：18
你好，tensoflow！你的年龄是18岁。
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(5)set /a 数值计算</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
set num1=10
set num2=3

:: 加法
set /a sum=%num1%+%num2%
:: 减法
set /a sub=%num1%-%num2%
:: 乘法
set /a mul=%num1%*%num2%
:: 除法(取整)
set /a div=%num1%/%num2%
:: 取模(余数)
set /a mod=%num1%%%num2%

echo 10+3=%sum%
echo 10-3=%sub%
echo 10*3=%mul%
echo 10/3=%div%
echo 10%%3=%mod%

set count=0
:: 自增1
set /a count+=1
echo 自增后：%count%
:: 自减1
set /a count-=1
echo 自减后：%count%

pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>10+3=13
10-3=7
10*3=30
10/3=3
10%3=1
自增后：1
自减后：0
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(6)字符串拼接</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
set prefix=Hello
set suffix=World
:: 拼接1：变量+文本
set str1=%prefix%_2025
:: 拼接2：变量+变量
set str2=%prefix% %suffix%

:: 输出 Hello_2025
echo str1=%str1%
:: 输出 Hello World
echo str2=%str2%  
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str1=Hello_2025
str2=Hello World
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(7)字符串截取</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
:: 长度为11的字符串
set str=abcdefghijk

:: 截取前3个字符(位置0，长度3) 输出 abc
echo 前3个字符：%str:~0,3%
:: 截取从第5个字符开始到末尾(位置4，不写长度)输出 efghijk
echo 从第5个字符开始：%str:~4%  
:: 截取最后3个字符(起始位置-3，不写长度)输出 ijk
echo 最后3个字符：%str:~-3%
:: 截取从开头到倒数第2个字符(起始0，长度-2)输出 abcdefghi
echo 到倒数第2个字符：%str:~0,-2%
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前3个字符：abc
从第5个字符开始：efghijk
最后3个字符：ijk
到倒数第2个字符：abcdefghi
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(8)字符串替换</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
set path=D:\\test\\old_folder\\file.txt

:: 替换文件夹名称(old_folder → new_folder)
set new_path=%path:old_folder=new_folder%

:: 输出 D:\\test\\new_folder\\file.txt
echo 替换后：%new_path%

:: 删除所有反斜杠(\\)
set no_slash=%path:\\=%

:: 输出 D:testold_folderfile.txt
echo 无反斜杠：%no_slash%

pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>替换后：D:\\test\\new_folder\\file.txt
无反斜杠：D:testold_folderfile.txt
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-条件判断" tabindex="-1"><a class="header-anchor" href="#if-条件判断" aria-hidden="true">#</a> if 条件判断</h3><p>if命令用于根据指定条件是否成立，决定执行不同的命令。</p><p><b style="color:#3e547d;">基础语法</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code># 单条件判断
if 条件 (
    条件成立时执行的命令
)

# 双条件判断
if 条件 (
    条件成立时执行的命令
) else (
    条件不成立时执行的命令
)

# 多条件判断
if 条件1 (
    条件1成立时执行
) else if 条件2 (
    条件2成立时执行
) else (
    所有条件都不成立时执行
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(1)字符串比较</b></p><table><thead><tr><th>运算符</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>==</td><td>等于</td><td>if &quot;%str1%&quot;==&quot;abc&quot;</td></tr><tr><td>neq</td><td>不等于</td><td>if &quot;%str1%&quot; neq &quot;abc&quot;</td></tr></tbody></table><p><b style="color:#3e547d;">(2)数值比较</b></p><table><thead><tr><th>运算符</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>equ</td><td>等于</td><td>if %num% equ 10</td></tr><tr><td>neq</td><td>不等于</td><td>if %num% neq 10</td></tr><tr><td>gtr</td><td>大于</td><td>if %num% gtr 10</td></tr><tr><td>geq</td><td>大于等于</td><td>if %num% geq 10</td></tr><tr><td>lss</td><td>小于</td><td>if %num% lss 10</td></tr><tr><td>leq</td><td>小于等于</td><td>if %num% leq 10</td></tr></tbody></table><p><b style="color:#3e547d;">(3)文件存在性判断</b></p><table><thead><tr><th>语法</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>if exist 路径</td><td>判断文件 / 目录是否存在</td><td>if exist test.txt</td></tr><tr><td>if not exist 路径</td><td>判断文件 / 目录是否不存在</td><td>if not exist test_folder</td></tr></tbody></table><h3 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h3><p><b style="color:#3e547d;">基础语法</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>for %%变量名 in (遍历对象) do (
    对每个遍历对象执行的命令
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
echo 遍历字符串列表：
echo ----------------
:: 遍历括号内的字符串（用空格分隔多个元素）
for %%i in (苹果 香蕉 橙子 葡萄) do (
    echo 水果：%%i
)
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>遍历字符串列表：
----------------
水果：苹果
水果：香蕉
水果：橙子
水果：葡萄
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goto-跳转" tabindex="-1"><a class="header-anchor" href="#goto-跳转" aria-hidden="true">#</a> goto 跳转</h3><p><strong>goto</strong>命令用于跳转到脚本中指定标签(Label)位置，执行标签后的代码，而跳过标签之前(跳转点之后)的代码。</p><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
set /p opt=请选择操作（1-执行功能A，2-执行功能B）：

:: 根据输入跳转
if &quot;%opt%&quot;==&quot;1&quot; goto funcA
if &quot;%opt%&quot;==&quot;2&quot; goto funcB
:: 若输入无效，跳转到错误提示
goto error

:: 功能A标签
:funcA
echo 你选择了功能A，正在执行...
echo 功能A执行完成！
:: 执行完跳转到脚本结束，避免执行其他标签
goto end

:: 功能B标签
:funcB
echo 你选择了功能B，正在执行...
echo 功能B执行完成！
:: 跳过错误提示
goto end

:: 错误提示标签
:error
echo 输入无效，请选择1或2！
goto end  :: 跳转到结束

:: 脚本结束标签
:end
echo 脚本执行完毕。
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请选择操作（1-执行功能A，2-执行功能B）：1
你选择了功能A，正在执行...
功能A执行完成！
脚本执行完毕。
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="title-窗口标题" tabindex="-1"><a class="header-anchor" href="#title-窗口标题" aria-hidden="true">#</a> title 窗口标题</h3><p><strong>title</strong>用于设置当前CMD控制台窗口的标题栏文本。</p><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
:: 设置窗口标题
title tensoflow
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><p>CMD窗口显示tensoflow标题</p><h3 id="color-控制台颜色" tabindex="-1"><a class="header-anchor" href="#color-控制台颜色" aria-hidden="true">#</a> color 控制台颜色</h3><p><strong>color</strong> 命令用于设置当前 CMD 控制台窗口的<strong>背景色</strong>和<strong>前景色(文字颜色)</strong>，默认情况下控制台是黑底白字。它的核心价值是：</p><ul><li>区分脚本的不同执行阶段（比如错误提示用红底黄字，正常输出用黑底绿字）；</li><li>提升脚本界面的可读性，避免单调的黑白配色。</li></ul><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
title 颜色设置示例

:: 1. 黑底绿字（背景0，前景2）- 正常输出
color 02
echo ======================
echo 正常执行：黑底绿字
echo ======================
pause

:: 2. 黑底亮红色（背景0，前景C）- 错误提示
color 0C
echo ======================
echo 错误提示：黑底亮红色
echo ======================
pause

:: 3. 蓝底黄色（背景1，前景6）- 警告提示
color 16
echo ======================
echo 警告提示：蓝底黄色
echo ======================
pause

:: 恢复默认配色（黑底白字）
color
echo 已恢复默认配色（黑底白字）
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="taskkill-结束进程" tabindex="-1"><a class="header-anchor" href="#taskkill-结束进程" aria-hidden="true">#</a> taskkill 结束进程</h3><p>强制结束正在运行的进程。</p><p><b style="color:#3e547d;">(1)按照进程名结束单个进程</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off

echo 正在结束Reminder.exe进程...

:: 强制结束Reminder.exe进程
:: /f 强制结束 /im 指定进程名
taskkill /f /im Reminder.exe

pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">小贴士</p><p><b style="color:#A6522C;">此处进程名就是任务管理器里存在的进程名或映像名称对应的.exe文件名</b></p></div><h3 id="timeout-休眠" tabindex="-1"><a class="header-anchor" href="#timeout-休眠" aria-hidden="true">#</a> timeout 休眠</h3><p>用于让脚本暂停执行指定时长。</p><p><b style="color:#3e547d;">基础语法</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code># /t 必选参数 指定等待的秒数
# /nobreak 可选参数 禁用按键跳过功能
# &gt; nul 可选参数 屏蔽timeout自带的倒计时提示
timeout /t [等待秒数] /nobreak &gt; nul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">(1)基础使用</b></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off

echo ======================
echo 脚本将等待5秒后继续执行（按任意键可跳过）
echo ======================

:: 等待5秒，允许按键跳过
timeout /t 5

echo 等待结束，脚本继续执行！

pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;">执行效果</b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>======================
脚本将等待5秒后继续执行（按任意键可跳过）
======================

等待 3 秒，按一个键继续 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,158),l=[a];function r(c,t){return n(),i("div",null,l)}const b=e(d,[["render",r],["__file","Bat.html.vue"]]);export{b as default};
