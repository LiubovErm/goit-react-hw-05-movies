"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[340],{340:function(t,n,e){e.r(n),e.d(n,{default:function(){return P}});var r,u,a,i,c,o,s=e(885),f=e(791),p=e(689),h=e(86),l=e(168),d=e(444),m=d.ZP.p(r||(r=(0,l.Z)(["\n  text-align: center;\n  font-size:  ",";\n  font-weight:",";\n"])),(function(t){return t.theme.fontSizes.l}),(function(t){return t.theme.fontWeights.bold})),v=d.ZP.ul(u||(u=(0,l.Z)(["\n  list-style: none;\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),x=d.ZP.li(a||(a=(0,l.Z)(["\n  padding: ","px;\n  font-size:  ",";\n  border: 1px solid black;\n  margin-bottom:","px;\n"])),(function(t){return t.theme.space[3]}),(function(t){return t.theme.fontSizes.m}),(function(t){return t.theme.space[3]})),Z=d.ZP.p(i||(i=(0,l.Z)(["\n  margin-bottom: ","px;\n  font-weight:",";\n"])),(function(t){return t.theme.space[4]}),(function(t){return t.theme.fontWeights.bold})),w=d.ZP.p(c||(c=(0,l.Z)(["\n  font-size:  ",";\n"])),(function(t){return t.theme.fontSizes.s})),g=d.ZP.p(o||(o=(0,l.Z)(["\n  font-weight:",";\n"])),(function(t){return t.theme.fontWeights.bold})),b=e(184),k=function(t){var n=t.reviewsData;return(0,b.jsx)(v,{children:n.map((function(t){var n=t.id,e=t.created_at,r=t.author,u=t.content;return(0,b.jsxs)(x,{children:[(0,b.jsx)(g,{children:new Date(e).toLocaleDateString("en-US")}),(0,b.jsxs)(Z,{children:["Author: ".concat(r)," "]}),(0,b.jsx)(w,{children:u})]},n)}))})},y=e(649),P=function(){var t=(0,f.useState)(null),n=(0,s.Z)(t,2),e=n[0],r=n[1],u=(0,f.useState)(null),a=(0,s.Z)(u,2),i=a[0],c=a[1],o=(0,p.UO)().movieId;return(0,f.useEffect)((function(){c("pending"),(0,h.Jh)(o).then((function(t){r(t),c("resolved")})).catch((function(){return c("rejected")}))}),[o]),"pending"===i?(0,b.jsx)(y.a,{}):"rejected"===i?(0,b.jsx)(m,{children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}):"resolved"===i&&0===e.length?(0,b.jsx)(m,{children:"We don`t have any reviews for this movie"}):"resolved"===i?(0,b.jsx)(k,{reviewsData:e}):void 0}},86:function(t,n,e){e.d(n,{IQ:function(){return l},Jh:function(){return m},TP:function(){return p},XT:function(){return s},_L:function(){return c}});var r=e(861),u=e(757),a=e.n(u),i=e(44);function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/trending/movie/week");case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/search/movie?&query=".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/movie/".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3/",i.ZP.defaults.params={api_key:"324a07cbf11f3aed45ef70fac807eb23"}}}]);
//# sourceMappingURL=340.4d688c31.chunk.js.map