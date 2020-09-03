(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{319:function(e,t){},320:function(e,t){},333:function(e,t,a){e.exports=a(612)},361:function(e,t){},363:function(e,t){},377:function(e,t){},379:function(e,t){},407:function(e,t){},409:function(e,t){},410:function(e,t){},416:function(e,t){},418:function(e,t){},436:function(e,t){},438:function(e,t){},450:function(e,t){},453:function(e,t){},611:function(e,t,a){},612:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(50),c=a(54),o=a(26),i=a(300),s=a(301),u=a(14),d=a(15),m=a(17),h=a(16),p=a(11),E=a(10),g=a(628),b=a(627),f=a(18),v=a.n(f),O=a(302),y=function(e){return{type:"SET_USER",payload:e}},j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:""},e.handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e.logoutHandler=function(t){t.preventDefault(),e.props.logUserOut()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(g.a,null,r.a.createElement(b.a,{pointing:!0,secondary:!0,size:"massive"},r.a.createElement(b.a.Item,null,"DORA"),this.props.userReducer.loggedIn?r.a.createElement(b.a.Item,{as:p.c,to:"/home",name:"home",active:"home"===e,onClick:this.handleItemClick}):r.a.createElement(b.a.Item,{as:p.c,to:"/login",name:"log in",active:"log in"===e,onClick:this.handleItemClick}),this.props.userReducer.loggedIn?r.a.createElement(b.a.Item,{as:p.c,to:"/logout",name:"logout",active:"logout"===e,onClick:this.logoutHandler}):r.a.createElement(b.a.Item,{as:p.c,to:"/register",name:"register",active:"register"===e,onClick:this.handleItemClick})))}}]),a}(n.Component),w=Object(o.b)((function(e){return{userReducer:e.userReducer}}),(function(e){return{logUserOut:function(){return e({type:"LOG_OUT"})}}}))(j),I=a(620),C=a(629),S=a(630),k=a(621),R=a(624),x=a(56),A=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em"}},r.a.createElement(I.a,{textAlign:"center"},r.a.createElement(C.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(C.a.Column,{width:16},r.a.createElement(S.a,{inverted:!0,as:"h4",content:"DORA"}),r.a.createElement("p",null,"made for explorers \ud83e\udd0d"))),r.a.createElement(k.a,{inverted:!0,section:!0}),r.a.createElement(R.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small"},r.a.createElement(R.a.Item,{as:"a",href:"https://github.com/joeyqlim/"},r.a.createElement(x.a,{name:"github",size:"big"}))))))},_=a(75),H=a.n(_),B=a(123);var U=a(625),D=a(626),N=function(e){var t=e.board;return r.a.createElement(U.a,null,r.a.createElement(U.a.Content,{textAlign:"center"},r.a.createElement(U.a.Header,{content:t.name}),r.a.createElement(k.a,null),r.a.createElement(x.a,{name:"travel",size:"large"})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a,{color:"violet"},r.a.createElement(p.b,{to:{pathname:"/editboard",state:{name:t.name,boardId:t._id}}},"Edit ",r.a.createElement(x.a,{name:"edit"}))),r.a.createElement(D.a,{color:"teal"},r.a.createElement(p.b,{to:"/board/".concat(t._id)},"View ",r.a.createElement(x.a,{name:"eye"})))))},F=Object(o.b)((function(e){return{loading:e.boards.loading,boards:e.boards.boards,hasErrors:e.boards.hasErrors,userReducer:e.userReducer}}))((function(e){var t=e.dispatch,a=e.loading,l=e.boards,c=e.hasErrors,o=e.userReducer;Object(n.useEffect)((function(){t(function(){var e=Object(B.a)(H.a.mark((function e(t){var a,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_BOARDS"}),a=localStorage.getItem("token"),e.prev=2,e.next=5,v.a.get("".concat("/api","/board/all"),{headers:{"x-auth-token":a}});case 5:n=e.sent,console.log(n.data),t({type:"GET_BOARDS_SUCCESS",payload:n.data.allBoards.boards}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:"GET_BOARDS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);return r.a.createElement(I.a,{style:{marginBottom:"3em"}},o.loggedIn?r.a.createElement("h1",null,"Welcome, ",o.user.username):"",r.a.createElement("h1",null,"Boards"),r.a.createElement(U.a.Group,{itemsPerRow:4},a?r.a.createElement("p",null,"Loading boards..."):c?r.a.createElement("p",null,"Unable to display boards"):l.map((function(e,t){return r.a.createElement(N,{key:t,board:e})})),r.a.createElement(U.a,null,r.a.createElement(U.a.Content,{textAlign:"center"},r.a.createElement(U.a.Header,{content:"New board"}),r.a.createElement(k.a,null),r.a.createElement(x.a,{name:"add",size:"large"})),r.a.createElement(D.a,{color:"green"},r.a.createElement(p.b,{to:"/addboard"},"Add Board ",r.a.createElement(x.a,{name:"add"}))))))}));var L=a(623);var T=function(e){var t=e.card,a=e.boardId;return r.a.createElement(L.a,{trigger:r.a.createElement(g.a,{circular:!0,style:{width:135,height:135,marginLeft:"1em"},inverted:!0,color:"teal"},t.content,r.a.createElement("br",null)),flowing:!0,hoverable:!0,size:"mini"},r.a.createElement(C.a,{centered:!0,divided:!0,columns:2},r.a.createElement(C.a.Column,{textAlign:"center"},r.a.createElement(D.a,{color:"blue",icon:"edit",size:"mini",as:p.b,to:{pathname:"/editcard/".concat(t._id),state:{content:t.content,boardId:a}}})),r.a.createElement(C.a.Column,{textAlign:"center"},r.a.createElement(D.a,{color:"red",icon:"delete",size:"mini"}))))};var G=function(e){var t=e.list;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{color:"teal",raised:!0,fluid:!0,style:{padding:"1em"}},r.a.createElement("h3",null,t.title),r.a.createElement(D.a.Group,{floated:"right",vertical:!0,widths:"1"},r.a.createElement(L.a,{content:"Delete this list",trigger:r.a.createElement(D.a,{color:"red",icon:"delete"})}),r.a.createElement(L.a,{content:"Edit this list",trigger:r.a.createElement(D.a,{color:"blue",icon:"edit",as:p.b,to:{pathname:"/editlist",state:{title:t.title,boardId:t.board,listId:t._id}}})})),r.a.createElement(k.a,{hidden:!0}),r.a.createElement(U.a.Group,{itemsPerRow:6},r.a.createElement(g.a,{circular:!0,style:{width:135,height:135,marginTop:"1em",marginBottom:"1.5em",marginLeft:"1.5em"},inverted:!0,color:"yellow",as:p.b,to:{pathname:"/addcard/".concat(t.board,"/").concat(t._id)}},"Add an activity",r.a.createElement("br",null),r.a.createElement(x.a,{name:"add"})),t.cards.map((function(e,a){return r.a.createElement(T,{key:a,card:e,boardId:t.board})})))),r.a.createElement(k.a,null))},z=Object(o.b)((function(e){return{loading:e.oneBoard.loading,board:e.oneBoard.board,hasErrors:e.oneBoard.hasErrors,userReducer:e.userReducer}}))((function(e){var t=e.dispatch,a=e.loading,l=e.board,c=e.hasErrors,o=Object(E.g)().boardId;Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(B.a)(H.a.mark((function t(a){var n,r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ONE_BOARD"}),n=localStorage.getItem("token"),t.prev=2,t.next=5,v.a.get("".concat("/api","/board/").concat(e),{headers:{"x-auth-token":n}});case 5:r=t.sent,console.log(r.data.board),a({type:"GET_ONE_BOARD_SUCCESS",payload:r.data.board}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:"GET_ONE_BOARD_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(o))}),[t,o]);return r.a.createElement(C.a,{padded:!0,divided:"vertically",style:{margin:".1em .1em 3em .1em"}},r.a.createElement("h2",null,l.name),r.a.createElement(I.a,null,r.a.createElement(C.a.Row,null,a?r.a.createElement("p",null,"Loading boards..."):c?r.a.createElement("p",null,"Unable to display boards"):l.lists?l.lists.length>0?l.lists.map((function(e,t){return r.a.createElement(G,{key:t,list:e})})):r.a.createElement("h3",null,"No lists in this board yet. Create one?"):void 0,r.a.createElement(U.a,{fluid:!0},r.a.createElement(U.a.Content,{textAlign:"center"},r.a.createElement(U.a.Header,{content:"Add a new list to this board"})),r.a.createElement(D.a,{color:"green"},r.a.createElement(p.b,{to:"/addlist/".concat(l._id)},"Add List ",r.a.createElement(x.a,{name:"add"})))))))})),P=a(23),J=a(622),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",description:"",status:!1},e.changeHandler=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.submitHandler=function(){var t=localStorage.getItem("token");v.a.post("".concat("/api","/board/new"),e.state,{headers:{"x-auth-token":t}}).then((function(t){console.log("done"),e.setState({status:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.status?r.a.createElement(E.a,{to:"/home"}):r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"New Board"),r.a.createElement(J.a,{onSubmit:this.submitHandler},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"name",placeholder:"Board name",value:this.state.name,onChange:this.changeHandler})),r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.changeHandler})),r.a.createElement(D.a,{type:"submit",color:"olive"},"Create new board"))))))}}]),a}(n.Component),W=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:e.props.location.state.name,boardId:e.props.location.state.boardId,status:!1},e.changeHandler=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.submitHandler=function(){var t=localStorage.getItem("token");v.a.put("".concat("/api","/board/").concat(e.state.boardId),e.state,{headers:{"x-auth-token":t}}).then((function(t){console.log("done"),e.setState({status:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.status?r.a.createElement(E.a,{to:"/home"}):r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"Edit Board"),r.a.createElement(J.a,{onSubmit:this.submitHandler},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"name",placeholder:"Board name",value:this.state.name,onChange:this.changeHandler})),r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.changeHandler})),r.a.createElement(D.a,{type:"submit",color:"olive"},"Save changes"))))))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",status:!1},e.changeHandler=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.submitHandler=function(){var t=localStorage.getItem("token");v.a.post("".concat("/api","/list/").concat(e.props.match.params.boardId,"/new"),e.state,{headers:{"x-auth-token":t}}).then((function(t){console.log("done"),e.setState({status:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.status?r.a.createElement(E.a,{to:"/board/".concat(this.props.match.params.boardId)}):(console.log(this.props.match.params.boardId),r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"New List"),r.a.createElement(J.a,{onSubmit:this.submitHandler},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"title",placeholder:"List title",value:this.state.title,onChange:this.changeHandler})),r.a.createElement(D.a,{type:"submit"},"Add list to board")))))))}}]),a}(n.Component),V=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:e.props.location.state.title,boardId:e.props.location.state.boardId,listId:e.props.location.state.listId,status:!1},e.changeHandler=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.submitHandler=function(){var t=localStorage.getItem("token");v.a.put("".concat("/api","/list/").concat(e.state.listId),e.state,{headers:{"x-auth-token":t}}).then((function(t){console.log("done"),e.setState({status:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.status?r.a.createElement(E.a,{to:"/board/".concat(this.state.boardId)}):r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"Edit List"),r.a.createElement(J.a,{onSubmit:this.submitHandler},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"title",placeholder:"List title",value:this.state.title,onChange:this.changeHandler})),r.a.createElement(D.a,{type:"submit",color:"olive"},"Save changes"))))))}}]),a}(n.Component),K=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={content:"",status:!1},e.changeHandler=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.submitHandler=function(){var t=localStorage.getItem("token");v.a.post("".concat("/api","/card/").concat(e.props.match.params.listId,"/new"),e.state,{headers:{"x-auth-token":t}}).then((function(t){console.log("done"),e.setState({status:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.status?r.a.createElement(E.a,{to:"/board/".concat(this.props.match.params.boardId)}):(console.log(this.props),r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"New Card"),r.a.createElement(J.a,{onSubmit:this.submitHandler},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"content",placeholder:"Content",value:this.state.content,onChange:this.changeHandler})),r.a.createElement(D.a,{type:"submit",color:"olive"},"Add card to list")))))))}}]),a}(n.Component),Q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={content:e.props.location.state.content,boardId:e.props.location.state.boardId,status:!1},e.changeHandler=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.submitHandler=function(){var t=localStorage.getItem("token");v.a.put("".concat("/api","/card/").concat(e.props.match.params.cardId),e.state,{headers:{"x-auth-token":t}}).then((function(t){console.log("done"),e.setState({status:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.status?r.a.createElement(E.a,{to:"/board/".concat(this.state.boardId)}):r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"New Card"),r.a.createElement(J.a,{onSubmit:this.submitHandler},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"content",placeholder:"Content",value:this.state.content,onChange:this.changeHandler})),r.a.createElement(D.a,{type:"submit",color:"olive"},"Add card to list"))))))}}]),a}(n.Component),X=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleOnChange=function(t){t.persist(),e.setState((function(){return Object(P.a)({},t.target.name,t.target.value)}))},e.onSubmit=function(t){t.preventDefault(),e.props.fetchUser(e.state)},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"Log In"),r.a.createElement(J.a,{onSubmit:this.onSubmit},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleOnChange})),r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleOnChange})),r.a.createElement(D.a,{type:"submit"},"Log In"))))))}}]),a}(r.a.Component),Y=Object(o.b)(null,(function(e){return{fetchUser:function(t){return e(function(e){return function(t){v.a.post("".concat("/api","/auth/login"),e).then((function(e){localStorage.setItem("token",e.data.token),t(y(e.data.user))}))}}(t))}}}))(X),Z=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:"",confirmPassword:""},e.handleOnChange=function(t){t.persist(),e.setState((function(){return Object(P.a)({},t.target.name,t.target.value)}))},e.onSubmit=function(t){t.preventDefault(),e.props.signUserUp(e.state)},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement(C.a,{className:"centered"},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:5},r.a.createElement("h1",null,"Register"),r.a.createElement(J.a,{onSubmit:this.onSubmit},r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleOnChange})),r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleOnChange})),r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleOnChange})),r.a.createElement(J.a.Field,null,r.a.createElement("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.handleOnChange})),r.a.createElement(D.a,{type:"submit"},"Register"))))))}}]),a}(r.a.Component),$=Object(o.b)(null,(function(e){return{signUserUp:function(t){return e(function(e){return function(t){v.a.post("".concat("/api","/auth/register"),e).then((function(e){console.log(e.data),localStorage.setItem("token",e.data.token),t(y(e.data.user))}))}}(t))}}}))(Z),ee=Object(o.b)((function(e){return{userReducer:e.userReducer}}))((function(e){var t=e.userReducer,a=e.type;return"guest"===a&&t.loggedIn?r.a.createElement(E.a,{to:"/home"}):"private"!==a||t.loggedIn?r.a.createElement(E.b,e):r.a.createElement(E.a,{to:"/login"})})),te=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(w,null),r.a.createElement(I.a,{style:{marginBottom:"10em",marginTop:"3em"}},r.a.createElement(g.a,null,r.a.createElement(E.d,null,r.a.createElement(ee,{exact:!0,path:"/",type:"guest"},r.a.createElement(Y,null)),r.a.createElement(ee,{exact:!0,path:"/login",type:"guest"},r.a.createElement(Y,null)),r.a.createElement(ee,{exact:!0,path:"/register",type:"guest"},r.a.createElement($,null)),r.a.createElement(ee,{exact:!0,path:"/home",component:F,type:"private"}),r.a.createElement(ee,{exact:!0,path:"/board/:boardId",component:z,type:"private"}),r.a.createElement(ee,{exact:!0,path:"/addboard",component:M,type:"private"}),r.a.createElement(ee,{exact:!0,path:"/editboard",component:W,type:"private"}),r.a.createElement(ee,{exact:!0,path:"/editlist",component:V,type:"private"}),r.a.createElement(ee,{exact:!0,path:"/addlist/:boardId",render:function(e){return r.a.createElement(q,e)},type:"private"}),r.a.createElement(ee,{exact:!0,path:"/addcard/:boardId/:listId",render:function(e){return r.a.createElement(K,e)},type:"private"}),r.a.createElement(ee,{exact:!0,path:"/editcard/:cardId",render:function(e){return r.a.createElement(Q,e)},type:"private"})))),r.a.createElement(A,null))}}]),a}(n.Component),ae=Object(o.b)((function(e){return{userReducer:e.userReducer}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");null!=t&&(Object(O.decode)(t)?v.a.get("".concat("/api","/auth/autologin"),{headers:{"x-auth-token":t}}).then((function(t){console.log(t.data),e(y(t.data.user))})).catch((function(e){console.log(e)})):localStorage.removeItem("token"))}))}}}))(te),ne=a(38),re={boards:[],loading:!1,hasErrors:!1};var le=a(319),ce=a.n(le),oe=a(320),ie=a.n(oe),se={loggedIn:!1,user:{}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return{loggedIn:!0,user:Object(ne.a)({},t.payload)};case"LOG_OUT":return localStorage.clear(),{loggedIn:!1,user:{}};default:return e}},de={board:{},loading:!1,hasErrors:!1};var me=Object(c.combineReducers)({boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOARDS":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case"GET_BOARDS_SUCCESS":return{boards:t.payload,loading:!1,hasErrors:!1};case"GET_BOARDS_FAILURE":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},oneBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ONE_BOARD":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case"GET_ONE_BOARD_SUCCESS":return{board:t.payload,loading:!1,hasErrors:!1};case"GET_ONE_BOARD_FAILURE":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},lists:ce.a,cards:ie.a,userReducer:ue}),he=(a(610),a(611),Object(c.createStore)(me,Object(s.composeWithDevTools)(Object(c.applyMiddleware)(i.a))));Object(l.render)(r.a.createElement(o.a,{store:he},r.a.createElement(ae,null)),document.getElementById("root"))}},[[333,1,2]]]);
//# sourceMappingURL=main.906353d2.chunk.js.map