import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as p,c as u,a as c,w as a,b as n,d as s,e as t}from"./app-9eba4673.js";const k={},m=n("h1",{id:"服务器部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务器部署","aria-hidden":"true"},"#"),s(" 服务器部署")],-1),d=n("p",null,[s("首先在Linux服务器上创建一个"),n("strong",null,"项目部署根目录")],-1),b=n("h2",{id:"mysql安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql安装","aria-hidden":"true"},"#"),s(" MySQL安装")],-1),v=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# Docker Compose 文件版本"),s(`
`),n("span",{class:"token comment"},"# 3.8 版本功能完善且兼容性好，支持大多数 Docker 版本"),s(`
`),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.8'"),s(`

`),n("span",{class:"token comment"},"# 服务定义"),s(`
`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(`

  `),n("span",{class:"token comment"},"# MySQL 服务"),s(`
  `),n("span",{class:"token key atrule"},"mysql"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# 使用 MySQL 8.0 官方镜像"),s(`
    `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" mysql"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"8.0"),s(`
    
    `),n("span",{class:"token comment"},"# 容器名称(方便管理和识别)"),s(`
    `),n("span",{class:"token key atrule"},"container_name"),n("span",{class:"token punctuation"},":"),s(` mysql8.0
    
    `),n("span",{class:"token comment"},"# 重启策略"),s(`
    `),n("span",{class:"token comment"},"# - no: 不自动重启（默认）"),s(`
    `),n("span",{class:"token comment"},"# - always: 总是自动重启"),s(`
    `),n("span",{class:"token comment"},"# - on-failure: 仅在异常退出时重启"),s(`
    `),n("span",{class:"token comment"},"# - unless-stopped: 除非手动停止，否则自动重启"),s(`
    `),n("span",{class:"token key atrule"},"restart"),n("span",{class:"token punctuation"},":"),s(` always
    
    `),n("span",{class:"token comment"},"# 环境变量"),s(`
    `),n("span",{class:"token key atrule"},"environment"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# root用户密码(生产环境建议使用强密码)"),s(`
      `),n("span",{class:"token key atrule"},"MYSQL_ROOT_PASSWORD"),n("span",{class:"token punctuation"},":"),s(` root
      `),n("span",{class:"token comment"},"# 容器启动时自动创建的数据库"),s(`
      `),n("span",{class:"token comment"},"# MYSQL_DATABASE: auto-report"),s(`
      `),n("span",{class:"token comment"},"# 时区设置（东八区）"),s(`
      `),n("span",{class:"token key atrule"},"TZ"),n("span",{class:"token punctuation"},":"),s(` Asia/Shanghai
    
    `),n("span",{class:"token comment"},"# 端口映射"),s(`
    `),n("span",{class:"token comment"},'# 格式: "宿主机端口:容器端口"'),s(`
    `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# 宿主机 13306 端口 -> 容器 3306 端口"),s(`
      `),n("span",{class:"token comment"},"# 外部访问: mysql -h 127.0.0.1 -P 13306 -uroot -proot"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"13306:3306"'),s(`
    
    `),n("span",{class:"token comment"},"# 数据卷挂载 格式: 宿主机路径:容器路径"),s(`
    `),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# 数据持久化（存储数据库文件）"),s(`
      `),n("span",{class:"token comment"},"# 容器删除后数据依然保留"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./mysql"),n("span",{class:"token punctuation"},"-"),s("data"),n("span",{class:"token punctuation"},":"),s(`/var/lib/mysql
      
      `),n("span",{class:"token comment"},"# 初始化脚本目录"),s(`
      `),n("span",{class:"token comment"},"# 首次启动时自动执行该目录下的 .sql/.sh 文件"),s(`
      `),n("span",{class:"token comment"},"# 仅在数据目录为空时执行一次"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./mysql"),n("span",{class:"token punctuation"},"-"),s("init"),n("span",{class:"token punctuation"},":"),s("/docker"),n("span",{class:"token punctuation"},"-"),s("entrypoint"),n("span",{class:"token punctuation"},"-"),s(`initdb.d
      
      `),n("span",{class:"token comment"},"# 自定义配置文件目录"),s(`
      `),n("span",{class:"token comment"},"# 在此目录放置 my.cnf 文件覆盖默认配置"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./conf"),n("span",{class:"token punctuation"},":"),s(`/etc/mysql/conf.d
      
      `),n("span",{class:"token comment"},"# 日志目录（慢查询日志、错误日志等）"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./mysql"),n("span",{class:"token punctuation"},"-"),s("logs"),n("span",{class:"token punctuation"},":"),s(`/var/log/mysql
    
    `),n("span",{class:"token comment"},"# 启动命令参数"),s(`
    `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# 使用传统密码验证方式"),s(`
      `),n("span",{class:"token comment"},"# MySQL 8.0 默认 caching_sha2_password，部分客户端不兼容"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),s("default"),n("span",{class:"token punctuation"},"-"),s("authentication"),n("span",{class:"token punctuation"},"-"),s(`plugin=mysql_native_password
    
    `),n("span",{class:"token comment"},"# 定期检测容器内服务是否正常运行"),s(`
    `),n("span",{class:"token key atrule"},"healthcheck"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# 检测命令"),s(`
      `),n("span",{class:"token key atrule"},"test"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"CMD"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"mysqladmin"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"-h"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"localhost"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"-uroot"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"-proot"'),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token comment"},"# 检查间隔"),s(`
      `),n("span",{class:"token key atrule"},"interval"),n("span",{class:"token punctuation"},":"),s(` 10s
      `),n("span",{class:"token comment"},"# 超时时间"),s(`
      `),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(` 5s
      `),n("span",{class:"token comment"},"# 失败重试次数"),s(`
      `),n("span",{class:"token key atrule"},"retries"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),s(`
      `),n("span",{class:"token comment"},"# 启动等待时间（给 MySQL 足够的启动时间）"),s(`
      `),n("span",{class:"token key atrule"},"start_period"),n("span",{class:"token punctuation"},":"),s(` 30s

`),n("span",{class:"token comment"},"# 数据卷定义"),s(`
`),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token comment"},"# MySQL 数据卷"),s(`
  `),n("span",{class:"token key atrule"},"mysql-data"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"driver"),n("span",{class:"token punctuation"},":"),s(` local
  
  `),n("span",{class:"token comment"},"# 日志数据卷"),s(`
  `),n("span",{class:"token key atrule"},"mysql-logs"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"driver"),n("span",{class:"token punctuation"},":"),s(` local
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-cnf line-numbers-mode","data-ext":"cnf"},[n("pre",{class:"language-cnf"},[n("code",null,`[mysqld]
# 字符集配置
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
default-time-zone='+08:00'

# 连接配置
max_connections=1000
max_allowed_packet=64M

# InnoDB 性能优化
innodb_buffer_pool_size=256M
innodb_log_file_size=64M
innodb_flush_log_at_trx_commit=2
innodb_flush_method=O_DIRECT

# 查询缓存（MySQL 8.0 已移除，但保留兼容性）
# query_cache_type=0
# query_cache_size=0

# 日志配置
# 慢查询日志
slow_query_log=1
slow_query_log_file=/var/log/mysql/slow.log
long_query_time=2

# 错误日志
log_error=/var/log/mysql/error.log

# 二进制日志（可选，用于主从复制和数据恢复）
# log_bin=/var/log/mysql/mysql-bin
# binlog_format=ROW
# expire_logs_days=7

# SQL 模式设置
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION

# 表名大小写敏感性（0=敏感，1=不敏感，2=创建时大写，查询时小写）
# Windows 下建议设置为 1
lower_case_table_names=1

[client]
# 客户端默认字符集
default-character-set=utf8mb4
port=3306

[mysql]
# MySQL 命令行工具配置
default-character-set=utf8mb4
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/bash"),s(`

`),n("span",{class:"token comment"},"################################################################################"),s(`
`),n("span",{class:"token comment"},"# MySQL Docker 自动化部署脚本"),s(`
`),n("span",{class:"token comment"},"# 功能: 自动检查环境、部署 MySQL 容器、执行验证测试"),s(`
`),n("span",{class:"token comment"},"# 使用: ./mysql-deploy.sh"),s(`
`),n("span",{class:"token comment"},"################################################################################"),s(`

`),n("span",{class:"token builtin class-name"},"set"),s(),n("span",{class:"token parameter variable"},"-e"),s("  "),n("span",{class:"token comment"},"# 遇到错误立即退出"),s(`

`),n("span",{class:"token comment"},"# 切换到脚本所在目录"),s(`
`),n("span",{class:"token assign-left variable"},"SCRIPT_DIR"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"$(cd "'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"dirname"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$0"),s('"')]),n("span",{class:"token variable"},")")]),s('"')]),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"pwd"),n("span",{class:"token punctuation"},")"),n("span",{class:"token string"},`"
cd "`),n("span",{class:"token variable"},"$SCRIPT_DIR"),n("span",{class:"token string"},[s(`"

