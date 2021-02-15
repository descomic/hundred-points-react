(this.webpackJsonphundred_points=this.webpackJsonphundred_points||[]).push([[0],{59:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(0),s=t.n(n),c=t(14),l=t.n(c),i=t(21),d=t(22),j=t(12),h=t(25),o=t(24),b=t(28),u=t(7),O=t(67),x=t(68),y=t(69),p=t(44),m=t(71),v=t(70),f=t(76),N=t(29),g=t(72);var P=function(e){var a=e.players.map((function(e){return Object(r.jsx)(g.a.Item,{children:e},e)}));return Object(r.jsx)(g.a,{variant:"flush",children:a})},S=function(e){Object(h.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={players:e.players,newPlayerName:"",errorMessage:"Empty name"},r.parentHandleAddPlayer=e.parentHandleAddPlayer,r.verifyName=r.verifyName.bind(Object(j.a)(r)),r.handleNameChange=r.handleNameChange.bind(Object(j.a)(r)),r.handleAddPlayer=r.handleAddPlayer.bind(Object(j.a)(r)),r}return Object(d.a)(t,[{key:"verifyName",value:function(e){return""===e?(this.setState({errorMessage:"Empty name"}),!1):this.state.players.includes(e)?(this.setState({errorMessage:"Duplicate name"}),!1):(this.setState({errorMessage:""}),!0)}},{key:"handleNameChange",value:function(e){this.setState({newPlayerName:e.target.value}),this.verifyName(e.target.value)}},{key:"handleAddPlayer",value:function(e){e.preventDefault();var a=this.state.players.slice(),t=this.state.newPlayerName.slice();this.verifyName(t)?this.state.players.includes(t)?alert("The player ".concat(t," already exists.")):(a.push(t),this.parentHandleAddPlayer(t),this.setState({players:a,newPlayerName:""})):alert(this.state.errorMessage)}},{key:"render",value:function(){var e=Object(r.jsx)(O.a,{id:"tooltip-add-button",show:""!==this.state.errorMessage,children:this.state.errorMessage});return Object(r.jsxs)(x.a,{children:[Object(r.jsx)(y.a,{className:"mt-4",children:Object(r.jsx)(p.a,{children:Object(r.jsx)("h2",{children:"Preparing the game"})})}),Object(r.jsxs)(y.a,{className:"mt-4",xs:1,lg:2,children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(P,{players:this.state.players})}),Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(m.a,{className:"mt-3 AddForm",onSubmit:this.handleAddPlayer,children:[Object(r.jsx)(y.a,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Label,{children:"Add Player: "})})}),Object(r.jsxs)(y.a,{className:"m-4",children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Control,{value:this.state.newPlayerName,onChange:this.handleNameChange,placeholder:"Player's name"})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(v.a,{placement:"top",overlay:e,children:Object(r.jsx)(f.a,{type:"submit",variant:"secondary",disabled:""!==this.state.errorMessage,children:"Add"})})})]})]}),Object(r.jsx)(y.a,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(N.LinkContainer,{to:"/hundred-points-react/game",children:Object(r.jsx)(f.a,{variant:"primary",size:"lg",children:"Play"})})})})]})]})]})}}]),t}(s.a.Component),w=t(75),k=t(74);var C=function(e){var a=e.index,t=e.name,n=e.score,s=e.newScore,c=e.handleNewPlayerScore;return Object(r.jsxs)(k.a,{children:[Object(r.jsx)(w.a.Toggle,{as:k.a.Header,eventKey:t,children:Object(r.jsx)(x.a,{children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)(p.a,{children:t}),Object(r.jsx)(p.a,{children:n}),Object(r.jsx)(p.a,{children:parseInt(n)+parseInt(s)})]})})}),Object(r.jsx)(w.a.Collapse,{eventKey:t,children:Object(r.jsx)(k.a.Body,{children:Object(r.jsx)(m.a,{onSubmit:function(e){return e.preventDefault()},children:Object(r.jsxs)(m.a.Group,{as:y.a,children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Label,{htmlFor:t,column:!0,children:"New Score"})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Control,{id:t,value:s,onChange:function(e){return c(e,a)},type:"text",pattern:"[0-9]*"})})]})})})})]})};t(59);function M(e,a){return e.score>a.score?1:e.score<a.score?-1:0}var A=function(e){Object(h.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={round:1,players:e.players.map((function(e){return{name:e,color:"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")"),score:0,newScore:0}}))},r.handleNewPlayerScore=r.handleNewPlayerScore.bind(Object(j.a)(r)),r.handleNextRound=r.handleNextRound.bind(Object(j.a)(r)),r.renderPlayer=r.renderPlayer.bind(Object(j.a)(r)),r}return Object(d.a)(t,[{key:"handleNewPlayerScore",value:function(e,a){e.preventDefault();var t=this.state.players.slice();t[a].newScore=parseInt(""===e.target.value?0:e.target.value),this.setState({players:t})}},{key:"handleNextRound",value:function(e){e.preventDefault(),this.setState({round:this.state.round+1,players:this.state.players.map((function(e){return{name:e.name,score:e.score+e.newScore,newScore:0}})).sort(M)})}},{key:"renderPlayer",value:function(e,a){return Object(r.jsx)(C,{index:a,name:e.name,score:e.score,newScore:e.newScore,handleNewPlayerScore:this.handleNewPlayerScore},e.score+e.name)}},{key:"render",value:function(){var e=this.state.players.map(this.renderPlayer);return Object(r.jsxs)(x.a,{children:[Object(r.jsxs)(y.a,{className:"game-header mt-3",children:[Object(r.jsx)(p.a,{children:Object(r.jsxs)("h2",{children:["Round ",this.state.round]})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(f.a,{as:"input",type:"button",className:"next-round-button",value:"Next round",onClick:this.handleNextRound})})]}),Object(r.jsx)(y.a,{noGutters:!0,className:"mt-4",children:Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(y.a,{className:"m-auto",children:[Object(r.jsx)(p.a,{className:"m-auto",children:Object(r.jsx)("h3",{children:"Name"})}),Object(r.jsx)(p.a,{className:"m-auto",children:Object(r.jsx)("h3",{children:"Score"})}),Object(r.jsx)(p.a,{className:"m-auto",children:Object(r.jsx)("h3",{children:"Next score"})})]}),Object(r.jsx)(y.a,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(w.a,{children:e})})})]})})]})}}]),t}(s.a.Component),R=t(73);var D=function(){return Object(r.jsx)(R.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(r.jsx)(N.LinkContainer,{exact:!0,to:"/hundred-points-react/",children:Object(r.jsx)(R.a.Brand,{children:"100 points"})})})},H=(t(60),function(e){Object(h.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={players:[]},r.addPlayer=r.addPlayer.bind(Object(j.a)(r)),r}return Object(d.a)(t,[{key:"addPlayer",value:function(e){var a=this.state.players.slice();a.push(e),this.setState({players:a})}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)(b.BrowserRouter,{children:[Object(r.jsx)(D,{}),Object(r.jsxs)(u.g,{children:[Object(r.jsx)(u.d,{exact:!0,path:"/",children:Object(r.jsx)(u.c,{to:"/hundred-points-react"})}),Object(r.jsx)(u.d,{exact:!0,path:"/hundred-points-react",children:Object(r.jsx)(S,{players:this.state.players,parentHandleAddPlayer:this.addPlayer})}),Object(r.jsx)(u.d,{path:"/hundred-points-react/game",children:Object(r.jsx)(A,{players:this.state.players.slice()})})]})]})})}}]),t}(s.a.Component));t(61);l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.79b3be0b.chunk.js.map