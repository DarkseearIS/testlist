(this.webpackJsonptestlist=this.webpackJsonptestlist||[]).push([[0],{134:function(e,t,a){e.exports=a(258)},139:function(e,t,a){},220:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l);a(139),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(22),c=a(11),s=a(297),u=a(87),m=a(123).create({baseURL:"https://armspb.mooo.com:3200/api/"}),d=function(){return m.get("user")},f=function(e){return m.post("addUser",e)},p=function(e){return m.delete("/deleteUser/".concat(e))},b={user:null},v=function(e){return{type:"USER",user:e}},E=function(){return function(e){d().then((function(t){e(v(t.data))}))}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":return Object(u.a)(Object(u.a)({},e),{},{user:t.user});default:return e}},g=a(124),y=Object(c.c)({userReducer:h,form:s.a}),j=Object(c.e)(y,Object(c.a)(g.a)),O=(a(220),a(51)),S=a(298),w=a(287),N=a(84),x=a.n(N),U=Object(w.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(x.a[500]),backgroundColor:x.a[500]},idStyle:{backgroundColor:"silver",width:"50px",margin:"0 0 0 ",fontSize:"26px"},idStyleDiv:{textAlign:"center",marginTop:"20%"}}})),k=function(e){var t=e.id,a=e.name,n=e.lastName,l=e.email,i=e.deleteUser,o=e._id,c=U(),s=function(){i(o)};return r.a.createElement("div",null,r.a.createElement("div",{className:c.root},r.a.createElement("div",{className:c.idStyle},r.a.createElement("div",{className:c.idStyleDiv},"#",t)),r.a.createElement(S.a,{alt:"Remy Sharp",className:c.orange},a.charAt(0)+n.charAt(0)),r.a.createElement("div",null,r.a.createElement("div",null," ",a+" "+n," "),r.a.createElement("div",null," ",l," "),r.a.createElement("button",{onClick:s}," \u0423\u0434\u0430\u043b\u0438\u0442\u044c "),r.a.createElement("div",{onClick:s},"x"))))},C=a(291),R=a(296),A=a(126),T=a(294),_=a(293),P=a(292),F=function(e){return(t=1e3,new Promise((function(e){return setTimeout(e,t)}))).then((function(){if(["foo@foo.com","bar@bar.com"].includes(e.email))throw{email:"Email already Exists"}}));var t},M=a(295),W=Object(w.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:500}}}})),Z=function(e){var t=e.label,a=e.input,n=e.meta,l=n.touched,i=n.invalid,o=n.error,c=Object(A.a)(e,["label","input","meta"]);return r.a.createElement(P.a,Object.assign({variant:"outlined",label:t,error:l&&i,helperText:l&&o},a,c))},z=Object(_.a)({form:"MaterialUiForm",validate:function(e){var t={};return["firstName","lastName","email","favoriteColor","notes"].forEach((function(a){e[a]||(t[a]="Required")})),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Invalid email address"),t},asyncValidate:F})((function(e){var t=e.handleSubmit,a=e.pristine,n=e.submitting,l=W();return r.a.createElement("form",{className:l.root,onSubmit:t},r.a.createElement("div",null,r.a.createElement(T.a,{name:"name",component:Z,label:"First Name"})),r.a.createElement("div",null,r.a.createElement(T.a,{name:"lastName",component:Z,label:"Last Name"})),r.a.createElement("div",null,r.a.createElement(T.a,{name:"email",component:Z,label:"Email"})),r.a.createElement("div",null,r.a.createElement(M.a,{type:"submit",color:"secondary",disabled:a||n},"\u0414\u041e\u0411\u0410\u0412\u0418\u0422\u042c")))}));function B(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var D=Object(w.a)((function(e){return{paper:{position:"absolute",width:500,backgroundColor:e.palette.background.paper,border:"2px solid #fff",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},stylePaper:{height:e.spacing(7),borderStyle:"dashed",cursor:"pointer",textAlign:"center",fontSize:"36px"}}})),I=Object(c.d)(Object(o.b)((function(e){return{user:e.userReducer.user}}),{getUser:E}))((function(e){var t=D(),a=r.a.useState(B),n=Object(O.a)(a,1)[0],l=r.a.useState(!1),i=Object(O.a)(l,2),o=i[0],c=i[1],s=r.a.createElement("div",{style:n,className:t.paper},r.a.createElement("h2",{id:"simple-modal-title"}," \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),r.a.createElement(z,{onSubmit:function(t){var a=t.name,n=t.lastName,r=t.email;f({name:a,lastName:n,email:r}).then((function(t){return e.getUser()})).then(c(!1))}}));return r.a.createElement("div",null,r.a.createElement(C.a,{className:t.stylePaper,style:{borderStyle:"dashed",cursor:"pointer"},elevation:0,onClick:function(){c(!0)}},"+"),r.a.createElement(R.a,{open:o,onClose:function(){c(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},s))})),J=Object(c.d)(Object(o.b)((function(e){return{user:e.userReducer.user}}),{getUser:E,deleteUser:function(e){return function(t){p(e).then((function(e){t(v(e.date))}))}}}))((function(e){var t=Object(n.useState)(e.user),a=Object(O.a)(t,2),l=a[0],i=a[1];Object(n.useEffect)((function(){e.user||e.getUser(),i(e.user)}),[e.user]);var o=Object(w.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(35),height:e.spacing(7)}}}})),c=0,s=o();return r.a.createElement("div",{className:s.root},l?l.map((function(t){return r.a.createElement("div",{key:t._id},void c++,r.a.createElement(C.a,{elevation:3},r.a.createElement(k,{_id:t._id,id:c,email:t.email,name:t.name,lastName:t.lastName,deleteUser:e.deleteUser})))})):null,r.a.createElement("div",null,r.a.createElement(I,{classesPaper:s})))}));var L=function(){return r.a.createElement("div",null,r.a.createElement(J,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:j},r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.e70afc48.chunk.js.map