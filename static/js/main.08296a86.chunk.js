(this.webpackJsonptest_assignment=this.webpackJsonptest_assignment||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),s=n.n(a),i=(n(15),n(2)),c=n.n(i),l=n(5),u=n(6),d=n(7),h=n(1),f=n(9),p=n(8),m=(n(17),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this)).searchSpace=function(e){var t=e.target.value;r.setState({search:t},(function(){return r.filterPeople()}))},r.filterPeople=function(){var e=r.state.people.filter((function(e){return null==r.state.search||e.id.toLowerCase().includes(r.state.search.toLowerCase())||e.name.toLowerCase().includes(r.state.search.toLowerCase())||e.items.filter((function(e){return e.toLowerCase().includes(r.state.search.toLowerCase())})).length||e.address.toLowerCase().includes(r.state.search.toLowerCase())||e.pincode.toLowerCase().includes(r.state.search.toLowerCase())?e:void 0}));r.setState({filteredPeople:e})},r.intoView=function(e){var t=r.personsRef[e];console.log(r.personsRef,e),e&&t&&t.scrollIntoView({block:"center"})},r.setCursor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t){return r.setState({cursor:e})}},r.personsRef={},r.handleKeyDown=r.handleKeyDown.bind(Object(h.a)(r)),r.state={loading:!0,people:[],search:null,cursor:null},r}return Object(d.a)(n,[{key:"handleKeyDown",value:function(e){var t=this,n=this.state,r=n.cursor,o=n.filteredPeople;38===e.keyCode&&r>0?this.setState((function(e){var n=e.cursor;return t.intoView(n),{cursor:n-1}})):40===e.keyCode&&(r<o.length-1||null===r)&&this.setState((function(e){var n=e.cursor;return null===n&&(n=0),t.intoView(n),{cursor:n+1}}))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.mocky.io/v2/5ba8efb23100007200c2750c",e.next=3,fetch("http://www.mocky.io/v2/5ba8efb23100007200c2750c");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({people:n,loading:!1},(function(){return r.filterPeople()})),console.log(n[0]),document.addEventListener("keydown",this.handleKeyDown);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement("div",null,"Loading..."):o.a.createElement("div",{className:"App"},o.a.createElement("input",{type:"text",placeholder:"Enter item to be searched",onChange:function(t){return e.searchSpace(t)}}),o.a.createElement("div",{className:"list_info--wrap"},this.state.filteredPeople&&this.state.filteredPeople.map((function(t,n){return o.a.createElement("div",{onMouseOver:e.setCursor(n),onMouseOut:e.setCursor(),className:"list_info".concat(n===e.state.cursor?" highlight":""),id:"person_info_".concat(n),ref:function(t){return e.personsRef[n]=t},key:t.id},o.a.createElement("div",null,t.id),o.a.createElement("div",{className:"pName"},t.name),o.a.createElement("div",null,t.items.map((function(e){return o.a.createElement("span",{className:"listItems"},e)}))),o.a.createElement("div",null,t.address),o.a.createElement("div",null,t.pincode))}))),this.state.filteredPeople&&!this.state.filteredPeople.length&&o.a.createElement("div",null,"Didn't find any person"))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.08296a86.chunk.js.map