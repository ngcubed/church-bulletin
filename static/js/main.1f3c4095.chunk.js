(this["webpackJsonpchurch-bulletin"]=this["webpackJsonpchurch-bulletin"]||[]).push([[0],{41:function(e,t,n){},60:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(31),o=n.n(s),i=(n(41),n(2)),u=n(34),l=n(3),d=n.n(l),j=n(7),m=n(32),f=n.n(m),b=n(12),p="SET_COVER",O="SET_AGENDA",v="SET_ANNOUNCEMENTS",h="SET_LESSON",g="IS_LOADING",x="SET_BULLETIN",y="SET_ERROR_MSG",E=function(e){return{type:p,payload:e}},N=function(e){return{type:O,payload:e}},w=function(e){return{type:v,payload:e}},S=function(e){return{type:h,payload:e}},R=function(){var e=7-b.DateTime.local().weekday;return b.DateTime.local().plus({days:e})},L=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(window.location.search),"0"!==(a=b.DateTime.local()).weekday&&(a=R()),e.prev=3,t({type:g,payload:!0}),e.next=7,f.a.get("https://7qseesv2jh.execute-api.us-east-2.amazonaws.com/default/churchBulletin",{headers:{"X-Api-Key":"".concat(n.get("key")),"Content-Type":"application/json"},params:{d:"".concat(a.toFormat("yyyy-MM-dd"))}});case 7:200===(c=e.sent).status?(c.data.cover.logo="/church-bulletin/oaktree.png",t((r=c.data,{type:x,payload:r}))):console.log(c.status," ",c.statusText," ",c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),t({type:y,payload:"Please refresh to try again"});case 14:case"end":return e.stop()}var r}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=n(35),A=n(5),M=r.a.createContext(),T={cover:null,agenda:null,announcements:null,lesson:null,isLoading:!0},C=function(e,t){switch(t.type){case x:return Object(A.a)(Object(A.a)({},e),{},{cover:t.payload.cover,agenda:t.payload.agenda,announcements:t.payload.announcements,lesson:t.payload.lesson,isLoading:!1});case p:return Object(A.a)(Object(A.a)({},e),{},{cover:t.payload});case O:return Object(A.a)(Object(A.a)({},e),{},{agenda:t.payload});case v:return Object(A.a)(Object(A.a)({},e),{},{announcements:t.payload});case h:return Object(A.a)(Object(A.a)({},e),{},{lesson:t.payload});case g:return Object(A.a)(Object(A.a)({},e),{},{isLoading:t.payload});case y:return Object(A.a)(Object(A.a)({},e),{},{errMsg:t.payload});default:return e}},Y=function(e){var t=Object(c.useContext)(M).state;return e?e(t):t},P=function(){return Object(c.useContext)(M).dispatch},F=function(e){var t=Object(c.useReducer)(C,T),n=Object(k.a)(t,2),r={state:n[0],dispatch:n[1]};return Object(a.jsx)(M.Provider,{value:r,children:e.children})},D=(n(60),"SPECIAL"),G="SONG",B="SPEAKER",_="PRAYER",U="TESTIMONY",W="SACRAMENT",H="PRESIDING",z="CONDUCTING",J="CHORISTER",K="ORGANIST",q={GENERAL:"GENERAL",PRIMARY:"PRIMARY",YMYW:"YMYW",ELDERS:"ELDERS",RS:"RS",MISSIONARIES:"MISSIONARIES"},V=function(e){var t=Y().agenda;if(!t)return Object(a.jsx)(a.Fragment,{});var n,c,r=e.item.charAt(0)+e.item.slice(1).toLowerCase()+":",s="";switch(e.item){case H:case z:case J:case K:n=t[e.item.toLowerCase()];break;case B:n=(c=e.type,t.speakers.find((function(e){return e.order===c}))).name;break;case _:n=function(e,t){return t.find((function(t){return t.type===e}))}(e.type,t.prayers).name;break;case W:case U:r="",n="",s=e.item===U?Object(a.jsx)("div",{className:"agenda-item-title",children:Object(a.jsx)("strong",{children:"Sharing of Testimonies"})}):Object(a.jsx)("div",{className:"agenda-item-title",children:Object(a.jsx)("strong",{children:"Administration of the Sacrament"})});break;case G:var o=function(e,t){return e===D?t.filter((function(t){return t.type===e})):t.find((function(t){return t.type===e}))}(e.type,t.songs);r=e.type===D?"Special Musical Number:":e.type.charAt(0)+e.type.slice(1).toLowerCase()+" Song:",n=o.number,s=Object(a.jsx)("div",{className:"agenda-item-title",children:o.title})}return Object(a.jsxs)("div",{className:"agenda-item-container",children:[Object(a.jsxs)("div",{className:"agenda-item-label-value",children:[Object(a.jsx)("div",{className:"agenda-item-label",children:r}),Object(a.jsx)("div",{className:"agenda-item-value",children:n})]}),s]})},X=function(){var e=Y().agenda,t=P();if(Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(n=e.sent).error?console.log("unable to get the latest agenda"):t(N(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),!e)return Object(a.jsx)(a.Fragment,{});var n=e.order.map((function(e,t){return Object(a.jsx)(V,{item:e.item,type:e.type},e.item+e.type+t)}));return Object(a.jsxs)("div",{className:"agenda-container",children:[Object(a.jsx)("h2",{children:"Agenda"}),Object(a.jsxs)("div",{className:"agenda-whos-who",children:[Object(a.jsx)(V,{item:H}),Object(a.jsx)(V,{item:z}),Object(a.jsx)(V,{item:J}),Object(a.jsx)(V,{item:K})]}),n]})},Q=function(){var e={};return e[q.GENERAL]="General",e[q.YMYW]="Young Men/Young Women",e[q.PRIMARY]="Primary",e[q.ELDERS]="Elders",e[q.RS]="Relief Society",e[q.MISSIONARIES]="Missionaries",e},Z=n(14),$=n.n(Z),ee=n(15),te=n.n(ee),ne=function(e){if(!e.announcements||0===e.announcements.length)return Object(a.jsx)(a.Fragment,{});var t=e.announcements.map((function(t,n){return e.type!==t.type?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)("div",{className:"announcement",children:te()($()(t.message))},n)}));return Object(a.jsxs)("div",{className:"announcement-section",children:[Object(a.jsx)("div",{className:"announcement-heading",children:Object(a.jsx)("strong",{children:Q()[e.type]})}),t]})},ae=(n(71),function(){var e=Y().announcements,t=P();if(Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(n=e.sent).error?console.log("unable to get latest announcements."):t(w(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),!e)return Object(a.jsx)(a.Fragment,{});var n=Object.values(q).map((function(t,n){var c=function(e,t){return t.messages.filter((function(t){return t.type===e}))}(t,e);return Object(a.jsx)(ne,{type:t,announcements:c},t+n)}));return Object(a.jsxs)("div",{className:"announcements-container",children:[Object(a.jsx)("h2",{children:"Announcements"}),n]})}),ce=(n(72),function(){var e=Y().cover,t=P();if(Object(c.useEffect)((function(){var n=function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:(n=e.sent).error?console.log("unable to get latest cover"):t(E(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===e&&n()}),[]),Object(c.useEffect)((function(){var e=function(){document.getElementsByClassName("cover-image")[0].style.top=window.pageYOffset+"px"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),null===e)return Object(a.jsx)(a.Fragment,{});var n=b.DateTime.fromISO(e.date).toFormat("MMM d, yyyy");return Object(a.jsxs)("div",{className:"cover-container",children:[Object(a.jsxs)("div",{className:"cover-header",children:[Object(a.jsx)("img",{src:e.logo,alt:"logo",id:"logo"}),Object(a.jsx)("h1",{children:e.name}),Object(a.jsx)("h2",{children:e.type}),Object(a.jsx)("div",{className:"cover-date",children:n})]}),Object(a.jsx)("div",{className:"cover-image-container",children:Object(a.jsx)("img",{className:"cover-image",src:e.image,alt:"",height:window.innerHeight})})]})}),re=(n(73),function(){var e=Y().lesson,t=P();return Object(c.useEffect)((function(){var e=function(e){var t=document.getElementsByClassName("lesson-content")[0],n=(t.getBoundingClientRect().top-window.pageYOffset)/100*3;t.style.top=-30+n+"%";var a=document.getElementsByClassName("lesson-image")[0],c=a.getBoundingClientRect(),r=window.innerHeight,s=c.top-1*r,o=0;c.top<r&&c.bottom>0&&(o=s/2+"px"),a.style.backgroundPosition=o,window.innerWidth>window.innerHeight?a.style.backgroundSize="auto 100vw":a.style.backgroundSize="cover"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(n=e.sent).error?console.log("unable to get the latest agenda"):t(S(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),null===e?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)("div",{className:"lesson-container",children:[Object(a.jsx)("div",{className:"lesson-image",style:{backgroundImage:"url(".concat(e.imgURL,")")}}),Object(a.jsxs)("div",{className:"lesson-content",children:[Object(a.jsx)("h2",{children:e.header}),Object(a.jsx)("div",{className:"lesson-block",children:e.block}),Object(a.jsx)("div",{className:"lesson-title",children:te()($()(e.title))})]})]})}),se=(n(74),function(){var e=Y().errMsg,t=void 0!==e?e:"Loading...";return Object(a.jsxs)("div",{className:"waiting",children:[Object(a.jsx)("img",{src:"/church-bulletin/christuslogo.png",alt:"logo",className:"rotate"}),Object(a.jsx)("p",{children:t})]})}),oe=(n(75),function(){var e=Y().isLoading,t=P();return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!1===e?Object(a.jsxs)("div",{className:"program-container",children:[Object(a.jsx)(ce,{}),Object(a.jsx)(X,{}),Object(a.jsx)(re,{}),Object(a.jsx)(ae,{})]}):Object(a.jsx)(se,{})}),ie=(n(76),function(){var e=Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(i.a,{path:"/",exact:!0,component:oe})});return Object(a.jsx)(u.a,{children:e})}),ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{children:Object(a.jsx)(ie,{})})}),document.getElementById("root")),ue()}},[[85,1,2]]]);
//# sourceMappingURL=main.1f3c4095.chunk.js.map