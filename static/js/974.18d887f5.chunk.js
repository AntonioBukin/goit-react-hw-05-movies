"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[974],{1974:function(t,n,r){r.r(n);var e=r(5861),a=r(9439),u=r(4687),c=r.n(u),i=r(2791),s=r(7689),o=r(2150),p=r(680),f=r(184);n.default=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1],h=(0,s.UO)().movieId,v=(0,i.useState)(!1),d=(0,a.Z)(v,2),l=d[0],m=d[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,(0,o.tx)(h);case 4:n=t.sent,u(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[h]),(0,f.jsxs)(f.Fragment,{children:[l&&(0,f.jsx)("div",{children:"Loading..."}),(0,f.jsx)("h2",{children:"Reviews"}),!l&&0===r.length&&(0,f.jsx)("h3",{children:"We don't have any reviews for this movie."}),(0,f.jsx)("ul",{children:r.map((function(t){var n=t.author_details,r=n.username,e=n.avatar_path,a=t.content,u=t.id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):p,alt:"{name}",width:100}),(0,f.jsx)("h3",{children:r}),"-------------------------------------------------------",(0,f.jsx)("p",{children:a})]},u)}))})]})}},2150:function(t,n,r){r.d(n,{Hg:function(){return o},TP:function(){return v},tx:function(){return w},z1:function(){return f},zv:function(){return l}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"391a97ba083a1d8591f2f4cbb9f29b09"}});function i(){return s.apply(this,arguments)}function s(){return s=(0,e.Z)(u().mark((function t(){var n,r,e,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",r=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,c.get(n,r);case 4:return e=t.sent,t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function o(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i("trending/movie/day"));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i("search/movie?query=".concat(n)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i("movie/".concat(n)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i("movie/".concat(n,"/credits")));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i("movie/".concat(n,"/reviews")));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},680:function(t,n,r){t.exports=r.p+"static/media/ImageNotFound.e41b1f5132ed954f1600.png"}}]);
//# sourceMappingURL=974.18d887f5.chunk.js.map