"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[382],{3382:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,a,o,c,s,u,p=t(5861),d=t(9439),l=t(4687),f=t.n(l),h=t(2791),x=t(7689),v=t(2150),g=t(680),m=t(168),w=t(7691),b=t(1087),j=w.ZP.section(r||(r=(0,m.Z)(["\n  display: flex;\n  padding: 10px;\n  margin-top: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n  justify-content: center;\n"]))),y=w.ZP.div(i||(i=(0,m.Z)(["\n  margin-right: 15px;\n  margin-left: 15px;\n  max-width: 100%;\n  max-height: 50%;\n"]))),Z=w.ZP.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  font-size: 14px;\n  color: black;\n  list-style-type: none;\n"]))),k=w.ZP.li(o||(o=(0,m.Z)(["\n  font-weight: 600;\n  margin-right: 7px;\n"]))),_=(0,w.ZP)(b.OL)(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  text-decoration: none;\n  padding: 10px 20px;\n  color: black;\n  font-weight: 500;\n  width: 150px;\n  background-color: #e6e6fa;\n  border-radius: 25px;\n\n  :hover {\n    color: white;\n    background-color: orangered;\n  }\n"]))),P=(0,w.ZP)(b.OL)(s||(s=(0,m.Z)(["\n  padding: 8px 16px;\n  border-radius: 25px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),L=w.ZP.div(u||(u=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n\n  > nav {\n    display: flex;\n  }\n"]))),R=t(184),O=function(n){var e=n.movie,t=e.release_date,r=e.title,i=e.vote_average,a=e.overview,o=e.genres,c=e.poster_path,s=new Date(t);return(0,R.jsxs)(j,{children:[(0,R.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w300".concat(c):g,alt:"{title}","min-width":"100px"}),(0,R.jsxs)(y,{children:[(0,R.jsx)("h2",{children:r}),(0,R.jsxs)("p",{children:["Release date: ",s.toLocaleDateString()]}),(0,R.jsxs)("h4",{children:["Rating: ",(0,R.jsxs)("span",{children:[i,"/10"]})]}),(0,R.jsx)("h4",{children:"Genres:"}),(0,R.jsx)(Z,{children:null===o||void 0===o?void 0:o.map((function(n){return(0,R.jsxs)(k,{children:["| ",n.name," |"]},n.id)}))}),(0,R.jsx)("h4",{children:"Overview:"}),(0,R.jsx)("p",{children:a})]})]})},z=function(){var n,e,t=(0,h.useState)([]),r=(0,d.Z)(t,2),i=r[0],a=r[1],o=(0,x.UO)().movieId,c=(0,x.TH)(),s=(0,h.useRef)(null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/Movies");return(0,h.useEffect)((function(){var n=function(){var n=(0,p.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.TP)(o);case 3:e=n.sent,a(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[o]),(0,R.jsxs)("div",{children:[(0,R.jsx)(_,{to:s.current,children:" Back to movies"}),(0,R.jsx)(O,{movie:i}),(0,R.jsx)("h3",{children:"Additional information"}),(0,R.jsxs)(L,{children:[(0,R.jsx)(P,{to:"cast",children:"Cast"}),(0,R.jsx)(P,{to:"reviews",children:"Reviews"})]}),(0,R.jsx)(h.Suspense,{fallback:(0,R.jsx)("div",{children:"Loading page..."}),children:(0,R.jsx)(x.j3,{})})]})}},2150:function(n,e,t){t.d(e,{Hg:function(){return u},TP:function(){return f},tx:function(){return g},z1:function(){return d},zv:function(){return x}});var r=t(5861),i=t(4687),a=t.n(i),o=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"391a97ba083a1d8591f2f4cbb9f29b09"}});function c(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var e,t,r,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},n.next=4,o.get(e,t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("trending/movie/day"));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("search/movie?query=".concat(e)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("movie/".concat(e)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("movie/".concat(e,"/credits")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("movie/".concat(e,"/reviews")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},680:function(n,e,t){n.exports=t.p+"static/media/ImageNotFound.e41b1f5132ed954f1600.png"}}]);
//# sourceMappingURL=382.200e55b9.chunk.js.map