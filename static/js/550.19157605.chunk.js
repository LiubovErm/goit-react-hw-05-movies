"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[550],{3550:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,o,c,i,a,u,s,f,l,p,h,d=t(885),m=t(2791),x=t(7689),v=t(9086),g=t(3682),Z=t(9649),b=t(168),w=t(6444),y=t(6731),j=(0,w.ZP)(y.rU)(r||(r=(0,b.Z)(["\n  text-decoration: none;\n  display: block;\n  width: 150px;\n  padding: ","px;\n  border-radius: ",";\n  font-size:  ",";\n  font-weight:",";\n  color:",";\n  margin-top:","px;\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue})),k=w.ZP.p(o||(o=(0,b.Z)(["\n  text-align: center;\n  font-size:  ",";\n"])),(function(n){return n.theme.fontSizes.l})),P=w.ZP.img(c||(c=(0,b.Z)(["\n  display: block;\n  width: 300px;\n"]))),S=w.ZP.h2(i||(i=(0,b.Z)(["\n  text-align: center;\n  font-weight:",";\n"])),(function(n){return n.theme.fontWeights.bold})),z=w.ZP.div(a||(a=(0,b.Z)(["\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]})),_=w.ZP.p(u||(u=(0,b.Z)(["\n  margin: ","px;\n  font-size:  ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m})),I=w.ZP.span(s||(s=(0,b.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  font-weight:",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontWeights.bold})),L=w.ZP.ul(f||(f=(0,b.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n"]))),O=w.ZP.li(l||(l=(0,b.Z)(["\n  margin: ","px;\n"])),(function(n){return n.theme.space[3]})),T=(0,w.ZP)(y.OL)(p||(p=(0,b.Z)(["\n  display: block;\n  text-decoration: none;\n  font-size:  ",";\n  font-weight:",";\n  color: ",";\n  border-radius: ",";\n  padding:","px;\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n  &:hover:not(.active),\n  &:focus:not(.active) {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue})),W=w.ZP.button(h||(h=(0,b.Z)(["\n  width: 180px;\n  font-size:  ",";\n  border-radius: ",";\n  padding:","px;\n  color:",";\n  background-color: ",";\n  border: none;\n  cursor: pointer;\n  &.active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.blue})),C=t(184),N=[{text:"Cast",path:"cast"},{text:"Reviews",path:"reviews"},{text:"Trailers",path:"trailers"}],R=function(){return(0,C.jsx)(L,{children:N.map((function(n){var e=n.text,t=n.path;return(0,C.jsx)(O,{children:(0,C.jsx)(T,{to:t,children:e})},t)}))})},U=t(4262),E=t(2982);function G(n){try{var e,t=null!==(e=localStorage.getItem(n))&&void 0!==e?e:"[]";return JSON.parse(t)}catch(r){console.log(r.message)}}var J=function(n){var e=n.movieDetails,t=e.poster_path,r=e.original_title,o=e.release_date,c=e.vote_average,i=e.overview,a=e.genres,u=(0,m.useState)(!1),s=(0,d.Z)(u,2),f=s[0],l=s[1];return(0,m.useEffect)((function(){var n=G("myfilms");n&&n.some((function(n){return n.id===e.id}))&&l(!0)}),[e.id]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(g.x,{display:"flex",maxWidth:900,mx:"auto",children:[(0,C.jsx)(P,{src:t?"https://image.tmdb.org/t/p/w342".concat(t):U,alt:r}),(0,C.jsxs)(z,{children:[(0,C.jsx)(S,{children:"".concat(r," (").concat(o.substring(0,4),")")}),(0,C.jsx)(_,{children:"User score: ".concat(Math.round(10*c),"%")}),(0,C.jsxs)(_,{children:[(0,C.jsx)(I,{children:"Overview:"}),i||"\u041d\u0435 \u043c\u0430\u0454 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0456"]}),(0,C.jsxs)(_,{children:[(0,C.jsx)(I,{children:"Genres:"}),a.length>0?a.map((function(n){return n.name})).join(", "):"\u041d\u0435 \u043c\u0430\u0454 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0456"]}),(0,C.jsx)(W,{type:"button",onClick:function(){var n=function(n,e){try{var t,r,o=G(n);return o.some((function(n){return n.id===e.id}))?(t=o.filter((function(n){return n.id!==e.id})),r=!1):(t=[].concat((0,E.Z)(o),[e]),r=!0),localStorage.setItem(n,JSON.stringify(t)),r}catch(c){console.log(c.message)}}("myfilms",e);l(n)},className:f&&"active",children:f?"Remove from Library":"Add to Library"})]})]}),(0,C.jsx)(R,{}),(0,C.jsx)(m.Suspense,{fallback:(0,C.jsx)(Z.a,{}),children:(0,C.jsx)(x.j3,{})})]})},q=function(){var n=(0,m.useState)(null),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,m.useState)("idle"),c=(0,d.Z)(o,2),i=c[0],a=c[1],u=(0,x.UO)().movieId,s=(0,x.TH)().state,f=(0,m.useRef)(null!==s&&void 0!==s?s:"/");return(0,m.useEffect)((function(){a("pending"),(0,v.TP)(u).then((function(n){r(n),a("resolved")})).catch((function(){return a("rejected")}))}),[u]),(0,C.jsxs)(g.x,{children:[(0,C.jsx)(j,{to:f.current,children:"Go back"}),"pending"===i&&(0,C.jsx)(Z.a,{}),"rejected"===i&&(0,C.jsx)(k,{children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),"resolved"===i&&t&&(0,C.jsx)(J,{movieDetails:t})]})}},9086:function(n,e,t){t.d(e,{AE:function(){return g},IQ:function(){return d},Jh:function(){return x},TP:function(){return p},XT:function(){return f},_L:function(){return u}});var r=t(8683),o=t(5861),c=t(7757),i=t.n(c),a=t(1044);function u(n){return s.apply(this,arguments)}function s(){return(s=(0,o.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/trending/movie/week",{params:(0,r.Z)((0,r.Z)({},a.ZP.defaults.params),{},{page:e})});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)(i().mark((function n(e,t){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/search/movie?&query=".concat(e),{params:(0,r.Z)((0,r.Z)({},a.ZP.defaults.params),{},{query:e,page:t})});case 2:return o=n.sent,n.abrupt("return",o.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,o.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(e,"/videos"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}a.ZP.defaults.baseURL="https://api.themoviedb.org/3/",a.ZP.defaults.params={api_key:"324a07cbf11f3aed45ef70fac807eb23"}},4262:function(n,e,t){n.exports=t.p+"static/media/noImage.280749e503f47aa9a99c.PNG"}}]);
//# sourceMappingURL=550.19157605.chunk.js.map