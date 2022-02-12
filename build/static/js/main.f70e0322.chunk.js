(this["webpackJsonpmdb-react-template"]=this["webpackJsonpmdb-react-template"]||[]).push([[0],{61:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),l=c(10),n=c.n(l),i=c(20),r=c(33),d=c(15),j=c(27),o=c(11),b=c(34),m=c.n(b),h=Object(d.b)({name:"user",initialState:{user:{}},reducers:{success:function(e,t){var c=t.payload;e.user=c}}}),O=h.reducer,x=h.actions.success,u=c(23),p=c(18),f=c.n(p),g=c(24),v=Object(d.b)({name:"region",initialState:{cstates:[],ccity:[],pstates:[],pcity:[],isLoading:!1,isError:null},reducers:{isPending:function(e){e.isLoading=!0},cisState:function(e,t){var c=t.payload;e.isLoading=!1,e.cstates=c},cisCity:function(e,t){var c=t.payload;e.isLoading=!1,e.ccity=c},pisState:function(e,t){var c=t.payload;e.isLoading=!1,e.pstates=c},pisCity:function(e,t){var c=t.payload;e.isLoading=!1,e.pcity=c},isRejected:function(e,t){var c=t.payload;e.isLoading=!1,e.isError=c}}}),y=v.reducer,N=v.actions,C=N.isPending,w=N.cisState,k=N.cisCity,F=N.pisCity,_=N.pisState,S=N.isRejected,z=function(){var e=Object(u.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(C());try{t=T(g.State.getAllStates()),c=t.filter((function(e){return"IN"===e.countryCode&&"JH"===e.isoCode})),G(w(c))}catch(a){G(S(a.message))}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(f.a.mark((function e(t){var c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(C()),e.prev=1,e.next=4,T(g.City.getAllCities());case 4:c=e.sent,a=c.filter((function(e){return e.stateCode===t})),G(k(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),G(S(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(C());try{t=T(g.State.getAllStates()),c=t.filter((function(e){return"IN"===e.countryCode&&"JH"===e.isoCode})),G(_(c))}catch(a){G(S(a.message))}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(f.a.mark((function e(t){var c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(C()),e.prev=1,e.next=4,T(g.City.getAllCities());case 4:c=e.sent,a=c.filter((function(e){return e.stateCode===t})),G(F(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),G(S(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),T=function(e){return e.sort((function(e,t){var c=e.name.toUpperCase(),a=t.name.toUpperCase();return c<a?-1:c>a?1:0}))},q=Object(d.b)({name:"education",initialState:{addEducation:[]},reducers:{educationSuccess:function(e,t){var c=t.payload;e.addEducation.push(c)},remove:function(e,t){var c=t.payload;e.addEducation.splice(c,1)}}}),E=q.reducer,I=q.actions,W=I.educationSuccess,D=I.remove,B={key:"test",storage:m.a},M=Object(o.b)({testState:Object(j.a)(B,O),regionState:y,educationState:E}),Y=Object(d.a)({reducer:M,middleware:function(e){return e({serializableCheck:!1,immutableCheck:!1})}}),G=Y.dispatch,H=(Y.getState,Object(j.b)(Y)),J=(c(61),c(62),c(13)),R=c(6),U=c(8),V=c(2),K=c.p+"static/media/logo.f775e3dc.jpg",Q=c(1);function X(){var e=Object(a.useState)(!1),t=Object(U.a)(e,2),c=t[0],s=t[1];return Object(Q.jsx)(V.s,{expand:"lg",light:!0,bgColor:"light",className:"fixed-top",children:Object(Q.jsxs)(V.o,{children:[Object(Q.jsx)(V.t,{href:"/",className:"navlogo",children:Object(Q.jsx)("img",{src:K,height:40,alt:"#"})}),Object(Q.jsx)(V.x,{type:"button","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return s(!c)},children:Object(Q.jsx)(V.q,{icon:"bars",fas:!0})}),Object(Q.jsx)(V.n,{navbar:!0,show:c,children:Object(Q.jsxs)(V.w,{className:"navitems",children:[Object(Q.jsx)(V.u,{children:Object(Q.jsx)(V.v,{active:!0,"aria-current":"page",children:Object(Q.jsx)(J.b,{to:"/",children:"Home"})})}),Object(Q.jsx)(V.u,{children:Object(Q.jsxs)(J.b,{to:"/applycard1",children:[" ",Object(Q.jsx)(V.v,{children:"About"})]})}),Object(Q.jsx)(V.u,{children:Object(Q.jsx)(J.b,{to:"/applycard2",children:Object(Q.jsx)(V.v,{children:"Contact"})})}),Object(Q.jsx)(V.u,{children:Object(Q.jsx)(V.v,{children:Object(Q.jsx)(J.b,{to:"/login",children:Object(Q.jsx)(V.a,{outline:!0,size:"sm",color:"danger",children:"Login"})})})})]})})]})})}function Z(){return Object(Q.jsx)("div",{children:Object(Q.jsx)(V.p,{className:"text-center",color:"white",bgColor:"dark",children:Object(Q.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2022 Copyright: \xa0",Object(Q.jsx)("a",{className:"text-white",href:"#",children:"ABC Consultant Pvt. Ltd"})]})})})}function $(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(V.g,{showIndicators:!0,showControls:!0,fade:!0,className:"carousel",children:Object(Q.jsxs)(V.j,{children:[Object(Q.jsxs)(V.k,{className:"active",children:[Object(Q.jsx)(V.i,{className:"carosule",height:400,src:"https://i.dawn.com/primary/2020/05/5ec211100d87f.jpg",alt:"..."}),Object(Q.jsx)(V.h,{id:"cp",children:Object(Q.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})})]}),Object(Q.jsxs)(V.k,{children:[Object(Q.jsx)(V.i,{height:400,src:"https://www.unsdglearn.org/wp-content/uploads/2020/03/SDG_Indicators_2.3.1-and-2.3_Labour-productivity-and-income-of-small-scale-food-producers-aspect-ratio-1920x1080-1.jpg",alt:"..."}),Object(Q.jsxs)(V.h,{children:[Object(Q.jsx)("h5",{children:"Second slide label"}),Object(Q.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(Q.jsxs)(V.k,{children:[Object(Q.jsx)(V.i,{height:400,src:"https://www.dss-hr.com/blog/wp-content/uploads/2019/11/salary-negotiation.jpg",alt:"..."}),Object(Q.jsxs)(V.h,{children:[Object(Q.jsx)("h5",{children:"Third slide label"}),Object(Q.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]}),Object(Q.jsxs)(V.k,{children:[Object(Q.jsx)(V.i,{height:400,src:"https://www.projectmanager.com/wp-content/uploads/2018/10/181126_Blog_Feature_Negotiating_Workplace.jpg",alt:"..."}),Object(Q.jsxs)(V.h,{children:[Object(Q.jsx)("h5",{children:"Third slide label"}),Object(Q.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})})}var ee=c.p+"static/media/cardsimg.40d22a52.jpg",te=c.p+"static/media/job.9b60ee32.jpg";function ce(){var e=Object(R.f)();return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(V.o,{fluid:!0,className:"feature",children:Object(Q.jsx)("h2",{children:"Free Job For Everyone"})}),Object(Q.jsx)("div",{className:"container",children:Object(Q.jsxs)("div",{className:"row my-4",children:[Object(Q.jsx)("div",{className:"col-md-1 col-sm-12"}),Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-4",children:Object(Q.jsx)(V.b,{style:{maxWidth:"100%"},children:Object(Q.jsx)(V.e,{src:ee,position:"top",alt:"..."})})}),Object(Q.jsx)("div",{className:"col-md-2 col-sm-12"}),Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-4",children:Object(Q.jsxs)(V.b,{style:{maxWidth:"100%"},className:"applycard",children:[Object(Q.jsx)(V.a,{color:"danger",className:"cardbtn",outline:!0,size:"lg",onClick:function(){return e("/applycard")},children:"APPLY FOR CARD"}),Object(Q.jsx)(V.e,{className:"cardimg",src:te,position:"top",alt:"..."})]})}),Object(Q.jsx)("div",{className:"col-md-1 col-sm-12"})]})})]})}var ae,se=c(25),le=c.p+"static/media/l1.be791f20.jpg",ne=c.p+"static/media/l2.6416177a.jpg",ie=c.p+"static/media/l3.ed75e988.jpg",re=c.p+"static/media/l4.2a5c76e9.jpg",de=c.p+"static/media/it1.4fe9ea01.jpg",je=c(41),oe=c(14).a.div(ae||(ae=Object(se.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 250px;\n  width: 100%;\n  background-color: #683bb7;\n  color: #fff;\n  margin: 5px;\n  font-size: 4em;\n"]))),be=[{width:1,itemsToShow:1},{width:550,itemsToShow:2,itemsToScroll:2},{width:768,itemsToShow:3},{width:1200,itemsToShow:4}];function me(){var e=Object(a.useState)([le,ne,ie,re,de]),t=Object(U.a)(e,2),c=t[0];t[1];return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{className:"container",style:{marginTop:70},children:[Object(Q.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[Object(Q.jsx)("h2",{children:"Gallery"}),Object(Q.jsx)(J.b,{to:"/",children:"View All"})]}),Object(Q.jsx)("div",{className:"carousel-wrapper",children:Object(Q.jsx)(je.a,{breakPoints:be,autoPlaySpeed:4e3,enableAutoPlay:!0,showArrows:!1,children:c.map((function(e,t){return Object(Q.jsx)(oe,{children:Object(Q.jsx)("img",{width:"100%",height:"100%",src:e,alt:""})},t)}))})})]})})}var he=function(){return Object(Q.jsx)("div",{children:Object(Q.jsx)(V.p,{className:"text-center",color:"white",bgColor:"dark",children:Object(Q.jsxs)(V.o,{className:"p-4",children:[Object(Q.jsxs)("section",{className:"mb-4",children:[Object(Q.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button",children:Object(Q.jsx)(V.q,{fab:!0,icon:"facebook-f"})}),Object(Q.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button",children:Object(Q.jsx)(V.q,{fab:!0,icon:"twitter"})}),Object(Q.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button",children:Object(Q.jsx)(V.q,{fab:!0,icon:"google"})}),Object(Q.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button",children:Object(Q.jsx)(V.q,{fab:!0,icon:"instagram"})}),Object(Q.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button",children:Object(Q.jsx)(V.q,{fab:!0,icon:"linkedin-in"})}),Object(Q.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button",children:Object(Q.jsx)(V.q,{fab:!0,icon:"github"})})]}),Object(Q.jsx)("section",{className:"",children:Object(Q.jsx)("form",{action:"",children:Object(Q.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(Q.jsx)("div",{className:"col-auto",children:Object(Q.jsx)("p",{className:"pt-2",children:Object(Q.jsx)("strong",{children:"Sign up for our newsletter"})})}),Object(Q.jsx)(V.m,{md:"5",start:"12",children:Object(Q.jsx)(V.r,{contrast:!0,type:"email",label:"Email address",className:"mb-4"})}),Object(Q.jsx)("div",{className:"col-auto",children:Object(Q.jsx)(V.a,{outline:!0,color:"light",type:"submit",className:"mb-4",children:"Subscribe"})})]})})}),Object(Q.jsx)("section",{className:"",children:Object(Q.jsxs)(V.z,{children:[Object(Q.jsxs)(V.m,{lg:"4",md:"6",className:"mb-4 mb-md-0",children:[Object(Q.jsx)("h5",{className:"text-uppercase",children:"Address"}),Object(Q.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(Q.jsx)("li",{children:Object(Q.jsx)("a",{href:"#!",className:"text-white",children:"Link 1"})}),Object(Q.jsx)("li",{children:Object(Q.jsx)("a",{href:"#!",className:"text-white",children:"Link 2"})})]})]}),Object(Q.jsxs)(V.m,{lg:"4",md:"6",className:"mb-4 mb-md-0",children:[Object(Q.jsx)("h5",{className:"text-uppercase",children:"our services"}),Object(Q.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(Q.jsx)("li",{children:Object(Q.jsx)("a",{href:"#!",className:"text-white",children:"Link 1"})}),Object(Q.jsx)("li",{children:Object(Q.jsx)("a",{href:"#!",className:"text-white",children:"Link 2"})})]})]}),Object(Q.jsxs)(V.m,{lg:"4",md:"6",className:"mb-4 mb-md-0",children:[Object(Q.jsx)("h5",{className:"text-uppercase",children:"Contact"}),Object(Q.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(Q.jsx)("li",{children:Object(Q.jsx)("a",{href:"#!",className:"text-white",children:"Link 1"})}),Object(Q.jsx)("li",{children:Object(Q.jsx)("a",{href:"#!",className:"text-white",children:"Link 2"})})]})]})]})})]})})})},Oe=function(){return Object(a.useEffect)((function(){!function(){try{G(x({name:"imran",email:"imran@gmail.com"}))}catch(e){console.log(e)}}()}),[]),Object(Q.jsxs)("div",{style:{marginTop:67},children:[Object(Q.jsx)($,{}),Object(Q.jsx)(ce,{}),Object(Q.jsx)(me,{}),Object(Q.jsx)("div",{style:{marginTop:10}}),Object(Q.jsx)(he,{})]})};function xe(e){var t=e.title,c=e.children;return Object(Q.jsxs)(V.b,{className:"headCard",children:[Object(Q.jsx)(V.d,{className:"headercard",children:t}),Object(Q.jsx)(V.c,{children:c})]})}var ue=c(5),pe=c(7),fe=c(40),ge=[{label:"Urdu",value:"urdu"},{label:"English",value:"English"},{label:"Hindi",value:"hindi"}],ve=function(e){var t=function(t){e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},Object(ue.a)({},t.target.name,t.target.value)))};return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{className:"container",children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Personal Detail"}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{label:"Name",id:"name",type:"text",name:"name",value:e.field.name||"",onChange:t,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Email",id:"email",type:"email",name:"email",value:e.field.email||"",onChange:t,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Mobile no",id:"mobileno",type:"number",name:"mobileno",value:e.field.mobileno||"",onChange:t,size:"lg"})})]}),Object(Q.jsxs)("div",{className:"row my-2",children:[Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{label:"Date of birth",id:"dateofbirth",type:"date",name:"dateofbirth",value:e.field.dateofbirth||"",onChange:t,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{label:"Father Name",id:"fathername",type:"text",name:"fathername",value:e.field.fathername||"",onChange:t,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-4 col-sm-12 my-2",children:Object(Q.jsx)(fe.a,{options:ge,isMulti:!0,onChange:function(t){e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},{language:t.map((function(e){return e.value}))}))},placeholder:"select Language"})}),Object(Q.jsxs)("div",{className:"row my-2",children:[Object(Q.jsx)("div",{className:"col-md-4 my-3",children:Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",marginLeft:5},children:[Object(Q.jsx)(V.y,{name:"gender",id:"male",label:"Male",value:"male",checked:"male"===e.field.gender,onChange:t}),Object(Q.jsx)(V.y,{className:"mx-2",name:"gender",id:"female",label:"Female",value:"female",checked:"female"===e.field.gender,onChange:t})]})}),Object(Q.jsx)("div",{className:"col-md-6 my-3",children:Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",marginLeft:5},children:[Object(Q.jsx)(V.y,{name:"mariatalstatus",id:"married",label:"Married",value:"marriaged",checked:"marriaged"===e.field.mariatalstatus,onChange:t}),Object(Q.jsx)(V.y,{className:"mx-2",name:"mariatalstatus",id:"unmarriaged",label:"Single",value:"unmarriaged",checked:"unmarriaged"===e.field.mariatalstatus,onChange:t})]})})]})]})]})})},ye=c(9),Ne=function(e){var t=Object(a.useState)(!1),c=Object(U.a)(t,2),s=c[0],l=c[1],n=Object(i.b)((function(e){return e.regionState})),r=n.cstates,d=n.ccity,j=n.pstates,o=n.pcity;Object(a.useEffect)((function(){z(),L()}),[]);var b=function(t){e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},Object(ue.a)({},t.target.name,t.target.value)))};return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{className:"container",children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Address Detail"}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsxs)("div",{className:"col-md-6 col-sm-12",children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Corespondence Address"}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsxs)("select",{name:"cstate",className:"form-select form-select-lg",onChange:function(t){e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},{cstate:t.target.value})),P(t.target.value)},required:!0,children:[Object(Q.jsx)("option",{children:"Select State"}),r.map((function(e,t){return Object(Q.jsx)("option",{value:e.isoCode,children:e.name})}))]})}),Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsxs)("select",{name:"ccity",onChange:function(t){return e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},{ccity:t.target.value}))},className:"form-select form-select-lg",children:[Object(Q.jsx)("option",{children:"Select City"}),d.map((function(e,t){return Object(Q.jsx)("option",{value:e.name,children:e.name})}))]})})]}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"House/Door/FlateNo",id:"chouse_door_flate",type:"text",name:"chouse_door_flate",value:e.field.chouse_door_flate||"",onChange:b,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Street/Locality/Police Station",id:"cstreet_locality_policestation",type:"text",name:"cstreet_locality_policestation",value:e.field.cstreet_locality_policestation||"",onChange:b,size:"lg"})})]}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Location/Land Mark *",id:"clocation_landmark",type:"text",name:"clocation_landmark",value:e.field.clocation_landmark||"",onChange:b,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Pincode",id:"cpincode",type:"text",name:"cpincode",value:e.field.cpincode||"",onChange:b,size:"lg"})})]})]}),Object(Q.jsxs)("div",{className:"col-md-6 col-sm-12",children:[Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Permanent Address"}),Object(Q.jsx)(V.l,{className:"chkbox",name:"flexCheck",value:"",id:"flexCheckDefault",label:"same as address",onChange:function(t){A(e.field.cstate),!0===s?(l(!1),e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},{pstate:"",pcity:"",phouse_door_flate:"",pstreet_locality_policestation:"",plocation_landmark:"",p_pincode:""}))):(l(!0),e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},{pstate:e.field.cstate,pcity:e.field.ccity,phouse_door_flate:e.field.chouse_door_flate,pstreet_locality_policestation:e.field.cstreet_locality_policestation,plocation_landmark:e.field.clocation_landmark,p_pincode:e.field.cpincode})))},checked:s})]}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsxs)("select",{className:"form-select form-select-lg",onChange:function(t){e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},{pstate:t.target.value})),A(t.target.value)},children:[Object(Q.jsx)("option",{children:"Select State"}),j.map((function(t,c){return Object(Q.jsx)("option",{value:t.isoCode,selected:t.isoCode==e.field.pstate?"selected":"",children:t.name})}))]})}),Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsxs)("select",{onChange:function(t){return e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},{pcity:t.target.value}))},className:"form-select form-select-lg",children:[Object(Q.jsx)("option",{children:"Select City"}),o.map((function(t,c){return Object(Q.jsx)("option",{selected:t.name==e.field.pcity?"selected":"",value:t.name,children:t.name})}))]})})]}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"House/Door/FlateNo",id:"phouse_door_flate",type:"text",name:"phouse_door_flate",value:e.field.phouse_door_flate||"",onChange:b,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Street/Locality/Police Station",id:"pstreet_locality_policestation",type:"text",name:"pstreet_locality_policestation",value:e.field.pstreet_locality_policestation||"",onChange:b,size:"lg"})})]}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Location/Land Mark",id:"plocation_landmark",type:"text",name:"plocation_landmark",value:e.field.plocation_landmark||"",onChange:b,size:"lg"})}),Object(Q.jsx)("div",{className:"col-md-6 my-2",children:Object(Q.jsx)(V.r,{className:"custom-form",label:"Pincode",id:"p_pincode",type:"text",name:"p_pincode",value:e.field.p_pincode||"",onChange:b,size:"lg"})})]})]})]})]})})},Ce=function(e){var t=function(t,c){var a=Object(ye.a)(e.addField);a[t][c.target.name]=c.target.value,e.setAddField(a)},c=function(t){e.setAddField([].concat(Object(ye.a)(e.addField),[{}]))},a=function(t){var c=Object(ye.a)(e.addField);c.splice(t,1),e.setAddField(c)};return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{className:"container my-5",children:[Object(Q.jsxs)("div",{style:{justifyContent:"space-between",display:"flex"},children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Education"}),Object(Q.jsxs)(V.a,{className:"btn-rounded",outline:!0,onClick:c,hidden:!!e.addField.length,children:[Object(Q.jsx)(V.q,{icon:"plus",fas:!0})," Education"]})]}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-12",children:e.addField.map((function(e,c){var s,l,n,i;return Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-2 col-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",label:0===c?"Maticulation":1===c?"Intermediate":2===c?"Graduation":3===c?"Post Graduation":"Tecnical",id:"teducation",type:"text",name:"teducation",value:e.teducation,onChange:function(e){return t(c,e)}})}),Object(Q.jsx)("div",{className:"col-md-2 col-12 my-2",children:Object(Q.jsx)(V.r,(s={size:"lg",label:"Board"},Object(ue.a)(s,"label","Board"),Object(ue.a)(s,"id","tboard"),Object(ue.a)(s,"type","text"),Object(ue.a)(s,"name","tboard"),Object(ue.a)(s,"value",e.tboard),Object(ue.a)(s,"onChange",(function(e){return t(c,e)})),s))}),Object(Q.jsx)("div",{className:"col-md-2 col-12 my-2",children:Object(Q.jsx)(V.r,(l={size:"lg",label:"Institute"},Object(ue.a)(l,"label","Institute"),Object(ue.a)(l,"id","tinstiture"),Object(ue.a)(l,"type","text"),Object(ue.a)(l,"name","tinstiture"),Object(ue.a)(l,"value",e.tinstiture),Object(ue.a)(l,"onChange",(function(e){return t(c,e)})),l))}),Object(Q.jsx)("div",{className:"col-md-2 col-12 my-2",children:Object(Q.jsx)(V.r,(n={size:"lg",label:"Percentage"},Object(ue.a)(n,"label","Percentage"),Object(ue.a)(n,"id","tpercentage"),Object(ue.a)(n,"type","text"),Object(ue.a)(n,"name","tpercentage"),Object(ue.a)(n,"value",e.tpercentage),Object(ue.a)(n,"onChange",(function(e){return t(c,e)})),n))}),Object(Q.jsx)("div",{className:"col-md-3 col-9 my-2",children:Object(Q.jsx)(V.r,(i={size:"lg",label:"Year"},Object(ue.a)(i,"label","Year"),Object(ue.a)(i,"id","tyear"),Object(ue.a)(i,"type","text"),Object(ue.a)(i,"name","tyear"),Object(ue.a)(i,"value",e.tyear),Object(ue.a)(i,"onChange",(function(e){return t(c,e)})),i))}),Object(Q.jsx)("div",{className:"col-md-1 col-3 my-2",children:Object(Q.jsx)(V.a,{color:"danger",className:"btn btn-block",size:"lg",outline:!0,onClick:a,children:Object(Q.jsx)(V.q,{icon:"trash",fas:!0})})}),Object(Q.jsx)("div",{className:"my-3"})]})}))}),Object(Q.jsx)("div",{style:{justifyContent:"right",display:"flex"},hidden:!e.addField.length,children:Object(Q.jsx)(V.a,{outline:!0,onClick:c,children:Object(Q.jsx)(V.q,{icon:"plus",fas:!0})})})]})]})})},we=function(e){var t=function(t){e.setField(Object(pe.a)(Object(pe.a)({},e.field),{},Object(ue.a)({},t.target.name,t.target.value)))};return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{className:"container",style:{marginTop:100},children:[Object(Q.jsxs)("div",{children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Experience"}),Object(Q.jsx)("hr",{})]}),Object(Q.jsx)("div",{className:"row",children:Object(Q.jsx)("div",{className:"col-md-12 col-sm-12",children:Object(Q.jsxs)("div",{children:[Object(Q.jsx)(V.y,{name:"technical",id:"fresher",label:"Fresher",value:"fresher",checked:"fresher"===e.field.technical,onChange:t}),Object(Q.jsx)(V.y,{name:"technical",id:"workexperience",label:"Work Experience",value:"workexperience",checked:"workexperience"===e.field.technical,onChange:t})]})})}),"workexperience"===e.field.technical?Object(Q.jsxs)("div",{className:"row my-3",children:[Object(Q.jsx)("div",{className:"col-md-3 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",name:"fromdate",label:"From Date",id:"mobileno",type:"date"})}),Object(Q.jsx)("div",{className:"col-md-3 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",name:"todate",label:"To Date",id:"todate",type:"date"})}),Object(Q.jsx)("div",{className:"col-md-3 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",name:"position",label:"Position/Designation",id:"position",type:"txet"})}),Object(Q.jsx)("div",{className:"col-md-3 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",name:"company",label:"Company/Organisation",id:"comapny",type:"text"})})]}):null]})})},ke=function(e){var t=Object(a.useState)([]),c=Object(U.a)(t,2),s=c[0],l=c[1],n=function(e){l([].concat(Object(ye.a)(s),[{}]))},i=function(e){var t=Object(ye.a)(s);t.splice(e,1),l(t)};return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{className:"container my-5",children:[Object(Q.jsxs)("div",{style:{justifyContent:"space-between",display:"flex"},children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Skills"}),Object(Q.jsxs)(V.a,{className:"btn-rounded",outline:!0,onClick:n,hidden:!!s.length,children:[Object(Q.jsx)(V.q,{icon:"plus",fas:!0})," Skill"]})]}),Object(Q.jsx)("hr",{}),s.map((function(e,t){return Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-11 col-9 my-2",children:Object(Q.jsx)(V.r,{size:"lg",label:"Skills",id:"skill",type:"text",name:"skill",value:e.skill||"",onChange:function(e){return function(e,t){var c=Object(ye.a)(s);c[e][t.target.name]=t.target.value,l(c)}(t,e)}})}),Object(Q.jsx)("div",{className:"col-md-1 col-1 my-2",children:Object(Q.jsx)(V.a,{size:"lg",color:"danger",outline:!0,onClick:i,children:Object(Q.jsx)(V.q,{icon:"trash",fas:!0})})})]})})),Object(Q.jsx)("div",{style:{justifyContent:"right",display:"flex"},children:Object(Q.jsx)(V.a,{className:"btn-rounded",outline:!0,onClick:n,hidden:!s.length,children:Object(Q.jsx)(V.q,{icon:"plus",fas:!0})})})]})})},Fe=function(){var e=Object(a.useState)({language:[]}),t=Object(U.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)([]),n=Object(U.a)(l,2),i=n[0],r=n[1];return Object(Q.jsxs)("div",{className:"container",style:{marginTop:80},children:[Object(Q.jsxs)(xe,{title:"Apply for card",children:[Object(Q.jsx)(ve,{field:c,setField:s}),Object(Q.jsx)(Ne,{field:c,setField:s}),Object(Q.jsx)(Ce,{addField:i,setAddField:r,field:c,setField:s}),Object(Q.jsx)(ke,{field:c,setField:s}),Object(Q.jsx)(we,{field:c,setField:s}),Object(Q.jsx)("div",{className:"my-5",style:{display:"flex",justifyContent:"center"},children:Object(Q.jsxs)(V.a,{rounded:!0,outline:!0,children:[Object(Q.jsx)(V.q,{icon:"credit-card"})," Pay now"]})})]}),Object(Q.jsx)("div",{style:{marginTop:50}})]})},_e=function(e){var t=function(t,c){var a=Object(ye.a)(e.addField);a[t][c.target.name]=c.target.value,e.setAddField(a)},c=function(t){var c=Object(ye.a)(e.addField);c.splice(t,1),e.setAddField(c)};return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{className:"container my-5",children:[Object(Q.jsxs)("div",{style:{justifyContent:"space-between",display:"flex"},children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Education"}),Object(Q.jsx)(V.a,{className:"btn-rounded",onClick:function(t){e.setAddField([].concat(Object(ye.a)(e.addField),[{}]))},children:Object(Q.jsx)(V.q,{icon:"plus",fas:!0})})]}),Object(Q.jsx)("hr",{}),Object(Q.jsx)("div",{className:"row",children:Object(Q.jsx)("div",{className:"col-md-12",children:Object(Q.jsx)("div",{className:"table table-responsive",children:Object(Q.jsx)("table",{className:"table table-bordered",children:Object(Q.jsx)("tbody",{children:e.addField.map((function(e,a){return Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("td",{children:Object(Q.jsx)("input",{placeholder:0===a?"Maticulation":1===a?"Intermediate":2===a?"Graduation":3===a?"Post Graduation":"Tecnical",id:"teducation",type:"text",name:"teducation",value:e.teducation,onChange:function(e){return t(a,e)}})}),Object(Q.jsx)("td",{children:Object(Q.jsx)("input",{placeholder:"Board",label:"Board",id:"tboard",type:"text",name:"tboard",value:e.tboard,onChange:function(e){return t(a,e)}})}),Object(Q.jsx)("td",{children:Object(Q.jsx)("input",{placeholder:"Institute",label:"Institute",id:"tinstiture",type:"text",name:"tinstiture",value:e.tinstiture,onChange:function(e){return t(a,e)}})}),Object(Q.jsx)("td",{children:Object(Q.jsx)("input",{placeholder:"Percentage",label:"Percentage",id:"tpercentage",type:"text",name:"tpercentage",value:e.tpercentage,onChange:function(e){return t(a,e)}})}),Object(Q.jsx)("td",{children:Object(Q.jsx)("input",{placeholder:"Year",label:"Year",id:"tyear",type:"text",name:"tyear",value:e.tyear,onChange:function(e){return t(a,e)}})}),Object(Q.jsx)("td",{children:Object(Q.jsx)(V.a,{color:"danger",size:"sm",outline:!0,onClick:c,children:Object(Q.jsx)(V.q,{icon:"trash",fas:!0})})})]},a)}))})})})})})]})})},Se=function(e){var t=Object(a.useState)({}),c=Object(U.a)(t,2),s=c[0],l=c[1],n=Object(i.b)((function(e){return e.educationState})),r=n.addEducation,d=function(e){l(Object(pe.a)(Object(pe.a)({},s),{},Object(ue.a)({},e.target.name,e.target.value)))};return Object(Q.jsx)("div",{className:"my-5",children:Object(Q.jsxs)("div",{className:"container",children:[Object(Q.jsxs)("div",{style:{justifyContent:"space-between",display:"flex"},children:[Object(Q.jsx)("span",{style:{fontWeight:"bold"},children:"Education"}),Object(Q.jsx)(V.a,{className:"btn-rounded",onClick:function(){G(W(s))},children:Object(Q.jsx)(V.q,{icon:"plus",fas:!0})})]}),Object(Q.jsx)("hr",{}),Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-md-3 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",label:"Education",id:"education",type:"text",name:"education",onChange:d,value:s.education||""})}),Object(Q.jsx)("div",{className:"col-md-3 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",label:"Board",id:"board",type:"text",name:"board",onChange:d,value:s.board||""})}),Object(Q.jsx)("div",{className:"col-md-3 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",label:"Institute",id:"institute",type:"text",name:"institute",onChange:d,value:s.institute||""})}),Object(Q.jsx)("div",{className:"col-md-2 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",label:"Percentage",id:"percentage",type:"text",name:"percentage",onChange:d,value:s.percentage||""})}),Object(Q.jsx)("div",{className:"col-md-1 col-sm-12 my-2",children:Object(Q.jsx)(V.r,{size:"lg",label:"Year",id:"year",type:"text",name:"year",onChange:d,value:s.year||""})})]}),Object(Q.jsx)("div",{className:"row my-3",children:Object(Q.jsx)("div",{className:"table table-responsive",children:Object(Q.jsxs)("table",{className:"table table-bordered",children:[Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("th",{children:"Education"}),Object(Q.jsx)("th",{children:"Board"}),Object(Q.jsx)("th",{children:"Institute"}),Object(Q.jsx)("th",{children:"Percentage"}),Object(Q.jsx)("th",{children:"Year"}),Object(Q.jsx)("th",{children:"Remove"})]}),Object(Q.jsx)("tbody",{children:r.map((function(e,t){return Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("td",{children:e.education}),Object(Q.jsx)("td",{children:e.board}),Object(Q.jsx)("td",{children:e.institute}),Object(Q.jsx)("td",{children:e.percentage}),Object(Q.jsx)("td",{children:e.year}),Object(Q.jsx)("td",{children:Object(Q.jsx)(V.a,{color:"danger",outline:!0,onClick:function(){G(D(t))},children:Object(Q.jsx)(V.q,{icon:"trash"})})})]},t)}))})]})})})]})})},ze=function(){var e=Object(a.useState)({language:[]}),t=Object(U.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)([]),n=Object(U.a)(l,2),i=n[0],r=n[1];return Object(Q.jsxs)("div",{className:"container",style:{marginTop:80},children:[Object(Q.jsxs)(xe,{title:"Apply for card",children:[Object(Q.jsx)(ve,{field:c,setField:s}),Object(Q.jsx)(Ne,{field:c,setField:s}),Object(Q.jsx)(Se,{addField:i,setAddField:r,field:c,setField:s}),Object(Q.jsx)(ke,{field:c,setField:s}),Object(Q.jsx)(we,{field:c,setField:s}),Object(Q.jsx)("div",{className:"my-5",style:{display:"flex",justifyContent:"center"},children:Object(Q.jsx)(V.a,{children:"Pay now"})})]}),Object(Q.jsx)("div",{style:{marginTop:50}})]})},Pe=function(){return Object(Q.jsx)("div",{className:"container",style:{marginTop:480},children:Object(Q.jsx)("h1",{children:"About"})})},Le=function(){return Object(Q.jsx)("div",{className:"container",style:{marginTop:480},children:Object(Q.jsx)("h1",{children:"Contact"})})},Ae=function(){var e=Object(a.useState)({language:[]}),t=Object(U.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)([]),n=Object(U.a)(l,2),i=n[0],r=n[1];return Object(Q.jsxs)("div",{className:"container",style:{marginTop:80},children:[Object(Q.jsxs)(xe,{title:"Apply for card",children:[Object(Q.jsx)(ve,{field:c,setField:s}),Object(Q.jsx)(Ne,{field:c,setField:s}),Object(Q.jsx)(_e,{addField:i,setAddField:r,field:c,setField:s}),Object(Q.jsx)(ke,{field:c,setField:s}),Object(Q.jsx)(we,{field:c,setField:s}),Object(Q.jsx)("div",{className:"my-5",style:{display:"flex",justifyContent:"center"},children:Object(Q.jsxs)(V.a,{rounded:!0,outline:!0,children:[Object(Q.jsx)(V.q,{icon:"credit-card"})," Pay now"]})})]}),Object(Q.jsx)("div",{style:{marginTop:50}})]})};var Te=function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(X,{}),Object(Q.jsxs)(R.c,{children:[Object(Q.jsx)(R.a,{path:"/",element:Object(Q.jsx)(Oe,{})}),Object(Q.jsx)(R.a,{path:"/applycard",element:Object(Q.jsx)(Fe,{})}),Object(Q.jsx)(R.a,{path:"/applycard1",element:Object(Q.jsx)(ze,{})}),Object(Q.jsx)(R.a,{path:"/applycard2",element:Object(Q.jsx)(Ae,{})}),Object(Q.jsx)(R.a,{path:"/about",element:Object(Q.jsx)(Pe,{})}),Object(Q.jsx)(R.a,{path:"/contact",element:Object(Q.jsx)(Le,{})})]}),Object(Q.jsx)(Z,{})]})},qe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),l(e),n(e)}))};n.a.render(Object(Q.jsx)(s.a.StrictMode,{children:Object(Q.jsx)(i.a,{store:Y,children:Object(Q.jsx)(r.a,{persistor:H,children:Object(Q.jsx)(J.a,{children:Object(Q.jsx)(Te,{})})})})}),document.getElementById("root")),qe()}},[[82,1,2]]]);
//# sourceMappingURL=main.f70e0322.chunk.js.map