(this["webpackJsonpnica-covid"]=this["webpackJsonpnica-covid"]||[]).push([[0],{114:function(a,e,t){},118:function(a,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),r=t(14),i=t.n(r),c=(t(55),t(56),t(122)),l=t(120),s=t(8),u=t(3),f=t(35),m=t(9),h=t(10),p=t(12),d=t(11),v=t(121),g=t(21),b=function(a){Object(p.a)(t,a);var e=Object(d.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g.a,{className:"mapChart",chartType:"GeoChart",data:this.props.mapData,options:{region:"NI",colorAxis:{colors:["#fce9eb","#c53745"]},backgroundColor:"#fff",datalessRegionColor:"#fff",defaultColor:"#fff",displayMode:"regions",resolution:"provinces"},rootProps:{"data-testid":"1"}}))}}]),t}(o.a.Component),C=function(a){Object(p.a)(t,a);var e=Object(d.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g.a,{className:"barChart",chartType:"Bar",data:this.props.barData,options:{colors:["#c53745"],hAxis:{title:"Casos Totales",minValue:0},bars:"horizontal",legend:{position:"none"}},rootProps:{"data-testid":"2"}}))}}]),t}(o.a.Component),E=t(22),y=t(23),O=[{key:"official",tab:"Cifras Oficiales"},{key:"stimate",tab:"Cifras No Oficiales"}],j=y;j.shift().sort((function(a,e){return e[1]-a[1]})),j.unshift(["","Casos"]);var k=E;k.shift().sort((function(a,e){return e[1]-a[1]})),k.unshift(["","Casos"]);var N={official:o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{mapData:y}),o.a.createElement(C,{barData:j})),stimate:o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{mapData:E}),o.a.createElement(C,{barData:k}))},w=function(a){Object(p.a)(t,a);var e=Object(d.a)(t);function t(){var a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=e.call.apply(e,[this].concat(o))).state={key:"official"},a.onTabChange=function(e,t){console.log(e,t),a.setState(Object(f.a)({},t,e))},a}return Object(h.a)(t,[{key:"render",value:function(){var a=this;return o.a.createElement("div",null,o.a.createElement(v.a,{style:{width:"100%"},tabList:O,activeTabKey:this.state.key,onTabChange:function(e){a.onTabChange(e,"key")}},N[this.state.key]))}}]),t}(o.a.Component),M=(t(114),c.a.Header),S=c.a.Footer,A=c.a.Content;var D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(M,null,o.a.createElement(l.a,{align:"center"},"Covid-19 en Nicaragua")),o.a.createElement(A,null,o.a.createElement(s.a,{justify:"center"},o.a.createElement(u.a,{xs:24,sm:22,md:19,lg:17},o.a.createElement(w,null)))),o.a.createElement(S,null,"Footer")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},22:function(a){a.exports=JSON.parse('[["Destination","Casos"],["Managua",137],["Carazo",8],["Chinandega",45],["Granada",17],["Le\xf3n",15],["Masaya",30],["Rivas",15],["Boaco",6],["Chontales",21],["Estel\xed",29],["Jinotega",1],["R\xedo San Juan",2],["Madriz",1],["Matagalpa",44],["Nueva Segovia",5],["Atl\xe1ntico Norte",5],["Atl\xe1ntico Sur",23]]')},23:function(a){a.exports=JSON.parse('[["Destination","Casos"],["Managua",16],["Carazo",0],["Chinandega",1],["Granada",0],["Le\xf3n",0],["Masaya",0],["Rivas",0],["Boaco",0],["Chontales",0],["Estel\xed",0],["Jinotega",0],["R\xedo San Juan",0],["Madriz",0],["Matagalpa",0],["Nueva Segovia",0],["Atl\xe1ntico Norte",0],["Atl\xe1ntico Sur",0]]')},50:function(a,e,t){a.exports=t(118)},56:function(a,e,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.49792716.chunk.js.map