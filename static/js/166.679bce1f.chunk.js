"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166],{166:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(433),a=r(861),c=r(439),s=r(757),i=r.n(s),o=r(689),u=r(294),p=function(){var t=(0,a.Z)(i().mark((function t(e){var r,n,a,c,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),n=new URLSearchParams({api_key:"",language:"en-US"}),t.next=4,u.Z.get("".concat(r,"?").concat(n));case 4:return a=t.sent,t.next=7,a.data;case 7:return c=t.sent,s=c.cast,t.abrupt("return",s);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=r(791),l="CastList_castList__YQOUt",d="Actor_actor__1caEh",f=r(184),m=function(t){var e=t.id,r=t.profile_path,n=t.name,a=t.character;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("li",{className:d,children:[r?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(r),alt:n,width:"260px"}):(0,f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Missing_image.png",alt:"missing actor",width:"260px"}),(0,f.jsx)("h3",{children:n}),(0,f.jsxs)("p",{children:["Character: ",a]})]},e)})},x=function(t){var e=t.cast;return console.log(e),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:l,children:e.map((function(t){return(0,f.jsx)(m,{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character},t.id)}))})})},g=function(){var t=(0,o.TH)(),e=(0,h.useState)([]),r=(0,c.Z)(e,2),s=r[0],u=r[1],l=(0,h.useState)(t.state.id),d=(0,c.Z)(l,1)[0];return(0,h.useEffect)((function(){function t(){return t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(d);case 2:e=t.sent,u((0,n.Z)(e));case 4:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,f.jsx)("div",{children:s&&(0,f.jsx)(x,{cast:s})})}}}]);
//# sourceMappingURL=166.679bce1f.chunk.js.map