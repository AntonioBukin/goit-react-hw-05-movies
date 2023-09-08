"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(n,t,r){r.r(t);var e=r(5861),a=r(9439),i=r(4687),c=r.n(i),o=r(2791),u=r(7689),p=r(2150),s=r(8603),f=r(6202),l=r(680),h=r(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),r=t[0],i=t[1],d=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.zv)(d);case 3:t=n.sent,i(t.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[d]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Actors"}),(0,h.jsx)(s.W,{children:r.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character,i=n.popularity;return(0,h.jsxs)(f.UK,{children:[(0,h.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):l,alt:"{name}",width:100}),(0,h.jsx)(f.Ff,{children:e}),(0,h.jsxs)(f.Ff,{children:["Character: ",a," "]}),(0,h.jsxs)(f.Ff,{children:["Popularity: ",i]})]},t)}))})]})}},6202:function(n,t,r){r.d(t,{Ff:function(){return s},UK:function(){return u},_V:function(){return p}});var e,a,i,c=r(168),o=r(7691),u=o.ZP.li(e||(e=(0,c.Z)(["\n\n  border-radius: 4px;\n  list-style-type: none;\n  flex-basis: calc(100% / 4 - 16px);\n  margin-right: 8px;\n  margin-left: 8px;\n  margin-bottom: 16px;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n  transition: all 250ms ease-in-out;\n\n  :hover {\n    transform: scale(1.05);\n    box-shadow: inset 1px 1px 2px #FFFAF0,\n      inset -1px -1px 2px LightGrey;\n  }\n\n  > a {\n    text-decoration: none;\n    color: darkgrey;\n  }\n"]))),p=o.ZP.h3(a||(a=(0,c.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  padding-left: 16px;\n"]))),s=o.ZP.p(i||(i=(0,c.Z)(["\nmargin-top: 0;\nmargin-bottom: 8px;\nmargin-left: 8px\ncolor: darkgrey;\npadding-left: 16px;\noverflow : hidden\n"])))},8603:function(n,t,r){r.d(t,{W:function(){return i}});var e,a=r(168),i=r(7691).ZP.ul(e||(e=(0,a.Z)(["\nlist-style: none;\npadding: 0;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\nmargin-left: -8px;\nmargin-right: -8px;\nmargin-bottom: -16px;\nmargin-top: 0;\n"])))},2150:function(n,t,r){r.d(t,{Hg:function(){return p},TP:function(){return h},tx:function(){return g},z1:function(){return f},zv:function(){return x}});var e=r(5861),a=r(4687),i=r.n(a),c=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"391a97ba083a1d8591f2f4cbb9f29b09"}});function o(){return u.apply(this,arguments)}function u(){return u=(0,e.Z)(i().mark((function n(){var t,r,e,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r=a.length>1&&void 0!==a[1]?a[1]:{},n.next=4,c.get(t,r);case 4:return e=n.sent,n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function p(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o("trending/movie/day"));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o("search/movie?query=".concat(t)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o("movie/".concat(t)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o("movie/".concat(t,"/credits")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o("movie/".concat(t,"/reviews")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},680:function(n,t,r){n.exports=r.p+"static/media/ImageNotFound.e41b1f5132ed954f1600.png"}}]);
//# sourceMappingURL=247.0eadc43f.chunk.js.map