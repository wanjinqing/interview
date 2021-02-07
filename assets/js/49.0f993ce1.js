(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{413:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安全相关面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全相关面试题"}},[t._v("#")]),t._v(" 安全相关面试题")]),t._v(" "),a("h3",{attrs:{id:"_1、https的请求可以拦截么-如何做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、https的请求可以拦截么-如何做"}},[t._v("#")]),t._v(" 1、https的请求可以拦截么，如何做?")]),t._v(" "),a("p",[t._v("可以，使用抓包工具")]),t._v(" "),a("p",[t._v("在苹果电脑上，一般我们使用 Charles，具体请看链接:"),a("a",{attrs:{href:"https://blog.csdn.net/u013538542/article/details/105416240",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS原理-使用-请求拦截-防止拦截-动态调试HTTP请求"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Charles 抓包和篡改数据可以看这里："),a("a",{attrs:{href:"https://www.jianshu.com/p/e26151084add",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Charles 抓包 https 实战并篡改返回数据"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_2、能说一下你项目中遇到了哪些安全问题么-一般都是怎么解决的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、能说一下你项目中遇到了哪些安全问题么-一般都是怎么解决的"}},[t._v("#")]),t._v(" 2、能说一下你项目中遇到了哪些安全问题么，一般都是怎么解决的?")]),t._v(" "),a("p",[t._v("具体可以查看这篇文章"),a("a",{attrs:{href:"https://juejin.cn/post/6898124066063024136",target:"_blank",rel:"noopener noreferrer"}},[t._v("2020年前端安全综述-填坑记"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("xss、csrf、爬虫、薅羊毛等安全问题")]),t._v(" "),a("p",[t._v("传输加密、接口加签、环境变量、token、输入校验等")]),t._v(" "),a("h3",{attrs:{id:"_4、不能说一说xss攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、不能说一说xss攻击"}},[t._v("#")]),t._v(" 4、不能说一说XSS攻击?")]),t._v(" "),a("p",[t._v("XSS 全称是 Cross Site Scripting(即跨站脚本)，为了和 CSS 区分，故叫它XSS。XSS 攻击是指浏览器中执行恶意脚本(无论是跨域还是同域)，从而拿到用户的信息并进行操作。")]),t._v(" "),a("p",[t._v("这些操作一般可以完成下面这些事情:")]),t._v(" "),a("ul",[a("li",[t._v("窃取 Cookie。")]),t._v(" "),a("li",[t._v("监听用户行为，比如输入账号密码后直接发送到黑客服务器。")]),t._v(" "),a("li",[t._v("修改 DOM 伪造登录表单。")]),t._v(" "),a("li",[t._v("在页面中生成浮窗广告。")])]),t._v(" "),a("p",[t._v("XSS 可以分为多种类型，但是总体上我认为分为两类：持久型和非持久型。")]),t._v(" "),a("p",[t._v("持久型也就是攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击。")]),t._v(" "),a("p",[t._v("举个例子，对于评论功能来说，就得防范持久型 XSS 攻击，因为我可以在评论中输入以下内容：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这种情况如果前后端没有做好防御的话，这段评论就会被存储到数据库中，这样每个打开该页面的用户都会被攻击到。")]),t._v(" "),a("p",[t._v("非持久型相比于前者危害就小的多了，一般通过修改 URL 参数的方式加入攻击代码，诱导用户访问链接从而进行攻击。")]),t._v(" "),a("p",[t._v("举个例子，如果页面需要从 URL 中获取某些参数作为内容的话，不经过过滤就会导致攻击代码被执行:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- http://www.domain.com?name=<script>alert(1)<\/script> --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{name}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("            \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("防范措施")])]),t._v(" "),a("p",[t._v("对于 XSS 攻击来说，通常有两种方式可以用来防御:")]),t._v(" "),a("ol",[a("li",[t._v("千万不要相信任何用户的输入！无论是在前端和服务端，都要对用户的输入进行转码或者过滤。")]),t._v(" "),a("li",[t._v("利用 CSP 和 HttpOnly")])]),t._v(" "),a("p",[a("strong",[t._v("转义字符")]),t._v("：")]),t._v(" "),a("p",[t._v("用户的输入永远不可信任的，最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&amp;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&lt;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&gt;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&quto;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&#39;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&#96;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\/")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&#x2F;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("但是对于显示富文本来说，显然不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。对于这种情况，通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<h1 id="title">XSS Demo</h1><script>alert("xss");<\/script>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("以上示例使用了 js-xss 来实现，可以看到在输出中保留了 h1 标签且过滤了 script 标签。")]),t._v(" "),a("p",[a("strong",[t._v("CSP")]),t._v(":")]),t._v(" "),a("p",[t._v("CSP 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 XSS 攻击。")]),t._v(" "),a("p",[t._v("通常可以通过两种方式来开启 CSP：")]),t._v(" "),a("ul",[a("li",[t._v("设置 HTTP Header 中的 Content-Security-Policy")]),t._v(" "),a("li",[t._v("设置 meta 标签的方式 "),a("meta",{attrs:{"http-equiv":"Content-Security-Policy"}})])]),t._v(" "),a("p",[a("strong",[t._v("HttpOnly")]),t._v(":")]),t._v(" "),a("p",[t._v("很多 XSS 攻击脚本都是用来窃取Cookie, 而设置 Cookie 的 HttpOnly 属性后，JavaScript 便无法读取 Cookie 的值。这样也能很好的防范 XSS 攻击。")]),t._v(" "),a("h3",{attrs:{id:"_5、能不能说一说csrf攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、能不能说一说csrf攻击"}},[t._v("#")]),t._v(" 5、能不能说一说CSRF攻击？")]),t._v(" "),a("p",[t._v("CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。")]),t._v(" "),a("p",[t._v("举个例子, 你在某个论坛点击了黑客精心挑选的小姐姐图片，你点击后，进入了一个新的页面。你论坛的登录信息可能就被黑客拿到了。")]),t._v(" "),a("p",[t._v("CSRF攻击一般会有三种方式:")]),t._v(" "),a("ul",[a("li",[t._v("自动 GET 请求")]),t._v(" "),a("li",[t._v("自动 POST 请求")]),t._v(" "),a("li",[t._v("诱导点击发送 GET 请求。")])]),t._v(" "),a("p",[t._v("防范措施:")]),t._v(" "),a("ul",[a("li",[t._v("不让第三方网站访问到用户 Cookie（利用 Cookie 的 SameSite 属性）")]),t._v(" "),a("li",[t._v("验证来源站点（这就需要要用到请求头中的两个字段: Origin和Referer。）")]),t._v(" "),a("li",[t._v("请求时附带验证信息，比如验证码或者 Token")]),t._v(" "),a("li",[t._v("Get 请求不对数据进行修改")])]),t._v(" "),a("p",[a("strong",[t._v("SameSite")])]),t._v(" "),a("p",[t._v("可以对 Cookie 设置 SameSite 属性。该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。")]),t._v(" "),a("p",[a("strong",[t._v("Referer Check")])]),t._v(" "),a("p",[t._v("HTTP Referer 是 header 的一部分，当浏览器向web服务器发送请求时，一般会带上 Referer 信息告诉服务器是从哪个页面链接过来的，服务器籍此可以获得一些信息用于处理。可以通过检查请求的来源来防御 CSRF 攻击。正常请求的 referer 具有一定规律，如在提交表单的 referer 必定是在该页面发起的请求。所以通过检查 http 包头 referer 的值是不是这个页面，来判断是不是 CSRF 攻击。")]),t._v(" "),a("p",[t._v("但在某些情况下如从 https 跳转到 http，浏览器处于安全考虑，不会发送 referer，服务器就无法进行 check 了。若与该网站同域的其他网站有 XSS 漏洞，那么攻击者可以在其他网站注入恶意脚本，受害者进入了此类同域的网址，也会遭受攻击。出于以上原因，无法完全依赖 Referer  Check 作为防御 CSRF 的主要手段。但是可以通过 Referer Check 来监控 CSRF 攻击的发生。")]),t._v(" "),a("p",[a("strong",[t._v("Anti CSRF Token")])]),t._v(" "),a("p",[t._v("目前比较完善的解决方案是加入 Anti-CSRF-Token。即发送请求时在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器建立一个拦截器来验证这个 token。服务器读取浏览器当前域 cookie 中这个 token 值，会进行校验该请求当中的 token 和 cookie 当中（或数据库中）的 token 值是否都存在且相等，才认为这是合法的请求。否则认为这次请求是违法的，拒绝该次服务，这种方法相比 Referer 检查要安全很多。")]),t._v(" "),a("p",[a("strong",[t._v("验证码")])]),t._v(" "),a("p",[t._v("应用程序和用户进行交互过程中，特别是账户交易这种核心步骤，强制用户输入验证码，才能完成最终请求。在通常情况下，验证码够很好地遏制 CSRF 攻击。但增加验证码降低了用户的体验，网站不能给所有的操作都加上验证码。所以只能将验证码作为一种辅助手段，在关键业务点设置验证码。")]),t._v(" "),a("h3",{attrs:{id:"什么是点击劫持-如何防范点击劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是点击劫持-如何防范点击劫持"}},[t._v("#")]),t._v(" 什么是点击劫持？如何防范点击劫持？")]),t._v(" "),a("p",[t._v("点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。")]),t._v(" "),a("p",[t._v("对于这种攻击方式，推荐防御的方法有两种：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("X-FRAME-OPTIONS")]),t._v(" "),a("ul",[a("li",[t._v("X-FRAME-OPTIONS 是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用 iframe 嵌套的点击劫持攻击")]),t._v(" "),a("li",[t._v("该响应头有三个值可选，分别是：\n"),a("ul",[a("li",[t._v("DENY，表示页面不允许通过 iframe 的方式展示")]),t._v(" "),a("li",[t._v("SAMEORIGIN，表示页面可以在相同域名下通过 iframe 的方式展示")]),t._v(" "),a("li",[t._v("ALLOW-FROM，表示页面可以在指定来源的 iframe 中展示")])])])])]),t._v(" "),a("li",[a("p",[t._v("JS 防御")])])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("click-jack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" style "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click-jack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("以上代码的作用就是当通过 iframe 的方式加载页面时，攻击者的网页直接不显示所有内容了。")]),t._v(" "),a("h3",{attrs:{id:"_7、中间人攻击是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、中间人攻击是什么"}},[t._v("#")]),t._v(" 7、中间人攻击是什么?")]),t._v(" "),a("p",[t._v("中间人攻击是指攻击者与通讯的两端分别创建独立的联系，并交换其所收到的数据，使通讯的两端认为他们正在通过一个私密的连接与对方 直接对话，但事实上整个会话都被攻击者完全控制。")]),t._v(" "),a("p",[t._v("通常来说不建议使用公共的 Wi-Fi，因为很可能就会发生中间人攻击的情况。如果你在通信的过程中涉及到了某些敏感信息，就完全暴露给攻击方了。")]),t._v(" "),a("p",[t._v("当然防御中间人攻击其实并不难，只需要增加一个安全通道来传输信息。HTTPS 就可以用来防御中间人攻击，但是并不是说使用了 HTTPS 就可以高枕无忧了，因为如果你没有完全关闭 HTTP 访问的话，攻击方可以通过某些方式将 HTTPS 降级为 HTTP 从而实现中间人攻击。")]),t._v(" "),a("h3",{attrs:{id:"_8、介绍下-https-中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、介绍下-https-中间人攻击"}},[t._v("#")]),t._v(" 8、介绍下 HTTPS 中间人攻击")]),t._v(" "),a("p",[t._v("中间人攻击过程如下：")]),t._v(" "),a("ol",[a("li",[t._v("服务器向客户端发送公钥。")]),t._v(" "),a("li",[t._v("攻击者截获公钥，保留在自己手上。")]),t._v(" "),a("li",[t._v("然后攻击者自己生成一个【伪造的】公钥，发给客户端。")]),t._v(" "),a("li",[t._v("客户端收到伪造的公钥后，生成加密hash值发给服务器。")]),t._v(" "),a("li",[t._v("攻击者获得加密hash值，用自己的私钥解密获得真秘钥。")]),t._v(" "),a("li",[t._v("同时生成假的加密hash值，发给服务器。")]),t._v(" "),a("li",[t._v("服务器用私钥解密获得假秘钥。")]),t._v(" "),a("li",[t._v("服务器用加秘钥加密传输信息")])]),t._v(" "),a("p",[t._v("防范措施：")]),t._v(" "),a("ul",[a("li",[t._v("对于个人来说防止自己被中间人攻击最基本的就是不要乱连不信任的网络")]),t._v(" "),a("li",[t._v("公司APP来说应该配置禁止被抓包")]),t._v(" "),a("li",[t._v("APP和浏览器都应该严格校验证书，不使用不安全的APP和浏览器")])]),t._v(" "),a("p",[t._v("具体操作：")]),t._v(" "),a("ul",[a("li",[t._v("接口加签防止数据被串改")]),t._v(" "),a("li",[t._v("接口加密")]),t._v(" "),a("li",[t._v("接口防重放（防复用）")])]),t._v(" "),a("h3",{attrs:{id:"url跳转漏洞是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url跳转漏洞是什么"}},[t._v("#")]),t._v(" URL跳转漏洞是什么？")]),t._v(" "),a("p",[t._v("定义：借助未验证的URL跳转，将应用程序引导到不安全的第三方区域，从而导致的安全问题。")]),t._v(" "),a("p",[t._v("黑客利用URL跳转漏洞来诱导安全意识低的用户点击，导致用户信息泄露或者资金的流失。其原理是黑客构建恶意链接(链接需要进行伪装,尽可能迷惑),发在QQ群或者是浏览量多的贴吧/论坛中。")]),t._v(" "),a("p",[t._v("安全意识低的用户点击后,经过服务器或者浏览器解析后，跳到恶意的网站中。")]),t._v(" "),a("p",[t._v("诸如伪装成像如下的网址，你是否能够识别出来是恶意网址呢？")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("act"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("RVTatrd\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("qt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("safecheck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("RVTatrd\nhttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tieba"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("passport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("jumpUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("RVTatrd\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("防范措施：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("referer的限制")]),t._v(" "),a("ul",[a("li",[t._v("如果确定传递URL参数进入的来源，我们可以通过该方式实现安全限制，保证该URL的有效性，避免恶意用户自己生成跳转链接")])])]),t._v(" "),a("li",[a("p",[t._v("加入有效性验证Token")]),t._v(" "),a("ul",[a("li",[t._v("我们保证所有生成的链接都是来自于我们可信域的，通过在生成的链接里加入用户不可控的 Token 对生成的链接进行校验，可以避免用户生成自己的恶意链接从而被利用，但是如果功能本身要求比较开放，可能导致有一定的限制。")])])])]),t._v(" "),a("h3",{attrs:{id:"sql注入是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql注入是什么"}},[t._v("#")]),t._v(" SQL注入是什么？")]),t._v(" "),a("p",[t._v("SQL注入是一种常见的Web安全漏洞，攻击者利用这个漏洞，可以访问或修改数据，或者利用潜在的数据库漏洞进行攻击。")]),t._v(" "),a("p",[t._v("一次SQL注入的过程包括以下几个过程：")]),t._v(" "),a("ul",[a("li",[t._v("获取用户请求参数")]),t._v(" "),a("li",[t._v("拼接到代码当中")]),t._v(" "),a("li",[t._v("SQL语句按照我们构造参数的语义执行成功")])]),t._v(" "),a("p",[t._v("SQL注入的必备条件：")]),t._v(" "),a("ol",[a("li",[t._v("可以控制输入的数据")]),t._v(" "),a("li",[t._v("服务器要执行的代码拼接了控制的数据。")])]),t._v(" "),a("p",[t._v("我们会发现SQL注入流程中与正常请求服务器类似，只是黑客控制了数据，构造了SQL查询，而正常的请求不会SQL查询这一步，SQL注入的本质:"),a("strong",[t._v("数据和代码未分离，即数据当做了代码来执行")]),t._v("。")]),t._v(" "),a("p",[t._v("防范措施：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("严格限制 Web 应用的数据库的操作权限")]),t._v("，给此用户提供仅仅能够满足其工作的最低权限，从而最大限度的减少注入攻击对数据库的危害")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("后端代码检查输入的数据是否符合预期")]),t._v("，严格限制变量的类型，例如使用正则表达式进行一些匹配处理。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("对进入数据库的特殊字符（'，\"，\\，<，>，&，*，; 等）进行转义处理，或编码转换")]),t._v("。基本上所有的后端语言都有对字符串进行转义处理的方法，比如 lodash 的 lodash._escapehtmlchar 库。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("所有的查询语句建议使用数据库提供的参数化查询接口")]),t._v("，参数化的语句使用参数而不是将用户输入变量嵌入到 SQL 语句中，即不要直接拼接 SQL 语句。例如 Node.js 中的 mysqljs 库的 query 方法中的 ? 占位参数。")])])]),t._v(" "),a("h3",{attrs:{id:"os命令注入攻击是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os命令注入攻击是什么"}},[t._v("#")]),t._v(" OS命令注入攻击是什么？")]),t._v(" "),a("p",[t._v("OS 命令注入和 SQL 注入差不多，只不过 SQL 注入是针对数据库的，而 OS 命令注入是针对操作系统的。OS 命令注入攻击指通过Web应用，执行非法的操作系统命令达到攻击的目的。只要在能调用Shell函数的地方就有存在被攻击的风险。倘若调用 Shell 时存在疏漏，就可以执行插入的非法命令。")]),t._v(" "),a("p",[t._v("我们通过一个例子来说明其原理，假如需要实现一个需求：用户提交一些内容到服务器，然后在服务器执行一些系统命令去返回一个结果给用户：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以 Node.js 为例，假如在接口中需要从 github 下载用户指定的 repo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mz/child_process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 用户输入的参数 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("git clone ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" /some/path")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("如果 params.repo 传入的是 https://github.com/admin/admin.github.io.git 确实能从指定的 git repo 上下载到想要的代码。")]),t._v(" "),a("p",[t._v("但是如果 params.repo 传入的是 https://github.com/xx/xx.git && rm -rf /* && 恰好你的服务是用 root 权限起的就糟糕了。")]),t._v(" "),a("p",[t._v("防范措施：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("后端对前端提交内容进行规则限制（比如正则表达式）")])]),t._v(" "),a("li",[a("p",[t._v("在调用系统命令前对所有传入参数进行命令行参数转义过滤")])]),t._v(" "),a("li",[a("p",[t._v("不要直接拼接命令语句，借助一些工具做拼接、转义预处理，例如 Node.js 的 shell-escape npm包")])])]),t._v(" "),a("h3",{attrs:{id:"服务器出现了大量close-wait状态如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器出现了大量close-wait状态如何解决"}},[t._v("#")]),t._v(" 服务器出现了大量CLOSE_WAIT状态如何解决")]),t._v(" "),a("p",[t._v("大量 CLOSE_WAIT 表示程序出现了问题，对方的 socket 已经关闭连接，而我方忙于读或写没有及时关闭连接，需要检查代码，特别是释放资源的代码，或者是处理请求的线程配置。")]),t._v(" "),a("h3",{attrs:{id:"讲一讲syn超时-洪泛攻击-以及解决策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲一讲syn超时-洪泛攻击-以及解决策略"}},[t._v("#")]),t._v(" 讲一讲SYN超时，洪泛攻击，以及解决策略？")]),t._v(" "),a("p",[t._v("SYN Flood 属于典型的 DoS/DDoS 攻击。其攻击的原理很简单，就是用客户端在短时间内伪造大量不存在的 IP 地址，并向服务端疯狂发送SYN。对于服务端而言，会产生两个危险的后果:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("处理大量的 SYN 包并返回对应 ACK, 势必有大量连接处于 SYN_RCVD 状态，从而占满整个半连接队列，无法处理正常的请求。")])]),t._v(" "),a("li",[a("p",[t._v("由于是不存在的 IP，服务端长时间收不到客户端的ACK，会导致服务端不断重发数据，直到耗尽服务端的资源。")])])]),t._v(" "),a("p",[a("strong",[t._v("如何应对 SYN Flood 攻击？")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("增加 SYN 连接，也就是增加半连接队列的容量。")])]),t._v(" "),a("li",[a("p",[t._v("减少 SYN + ACK 重试次数，避免大量的超时重发。")])]),t._v(" "),a("li",[a("p",[t._v("利用 SYN Cookie 技术，在服务端接收到 SYN 后不立即分配连接资源，而是根据这个 SYN 计算出一个 Cookie，连同第二次握手回复给客户端，在客户端回复 ACK 的时候带上这个 Cookie 值，服务端验证 Cookie 合法之后才分配连接资源。")])]),t._v(" "),a("li",[a("p",[t._v("使用 Delay Binding(延迟绑定) 技术")])])]),t._v(" "),a("h3",{attrs:{id:"怎么预防-ddos-cc-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么预防-ddos-cc-攻击"}},[t._v("#")]),t._v(" 怎么预防 DDos CC 攻击")]),t._v(" "),a("p",[t._v("nginx 通过限制资源请求数量和并发数，可以防止 DDos CC 攻击")])])}),[],!1,null,null,null);s.default=n.exports}}]);