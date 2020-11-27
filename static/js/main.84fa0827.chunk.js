(this["webpackJsonpchurch-bulletin"]=this["webpackJsonpchurch-bulletin"]||[]).push([[0],{180:function(e,n,t){},594:function(e,n){},596:function(e,n){},60:function(e,n){},606:function(e,n){},608:function(e,n){},633:function(e,n){},635:function(e,n){},636:function(e,n){},642:function(e,n){},644:function(e,n){},662:function(e,n){},664:function(e,n){},676:function(e,n){},679:function(e,n){},683:function(e,n,t){},694:function(e,n,t){},695:function(e,n,t){},696:function(e,n,t){},697:function(e,n,t){},698:function(e,n,t){},699:function(e,n,t){},707:function(e,n,t){},708:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(3),r=t.n(c),s=t(169),o=t.n(s),i=(t(180),t(10)),u=t(49),l=t(7),d=t.n(l),j=t(13),f=t(82),b=t.n(f),p=t(20),m="SET_COVER",h="SET_AGENDA",O="SET_ANNOUNCEMENTS",g="SET_LESSON",v="IS_LOADING",x="SET_BULLETIN",y="SET_ERROR_MSG",E="SET_USER",N="UNSET_USER",w="SET_TOKEN",S="UNSET_TOKEN",R=function(e){return{type:m,payload:e}},k=function(e){return{type:h,payload:e}},T=function(e){return{type:O,payload:e}},A=function(e){return{type:g,payload:e}},C=t(170),I=new(t.n(C).a.STS)({}),L=function(){var e=Object(j.a)(d.a.mark((function e(n,t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={RoleArn:"arn:aws:iam::164535879341:role/church-bulletin-admin-role",RoleSessionName:"church-bulletin-admin-session",WebIdentityToken:t},e.next=3,new Promise((function(e,t){I.assumeRoleWithWebIdentity(a,(function(a,c){a&&t(a),c&&(n({type:w,payload:c}),e(c))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),M=t(171),D=t.n(M),P=function(e){if(null===e)return!1;if(e&&e.Credentials&&e.Credentials.Expiration){var n=p.DateTime.fromJSDate(e.Credentials.Expiration);if(p.DateTime.local()<n)return!0}return!1},G=function(){var e=7-p.DateTime.local().weekday;return p.DateTime.local().plus({days:e})},_=function(){var e=Object(j.a)(d.a.mark((function e(n){var t,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search),"0"!==(a=p.DateTime.local()).weekday&&(a=G()),e.prev=3,n({type:v,payload:!0}),e.next=7,b.a.get("https://7qseesv2jh.execute-api.us-east-2.amazonaws.com/default/churchBulletin",{headers:{"X-Api-Key":"".concat(t.get("key")),"Content-Type":"application/json"},params:{d:"".concat(a.toFormat("yyyy-MM-dd"))}});case 7:200===(c=e.sent).status?(c.data.cover.logo="/church-bulletin/oaktree.png",n((r=c.data,{type:x,payload:r}))):console.log(c.status," ",c.statusText," ",c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n({type:y,payload:"Please refresh to try again"});case 14:case"end":return e.stop()}var r}),e,null,[[3,11]])})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(j.a)(d.a.mark((function e(n,t,a){var c,r,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==(c=a||null)&&P(a)){e.next=6;break}return e.next=5,L(n,t);case 5:c=e.sent;case 6:return console.log("back in dashboard, data is: ",c),r={host:"c43o0u35nf.execute-api.us-east-2.amazonaws.com",method:"GET",url:"https://c43o0u35nf.execute-api.us-east-2.amazonaws.com/default",path:"/default"},delete(s=D.a.sign(r,{secretAccessKey:c.Credentials.SecretAccessKey,accessKeyId:c.Credentials.AccessKeyId,sessionToken:c.Credentials.SessionToken})).headers.Host,delete s.headers["Content-Length"],e.next=13,b()(s);case 13:200===(o=e.sent).status&&console.log("200 response: ",o.data),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log("back in dashboard, err is : ",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(n,t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=t(174),U=t(6),K=r.a.createContext(),W={agenda:null,announcements:null,cover:null,errMsg:null,isLoading:!0,lesson:null,token:null,user:null},H=function(e,n){switch(n.type){case x:return Object(U.a)(Object(U.a)({},e),{},{cover:n.payload.cover,agenda:n.payload.agenda,announcements:n.payload.announcements,lesson:n.payload.lesson,isLoading:!1});case m:return Object(U.a)(Object(U.a)({},e),{},{cover:n.payload});case h:return Object(U.a)(Object(U.a)({},e),{},{agenda:n.payload});case O:return Object(U.a)(Object(U.a)({},e),{},{announcements:n.payload});case g:return Object(U.a)(Object(U.a)({},e),{},{lesson:n.payload});case v:return Object(U.a)(Object(U.a)({},e),{},{isLoading:n.payload});case y:return Object(U.a)(Object(U.a)({},e),{},{errMsg:n.payload});case E:return Object(U.a)(Object(U.a)({},e),{},{user:n.payload});case N:return Object(U.a)(Object(U.a)({},e),{},{user:null});case w:return Object(U.a)(Object(U.a)({},e),{},{token:n.payload});case S:return Object(U.a)(Object(U.a)({},e),{},{token:null});default:return e}},q=function(e){var n=Object(c.useContext)(K).state;return e?e(n):n},z=function(){return Object(c.useContext)(K).dispatch},J=function(e){var n=Object(c.useReducer)(H,W),t=Object(B.a)(n,2),r={state:t[0],dispatch:t[1]};return Object(a.jsx)(K.Provider,{value:r,children:e.children})},V=(t(683),"SPECIAL"),X="OPENING",Q="CLOSING",Z="SONG",$="SPEAKER",ee="PRAYER",ne="TESTIMONY",te="SACRAMENT",ae="PRESIDING",ce="CONDUCTING",re="CHORISTER",se="ORGANIST",oe={GENERAL:"GENERAL",PRIMARY:"PRIMARY",YMYW:"YMYW",ELDERS:"ELDERS",RS:"RS",MISSIONARIES:"MISSIONARIES"},ie=function(e){var n=q().agenda;if(!n)return Object(a.jsx)(a.Fragment,{});var t,c,r=e.item.charAt(0)+e.item.slice(1).toLowerCase()+":",s="";switch(e.item){case ae:case ce:case re:case se:t=n[e.item.toLowerCase()];break;case $:t=(c=e.type,n.speakers.find((function(e){return e.order===c}))).name;break;case ee:t=function(e,n){return n.find((function(n){return n.type===e}))}(e.type,n.prayers).name,e.type===X&&(r="Invocation"),e.type===Q&&(r="Benediction");break;case te:case ne:r="",t="",s=e.item===ne?Object(a.jsx)("div",{className:"agenda-item-title",children:Object(a.jsx)("strong",{children:"Sharing of Testimonies"})}):Object(a.jsx)("div",{className:"agenda-item-title",children:Object(a.jsx)("strong",{children:"Administration of the Sacrament"})});break;case Z:var o=function(e,n){return e===V?n.filter((function(n){return n.type===e})):n.find((function(n){return n.type===e}))}(e.type,n.songs);r=e.type===V?"Special Musical Number:":e.type.charAt(0)+e.type.slice(1).toLowerCase()+" Song:",t=o.number,s=Object(a.jsx)("div",{className:"agenda-item-title",children:o.title})}return Object(a.jsxs)("div",{className:"agenda-item-container",children:[Object(a.jsxs)("div",{className:"agenda-item-label-value",children:[Object(a.jsx)("div",{className:"agenda-item-label",children:r}),Object(a.jsx)("div",{className:"agenda-item-value",children:t})]}),s]})},ue=function(){var e=q().agenda,n=z();if(Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(t=e.sent).error?console.log("unable to get the latest agenda"):n(k(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),!e)return Object(a.jsx)(a.Fragment,{});var t=e.order.map((function(e,n){return Object(a.jsx)(ie,{item:e.item,type:e.type},e.item+e.type+n)}));return Object(a.jsxs)("div",{className:"agenda-container",children:[Object(a.jsx)("h2",{children:"Agenda"}),Object(a.jsxs)("div",{className:"agenda-whos-who",children:[Object(a.jsx)(ie,{item:ae}),Object(a.jsx)(ie,{item:ce}),Object(a.jsx)(ie,{item:re}),Object(a.jsx)(ie,{item:se})]}),t]})},le=function(){var e={};return e[oe.GENERAL]="General",e[oe.YMYW]="Young Men/Young Women",e[oe.PRIMARY]="Primary",e[oe.ELDERS]="Elders",e[oe.RS]="Relief Society",e[oe.MISSIONARIES]="Missionaries",e},de=t(50),je=t.n(de),fe=t(51),be=t.n(fe),pe=function(e){if(!e.announcements||0===e.announcements.length)return Object(a.jsx)(a.Fragment,{});var n=e.announcements.map((function(n,t){return e.type!==n.type?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)("div",{className:"announcement",children:be()(je()(n.message))},t)}));return Object(a.jsxs)("div",{className:"announcement-section",children:[Object(a.jsx)("div",{className:"announcement-heading",children:Object(a.jsx)("strong",{children:le()[e.type]})}),n]})},me=(t(694),function(){var e=q().announcements,n=z();if(Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(t=e.sent).error?console.log("unable to get latest announcements."):n(T(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),!e)return Object(a.jsx)(a.Fragment,{});var t=Object.values(oe).map((function(n,t){var c=function(e,n){return n.messages.filter((function(n){return n.type===e}))}(n,e);return Object(a.jsx)(pe,{type:n,announcements:c},n+t)}));return Object(a.jsxs)("div",{className:"announcements-container",children:[Object(a.jsx)("h2",{children:"Announcements"}),t]})}),he=(t(695),function(){var e=q().cover,n=z();if(Object(c.useEffect)((function(){var t=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:(t=e.sent).error?console.log("unable to get latest cover"):n(R(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===e&&t()}),[]),Object(c.useEffect)((function(){var e=function(){document.getElementsByClassName("cover-image")[0].style.top=.4*window.pageYOffset+"px",document.getElementsByClassName("cover-header")[0].style.top=window.pageYOffset/.85+"px"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),null===e)return Object(a.jsx)(a.Fragment,{});var t=p.DateTime.fromISO(e.date).toFormat("MMM d, yyyy");return Object(a.jsxs)("div",{className:"cover-container",children:[Object(a.jsxs)("div",{className:"cover-header",children:[Object(a.jsx)("img",{src:e.logo,alt:"logo",id:"logo"}),Object(a.jsx)("h1",{children:e.name}),Object(a.jsx)("h2",{children:e.type}),Object(a.jsx)("div",{className:"cover-date",children:t})]}),Object(a.jsx)("div",{className:"cover-image-container",children:Object(a.jsx)("img",{className:"cover-image",src:e.image,alt:"",height:window.innerHeight})})]})}),Oe=(t(696),function(){var e=q().lesson,n=z();return Object(c.useEffect)((function(){var e=function(e){var n=document.getElementsByClassName("lesson-content")[0],t=document.getElementsByClassName("lesson-container")[0].getBoundingClientRect(),a=document.getElementsByClassName("lesson-image")[0];t.top<window.innerHeight&&(n.style.top=.5*t.top+"px",a.style.transform="scale(".concat(t.top/1e3+1.5,")"))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(c.useEffect)((function(){null===e&&function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=2);case 2:(t=e.sent).error?console.log("unable to get the latest agenda"):n(A(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),null===e?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)("div",{className:"lesson-container",children:[Object(a.jsx)("div",{className:"lesson-image-container",children:Object(a.jsx)("img",{src:e.imgURL,className:"lesson-image",alt:""})}),Object(a.jsxs)("div",{className:"lesson-content",children:[Object(a.jsx)("h2",{children:e.header}),Object(a.jsx)("div",{className:"lesson-block",children:e.block}),Object(a.jsx)("div",{className:"lesson-title",children:be()(je()(e.title))})]})]})}),ge=(t(697),function(){var e=q().errMsg,n=void 0!==e?e:"Loading...";return Object(a.jsxs)("div",{className:"waiting",children:[Object(a.jsx)("img",{src:"/church-bulletin/christuslogo.png",alt:"logo",className:"rotate"}),Object(a.jsx)("p",{children:n})]})}),ve=(t(698),function(){var e=q().isLoading,n=z();return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!1===e?Object(a.jsxs)("div",{className:"program-container",children:[Object(a.jsx)(he,{}),Object(a.jsx)(ue,{}),Object(a.jsx)(Oe,{}),Object(a.jsx)(me,{}),Object(a.jsx)("div",{className:"contact",children:"For additions/changes to the bulletin please text Bro. Nick Graves"})]}):Object(a.jsx)(ge,{})}),xe=(t(699),function(){var e=z(),n=Object(i.g)();return Object(c.useEffect)((function(){var t=function(t){e({type:E,payload:t}),e({type:S}),n.push("/dashboard")};window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"877425478598-b7fsqjtjeon0n1nkjn3kqrhdoco82lhi.apps.googleusercontent.com"}).then((function(){window.gapi.signin2.render("my-g-signin",{scope:"profile email",width:200,height:40,longtitle:!1,theme:"dark",onsuccess:t})})).catch((function(e){throw new Error("Unable to authenticate through google. Please try again later")}))}))}),[]),Object(a.jsxs)("div",{className:"login-page",children:[Object(a.jsx)("div",{className:"login-page-header",children:"Please login with your google account to manage your bulletin"}),Object(a.jsx)("div",{id:"my-g-signin"})]})}),ye=function(){var e=q(),n=e.user,t=e.token,c=z();return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"Dashboard"}),Object(a.jsx)("button",{onClick:function(){c(Y(c,n.getAuthResponse().id_token,t))},children:"Get Data"})]})},Ee=t(173),Ne=function(e){var n=e.component,t=Object(Ee.a)(e,["component"]),c=q().user;return c&&function(e){if(null===e)return!1;if(e.getAuthResponse().expires_at){var n=p.DateTime.fromMillis(e.getAuthResponse().expires_at);if(p.DateTime.local()<n)return!0}return!1}(c)?Object(a.jsx)(i.b,Object(U.a)(Object(U.a)({},t),{},{render:function(e){return Object(a.jsx)(n,Object(U.a)({},e))}})):Object(a.jsx)(i.b,Object(U.a)(Object(U.a)({},t),{},{render:function(e){return Object(a.jsx)(i.a,{to:"/login"})}}))},we=(t(707),function(){var e=Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/",exact:!0,component:ve}),Object(a.jsx)(i.b,{path:"/login",exact:!0,component:xe}),Object(a.jsx)(Ne,{path:"/dashboard",exact:!0,component:ye})]})});return Object(a.jsx)(u.a,{children:e})}),Se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,709)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(J,{children:Object(a.jsx)(we,{})})}),document.getElementById("root")),Se()}},[[708,1,2]]]);
//# sourceMappingURL=main.84fa0827.chunk.js.map