# 颜色定义
RED='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;31m'
GREEN='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;32m'
YELLOW='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[1;33m'
BLUE='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;34m'
NC='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0m' # No Color

# 配置信息
COMPOSE_FILE="`)]),s("docker-compose-mysql.yml"),n("span",{class:"token string"},`"
CONTAINER_NAME="`),s("mysql8.0"),n("span",{class:"token string"},`"
MYSQL_PORT="`),n("span",{class:"token number"},"13306"),n("span",{class:"token string"},`"
MYSQL_ROOT_PASSWORD="`),s("root"),n("span",{class:"token string"},`"

# Docker Compose 命令（将自动检测）
DOCKER_COMPOSE_CMD="`),s(`"

`),n("span",{class:"token comment"},"# 打印带颜色的消息"),s(`
`),n("span",{class:"token function-name function"},"print_info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("[INFO]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("[SUCCESS]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${YELLOW}"),s("[WARNING]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${RED}"),s("[ERROR]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_step"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),n("span",{class:"token variable"},"$1"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 执行 Docker Compose 命令"),s(`
`),n("span",{class:"token function-name function"},"run_compose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查命令是否存在"),s(`
`),n("span",{class:"token function-name function"},"check_command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token variable"},"$1"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$1"),s(' 未安装"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_success `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$1"),s(' 已安装"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查端口是否被占用"),s(`
`),n("span",{class:"token function-name function"},"check_port"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"netstat"),s(),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$1"),s(' "')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$1"),s(' 已被占用"')]),s(`
        `),n("span",{class:"token function"},"netstat"),s(),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$1"),s(' "')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_success `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$1"),s(' 可用"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检测 Docker Compose 命令"),s(`
`),n("span",{class:"token function-name function"},"detect_docker_compose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_info `),n("span",{class:"token string"},'"检测 Docker Compose..."'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(" compose version "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token assign-left variable"},"DOCKER_COMPOSE_CMD"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"docker compose"'),s(`
        print_success `),n("span",{class:"token string"},'"使用: docker compose (V2)"'),s(`
        `),n("span",{class:"token function"},"docker"),s(` compose version
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"elif"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token function"},"docker-compose"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker-compose"),s(" version "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token assign-left variable"},"DOCKER_COMPOSE_CMD"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"docker-compose"'),s(`
            print_success `),n("span",{class:"token string"},'"使用: docker-compose (V1)"'),s(`
            `),n("span",{class:"token function"},"docker-compose"),s(` version
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_error `),n("span",{class:"token string"},'"docker-compose 存在版本兼容性问题"'),s(`
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"未找到 Docker Compose"'),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 主程序"),s(`
`),n("span",{class:"token function-name function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_step `),n("span",{class:"token string"},'"MySQL Docker 自动化部署脚本"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"工作目录: '),n("span",{class:"token variable"},"$SCRIPT_DIR"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"配置文件: '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"容器名称: '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"MySQL 端口: '),n("span",{class:"token variable"},"$MYSQL_PORT"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"部署时间: '),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(),n("span",{class:"token string"},"'+%Y-%m-%d %H:%M:%S'"),n("span",{class:"token variable"},")")]),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`

    `),n("span",{class:"token comment"},"# 步骤 1: 检查系统环境"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 1/6: 检查系统环境"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查操作系统..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token parameter variable"},"-f"),s(" /etc/os-release "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"."),s(` /etc/os-release
        print_success `),n("span",{class:"token string"},[s('"操作系统: '),n("span",{class:"token variable"},"$NAME"),s(),n("span",{class:"token variable"},"$VERSION"),s('"')]),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_warning `),n("span",{class:"token string"},'"无法识别操作系统"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查系统架构..."'),s(`
    print_success `),n("span",{class:"token string"},[s('"系统架构: '),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"uname"),s(),n("span",{class:"token parameter variable"},"-m"),n("span",{class:"token variable"},")")]),s('"')]),s(`
    
    print_info `),n("span",{class:"token string"},'"检查可用磁盘空间..."'),s(`
    `),n("span",{class:"token assign-left variable"},"DISK_AVAIL"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"df"),s(),n("span",{class:"token parameter variable"},"-h"),s(),n("span",{class:"token builtin class-name"},"."),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"awk"),s(),n("span",{class:"token string"},"'NR==2 {print $4}'"),n("span",{class:"token variable"},")")]),s(`
    print_success `),n("span",{class:"token string"},[s('"可用磁盘空间: '),n("span",{class:"token variable"},"$DISK_AVAIL"),s('"')]),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 2: 检查 Docker 环境"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 2/6: 检查 Docker 环境"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" check_command "),n("span",{class:"token function"},"docker"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},'"请先安装 Docker"'),s(`
        print_info `),n("span",{class:"token string"},'"安装命令: curl -fsSL https://get.docker.com | bash"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token parameter variable"},"--version"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker 服务状态..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" systemctl is-active "),n("span",{class:"token parameter variable"},"--quiet"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token function"},"docker"),s(" info "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},'"Docker 服务未运行"'),s(`
        print_info `),n("span",{class:"token string"},'"启动命令: systemctl start docker"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    print_success `),n("span",{class:"token string"},'"Docker 服务运行正常"'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" detect_docker_compose"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 3: 检查部署文件"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 3/6: 检查部署文件"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查当前目录..."'),s(`
    `),n("span",{class:"token builtin class-name"},"pwd"),s(`
    `),n("span",{class:"token function"},"ls"),s(),n("span",{class:"token parameter variable"},"-la"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker Compose 配置文件..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"找不到 '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' 文件"')]),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    print_success `),n("span",{class:"token string"},[s('"找到 '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 MySQL 配置文件..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},'"conf/my.cnf"'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_warning `),n("span",{class:"token string"},'"找不到配置文件 conf/my.cnf（将使用默认配置）"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_success `),n("span",{class:"token string"},'"找到配置文件 conf/my.cnf"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"验证 Docker Compose 配置..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(" run_compose config "),n("span",{class:"token operator"},">"),s(" /dev/null "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),n("span",{class:"token file-descriptor important"},"&1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"配置文件语法正确"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"配置文件语法错误"'),s(`
        run_compose config
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 4: 检查端口和容器状态"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 4/6: 检查端口和容器状态"'),s(`
    
    print_info `),n("span",{class:"token string"},[s('"检查端口 '),n("span",{class:"token variable"},"$MYSQL_PORT"),s(' 是否被占用..."')]),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token function"},"netstat"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        check_port `),n("span",{class:"token variable"},"$MYSQL_PORT"),s(),n("span",{class:"token operator"},"||"),s(" print_warning "),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$MYSQL_PORT"),s(' 已被占用，继续可能会失败"')]),s(`
    `),n("span",{class:"token keyword"},"elif"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(" ss "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" ss "),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$MYSQL_PORT"),s(' "')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_warning `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$MYSQL_PORT"),s(' 已被占用"')]),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_success `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$MYSQL_PORT"),s(' 可用"')]),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_warning `),n("span",{class:"token string"},'"netstat/ss 未安装，跳过端口检查"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查是否存在同名容器..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_warning `),n("span",{class:"token string"},[s('"容器 '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' 已存在"')]),s(`
        `),n("span",{class:"token builtin class-name"},"read"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},'"是否删除并重新创建？[y/N] "'),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token parameter variable"},"-r"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token environment constant"},"$REPLY"),s(),n("span",{class:"token operator"},"=~"),s(" ^"),n("span",{class:"token punctuation"},"["),s("Yy"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_info `),n("span",{class:"token string"},'"停止并删除现有容器..."'),s(`
            run_compose down `),n("span",{class:"token parameter variable"},"-v"),s(`
            print_success `),n("span",{class:"token string"},'"已删除现有容器"'),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_info `),n("span",{class:"token string"},'"保留现有容器，尝试启动..."'),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 5: 拉取镜像并启动"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 5/6: 拉取镜像并启动容器"'),s(`
    
    print_info `),n("span",{class:"token string"},'"拉取 MySQL 8.0 镜像..."'),s(`
    print_warning `),n("span",{class:"token string"},'"首次拉取可能需要几分钟，请耐心等待..."'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(" run_compose pull"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"镜像拉取成功"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"镜像拉取失败"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"启动容器（后台运行）..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(" run_compose up -d"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"容器启动命令执行成功"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"容器启动失败"'),s(`
        print_info `),n("span",{class:"token string"},'"查看日志: run_compose logs"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"等待 MySQL 服务就绪（最多等待 90 秒）..."'),s(`
    `),n("span",{class:"token assign-left variable"},"WAIT_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token assign-left variable"},"MAX_WAIT"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"90"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$WAIT_TIME"),s(),n("span",{class:"token parameter variable"},"-lt"),s(),n("span",{class:"token variable"},"$MAX_WAIT"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" mysqladmin "),n("span",{class:"token function"},"ping"),s(),n("span",{class:"token parameter variable"},"-h"),s(" localhost "),n("span",{class:"token parameter variable"},"--silent"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
            print_success `),n("span",{class:"token string"},'"MySQL 服务已就绪"'),s(`
            `),n("span",{class:"token builtin class-name"},"break"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token string"},'"."'),s(`
        `),n("span",{class:"token function"},"sleep"),s(),n("span",{class:"token number"},"3"),s(`
        `),n("span",{class:"token assign-left variable"},"WAIT_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$(("),s("WAIT_TIME "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token variable"},"))")]),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$WAIT_TIME"),s(),n("span",{class:"token parameter variable"},"-ge"),s(),n("span",{class:"token variable"},"$MAX_WAIT"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
        print_error `),n("span",{class:"token string"},'"MySQL 服务启动超时"'),s(`
        print_info `),n("span",{class:"token string"},'"查看日志:"'),s(`
        run_compose logs `),n("span",{class:"token parameter variable"},"--tail"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"50"),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 6: 验证部署"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 6/6: 验证部署"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查容器状态..."'),s(`
    run_compose `),n("span",{class:"token function"},"ps"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 MySQL 版本..."'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" mysql "),n("span",{class:"token parameter variable"},"-uroot"),s(" -p"),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$MYSQL_ROOT_PASSWORD"),s('"')]),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},'"SELECT VERSION();"'),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"||"),s(" print_warning "),n("span",{class:"token string"},'"无法获取版本信息"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查数据库列表..."'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" mysql "),n("span",{class:"token parameter variable"},"-uroot"),s(" -p"),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$MYSQL_ROOT_PASSWORD"),s('"')]),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},'"SHOW DATABASES;"'),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"||"),s(" print_warning "),n("span",{class:"token string"},'"无法获取数据库列表"'),s(`
    
    `),n("span",{class:"token comment"},"# 部署完成"),s(`
    print_step `),n("span",{class:"token string"},'"部署完成！"'),s(`
    
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("✓ MySQL 容器已成功部署并运行"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"============================================"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"容器信息："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 容器名称: '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - MySQL 端口: '),n("span",{class:"token variable"},"$MYSQL_PORT"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - Root 密码: '),n("span",{class:"token variable"},"$MYSQL_ROOT_PASSWORD"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"连接方式："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  mysql -h 127.0.0.1 -P '),n("span",{class:"token variable"},"$MYSQL_PORT"),s(" -uroot -p'"),n("span",{class:"token variable"},"$MYSQL_ROOT_PASSWORD"),s(`'"`)]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"JDBC URL:"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  jdbc:mysql://localhost:'),n("span",{class:"token variable"},"$MYSQL_PORT"),s('/your_database?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"常用命令："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 查看日志: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' logs -f"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 停止容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' stop"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 启动容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' start"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 重启容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' restart"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 删除容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' down"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 进入容器: docker exec -it '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' bash"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 进入MySQL: docker exec -it '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" mysql -uroot -p'"),n("span",{class:"token variable"},"$MYSQL_ROOT_PASSWORD"),s(`'"`)]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"============================================"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    
    print_success `),n("span",{class:"token string"},'"部署脚本执行完毕！"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 捕获错误"),s(`
