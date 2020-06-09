github release 里面的部分文件 是基于aws服务 如果你所在地区aws被block了

那么 建议使用本工具下载 可以加速下载 避免被block

[greasyfork在线安装链接](https://raw.githubusercontent.com/holoto/github-release-speedup-downloader/master/script.user.js)
[cf代理加速在线安装链接](https://githubspeedupdownloader.holoto.workers.dev/https://raw.githubusercontent.com/holoto/github-release-speedup-downloader/master/script.user.js)
[github在线安装链接](https://raw.githubusercontent.com/holoto/github-release-speedup-downloader/master/script.user.js)

github release speedup downloader 给release添加 一个按钮 使用cf代理加速下载
本脚本源码 开源至 https://github.com/holoto/github-release-speedup-downloader

加速下载后端服务 基于cf worker搭建

加速下载服务源码 基于 https://github.com/hunshcn/gh-proxy

友情提示
    cfworker  免费个人用户10w次请求 如果本项目提供的免费的加速服务 额度用尽
    请自行 参照https://github.com/hunshcn/gh-proxy 搭建 加速服务 把 脚本的 urld 替换为 你自己的加速服务
     这里收集了一些加速服务url
     如果不能加速 额度用尽  脚本的 urld 可以改成这个 https://gh.api.99988866.xyz