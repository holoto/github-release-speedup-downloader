// ==UserScript==
// @name         github release 加速下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  github release speedup downloader 给release添加 一个按钮 使用cf代理加速下载
// @author       https://github.com/holoto
// @match        *://github.com/*/*/releases
// @match        *://github.com/*/*/releases/tag/*
// @run-at       document-end
// @grant        unsafeWindow

// ==/UserScript==

(function() {
    'use strict';
    // console.log("test1");
    //base in gh-proxy  https://github.com/hunshcn/gh-proxy

    //urld 是核心加速服务url

    var urld = "https://githubspeedupdownloader.holoto.workers.dev/";


    //cfworker  免费个人用户10w次请求 如果本项目提供的免费的加速服务 额度用尽
    // 请自行 参照https://github.com/hunshcn/gh-proxy 搭建 加速服务 把 urld 替换为 你自己的加速服务
    // 这里收集了一些加速服务url
    //   如果不能加速 额度用尽 urld 可以改成这个 https://gh.api.99988866.xyz



    var buttondownstyle = "color: red";
    var buttondowntitle = "CF代理加速下载    ";
    var filelist = Array.from(document.getElementsByClassName('py-md-2 Box-body px-2'));


    filelist.forEach(v => {
        let divdown = document.createElement("div");

        let buttondown = document.createElement("a");
        buttondown.style = buttondownstyle;
        let temphref = v.firstElementChild.href;
        let tempname = v.firstElementChild.innerText;
        buttondown.innerText = buttondowntitle + tempname;

        buttondown.href = urld + temphref;

        divdown.style = "margin:10px;";
        divdown.append(buttondown)
        v.after(divdown);
    });




})();