`),n("span",{class:"token builtin class-name"},"trap"),s(),n("span",{class:"token string"},`'print_error "部署过程中发生错误，请检查日志"; exit 1'`),s(` ERR

`),n("span",{class:"token comment"},"# 执行主程序"),s(`
main `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=t(`<p>以上三个文件都创建好之后，在mysql目录下执行下方代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 授权</span>
<span class="token function">chmod</span> +x mysql-deploy.sh

<span class="token comment"># 执行</span>
./mysql-deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis安装" tabindex="-1"><a class="header-anchor" href="#redis安装" aria-hidden="true">#</a> Redis安装</h2>`,3),y=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# Docker Compose 文件 - Redis 配置"),s(`

`),n("span",{class:"token comment"},"# 定义服务列表"),s(`
`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token comment"},"# 服务名称"),s(`
  `),n("span",{class:"token key atrule"},"redis"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# 使用的 Docker 镜像"),s(`
    `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" redis"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"7.4"),s(`
    `),n("span",{class:"token comment"},"# 容器名称，启动后的容器会叫这个名字"),s(`
    `),n("span",{class:"token key atrule"},"container_name"),n("span",{class:"token punctuation"},":"),s(` redis7.4
    `),n("span",{class:"token comment"},"# 容器重启策略"),s(`
    `),n("span",{class:"token comment"},"# always: 无论容器因何种原因停止，都会自动重启"),s(`
    `),n("span",{class:"token key atrule"},"restart"),n("span",{class:"token punctuation"},":"),s(` always
    `),n("span",{class:"token comment"},"# 环境变量配置"),s(`
    `),n("span",{class:"token key atrule"},"environment"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# 设置容器时区为上海时区（东八区）"),s(`
      `),n("span",{class:"token key atrule"},"TZ"),n("span",{class:"token punctuation"},":"),s(` Asia/Shanghai
    
    `),n("span",{class:"token comment"},"# 端口映射配置"),s(`
    `),n("span",{class:"token comment"},'# 格式: "宿主机端口:容器端口"'),s(`
    `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"16379:6379"'),s(`
      `),n("span",{class:"token comment"},"# - 宿主机端口: 16379"),s(`
      `),n("span",{class:"token comment"},"# - 容器端口: 6379"),s(`
      `),n("span",{class:"token comment"},"# - 外部需要通过 localhost:16379 来访问 Redis"),s(`
      `),n("span",{class:"token comment"},"# - 容器内部 Redis 仍然运行在 6379 端口"),s(`
    
    `),n("span",{class:"token comment"},"# 数据卷挂载配置"),s(`
    `),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# 持久化数据存储"),s(`
      `),n("span",{class:"token comment"},"# redis-data 是命名卷，存储 Redis 的 RDB/AOF 持久化文件"),s(`
      `),n("span",{class:"token comment"},"# 即使容器删除，数据也不会丢失"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./redis"),n("span",{class:"token punctuation"},"-"),s("data"),n("span",{class:"token punctuation"},":"),s(`/data
      
      `),n("span",{class:"token comment"},"# 自定义配置文件"),s(`
      `),n("span",{class:"token comment"},"# 宿主机的 ./conf/redis.conf 映射到容器的 /etc/redis/redis.conf"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./conf/redis.conf"),n("span",{class:"token punctuation"},":"),s(`/etc/redis/redis.conf
    
    `),n("span",{class:"token comment"},"# Redis 启动命令"),s(`
    `),n("span",{class:"token comment"},"# 使用自定义配置文件启动 Redis"),s(`
    `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(" redis"),n("span",{class:"token punctuation"},"-"),s(`server /etc/redis/redis.conf
    
    `),n("span",{class:"token comment"},"# 健康检查配置"),s(`
    `),n("span",{class:"token key atrule"},"healthcheck"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"test"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"CMD"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"redis-cli"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"-a"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"A9@mK2"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token key atrule"},"interval"),n("span",{class:"token punctuation"},":"),s(` 10s
      `),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(` 5s
      `),n("span",{class:"token key atrule"},"retries"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),s(`
      `),n("span",{class:"token key atrule"},"start_period"),n("span",{class:"token punctuation"},":"),s(` 10s

`),n("span",{class:"token comment"},"# 定义数据卷"),s(`
`),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token comment"},"# 命名数据卷，用于持久化 Redis 数据"),s(`
  `),n("span",{class:"token key atrule"},"redis-data"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# 使用本地存储驱动"),s(`
    `),n("span",{class:"token comment"},"# 数据实际存储在 Docker 的数据目录中"),s(`
    `),n("span",{class:"token key atrule"},"driver"),n("span",{class:"token punctuation"},":"),s(` local
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-conf line-numbers-mode","data-ext":"conf"},[n("pre",{class:"language-conf"},[n("code",null,`# Redis 配置文件

# ================================ 网络配置 ================================
# 绑定地址，0.0.0.0 表示接受所有网络接口的连接
bind 0.0.0.0

# 端口号
port 6379

# 关闭保护模式（配合密码使用）
protected-mode no

# TCP 连接队列长度
tcp-backlog 511

# 客户端空闲超时时间（0 表示不超时）
timeout 0

# TCP keepalive 心跳间隔
tcp-keepalive 300

# ================================ 通用配置 ================================
# 以守护进程方式运行（Docker 中设为 no）
daemonize no

# 日志级别: debug, verbose, notice, warning
loglevel notice

# 日志文件路径（空字符串表示输出到标准输出）
logfile ""

# 数据库数量
databases 16

# ================================ 安全配置 ================================
# 设置密码（重要！生产环境必须设置）
requirepass A9@mK2

# ================================ 内存管理 ================================
# 最大内存限制（根据服务器配置调整）
# maxmemory 256mb

# 内存淘汰策略
# volatile-lru: 从设置了过期时间的 key 中使用 LRU 算法淘汰
# allkeys-lru: 从所有 key 中使用 LRU 算法淘汰
# volatile-random: 从设置了过期时间的 key 中随机淘汰
# allkeys-random: 从所有 key 中随机淘汰
# volatile-ttl: 从设置了过期时间的 key 中淘汰 TTL 最小的
# noeviction: 不淘汰，内存满时返回错误
maxmemory-policy allkeys-lru

