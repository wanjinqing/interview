(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{440:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react进阶面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react进阶面试题"}},[t._v("#")]),t._v(" react进阶面试题")]),t._v(" "),a("h3",{attrs:{id:"redux与vuex的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux与vuex的区别"}},[t._v("#")]),t._v(" redux与vuex的区别？")]),t._v(" "),a("p",[t._v("vuex 的流向：")]),t._v(" "),a("p",[a("code",[t._v("view——>commit——>mutations——>state变化——>view变化")]),t._v("（同步操作）")]),t._v(" "),a("p",[a("code",[t._v("view——>dispatch——>actions——>mutations——>state变化——>view变化")]),t._v("（异步操作）")]),t._v(" "),a("p",[t._v("redux 的流向：")]),t._v(" "),a("p",[a("code",[t._v("view——>dispatch——>actions——>reducer——>state变化——>view变化")]),t._v("（同步异步一样）")]),t._v(" "),a("p",[t._v("不同点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("vuex 以 mutations 函数取代 redux 中的 reducer，只需在对应的 mutation 函数里改变 state 即可。")])]),t._v(" "),a("li",[a("p",[t._v("vuex 支中的 state 直接关联到组件实例上，当 state 变化时自动重新渲染，无需订阅重新渲染函数。redux 使用 store 对象存储整个应用的状态，状态变化时，从最顶层向下传递，每一级都会进行状态比较，从而达到更新。")])]),t._v(" "),a("li",[a("p",[t._v("vuex 支持 action 异步处理，redux 中只支持同步处理，对于异步处理需要借助于 "),a("code",[t._v("redux-thunk")]),t._v(" 和 "),a("code",[t._v("redux-saga")]),t._v(" 实现。")])])]),t._v(" "),a("h3",{attrs:{id:"能简单介绍一下-react-执行过程吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#能简单介绍一下-react-执行过程吗"}},[t._v("#")]),t._v(" 能简单介绍一下 react 执行过程吗")]),t._v(" "),a("p",[t._v("jsx 经过 babel 转变成 render 函数\ncreate update\nenqueueUpdate\nscheduleWork 更新 expiration time\nrequest\nWorkwork\nLoop大循环：\n- performUnitOfWork\n- beginWork\n- completeUnitOfWork\nEffect Listcommit")]),t._v(" "),a("h3",{attrs:{id:"react性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react性能优化"}},[t._v("#")]),t._v(" react性能优化")]),t._v(" "),a("p",[t._v("这里只说 react 单独的进行的性能优化：")]),t._v(" "),a("ul",[a("li",[t._v("key")]),t._v(" "),a("li",[t._v("shouldComponentUpdate")]),t._v(" "),a("li",[t._v("pureComponent")]),t._v(" "),a("li",[t._v("关于箭头函数，先声明好事件监听函数后，然后再拿到其引用传给组件:")]),t._v(" "),a("li",[t._v("useCallback(大计算量的函数来)")]),t._v(" "),a("li",[t._v("useMemo")]),t._v(" "),a("li",[t._v("React.Memo")]),t._v(" "),a("li",[t._v("不可变数据Immutable")]),t._v(" "),a("li",[t._v("reselect")]),t._v(" "),a("li",[t._v("React.lazy 按需假装")])]),t._v(" "),a("p",[t._v("如果一定要做性能优化，核心还是在减少频繁计算和渲染上，在实现策略上主要有三种方式：利用key维持组件结构稳定性、优化数据比对过程和按需加载。其中优化数据比对过程可以根据具体使用的场景，分别使用缓存数据或组件、改用Immutable不可变数据等方式进行。最后，也一定记得要采用测试工具进行前后性能对比，来保障优化工作的有效性。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903896767283207#heading-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("React性能优化小贴士"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"react的usememo原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react的usememo原理"}},[t._v("#")]),t._v(" react的usememo原理")]),t._v(" "),a("p",[t._v("闭包、缓存、memorize")]),t._v(" "),a("h3",{attrs:{id:"实现一个redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现一个redux"}},[t._v("#")]),t._v(" 实现一个redux")]),t._v(" "),a("h3",{attrs:{id:"react的setstate过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react的setstate过程"}},[t._v("#")]),t._v(" react的setstate过程")]),t._v(" "),a("h3",{attrs:{id:"react的合成事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react的合成事件"}},[t._v("#")]),t._v(" react的合成事件")]),t._v(" "),a("h3",{attrs:{id:"项目中redux最佳实践有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目中redux最佳实践有哪些"}},[t._v("#")]),t._v(" 项目中redux最佳实践有哪些")]),t._v(" "),a("h3",{attrs:{id:"为什么虚拟dom比真实dom快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么虚拟dom比真实dom快"}},[t._v("#")]),t._v(" 为什么虚拟dom比真实dom快")]),t._v(" "),a("h3",{attrs:{id:"react-diff和fiber算法的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-diff和fiber算法的区别是什么"}},[t._v("#")]),t._v(" react diff和fiber算法的区别是什么")]),t._v(" "),a("h3",{attrs:{id:"react-ssr-的原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-ssr-的原理是什么"}},[t._v("#")]),t._v(" react ssr 的原理是什么")]),t._v(" "),a("h3",{attrs:{id:"ssr太久-你觉得什么原因导致【举例】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr太久-你觉得什么原因导致【举例】"}},[t._v("#")]),t._v(" ssr太久，你觉得什么原因导致【举例】")]),t._v(" "),a("h3",{attrs:{id:"ssr优化措施【举例】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr优化措施【举例】"}},[t._v("#")]),t._v(" ssr优化措施【举例】")]),t._v(" "),a("p",[t._v("能说明白为什么要实现fiber，以及可能带来的坑。")]),t._v(" "),a("p",[t._v("能说明白为什么要实现hook。")]),t._v(" "),a("p",[t._v("能说明白为什么要用immutable，以及用或者不用的考虑。")])])}),[],!1,null,null,null);e.default=s.exports}}]);