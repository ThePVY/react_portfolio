(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[8],{228:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(227),i=n(0),c=function(e){var t=Object(i.useState)(e),n=Object(r.a)(t,2),c=n[0],a=n[1];return[{isValid:c,setIsValid:Object(i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return a(e)}),[])},function(){return a(!1)}]}},229:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.length<e?void 0:"Maximum length is ".concat(e," symbols")}},i=r(500),c=r(100),a=r(50),o=(r(10),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return~e.search(/[^0-9]/)?"Enter a number":void 0}),u=function(e){return e?void 0:"This Field is required"},s=function(e){return e?void 0:[""]}},230:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return j}));var r=n(3),i=n(231),c=n(0),a=n(110),o=n(232),u=n.n(o),s=n(2),d=function(e,t,n,r,i,c){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(s.jsxs)("div",{className:u.a.container,children:[Object(s.jsx)(a.a,{component:e,name:t,type:n,placeholder:r,validate:i,isValid:c}),o]})},l=function(e){var t,n=e.meta,r=e.notified,i=e.children,a=e.isValid,o=void 0===a?function(e){return e}:a;t=n.touched&&r&&n.error?n.error:"";var d=n.valid;return Object(c.useEffect)((function(){o(d)}),[d,o]),Object(s.jsxs)(s.Fragment,{children:[i,Object(s.jsx)("span",{className:n.valid?"":u.a.error,children:t})]})},b=function(e){var t=e.type,n=e.placeholder,c=Object(i.a)(e,["type","placeholder"]);return Object(s.jsx)(l,Object(r.a)(Object(r.a)({},c),{},{notified:!0,children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},c.input),{},{placeholder:n,type:t}))}))},j=function(e){var t=e.type,n=e.placeholder,c=Object(i.a)(e,["type","placeholder"]);return Object(s.jsx)(l,Object(r.a)(Object(r.a)({},c),{},{notified:!0,children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},c.input),{},{placeholder:n,type:t}))}))}},232:function(e,t,n){e.exports={error:"CustomFields_error__1fyZd"}},235:function(e,t,n){"use strict";var r=n(236),i=n.n(r),c=n(2);t.a=function(e){var t=e.children,n=e.fixedHeight,r=void 0!==n&&n,a=e.absolute,o=void 0===a||a,u="".concat(i.a.content," ").concat(r&&i.a.fixedHeight," ").concat(o?i.a.absolute:i.a.relative," ");return Object(c.jsx)("div",{className:u,children:t})}},236:function(e,t,n){e.exports={content:"SinglePane_content__18Y_R",absolute:"SinglePane_absolute__EQama",relative:"SinglePane_relative__Z5qBe",fixedHeight:"SinglePane_fixedHeight__3zShN"}},318:function(e,t,n){e.exports={login:"Login_login__3j7rH",loginForm:"Login_loginForm__e4ZvL",error:"Login_error__1hPI-"}},329:function(e,t,n){"use strict";n.r(t);var r=n(227),i=n(3),c=n(27),a=n(18),o=n(111),u=n(228),s=n(25),d=n(229),l=n(230),b=n(235),j=n(231),f=n(7),h=n(2),O=function(e){return Object(c.b)((function(e){return{isAuthorized:e.auth.isAuthorized}}),null)((function(t){var n=t.isAuthorized,r=Object(j.a)(t,["isAuthorized"]);return n?Object(h.jsx)(f.a,{to:"/profile"}):Object(h.jsx)(e,Object(i.a)({},r))}))},v=n(318),m=n.n(v),p=(t.default=Object(a.d)(Object(c.b)(null,Object(i.a)({},s.c)),O)((function(e){return Object(h.jsx)(b.a,{absolute:!1,children:Object(h.jsx)(p,{onSubmit:function(t){e.signIn(t)}})})})),function(e){var t=Object(u.a)(!1),n=Object(r.a)(t,1)[0],i=Object(u.a)(!1),c=Object(r.a)(i,1)[0];return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,className:m.a.loginForm,children:[Object(l.c)(l.a,"email","text","Email",[d.b],n.setIsValid),Object(l.c)(l.a,"password","password","Password",[d.b],c.setIsValid),Object(l.c)(l.a,"rememberMe","checkbox",void 0,void 0,void 0,"Remember me"),e.error?Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:m.a.error,children:e.error})}):"",Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",disabled:!n.isValid||!c.isValid,children:"Submit"})})]})});p=Object(o.a)({form:"login"})(p)}}]);
//# sourceMappingURL=8.ca6d93d4.chunk.js.map