# ================================ 持久化配置 - RDB ================================
# RDB 快照保存规则
# save <seconds> <changes>
# 900 秒内至少 1 个 key 变化则保存
save 900 1
# 300 秒内至少 10 个 key 变化则保存
save 300 10
# 60 秒内至少 10000 个 key 变化则保存
save 60 10000

# RDB 文件名
dbfilename dump.rdb

# 数据目录
dir /data

# RDB 保存失败时是否停止写入
stop-writes-on-bgsave-error yes

# RDB 文件是否压缩
rdbcompression yes

# RDB 文件是否校验
rdbchecksum yes

# ================================ 持久化配置 - AOF ================================
# 是否开启 AOF 持久化
appendonly yes

# AOF 文件名
appendfilename "appendonly.aof"

# AOF 同步策略
# always: 每次写入都同步（最安全，最慢）
# everysec: 每秒同步一次（推荐）
# no: 由操作系统决定何时同步（最快，最不安全）
appendfsync everysec

# AOF 重写期间是否暂停同步
no-appendfsync-on-rewrite no

# AOF 文件增长比例触发重写
auto-aof-rewrite-percentage 100

# AOF 文件最小重写大小
auto-aof-rewrite-min-size 64mb

# ================================ 慢查询日志 ================================
# 慢查询时间阈值（微秒），超过此时间的命令会被记录
slowlog-log-slower-than 10000

# 慢查询日志最大长度
slowlog-max-len 128

# ================================ 客户端配置 ================================
# 最大客户端连接数
maxclients 10000
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/bash"),s(`

`),n("span",{class:"token comment"},"################################################################################"),s(`
`),n("span",{class:"token comment"},"# Redis Docker 自动化部署脚本"),s(`
`),n("span",{class:"token comment"},"# 功能: 自动检查环境、部署 Redis 容器、执行验证测试"),s(`
`),n("span",{class:"token comment"},"# 使用: ./deploy-redis.sh"),s(`
`),n("span",{class:"token comment"},"################################################################################"),s(`

`),n("span",{class:"token builtin class-name"},"set"),s(),n("span",{class:"token parameter variable"},"-e"),s("  "),n("span",{class:"token comment"},"# 遇到错误立即退出"),s(`

`),n("span",{class:"token comment"},"# 切换到脚本所在目录"),s(`
`),n("span",{class:"token assign-left variable"},"SCRIPT_DIR"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"$(cd "'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"dirname"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$0"),s('"')]),n("span",{class:"token variable"},")")]),s('"')]),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"pwd"),n("span",{class:"token punctuation"},")"),n("span",{class:"token string"},`"
cd "`),n("span",{class:"token variable"},"$SCRIPT_DIR"),n("span",{class:"token string"},[s(`"

# 颜色定义
RED='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;31m'
GREEN='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;32m'
YELLOW='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[1;33m'
BLUE='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;34m'
NC='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0m' # No Color

# 配置信息
COMPOSE_FILE="`)]),s("docker-compose-redis.yml"),n("span",{class:"token string"},`"
CONTAINER_NAME="`),s("redis7.4"),n("span",{class:"token string"},`"
REDIS_PORT="`),n("span",{class:"token number"},"16379"),n("span",{class:"token string"},`"
REDIS_PASSWORD="`),s("A9@mK2"),n("span",{class:"token string"},`"

# Docker Compose 命令（将自动检测）
DOCKER_COMPOSE_CMD="`),s(`"

`),n("span",{class:"token comment"},"# 打印带颜色的消息"),s(`
`),n("span",{class:"token function-name function"},"print_info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("[INFO]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("[SUCCESS]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${YELLOW}"),s("[WARNING]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${RED}"),s("[ERROR]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_step"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),n("span",{class:"token variable"},"$1"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 执行 Docker Compose 命令"),s(`
`),n("span",{class:"token function-name function"},"run_compose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查命令是否存在"),s(`
`),n("span",{class:"token function-name function"},"check_command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token variable"},"$1"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$1"),s(' 未安装"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_success `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$1"),s(' 已安装"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查端口是否被占用"),s(`
`),n("span",{class:"token function-name function"},"check_port"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"netstat"),s(),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$1"),s(' "')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$1"),s(' 已被占用"')]),s(`
        `),n("span",{class:"token function"},"netstat"),s(),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$1"),s(' "')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"elif"),s(" ss "),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$1"),s(' "')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$1"),s(' 已被占用"')]),s(`
        ss `),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$1"),s(' "')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_success `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$1"),s(' 可用"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检测 Docker Compose 命令"),s(`
