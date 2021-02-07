(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{442:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nodejs精选面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs精选面试题"}},[t._v("#")]),t._v(" nodejs精选面试题")]),t._v(" "),e("h3",{attrs:{id:"_1、node如何开启一个http服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、node如何开启一个http服务"}},[t._v("#")]),t._v(" 1、node如何开启一个http服务？")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 引入内置http模块\nvar http = require('http');\n\n// 创建一个简单服务器，访问http://127.0.0.1:3000/,显示Hello World\nhttp.createServer(function(req, res) {\n    res.end('Hello World\\n');\n}).listen(3000, '127.0.0.1');\nconsole.log('Server running at http://127.0.0.1:3000/');\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h3",{attrs:{id:"_2、讲一下你对node的了解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、讲一下你对node的了解"}},[t._v("#")]),t._v(" 2、讲一下你对node的了解")]),t._v(" "),e("p",[t._v("node是基于Chrmo v8引擎的JavaScript运行环境;")]),t._v(" "),e("p",[t._v("特点:具有事件驱动,非阻塞I/O模型,高并发和轻量级,单线程,单进程特点;")]),t._v(" "),e("h3",{attrs:{id:"_3、node底层了解吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、node底层了解吗"}},[t._v("#")]),t._v(" 3、node底层了解吗")]),t._v(" "),e("p",[t._v("用 libuv 和一些其他库拓展了 js 在前端没有实现的功能。v8 是执行 js 代码的， libuv 是 nodejs 的底层支撑，包括事件循环，文件IO,网络IO，定时器等实现。代码的结构是 nodejs 内置js模块，比如 http，net，fs，然后内置js模块是调用c++层的代码，比如net调用h ttp://tcp_wrap.cc，然后 c++ 层调用 libuv 层的代码，libuv 完成任务后，再往回调。")]),t._v(" "),e("h3",{attrs:{id:"_4、v8了解多少"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、v8了解多少"}},[t._v("#")]),t._v(" 4、v8了解多少")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("v8是谷歌开源的高性能JavaScript引擎的名称,谷歌在浏览页面时由v8负责js的处理并执行")])]),t._v(" "),e("li",[e("p",[t._v("v8引擎提供了JavaScript的运行环境,dom和其他web api则由浏览器来提供.")])]),t._v(" "),e("li",[e("p",[t._v("v8引擎独立于托管它的浏览器,基于这个关键特性 V8 于 2009 年被选为为 Node.js 提供支持的引擎")])]),t._v(" "),e("li",[e("p",[t._v("底层是基于c++开发的,既能独立运行,又可以嵌入c++应用中")])]),t._v(" "),e("li",[e("p",[t._v("经过不断的改进v8引擎具有高性能和跨平台的特性,且可运行于 Mac、Windows、Linux 和其他一些系统")])]),t._v(" "),e("li",[e("p",[t._v("v8使用了JIT编译出即时机器码,能极大提高js编译速度")])]),t._v(" "),e("li",[e("p",[t._v("借鉴了java vm的垃圾回收机制,能精准回收垃圾")])])]),t._v(" "),e("h3",{attrs:{id:"_5、鉴权有了解过了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、鉴权有了解过了"}},[t._v("#")]),t._v(" 5、鉴权有了解过了？")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("HTTP Basic Authentication (HTTP基本认证)")])]),t._v(" "),e("li",[e("p",[t._v("session-cookie")])]),t._v(" "),e("li",[e("p",[t._v("Token 验证(包括JWT,SSO)")])]),t._v(" "),e("li",[e("p",[t._v("OAuth(开放授权)")])])]),t._v(" "),e("p",[t._v("我们普通网站常用的认证就是 session-cookie 的方式，用户向服务端发生请求，服务端会创建 session 并保存相关身份信息，并向客户端下发一个 sessionId,大家如果用心的话，会发现跟JAVA交互的时候，浏览器会有一个 JSESSION_ID，跟 PHP 交互的时候，会有一个 PHPSESSION_ID;后面的每次请求，客户端都会自动带上这个 cookie 跟服务端通信。")]),t._v(" "),e("p",[t._v("实际上大家要明白每一种方式的作用；SSO 主要用来做单点登录；OAuth 主要用来做第三方网站授权；JWT 就是一种便于扩展的跨域认证解决方案，通常会考察这个。")]),t._v(" "),e("p",[t._v("待完善。。。")])])}),[],!1,null,null,null);s.default=n.exports}}]);