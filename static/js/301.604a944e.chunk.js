"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[301],{98:function(e,n,t){t.d(n,{x:function(){return u}});var r,a=t(168),u=t(444).ZP.p(r||(r=(0,a.Z)(["\ncolor: #fffad9"])))},276:function(e,n,t){t.d(n,{Z:function(){return c}});var r,a=t(689),u=t(87),s=t(168),o=t(444).ZP.li(r||(r=(0,s.Z)(["\n  display: flex;\n  height: 480px;\n  width: 280px;\n  flex-direction: column;\n  padding: 1rem 1rem 2rem;\n  border: solid 1px #fffad9;\n  // box-shadow: 0 0 1px #fffad9, 0 0 3px #fffad9, 0 0 5px #fffad9,\n  //   0 0 10px #fffad9;\n  border-radius: 3px;\n  &:hover {\n    box-shadow: 0 0 2px #fffad9, 0 0 4px #fffad9, 0 0 6px #fffad9,\n      0 0 15px #fffad9;\n    border-radius: 3px;\n  }\n"]))),i=t(184);function c(e){var n=e.film,t=(0,a.TH)(),r=n.id,s=n.name,c=n.title,f=n.poster_path;return(0,i.jsx)(o,{children:(0,i.jsxs)(u.OL,{to:"/film/".concat(r),state:{from:t},children:[(0,i.jsx)("img",{src:"//image.tmdb.org/t/p/w500"+f,alt:c,width:280}),(0,i.jsx)("h3",{children:null!==c&&void 0!==c?c:s})]})},r)}},301:function(e,n,t){t.r(n);var r=t(861),a=t(439),u=t(757),s=t.n(u),o=t(791),i=t(150),c=t(686),f=t.n(c),p=t(87),l=t(276),d=t(108),h=t(459),x=t(98),v=t(184);n.default=function(){var e=(0,p.lr)(),n=(0,a.Z)(e,2),t=n[0],u=n[1],c=(0,o.useState)(!1),g=(0,a.Z)(c,2),m=g[0],b=g[1],Z=(0,o.useState)(""),w=(0,a.Z)(Z,2),y=w[0],j=w[1],k=(0,o.useState)([]),_=(0,a.Z)(k,2),S=_[0],q=_[1],C=t.get("query"),L=(0,o.useState)(!1),P=(0,a.Z)(L,2),U=P[0],F=P[1];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return");case 2:return b(!0),e.prev=3,e.next=6,(0,i.on)(C);case 6:n=e.sent,q(n),0===n.length?F(!0):F(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("error");case 14:return e.prev=14,b(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[C]);var H=function(e){C!==e?(j(e),u({query:y})):f().Notify.info('You request "'.concat(e,'" has alredy been!'))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()?(H(y),j("")):f().Notify.failure("Please enter a name")},children:[(0,v.jsx)(h.q,{type:"submit",children:(0,v.jsx)("span",{children:"Search"})}),(0,v.jsx)("input",{type:"text",placeholder:"Looking for foto and images",value:y,onChange:function(e){j(e.currentTarget.value.toLowerCase())}})]}),m&&(0,v.jsx)(d.a,{}),U&&(0,v.jsx)(x.x,{children:"Film is not found"}),S.length>0&&(0,v.jsx)("ul",{children:S.map((function(e){return(0,v.jsx)(l.Z,{film:e},e.id)}))})]})}},150:function(e,n,t){t.d(n,{Hg:function(){return o},_r:function(){return p},on:function(){return d},qP:function(){return c}});var r=t(861),a=t(757),u=t.n(a),s=t(243);function o(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/all/day");case 2:return n=e.sent,t=n.data,console.log(t.results),e.abrupt("return",t.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"&language=en-US"));case 2:return t=e.sent,r=t.data,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews?language=en-US&page=1"));case 2:return t=e.sent,r=t.data,console.log(r.results),e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query=".concat(n,"&page=1"));case 2:return t=e.sent,r=t.data,console.log(r.results),e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"391a97ba083a1d8591f2f4cbb9f29b09"}}}]);
//# sourceMappingURL=301.604a944e.chunk.js.map