`),n("span",{class:"token function-name function"},"detect_docker_compose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_info `),n("span",{class:"token string"},'"检测 Docker Compose..."'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(" compose version "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token assign-left variable"},"DOCKER_COMPOSE_CMD"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"docker compose"'),s(`
        print_success `),n("span",{class:"token string"},'"使用: docker compose (V2)"'),s(`
        `),n("span",{class:"token function"},"docker"),s(` compose version
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"elif"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token function"},"docker-compose"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker-compose"),s(" version "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token assign-left variable"},"DOCKER_COMPOSE_CMD"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"docker-compose"'),s(`
            print_success `),n("span",{class:"token string"},'"使用: docker-compose (V1)"'),s(`
            `),n("span",{class:"token function"},"docker-compose"),s(` version
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_error `),n("span",{class:"token string"},'"docker-compose 存在版本兼容性问题"'),s(`
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"未找到 Docker Compose"'),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 主程序"),s(`
`),n("span",{class:"token function-name function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_step `),n("span",{class:"token string"},'"Redis Docker 自动化部署脚本"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"工作目录: '),n("span",{class:"token variable"},"$SCRIPT_DIR"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"配置文件: '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"容器名称: '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"Redis 端口: '),n("span",{class:"token variable"},"$REDIS_PORT"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"部署时间: '),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(),n("span",{class:"token string"},"'+%Y-%m-%d %H:%M:%S'"),n("span",{class:"token variable"},")")]),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`

    `),n("span",{class:"token comment"},"# 步骤 1: 检查系统环境"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 1/6: 检查系统环境"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查操作系统..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token parameter variable"},"-f"),s(" /etc/os-release "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"."),s(` /etc/os-release
        print_success `),n("span",{class:"token string"},[s('"操作系统: '),n("span",{class:"token variable"},"$NAME"),s(),n("span",{class:"token variable"},"$VERSION"),s('"')]),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_warning `),n("span",{class:"token string"},'"无法识别操作系统"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查系统架构..."'),s(`
    print_success `),n("span",{class:"token string"},[s('"系统架构: '),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"uname"),s(),n("span",{class:"token parameter variable"},"-m"),n("span",{class:"token variable"},")")]),s('"')]),s(`
    
    print_info `),n("span",{class:"token string"},'"检查可用磁盘空间..."'),s(`
    `),n("span",{class:"token assign-left variable"},"DISK_AVAIL"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"df"),s(),n("span",{class:"token parameter variable"},"-h"),s(),n("span",{class:"token builtin class-name"},"."),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"awk"),s(),n("span",{class:"token string"},"'NR==2 {print $4}'"),n("span",{class:"token variable"},")")]),s(`
    print_success `),n("span",{class:"token string"},[s('"可用磁盘空间: '),n("span",{class:"token variable"},"$DISK_AVAIL"),s('"')]),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 2: 检查 Docker 环境"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 2/6: 检查 Docker 环境"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" check_command "),n("span",{class:"token function"},"docker"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},'"请先安装 Docker"'),s(`
        print_info `),n("span",{class:"token string"},'"安装命令: curl -fsSL https://get.docker.com | bash"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token parameter variable"},"--version"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker 服务状态..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" systemctl is-active "),n("span",{class:"token parameter variable"},"--quiet"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token function"},"docker"),s(" info "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},'"Docker 服务未运行"'),s(`
        print_info `),n("span",{class:"token string"},'"启动命令: systemctl start docker"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    print_success `),n("span",{class:"token string"},'"Docker 服务运行正常"'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" detect_docker_compose"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 3: 检查部署文件"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 3/6: 检查部署文件"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查当前目录..."'),s(`
    `),n("span",{class:"token builtin class-name"},"pwd"),s(`
    `),n("span",{class:"token function"},"ls"),s(),n("span",{class:"token parameter variable"},"-la"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker Compose 配置文件..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"找不到 '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' 文件"')]),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    print_success `),n("span",{class:"token string"},[s('"找到 '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Redis 配置文件..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},'"conf/redis.conf"'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_warning `),n("span",{class:"token string"},'"找不到配置文件 conf/redis.conf"'),s(`
        print_info `),n("span",{class:"token string"},'"将创建默认配置文件..."'),s(`
        `),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` conf
        create_default_config
        print_success `),n("span",{class:"token string"},'"已创建默认配置文件"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_success `),n("span",{class:"token string"},'"找到配置文件 conf/redis.conf"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"验证 Docker Compose 配置..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(" run_compose config "),n("span",{class:"token operator"},">"),s(" /dev/null "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),n("span",{class:"token file-descriptor important"},"&1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"配置文件语法正确"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"配置文件语法错误"'),s(`
        run_compose config
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 4: 检查端口和容器状态"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 4/6: 检查端口和容器状态"'),s(`
    
    print_info `),n("span",{class:"token string"},[s('"检查端口 '),n("span",{class:"token variable"},"$REDIS_PORT"),s(' 是否被占用..."')]),s(`
    check_port `),n("span",{class:"token variable"},"$REDIS_PORT"),s(),n("span",{class:"token operator"},"||"),s(" print_warning "),n("span",{class:"token string"},'"端口可能被占用，继续部署可能会失败"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查是否存在同名容器..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_warning `),n("span",{class:"token string"},[s('"容器 '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' 已存在"')]),s(`
        `),n("span",{class:"token builtin class-name"},"read"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},'"是否删除并重新创建？[y/N] "'),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token parameter variable"},"-r"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token environment constant"},"$REPLY"),s(),n("span",{class:"token operator"},"=~"),s(" ^"),n("span",{class:"token punctuation"},"["),s("Yy"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_info `),n("span",{class:"token string"},'"停止并删除现有容器..."'),s(`
            run_compose down `),n("span",{class:"token parameter variable"},"-v"),s(`
            print_success `),n("span",{class:"token string"},'"已删除现有容器"'),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_info `),n("span",{class:"token string"},'"保留现有容器，尝试启动..."'),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 5: 拉取镜像并启动"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 5/6: 拉取镜像并启动容器"'),s(`
    
    print_info `),n("span",{class:"token string"},'"拉取 Redis 镜像..."'),s(`
    print_warning `),n("span",{class:"token string"},'"首次拉取可能需要几分钟，请耐心等待..."'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(" run_compose pull"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"镜像拉取成功"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"镜像拉取失败"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"启动容器（后台运行）..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(" run_compose up -d"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"容器启动命令执行成功"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"容器启动失败"'),s(`
        print_info `),n("span",{class:"token string"},'"查看日志: run_compose logs"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"等待 Redis 服务就绪（最多等待 30 秒）..."'),s(`
    `),n("span",{class:"token assign-left variable"},"WAIT_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token assign-left variable"},"MAX_WAIT"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"30"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$WAIT_TIME"),s(),n("span",{class:"token parameter variable"},"-lt"),s(),n("span",{class:"token variable"},"$MAX_WAIT"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" redis-cli "),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(),n("span",{class:"token function"},"ping"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},'"PONG"'),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
            print_success `),n("span",{class:"token string"},'"Redis 服务已就绪"'),s(`
            `),n("span",{class:"token builtin class-name"},"break"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token string"},'"."'),s(`
        `),n("span",{class:"token function"},"sleep"),s(),n("span",{class:"token number"},"2"),s(`
        `),n("span",{class:"token assign-left variable"},"WAIT_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$(("),s("WAIT_TIME "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token variable"},"))")]),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$WAIT_TIME"),s(),n("span",{class:"token parameter variable"},"-ge"),s(),n("span",{class:"token variable"},"$MAX_WAIT"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
        print_error `),n("span",{class:"token string"},'"Redis 服务启动超时"'),s(`
        print_info `),n("span",{class:"token string"},'"查看日志:"'),s(`
        run_compose logs `),n("span",{class:"token parameter variable"},"--tail"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"50"),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 步骤 6: 验证部署"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 6/6: 验证部署"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查容器状态..."'),s(`
    run_compose `),n("span",{class:"token function"},"ps"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Redis 版本..."'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" redis-cli "),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(" INFO server "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" redis_version "),n("span",{class:"token operator"},"||"),s(" print_warning "),n("span",{class:"token string"},'"无法获取版本信息"'),s(`
    
    print_info `),n("span",{class:"token string"},'"测试 Redis 读写..."'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" redis-cli "),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(" SET test_key "),n("span",{class:"token string"},'"Hello Redis"'),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s(`/dev/null
    `),n("span",{class:"token assign-left variable"},"TEST_VALUE"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(" $CONTAINER_NAME redis-cli "),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(" GET test_key "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null"),n("span",{class:"token variable"},")")]),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TEST_VALUE"),s('"')]),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Hello Redis"'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"Redis 读写测试通过"'),s(`
        `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" redis-cli "),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(" DEL test_key "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s(`/dev/null
    `),n("span",{class:"token keyword"},"else"),s(`
        print_warning `),n("span",{class:"token string"},'"Redis 读写测试失败"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Redis 内存使用..."'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" redis-cli "),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(" INFO memory "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" used_memory_human "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token boolean"},"true"),s(`
    
    `),n("span",{class:"token comment"},"# 部署完成"),s(`
    print_step `),n("span",{class:"token string"},'"部署完成！"'),s(`
    
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("✓ Redis 容器已成功部署并运行"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"============================================"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"容器信息："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 容器名称: '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - Redis 端口: '),n("span",{class:"token variable"},"$REDIS_PORT"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 密码: '),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"连接方式："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  redis-cli -h 127.0.0.1 -p '),n("span",{class:"token variable"},"$REDIS_PORT"),s(" -a '"),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s(`'"`)]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"Docker 连接："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  docker exec -it '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" redis-cli -a '"),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s(`'"`)]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"Spring Boot 配置："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"  spring:"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"    redis:"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"      host: localhost"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"      port: '),n("span",{class:"token variable"},"$REDIS_PORT"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"      password: '),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"      database: 0"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"常用命令："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 查看日志: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' logs -f"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 停止容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' stop"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 启动容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' start"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 重启容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' restart"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 删除容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' down"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 进入容器: docker exec -it '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' bash"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 进入Redis: docker exec -it '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" redis-cli -a '"),n("span",{class:"token variable"},"$REDIS_PASSWORD"),s(`'"`)]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"============================================"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    
    print_success `),n("span",{class:"token string"},'"部署脚本执行完毕！"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 捕获错误"),s(`
`),n("span",{class:"token builtin class-name"},"trap"),s(),n("span",{class:"token string"},`'print_error "部署过程中发生错误，请检查日志"; exit 1'`),s(` ERR

`),n("span",{class:"token comment"},"# 执行主程序"),s(`
main `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=t(`<p>以上三个文件都创建好之后，在redis目录下执行下方代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 授权</span>
<span class="token function">chmod</span> +x redis-deploy.sh

<span class="token comment"># 执行</span>
./redis-deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx安装" tabindex="-1"><a class="header-anchor" href="#nginx安装" aria-hidden="true">#</a> Nginx安装</h2>`,3),$=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# Docker Compose 文件版本"),s(`
`),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'3.8'"),s(`

