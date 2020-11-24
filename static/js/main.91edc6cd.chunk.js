(this["webpackJsonpchurch-bulletin"]=this["webpackJsonpchurch-bulletin"]||[]).push([[0],{180:function(e,n,t){},594:function(e,n){},596:function(e,n){},60:function(e,n){},606:function(e,n){},608:function(e,n){},633:function(e,n){},635:function(e,n){},636:function(e,n){},642:function(e,n){},644:function(e,n){},662:function(e,n){},664:function(e,n){},676:function(e,n){},679:function(e,n){},683:function(e,n,t){},694:function(e,n,t){},695:function(e,n,t){},696:function(e,n,t){},697:function(e,n,t){},698:function(e,n,t){},699:function(e,n,t){},707:function(e,n,t){},708:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(3),r=t.n(c),s=t(170),o=t.n(s),i=(t(180),t(10)),u=t(49),l=t(6),d=t.n(l),j=t(13),f=t(83),b=t.n(f),m=t(33),p="SET_COVER",h="SET_AGENDA",O="SET_ANNOUNCEMENTS",g="SET_LESSON",v="IS_LOADING",x="SET_BULLETIN",y="SET_ERROR_MSG",N="SET_AUTH",w="UNSET_AUTH",E=function(e){return{type:p,payload:e}},S=function(e){return{type:h,payload:e}},k=function(e){return{type:O,payload:e}},R=function(e){return{type:g,payload:e}},A=t(82),I=new(t.n(A).a.STS)({}),T=function(){var e=Object(j.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={RoleArn:"arn:aws:iam::164535879341:role/church-bulletin-admin-role",RoleSessionName:"church-bulletin-admin-session",WebIdentityToken:n},e.next=3,new Promise((function(e,n){I.assumeRoleWithWebIdentity(t,(function(t,a){t&&n(t),a&&e(a)}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=t(171),L=t.n(C),M=function(){var e=7-m.DateTime.local().weekday;return m.DateTime.local().plus({days:e})},G=function(){var e=Object(j.a)(d.a.mark((function e(n){var t,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search),"0"!==(a=m.DateTime.local()).weekday&&(a=M()),e.prev=3,n({type:v,payload:!0}),e.next=7,b.a.get("https://7qseesv2jh.execute-api.us-east-2.amazonaws.com/default/churchBulletin",{headers:{"X-Api-Key":"".concat(t.get("key")),"Content-Type":"application/json"},params:{d:"".concat(a.toFormat("yyyy-MM-dd"))}});case 7:200===(c=e.sent).status?(c.data.cover.logo="/church-bulletin/oaktree.png",n((r=c.data,{type:x,payload:r}))):console.log(c.status," ",c.statusText," ",c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n({type:y,payload:"Please refresh to try again"});case 14:case"end":return e.stop()}var r}),e,null,[[3,11]])})));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(d.a.mark((function e(n,t){var a,c,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(t);case 3:return a=e.sent,console.log("back in dashboard, data is: ",a),c={host:"c43o0u35nf.execute-api.us-east-2.amazonaws.com",method:"GET",url:"https://c43o0u35nf.execute-api.us-east-2.amazonaws.com/default",path:"/default"},delete(r=L.a.sign(c,{secretAccessKey:a.Credentials.SecretAccessKey,accessKeyId:a.Credentials.AccessKeyId,sessionToken:a.Credentials.SessionToken})).headers.Host,delete r.headers["Content-Length"],e.next=11,b()(r);case 11:200===(s=e.sent).status&&console.log("200 response: ",s.data),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("back in dashboard, err is : ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n,t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=t(174),F=t(7),B=r.a.createContext(),_={cover:null,agenda:null,announcements:null,lesson:null,isLoading:!0,token:null},U=function(e,n){switch(n.type){case x:return Object(F.a)(Object(F.a)({},e),{},{cover:n.payload.cover,agenda:n.payload.agenda,announcements:n.payload.announcements,lesson:n.payload.lesson,isLoading:!1});case p:return Object(F.a)(Object(F.a)({},e),{},{cover:n.payload});case h:return Object(F.a)(Object(F.a)({},e),{},{agenda:n.payload});case O:return Object(F.a)(Object(F.a)({},e),{},{announcements:n.payload});case g:return Object(F.a)(Object(F.a)({},e),{},{lesson:n.payload});case v:return Object(F.a)(Object(F.a)({},e),{},{isLoading:n.payload});case y:return Object(F.a)(Object(F.a)({},e),{},{errMsg:n.payload});case N:return Object(F.a)(Object(F.a)({},e),{},{token:n.payload});case w:return Object(F.a)(Object(F.a)({},e),{},{token:null});default:return e}},W=function(e){var n=Object(c.useContext)(B).state;return e?e(n):n},H=function(){return Object(c.useContext)(B).dispatch},K=function(e){var n=Object(c.useReducer)(U,_),t=Object(D.a)(n,2),r={state:t[0],dispatch:t[1]};return Object(a.jsx)(B.Provider,{value:r,children:e.children})},q=(t(683),"SPECIAL"),z="OPENING",J="CLOSING",V="SONG",X="SPEAKER",Q="PRAYER",Z="TESTIMONY",$="SACRAMENT",ee="PRESIDING",ne="CONDUCTING",te="CHORISTER",ae="ORGANIST",ce={GENERAL:"GENERAL",PRIMARY:"PRIMARY",YMYW:"YMYW",ELDERS:"ELDERS",RS:"RS",MISSIONARIES:"MISSIONARIES"},re=function(e){var n=W().agenda;if(!n)return Object(a.jsx)(a.Fragment,{});var t,c,r=e.item.charAt(0)+e.item.slice(1).toLowerCase()+":",s="";switch(e.item){case ee:case ne:case te:case ae:t=n[e.item.toLowerCase()];break;case X:t=(c=e.type,n.speakers.find((function(e){return e.order===c}))).name;break;case Q:t=function(e,n){return n.find((function(n){return n.type===e}))}(e.type,n.prayers).name,e.type===z&&(r="Invocation"),e.type===J&&(r="Benediction");break;case $:case Z:r="",t="",s=e.item===Z?Object(a.jsx)("div",{className:"agenda-item-title",children:Object(a.jsx)("strong",{children:"Sharing of Testimonies"})}):Object(a.jsx)("div",{className:"agenda-item-title",children:Object(a.jsx)("strong",{children:"Administration of the Sacrament"})});break;case V:var o=function(e,n){return e===q?n.filter((function(n){return n.type===e})):n.find((function(n){return n.type===e}))}(e.type,n.songs);r=e.type===q?"Special Musical Number:":e.type.charAt(0)+e.type.slice(1).toLowerCase()+" Song:",t=o.number,s=Object(a.jsx)("div",{className:"agenda-item-title",children:o.title})}return Object(a.jsxs)("div",{className:"agenda-item-container",children:[Object(a.jsxs)("div",{className:"agenda-item-label-value",children:[Object(a.jsx)("div",{className:"agenda-item-label",children:r}),Object(a.jsx)("div",{className:"agenda-item-value",children:t})]}),s]})},se=function(){var e=W().agenda,n=H();if(Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(t=e.sent).error?console.log("unable to get the latest agenda"):n(S(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),!e)return Object(a.jsx)(a.Fragment,{});var t=e.order.map((function(e,n){return Object(a.jsx)(re,{item:e.item,type:e.type},e.item+e.type+n)}));return Object(a.jsxs)("div",{className:"agenda-container",children:[Object(a.jsx)("h2",{children:"Agenda"}),Object(a.jsxs)("div",{className:"agenda-whos-who",children:[Object(a.jsx)(re,{item:ee}),Object(a.jsx)(re,{item:ne}),Object(a.jsx)(re,{item:te}),Object(a.jsx)(re,{item:ae})]}),t]})},oe=function(){var e={};return e[ce.GENERAL]="General",e[ce.YMYW]="Young Men/Young Women",e[ce.PRIMARY]="Primary",e[ce.ELDERS]="Elders",e[ce.RS]="Relief Society",e[ce.MISSIONARIES]="Missionaries",e},ie=t(50),ue=t.n(ie),le=t(51),de=t.n(le),je=function(e){if(!e.announcements||0===e.announcements.length)return Object(a.jsx)(a.Fragment,{});var n=e.announcements.map((function(n,t){return e.type!==n.type?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)("div",{className:"announcement",children:de()(ue()(n.message))},t)}));return Object(a.jsxs)("div",{className:"announcement-section",children:[Object(a.jsx)("div",{className:"announcement-heading",children:Object(a.jsx)("strong",{children:oe()[e.type]})}),n]})},fe=(t(694),function(){var e=W().announcements,n=H();if(Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(t=e.sent).error?console.log("unable to get latest announcements."):n(k(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),!e)return Object(a.jsx)(a.Fragment,{});var t=Object.values(ce).map((function(n,t){var c=function(e,n){return n.messages.filter((function(n){return n.type===e}))}(n,e);return Object(a.jsx)(je,{type:n,announcements:c},n+t)}));return Object(a.jsxs)("div",{className:"announcements-container",children:[Object(a.jsx)("h2",{children:"Announcements"}),t]})}),be=(t(695),function(){var e=W().cover,n=H();if(Object(c.useEffect)((function(){var t=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:(t=e.sent).error?console.log("unable to get latest cover"):n(E(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===e&&t()}),[]),Object(c.useEffect)((function(){var e=function(){document.getElementsByClassName("cover-image")[0].style.top=.4*window.pageYOffset+"px",document.getElementsByClassName("cover-header")[0].style.top=window.pageYOffset/.85+"px"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),null===e)return Object(a.jsx)(a.Fragment,{});var t=m.DateTime.fromISO(e.date).toFormat("MMM d, yyyy");return Object(a.jsxs)("div",{className:"cover-container",children:[Object(a.jsxs)("div",{className:"cover-header",children:[Object(a.jsx)("img",{src:e.logo,alt:"logo",id:"logo"}),Object(a.jsx)("h1",{children:e.name}),Object(a.jsx)("h2",{children:e.type}),Object(a.jsx)("div",{className:"cover-date",children:t})]}),Object(a.jsx)("div",{className:"cover-image-container",children:Object(a.jsx)("img",{className:"cover-image",src:e.image,alt:"",height:window.innerHeight})})]})}),me=(t(696),function(){var e=W().lesson,n=H();return Object(c.useEffect)((function(){var e=function(e){var n=document.getElementsByClassName("lesson-content")[0],t=document.getElementsByClassName("lesson-container")[0].getBoundingClientRect(),a=document.getElementsByClassName("lesson-image")[0];t.top<window.innerHeight&&(n.style.top=.5*t.top+"px",a.style.transform="scale(".concat(t.top/1e3+1.5,")"))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(t=e.sent).error?console.log("unable to get the latest agenda"):n(R(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),null===e?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)("div",{className:"lesson-container",children:[Object(a.jsx)("div",{className:"lesson-image-container",children:Object(a.jsx)("img",{src:e.imgURL,className:"lesson-image",alt:""})}),Object(a.jsxs)("div",{className:"lesson-content",children:[Object(a.jsx)("h2",{children:e.header}),Object(a.jsx)("div",{className:"lesson-block",children:e.block}),Object(a.jsx)("div",{className:"lesson-title",children:de()(ue()(e.title))})]})]})}),pe=(t(697),function(){var e=W().errMsg,n=void 0!==e?e:"Loading...";return Object(a.jsxs)("div",{className:"waiting",children:[Object(a.jsx)("img",{src:"/church-bulletin/christuslogo.png",alt:"logo",className:"rotate"}),Object(a.jsx)("p",{children:n})]})}),he=(t(698),function(){var e=W().isLoading,n=H();return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!1===e?Object(a.jsxs)("div",{className:"program-container",children:[Object(a.jsx)(be,{}),Object(a.jsx)(se,{}),Object(a.jsx)(me,{}),Object(a.jsx)(fe,{}),Object(a.jsx)("div",{className:"contact",children:"For additions/changes to the bulletin please text Bro. Nick Graves"})]}):Object(a.jsx)(pe,{})}),Oe=(t(699),function(){var e=H(),n=Object(i.g)();return Object(c.useEffect)((function(){var t=function(t){var a=t.getAuthResponse().id_token;e({type:N,payload:a}),n.push("/dashboard")};window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"877425478598-b7fsqjtjeon0n1nkjn3kqrhdoco82lhi.apps.googleusercontent.com"}).then((function(){window.gapi.signin2.render("my-g-signin",{scope:"profile email",width:200,height:40,longtitle:!1,theme:"dark",onsuccess:t})}))}))}),[]),Object(a.jsxs)("div",{className:"login-page",children:[Object(a.jsx)("div",{className:"login-page-header",children:"Please login with your google account to manage your bulletin"}),Object(a.jsx)("div",{id:"my-g-signin"})]})}),ge=function(){var e=W().token,n=H();return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"Dashboard"}),Object(a.jsx)("button",{onClick:function(){n(P(n,e))},children:"Get Data"})]})},ve=t(173),xe=function(e){var n=e.component,t=Object(ve.a)(e,["component"]);return W().token?Object(a.jsx)(i.b,Object(F.a)(Object(F.a)({},t),{},{render:function(e){return Object(a.jsx)(n,Object(F.a)({},e))}})):Object(a.jsx)(i.b,Object(F.a)(Object(F.a)({},t),{},{render:function(e){return Object(a.jsx)(i.a,{to:"/login"})}}))},ye=(t(707),function(){var e=Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/",exact:!0,component:he}),Object(a.jsx)(i.b,{path:"/login",exact:!0,component:Oe}),Object(a.jsx)(xe,{path:"/dashboard",exact:!0,component:ge})]})});return Object(a.jsx)(u.a,{children:e})}),Ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,709)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(K,{children:Object(a.jsx)(ye,{})})}),document.getElementById("root")),Ne()}},[[708,1,2]]]);
//# sourceMappingURL=main.91edc6cd.chunk.js.map