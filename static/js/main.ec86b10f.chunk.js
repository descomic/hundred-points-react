(this.webpackJsonphundred_points=this.webpackJsonphundred_points||[]).push([[0],{192:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),s=a.n(n),c=a(14),l=a.n(c),i=a(24),d=a(25),o=a(10),h=a(28),j=a(27),u=a(39),b=a(7),O=a(200),y=a(201),x=a(199),p=a(80),m=a(203),v=a(202),f=a(208),N=a(40),g=a(204);a(93);var P=function(e){var t=e.players,a=e.handleDeletePlayer,n=t.map((function(e){return Object(r.jsx)(g.a.Item,{children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(p.a,{sm:10,xs:10,children:Object(r.jsx)("span",{className:"player-name",children:e})}),Object(r.jsx)(p.a,{sm:1,xs:1,children:Object(r.jsx)(f.a,{size:"sm",variant:"light",onClick:function(t){return a(t,e)},children:"X"})})]})},e)}));return Object(r.jsx)(g.a,{variant:"flush",children:n})},S=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={players:e.players,newPlayerName:"",errorMessage:"Empty name"},r.parentHandleAddPlayer=e.parentHandleAddPlayer,r.verifyName=r.verifyName.bind(Object(o.a)(r)),r.handleNameChange=r.handleNameChange.bind(Object(o.a)(r)),r.handleAddPlayer=r.handleAddPlayer.bind(Object(o.a)(r)),r.handleDeletePlayer=r.handleDeletePlayer.bind(Object(o.a)(r)),r}return Object(d.a)(a,[{key:"verifyName",value:function(e){return""===e?(this.setState({errorMessage:"Empty name"}),!1):this.state.players.includes(e)?(this.setState({errorMessage:"Duplicate name"}),!1):(this.setState({errorMessage:""}),!0)}},{key:"handleNameChange",value:function(e){this.setState({newPlayerName:e.target.value}),this.verifyName(e.target.value)}},{key:"handleAddPlayer",value:function(e){e.preventDefault();var t=this.state.players.slice(),a=this.state.newPlayerName.slice();this.verifyName(a)?this.state.players.includes(a)?alert("The player ".concat(a," already exists.")):(t.push(a),this.parentHandleAddPlayer(a),this.setState({players:t,newPlayerName:""})):alert(this.state.errorMessage)}},{key:"handleDeletePlayer",value:function(e,t){e.preventDefault();var a=this.state.players.filter((function(e){return e!==t}));this.setState({players:a}),console.log(t),console.log("deleted")}},{key:"render",value:function(){var e=Object(r.jsx)(O.a,{id:"tooltip-add-button",show:""!==this.state.errorMessage,children:this.state.errorMessage});return Object(r.jsxs)(y.a,{children:[Object(r.jsx)(x.a,{className:"mt-4",children:Object(r.jsx)(p.a,{children:Object(r.jsx)("h2",{children:"Preparing the game"})})}),Object(r.jsxs)(x.a,{className:"mt-4",xs:1,lg:2,children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(P,{players:this.state.players,handleDeletePlayer:this.handleDeletePlayer})}),Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(m.a,{className:"mt-3 AddForm",onSubmit:this.handleAddPlayer,children:[Object(r.jsx)(x.a,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Label,{children:"Add Player: "})})}),Object(r.jsxs)(x.a,{className:"m-4",children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Control,{value:this.state.newPlayerName,onChange:this.handleNameChange,placeholder:"Player's name"})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(v.a,{placement:"top",overlay:e,children:Object(r.jsx)(f.a,{type:"submit",variant:"secondary",disabled:""!==this.state.errorMessage,children:"Add"})})})]})]}),Object(r.jsx)(x.a,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(N.LinkContainer,{to:"/hundred-points-react/game",children:Object(r.jsx)(f.a,{variant:"primary",size:"lg",children:"Play"})})})})]})]})]})}}]),a}(s.a.Component),w=a(207),k=a(206);var C=function(e){var t=e.index,a=e.name,n=e.score,s=e.newScore,c=e.handleNewPlayerScore;return Object(r.jsxs)(k.a,{children:[Object(r.jsx)(w.a.Toggle,{as:k.a.Header,eventKey:a,children:Object(r.jsx)(y.a,{children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(p.a,{children:a}),Object(r.jsx)(p.a,{children:n}),Object(r.jsx)(p.a,{children:parseInt(n)+parseInt(s)})]})})}),Object(r.jsx)(w.a.Collapse,{eventKey:a,children:Object(r.jsx)(k.a.Body,{children:Object(r.jsx)(m.a,{onSubmit:function(e){return e.preventDefault()},children:Object(r.jsxs)(m.a.Group,{as:x.a,children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Label,{htmlFor:a,column:!0,children:"New Score"})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(m.a.Control,{id:a,value:s,onChange:function(e){return c(e,t)},type:"text",pattern:"[0-9]*"})})]})})})})]})};a(96);function D(e,t){return e.score>t.score?1:e.score<t.score?-1:0}var M=a(82),A=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var r;Object(i.a)(this,a),r=t.call(this,e);var n=e.players.slice().map((function(e){return{name:e,color:"rgba(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", 1)"),score:0,newScore:0}}));return r.state={round:1,players:n,history:n.map((function(e){var t={};return Object.assign(t,e),t.score=[],delete t.newScore,t})),chartData:{data:{labels:[],datasets:[]}}},r.handleNewPlayerScore=r.handleNewPlayerScore.bind(Object(o.a)(r)),r.handleNextRound=r.handleNextRound.bind(Object(o.a)(r)),r.renderPlayer=r.renderPlayer.bind(Object(o.a)(r)),r.updateHistory=r.updateHistory.bind(Object(o.a)(r)),r.updateChartData=r.updateChartData.bind(Object(o.a)(r)),r}return Object(d.a)(a,[{key:"handleNewPlayerScore",value:function(e,t){e.preventDefault();var a=this.state.players.slice();a[t].newScore=parseInt(""===e.target.value?0:e.target.value),this.setState({players:a})}},{key:"handleNextRound",value:function(e){e.preventDefault();var t=this.state.players.map((function(e){return{name:e.name,score:e.score+e.newScore,newScore:0}})).sort(D),a=this.updateHistory(t);this.setState({round:this.state.round+1,players:t,history:a,chartData:this.updateChartData(this.state.round+1,a)})}},{key:"updateHistory",value:function(e){var t=this.state.history;return t.forEach((function(t){t.score.push(e.find((function(e){return e.name===t.name})).score)})),t}},{key:"updateChartData",value:function(e,t){return{labels:Array(e).fill().map((function(e,t){return t+1})),datasets:t.map((function(e){return{label:e.name,fill:!1,backgroundColor:e.color,borderColor:e.color,borderWidth:2,data:e.score}}))}}},{key:"renderPlayer",value:function(e,t){return Object(r.jsx)(C,{index:t,name:e.name,score:e.score,newScore:e.newScore,handleNewPlayerScore:this.handleNewPlayerScore},e.score+e.name)}},{key:"render",value:function(){var e=this.state.players.map(this.renderPlayer);return Object(r.jsxs)(y.a,{children:[Object(r.jsxs)(x.a,{className:"game-header mt-3",children:[Object(r.jsx)(p.a,{children:Object(r.jsxs)("h2",{children:["Round ",this.state.round]})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(f.a,{as:"input",type:"button",className:"next-round-button",value:"Next round",onClick:this.handleNextRound})})]}),Object(r.jsx)(x.a,{noGutters:!0,className:"mt-4",children:Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(x.a,{className:"m-auto",children:[Object(r.jsx)(p.a,{className:"m-auto",children:Object(r.jsx)("h3",{children:"Name"})}),Object(r.jsx)(p.a,{className:"m-auto",children:Object(r.jsx)("h3",{children:"Score"})}),Object(r.jsx)(p.a,{className:"m-auto",children:Object(r.jsx)("h3",{children:"Next score"})})]}),Object(r.jsx)(x.a,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(w.a,{children:e})})})]})}),Object(r.jsx)(x.a,{className:"mt-5",children:Object(r.jsx)(p.a,{children:Object(r.jsx)(M.Line,{data:this.state.chartData,options:{title:{display:!0,text:"Evolution of the score",fontSize:20},legend:{display:!0,position:"right"}}})})})]})}}]),a}(s.a.Component),H=a(205);var R=function(){return Object(r.jsx)(H.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(r.jsx)(N.LinkContainer,{exact:!0,to:"/hundred-points-react/",children:Object(r.jsx)(H.a.Brand,{children:"100 points"})})})},E=(a(192),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={players:[]},r.addPlayer=r.addPlayer.bind(Object(o.a)(r)),r}return Object(d.a)(a,[{key:"addPlayer",value:function(e){var t=this.state.players.slice();t.push(e),this.setState({players:t})}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)(u.BrowserRouter,{children:[Object(r.jsx)(R,{}),Object(r.jsxs)(b.g,{children:[Object(r.jsx)(b.d,{exact:!0,path:"/",children:Object(r.jsx)(b.c,{to:"/hundred-points-react"})}),Object(r.jsx)(b.d,{exact:!0,path:"/hundred-points-react",children:Object(r.jsx)(S,{players:this.state.players,parentHandleAddPlayer:this.addPlayer})}),Object(r.jsx)(b.d,{path:"/hundred-points-react/game",children:Object(r.jsx)(A,{players:this.state.players.slice()})})]})]})})}}]),a}(s.a.Component));a(193);l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root"))},93:function(e,t,a){},96:function(e,t,a){}},[[194,1,2]]]);
//# sourceMappingURL=main.ec86b10f.chunk.js.map