`),n("span",{class:"token comment"},"# ============================================================"),s(`
`),n("span",{class:"token comment"},"# 服务定义"),s(`
`),n("span",{class:"token comment"},"# ============================================================"),s(`
`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(`
  
  `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
  `),n("span",{class:"token comment"},"# Nginx 服务"),s(`
  `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
  `),n("span",{class:"token key atrule"},"nginx"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# 使用 Nginx 官方稳定版镜像"),s(`
    `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" nginx"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"1.24"),s(`
    
    `),n("span",{class:"token comment"},"# 容器名称"),s(`
    `),n("span",{class:"token key atrule"},"container_name"),n("span",{class:"token punctuation"},":"),s(` nginx1.24
    
    `),n("span",{class:"token comment"},"# 重启策略"),s(`
    `),n("span",{class:"token comment"},"# - no: 不自动重启（默认）"),s(`
    `),n("span",{class:"token comment"},"# - always: 总是自动重启"),s(`
    `),n("span",{class:"token comment"},"# - on-failure: 仅在异常退出时重启"),s(`
    `),n("span",{class:"token comment"},"# - unless-stopped: 除非手动停止，否则自动重启"),s(`
    `),n("span",{class:"token key atrule"},"restart"),n("span",{class:"token punctuation"},":"),s(` always
    
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token comment"},"# 环境变量"),s(`
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token key atrule"},"environment"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"TZ"),n("span",{class:"token punctuation"},":"),s(` Asia/Shanghai
    
    `),n("span",{class:"token comment"},"# 容器内访问宿主机"),s(`
    `),n("span",{class:"token key atrule"},"extra_hosts"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"host.docker.internal:host-gateway"'),s(`
    
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token comment"},"# 端口映射"),s(`
    `),n("span",{class:"token comment"},'# 格式: "宿主机端口:容器内端口"'),s(`
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# ========== 项目端口配置 =========="),s(`
      `),n("span",{class:"token comment"},"# 项目1: notify（前端 7777）"),s(`
      `),n("span",{class:"token comment"},'#- "7777:7777"'),s(`
      `),n("span",{class:"token comment"},"# 项目2: xxx（前端 80）"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"80:80"'),s(`
    
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token comment"},"# 数据卷挂载"),s(`
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# Nginx 配置目录"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./conf.d"),n("span",{class:"token punctuation"},":"),s("/etc/nginx/conf.d"),n("span",{class:"token punctuation"},":"),s(`ro
      
      `),n("span",{class:"token comment"},"# ========== 项目前端目录 =========="),s(`
      `),n("span",{class:"token comment"},"# 项目1: notify"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./html"),n("span",{class:"token punctuation"},"-"),s("notify"),n("span",{class:"token punctuation"},":"),s("/usr/share/nginx/html"),n("span",{class:"token punctuation"},"-"),s("notify"),n("span",{class:"token punctuation"},":"),s(`ro
      `),n("span",{class:"token comment"},"# 项目2: xxx"),s(`
      `),n("span",{class:"token comment"},"# - ./html-project2:/usr/share/nginx/html-project2:ro"),s(`
      
      `),n("span",{class:"token comment"},"# 日志目录"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(" ./logs"),n("span",{class:"token punctuation"},":"),s(`/var/log/nginx
    
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token comment"},"# 健康检查"),s(`
    `),n("span",{class:"token comment"},"# ----------------------------------------------------------"),s(`
    `),n("span",{class:"token key atrule"},"healthcheck"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"test"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"CMD-SHELL"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"nginx -t || exit 1"'),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token key atrule"},"interval"),n("span",{class:"token punctuation"},":"),s(` 30s
      `),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(` 10s
      `),n("span",{class:"token key atrule"},"retries"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),s(`
      `),n("span",{class:"token key atrule"},"start_period"),n("span",{class:"token punctuation"},":"),s(` 10s

`),n("span",{class:"token comment"},"# ============================================================"),s(`
`),n("span",{class:"token comment"},"# 数据卷定义"),s(`
`),n("span",{class:"token comment"},"# ============================================================"),s(`
`),n("span",{class:"token key atrule"},"volumes"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"nginx-logs"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"driver"),n("span",{class:"token punctuation"},":"),s(` local
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-conf line-numbers-mode","data-ext":"conf"},[n("pre",{class:"language-conf"},[n("code",null,`# ============================================================
# 项目1: notify
# 前端端口: 7777
# 后端端口: 7878
# ============================================================
server {
    listen       7777;
    listen  [::]:7777;
    server_name  localhost;
    charset      utf-8;

    # 网站根目录
    root /usr/share/nginx/html-notify;

    # Gzip 压缩配置
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml text/javascript
               application/json application/javascript application/xml
               application/rss+xml application/atom+xml image/svg+xml;

    # 静态资源（直接返回文件）
    location /static/ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    # 前端路由（SPA 支持）
    location / {
        try_files $uri $uri/ /index.html;
        index index.html index.htm;
        
        # 添加这几行，防止 HTML 被缓存
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }

    # 后端 API 代理
    location /prod-api/ {
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://host.docker.internal:7878/;
    }

    # SpringDoc API 文档代理
    location ~ ^/v3/api-docs/(.*) {
        proxy_pass http://host.docker.internal:7878/v3/api-docs/$1;
    }

    # 错误页面
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html-notify;
    }

    # 禁止访问隐藏文件
    location ~ /\\. {
        deny all;
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/bash"),s(`

`),n("span",{class:"token comment"},"################################################################################"),s(`
`),n("span",{class:"token comment"},"# Nginx Docker 自动化部署脚本"),s(`
`),n("span",{class:"token comment"},"# 功能: 自动检查环境、部署 Nginx 容器、执行验证测试"),s(`
`),n("span",{class:"token comment"},"# 使用: ./nginx-deploy.sh"),s(`
`),n("span",{class:"token comment"},"################################################################################"),s(`

`),n("span",{class:"token builtin class-name"},"set"),s(),n("span",{class:"token parameter variable"},"-e"),s("  "),n("span",{class:"token comment"},"# 遇到错误立即退出"),s(`

`),n("span",{class:"token comment"},"# 切换到脚本所在目录"),s(`
`),n("span",{class:"token assign-left variable"},"SCRIPT_DIR"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"$(cd "'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"dirname"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$0"),s('"')]),n("span",{class:"token variable"},")")]),s('"')]),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"pwd"),n("span",{class:"token punctuation"},")"),n("span",{class:"token string"},`"
cd "`),n("span",{class:"token variable"},"$SCRIPT_DIR"),n("span",{class:"token string"},[s(`"

# 颜色定义
RED='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;31m'
GREEN='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;32m'
YELLOW='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[1;33m'
BLUE='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0;34m'
NC='`),n("span",{class:"token entity",title:"\\033"},"\\033"),s(`[0m' # No Color

# ============================================================
# 配置信息（根据需要修改）
# ============================================================
COMPOSE_FILE="`)]),s("docker-compose-nginx.yml"),n("span",{class:"token string"},`"
CONTAINER_NAME="`),s("nginx1.24"),n("span",{class:"token string"},`"

# 项目端口配置（添加新项目时在这里添加端口）
FRONTEND_PORTS=(80)  # 前端端口列表
PROJECT_NAMES=("`),s("wms"),n("span",{class:"token string"},`")  # 项目名称列表
PROJECT_DIRS=("`),s("html-wms"),n("span",{class:"token string"},`")  # 前端目录列表

# Docker Compose 命令（将自动检测）
DOCKER_COMPOSE_CMD="`),s(`"

`),n("span",{class:"token comment"},"# ============================================================"),s(`
`),n("span",{class:"token comment"},"# 工具函数"),s(`
`),n("span",{class:"token comment"},"# ============================================================"),s(`

`),n("span",{class:"token comment"},"# 打印带颜色的消息"),s(`
`),n("span",{class:"token function-name function"},"print_info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("[INFO]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("[SUCCESS]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${YELLOW}"),s("[WARNING]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${RED}"),s("[ERROR]"),n("span",{class:"token variable"},"${NC}"),s(),n("span",{class:"token variable"},"$1"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function-name function"},"print_step"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),n("span",{class:"token variable"},"$1"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${BLUE}"),s("========================================"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 执行 Docker Compose 命令"),s(`
`),n("span",{class:"token function-name function"},"run_compose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查命令是否存在"),s(`
`),n("span",{class:"token function-name function"},"check_command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token variable"},"$1"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$1"),s(' 未安装"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_success `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$1"),s(' 已安装"')]),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查端口是否被占用"),s(`
`),n("span",{class:"token function-name function"},"check_port"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"local"),s(),n("span",{class:"token assign-left variable"},"port"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$1"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token function"},"netstat"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"netstat"),s(),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$port"),s(' "')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"elif"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(" ss "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" ss "),n("span",{class:"token parameter variable"},"-tlnp"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('":'),n("span",{class:"token variable"},"$port"),s(' "')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检测 Docker Compose 命令"),s(`
`),n("span",{class:"token function-name function"},"detect_docker_compose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_info `),n("span",{class:"token string"},'"检测 Docker Compose..."'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(" compose version "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token assign-left variable"},"DOCKER_COMPOSE_CMD"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"docker compose"'),s(`
        print_success `),n("span",{class:"token string"},'"使用: docker compose (V2)"'),s(`
        `),n("span",{class:"token function"},"docker"),s(` compose version
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"elif"),s(),n("span",{class:"token builtin class-name"},"command"),s(),n("span",{class:"token parameter variable"},"-v"),s(),n("span",{class:"token function"},"docker-compose"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker-compose"),s(" version "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token assign-left variable"},"DOCKER_COMPOSE_CMD"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"docker-compose"'),s(`
            print_success `),n("span",{class:"token string"},'"使用: docker-compose (V1)"'),s(`
            `),n("span",{class:"token function"},"docker-compose"),s(` version
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_error `),n("span",{class:"token string"},'"docker-compose 存在版本兼容性问题"'),s(`
            `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"未找到 Docker Compose"'),s(`
        `),n("span",{class:"token builtin class-name"},"return"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 创建目录结构"),s(`
`),n("span",{class:"token function-name function"},"create_directories"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_info `),n("span",{class:"token string"},'"检查并创建目录结构..."'),s(`
    
    `),n("span",{class:"token comment"},"# 创建配置目录"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token string"},'"conf.d"'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` conf.d
        print_success `),n("span",{class:"token string"},'"创建目录: conf.d"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_info `),n("span",{class:"token string"},'"目录已存在: conf.d"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 创建日志目录"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token string"},'"logs"'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` logs
        `),n("span",{class:"token function"},"chmod"),s(),n("span",{class:"token number"},"777"),s(` logs
        print_success `),n("span",{class:"token string"},'"创建目录: logs"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_info `),n("span",{class:"token string"},'"目录已存在: logs"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    `),n("span",{class:"token comment"},"# 创建各项目前端目录"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"dir"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${PROJECT_DIRS"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$dir"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$dir"),s('"')]),s(`
            print_success `),n("span",{class:"token string"},[s('"创建目录: '),n("span",{class:"token variable"},"$dir"),s('"')]),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_info `),n("span",{class:"token string"},[s('"目录已存在: '),n("span",{class:"token variable"},"$dir"),s('"')]),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查配置文件"),s(`
`),n("span",{class:"token function-name function"},"check_config_files"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_info `),n("span",{class:"token string"},'"检查 Nginx 配置文件..."'),s(`
    
    `),n("span",{class:"token builtin class-name"},"local"),s(),n("span",{class:"token assign-left variable"},"missing_configs"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"i"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"!"),s("PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token builtin class-name"},"local"),s(),n("span",{class:"token assign-left variable"},"config_file"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"conf.d/'),n("span",{class:"token variable"},[s("${PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s('.conf"')]),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$config_file"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token assign-left variable"},"missing_configs"),n("span",{class:"token operator"},"+="),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$config_file"),s('"')]),n("span",{class:"token punctuation"},")"),s(`
            print_warning `),n("span",{class:"token string"},[s('"缺少配置文件: '),n("span",{class:"token variable"},"$config_file"),s('"')]),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_success `),n("span",{class:"token string"},[s('"找到配置文件: '),n("span",{class:"token variable"},"$config_file"),s('"')]),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"#"),s("missing_configs"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s(),n("span",{class:"token parameter variable"},"-gt"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_warning `),n("span",{class:"token string"},'"部分配置文件缺失，请确保已创建所需的 .conf 文件"'),s(`
        `),n("span",{class:"token builtin class-name"},"read"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},'"是否继续部署？[y/N] "'),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token parameter variable"},"-r"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token environment constant"},"$REPLY"),s(),n("span",{class:"token operator"},"=~"),s(" ^"),n("span",{class:"token punctuation"},"["),s("Yy"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_info `),n("span",{class:"token string"},'"部署已取消"'),s(`
            `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 检查前端文件"),s(`
`),n("span",{class:"token function-name function"},"check_frontend_files"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_info `),n("span",{class:"token string"},'"检查前端静态文件..."'),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"i"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"!"),s("PROJECT_DIRS"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token builtin class-name"},"local"),s(),n("span",{class:"token assign-left variable"},"dir"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${PROJECT_DIRS"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),s(`
        `),n("span",{class:"token builtin class-name"},"local"),s(),n("span",{class:"token assign-left variable"},"project"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$dir"),s('/index.html"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_success `),n("span",{class:"token string"},[s('"项目 '),n("span",{class:"token variable"},"$project"),s(': 找到 index.html"')]),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_warning `),n("span",{class:"token string"},[s('"项目 '),n("span",{class:"token variable"},"$project"),s(": 未找到 index.html（目录 "),n("span",{class:"token variable"},"$dir"),s(' 为空或缺少文件）"')]),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# ============================================================"),s(`
`),n("span",{class:"token comment"},"# 主程序"),s(`
`),n("span",{class:"token comment"},"# ============================================================"),s(`
`),n("span",{class:"token function-name function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    print_step `),n("span",{class:"token string"},'"Nginx Docker 自动化部署脚本"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"工作目录: '),n("span",{class:"token variable"},"$SCRIPT_DIR"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"配置文件: '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"容器名称: '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"部署时间: '),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(),n("span",{class:"token string"},"'+%Y-%m-%d %H:%M:%S'"),n("span",{class:"token variable"},")")]),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"项目列表:"'),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"i"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"!"),s("PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - '),n("span",{class:"token variable"},[s("${PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s(": 前端端口 "),n("span",{class:"token variable"},[s("${FRONTEND_PORTS"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s(", 目录 "),n("span",{class:"token variable"},[s("${PROJECT_DIRS"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 步骤 1: 检查系统环境"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 1/7: 检查系统环境"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查操作系统..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token parameter variable"},"-f"),s(" /etc/os-release "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"."),s(` /etc/os-release
        print_success `),n("span",{class:"token string"},[s('"操作系统: '),n("span",{class:"token variable"},"$NAME"),s(),n("span",{class:"token variable"},"$VERSION"),s('"')]),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_warning `),n("span",{class:"token string"},'"无法识别操作系统"'),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查系统架构..."'),s(`
    print_success `),n("span",{class:"token string"},[s('"系统架构: '),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"uname"),s(),n("span",{class:"token parameter variable"},"-m"),n("span",{class:"token variable"},")")]),s('"')]),s(`
    
    print_info `),n("span",{class:"token string"},'"检查可用磁盘空间..."'),s(`
    `),n("span",{class:"token assign-left variable"},"DISK_AVAIL"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"df"),s(),n("span",{class:"token parameter variable"},"-h"),s(),n("span",{class:"token builtin class-name"},"."),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"awk"),s(),n("span",{class:"token string"},"'NR==2 {print $4}'"),n("span",{class:"token variable"},")")]),s(`
    print_success `),n("span",{class:"token string"},[s('"可用磁盘空间: '),n("span",{class:"token variable"},"$DISK_AVAIL"),s('"')]),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 步骤 2: 检查 Docker 环境"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 2/7: 检查 Docker 环境"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" check_command "),n("span",{class:"token function"},"docker"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},'"请先安装 Docker"'),s(`
        print_info `),n("span",{class:"token string"},'"安装命令: curl -fsSL https://get.docker.com | bash"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token parameter variable"},"--version"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker 服务状态..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" systemctl is-active "),n("span",{class:"token parameter variable"},"--quiet"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),s("/dev/null "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token function"},"docker"),s(" info "),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},'"Docker 服务未运行"'),s(`
        print_info `),n("span",{class:"token string"},'"启动命令: systemctl start docker"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    print_success `),n("span",{class:"token string"},'"Docker 服务运行正常"'),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s(" detect_docker_compose"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 步骤 3: 创建目录结构"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 3/7: 创建目录结构"'),s(`
    
    create_directories
    
    print_info `),n("span",{class:"token string"},'"当前目录结构:"'),s(`
    `),n("span",{class:"token function"},"ls"),s(),n("span",{class:"token parameter variable"},"-la"),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 步骤 4: 检查部署文件"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 4/7: 检查部署文件"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Docker Compose 配置文件..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-f"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_error `),n("span",{class:"token string"},[s('"找不到 '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' 文件"')]),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    print_success `),n("span",{class:"token string"},[s('"找到 '),n("span",{class:"token variable"},"$COMPOSE_FILE"),s('"')]),s(`
    
    check_config_files
    check_frontend_files
    
    print_info `),n("span",{class:"token string"},'"验证 Docker Compose 配置..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(" run_compose config "),n("span",{class:"token operator"},">"),s(" /dev/null "),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),s(">")]),n("span",{class:"token file-descriptor important"},"&1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"配置文件语法正确"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"配置文件语法错误"'),s(`
        run_compose config
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 步骤 5: 检查端口和容器状态"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 5/7: 检查端口和容器状态"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查端口占用情况..."'),s(`
    `),n("span",{class:"token assign-left variable"},"PORT_CONFLICT"),n("span",{class:"token operator"},"="),s(`false
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"port"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${FRONTEND_PORTS"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" check_port "),n("span",{class:"token variable"},"$port"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_success `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$port"),s(' 可用"')]),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_warning `),n("span",{class:"token string"},[s('"端口 '),n("span",{class:"token variable"},"$port"),s(' 已被占用"')]),s(`
            `),n("span",{class:"token assign-left variable"},"PORT_CONFLICT"),n("span",{class:"token operator"},"="),s(`true
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PORT_CONFLICT"),s('"')]),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_warning `),n("span",{class:"token string"},'"存在端口冲突，继续部署可能会失败"'),s(`
        `),n("span",{class:"token builtin class-name"},"read"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},'"是否继续？[y/N] "'),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token parameter variable"},"-r"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token environment constant"},"$REPLY"),s(),n("span",{class:"token operator"},"=~"),s(" ^"),n("span",{class:"token punctuation"},"["),s("Yy"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_info `),n("span",{class:"token string"},'"部署已取消"'),s(`
            `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查是否存在同名容器..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_warning `),n("span",{class:"token string"},[s('"容器 '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' 已存在"')]),s(`
        `),n("span",{class:"token builtin class-name"},"read"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},'"是否停止并重新创建？[y/N] "'),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token parameter variable"},"-r"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token environment constant"},"$REPLY"),s(),n("span",{class:"token operator"},"=~"),s(" ^"),n("span",{class:"token punctuation"},"["),s("Yy"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_info `),n("span",{class:"token string"},'"停止并删除现有容器..."'),s(`
            run_compose down
            print_success `),n("span",{class:"token string"},'"已删除现有容器"'),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_info `),n("span",{class:"token string"},'"保留现有容器，尝试启动..."'),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 步骤 6: 拉取镜像并启动"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 6/7: 拉取镜像并启动容器"'),s(`
    
    print_info `),n("span",{class:"token string"},'"拉取 Nginx 镜像..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(" run_compose pull"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"镜像拉取成功"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"镜像拉取失败"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"启动容器（后台运行）..."'),s(`
    `),n("span",{class:"token keyword"},"if"),s(" run_compose up -d"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        print_success `),n("span",{class:"token string"},'"容器启动命令执行成功"'),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        print_error `),n("span",{class:"token string"},'"容器启动失败"'),s(`
        print_info `),n("span",{class:"token string"},'"查看日志: run_compose logs"'),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`
    
    print_info `),n("span",{class:"token string"},'"等待 Nginx 服务就绪（最多等待 30 秒）..."'),s(`
    `),n("span",{class:"token assign-left variable"},"WAIT_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token assign-left variable"},"MAX_WAIT"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"30"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$WAIT_TIME"),s(),n("span",{class:"token parameter variable"},"-lt"),s(),n("span",{class:"token variable"},"$MAX_WAIT"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" nginx "),n("span",{class:"token parameter variable"},"-t"),s(),n("span",{class:"token operator"},"&>"),s(" /dev/null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
            print_success `),n("span",{class:"token string"},'"Nginx 服务已就绪"'),s(`
            `),n("span",{class:"token builtin class-name"},"break"),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token string"},'"."'),s(`
        `),n("span",{class:"token function"},"sleep"),s(),n("span",{class:"token number"},"2"),s(`
        `),n("span",{class:"token assign-left variable"},"WAIT_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$(("),s("WAIT_TIME "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token variable"},"))")]),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$WAIT_TIME"),s(),n("span",{class:"token parameter variable"},"-ge"),s(),n("span",{class:"token variable"},"$MAX_WAIT"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
        print_error `),n("span",{class:"token string"},'"Nginx 服务启动超时"'),s(`
        print_info `),n("span",{class:"token string"},'"查看日志:"'),s(`
        run_compose logs `),n("span",{class:"token parameter variable"},"--tail"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"50"),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 步骤 7: 验证部署"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"步骤 7/7: 验证部署"'),s(`
    
    print_info `),n("span",{class:"token string"},'"检查容器状态..."'),s(`
    run_compose `),n("span",{class:"token function"},"ps"),s(`
    
    print_info `),n("span",{class:"token string"},'"检查 Nginx 版本..."'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" nginx "),n("span",{class:"token parameter variable"},"-v"),s(`
    
    print_info `),n("span",{class:"token string"},'"验证 Nginx 配置..."'),s(`
    `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"exec"),s(),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(" nginx "),n("span",{class:"token parameter variable"},"-t"),s(`
    
    print_info `),n("span",{class:"token string"},'"测试各项目访问..."'),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"i"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"!"),s("PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token builtin class-name"},"local"),s(),n("span",{class:"token assign-left variable"},"port"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${FRONTEND_PORTS"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),s(`
        `),n("span",{class:"token builtin class-name"},"local"),s(),n("span",{class:"token assign-left variable"},"project"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-s"),s(),n("span",{class:"token parameter variable"},"-o"),s(" /dev/null "),n("span",{class:"token parameter variable"},"-w"),s(),n("span",{class:"token string"},'"%{http_code}"'),s(),n("span",{class:"token string"},[s('"http://localhost:'),n("span",{class:"token variable"},"$port"),s('"')]),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(),n("span",{class:"token parameter variable"},"-q"),s(),n("span",{class:"token string"},'"200\\|304"'),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            print_success `),n("span",{class:"token string"},[s('"项目 '),n("span",{class:"token variable"},"$project"),s(" (端口 "),n("span",{class:"token variable"},"$port"),s('): 访问正常"')]),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            print_warning `),n("span",{class:"token string"},[s('"项目 '),n("span",{class:"token variable"},"$project"),s(" (端口 "),n("span",{class:"token variable"},"$port"),s('): 无法访问（可能缺少前端文件）"')]),s(`
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"done"),s(`

    `),n("span",{class:"token comment"},"# ========================================"),s(`
    `),n("span",{class:"token comment"},"# 部署完成"),s(`
    `),n("span",{class:"token comment"},"# ========================================"),s(`
    print_step `),n("span",{class:"token string"},'"部署完成！"'),s(`
    
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"${GREEN}"),s("✓ Nginx 容器已成功部署并运行"),n("span",{class:"token variable"},"${NC}"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"============================================"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"容器信息："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 容器名称: '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s('"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"  - 镜像版本: nginx:1.24"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"项目访问地址："'),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"i"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"!"),s("PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("@"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - '),n("span",{class:"token variable"},[s("${PROJECT_NAMES"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s(": http://localhost:"),n("span",{class:"token variable"},[s("${FRONTEND_PORTS"),n("span",{class:"token punctuation"},"["),s("$i"),n("span",{class:"token punctuation"},"]"),s("}")]),s('"')]),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"常用命令："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 查看日志: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' logs -f"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 重载配置: docker exec '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' nginx -s reload"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 测试配置: docker exec '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' nginx -t"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 停止容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' stop"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 启动容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' start"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 重启容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' restart"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 删除容器: '),n("span",{class:"token variable"},"$DOCKER_COMPOSE_CMD"),s(" -f "),n("span",{class:"token variable"},"$COMPOSE_FILE"),s(' down"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  - 进入容器: docker exec -it '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' bash"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"新增项目步骤："'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"  1. 在 conf.d/ 下新增 xxx.conf 配置文件"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"  2. 在 docker-compose-nginx.yml 中添加端口和目录挂载"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"  3. 创建前端目录并放入打包文件"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"  4. 执行: docker exec '),n("span",{class:"token variable"},"$CONTAINER_NAME"),s(' nginx -s reload"')]),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"============================================"'),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'""'),s(`
    
    print_success `),n("span",{class:"token string"},'"部署脚本执行完毕！"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# 捕获错误"),s(`
`),n("span",{class:"token builtin class-name"},"trap"),s(),n("span",{class:"token string"},`'print_error "部署过程中发生错误，请检查日志"; exit 1'`),s(` ERR

`),n("span",{class:"token comment"},"# 执行主程序"),s(`
main `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=t(`<p>以上三个文件都创建好之后，在redis目录下执行下方代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 授权</span>
<span class="token function">chmod</span> +x nginx-deploy.sh

<span class="token comment"># 执行</span>
./nginx-deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdk安装" tabindex="-1"><a class="header-anchor" href="#jdk安装" aria-hidden="true">#</a> JDK安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 Java8 rpm 包</span>
<span class="token function">wget</span> https://corretto.aws/downloads/latest/amazon-corretto-8-x64-linux-jdk.rpm

<span class="token comment"># 安装</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> amazon-corretto-8-x64-linux-jdk.rpm

<span class="token comment"># 检查是否安装成功</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> corretto

<span class="token comment"># 查看安装目录</span>
<span class="token function">ls</span> /usr/lib/jvm/ <span class="token operator">|</span> <span class="token function">grep</span> corretto

<span class="token comment"># 切换系统默认 Java 版本（选择 corretto8 对应的编号）</span>
alternatives <span class="token parameter variable">--config</span> <span class="token function">java</span>

<span class="token comment"># 验证 Java 版本</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function S(N,M){const i=r("CodeTabs");return p(),u("div",null,[m,d,b,c(i,{id:"9",data:[{id:"mysql/docker-compose-mysql.yml"},{id:"mysql/conf/my.cnf"},{id:"mysql/mysql-deploy.sh"}]},{title0:a(({value:e,isActive:l})=>[s("mysql/docker-compose-mysql.yml")]),title1:a(({value:e,isActive:l})=>[s("mysql/conf/my.cnf")]),title2:a(({value:e,isActive:l})=>[s("mysql/mysql-deploy.sh")]),tab0:a(({value:e,isActive:l})=>[v]),tab1:a(({value:e,isActive:l})=>[g]),tab2:a(({value:e,isActive:l})=>[_]),_:1},8,["data"]),f,c(i,{id:"27",data:[{id:"redis/docker-compose-redis.yml"},{id:"redis/conf/redis.conf"},{id:"redis/redis-deploy.sh"}]},{title0:a(({value:e,isActive:l})=>[s("redis/docker-compose-redis.yml")]),title1:a(({value:e,isActive:l})=>[s("redis/conf/redis.conf")]),title2:a(({value:e,isActive:l})=>[s("redis/redis-deploy.sh")]),tab0:a(({value:e,isActive:l})=>[y]),tab1:a(({value:e,isActive:l})=>[h]),tab2:a(({value:e,isActive:l})=>[w]),_:1},8,["data"]),E,c(i,{id:"45",data:[{id:"nginx/docker-compose-nginx.yml"},{id:"nginx/conf.d/notify.conf"},{id:"nginx/nginx-deploy.sh"}]},{title0:a(({value:e,isActive:l})=>[s("nginx/docker-compose-nginx.yml")]),title1:a(({value:e,isActive:l})=>[s("nginx/conf.d/notify.conf")]),title2:a(({value:e,isActive:l})=>[s("nginx/nginx-deploy.sh")]),tab0:a(({value:e,isActive:l})=>[$]),tab1:a(({value:e,isActive:l})=>[O]),tab2:a(({value:e,isActive:l})=>[R]),_:1},8,["data"]),C])}const I=o(k,[["render",S],["__file","服务器部署.html.vue"]]);export{I as default};
