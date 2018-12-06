(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){e.exports=t(78)},57:function(e,a,t){},59:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(41),l=t.n(r),s=(t(57),t(11)),m=t(12),u=t(18),o=t(13),i=t(19),h=(t(59),t(50)),p=t(14),E=t(24),d=t(10),b=t.n(d),g=t(25),f=t.n(g),_=t(47),y=t.n(_),N=t(81);function v(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission Name: ",c.a.createElement("span",{className:f()({"text-success":l,"text-danger":!l})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(N.a,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function k(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function j(){var e=Object(E.a)(["\n    query LaunchesQuery{\n        launches{\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return j=function(){return e},e}var O=b()(j()),w=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(k,null),c.a.createElement(p.Query,{query:O},function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("p",null,"Loading..."):t?c.a.createElement("p",null,"Error :("):(console.log(r),c.a.createElement(n.Fragment,null,r.launches.map(function(e){return c.a.createElement(v,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component),x=t(82),L=t(83);function D(){var e=Object(E.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var Y=b()(D()),q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(p.Query,{query:Y,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var r=n.launch,l=r.mission_name,s=r.flight_number,m=r.launch_year,u=r.launch_success,o=r.rocket,i=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",l),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:f()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",i),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(N.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(n.Component),F=new h.a({uri:"/graphql"}),I=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.ApolloProvider,{client:F},c.a.createElement(x.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",{style:{margin:"0 auto",textAlign:"center"}},"SpaceX"),c.a.createElement(L.a,{exact:!0,path:"/",component:w}),c.a.createElement(L.a,{exact:!0,path:"/launch/:flight_number",component:q}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,2,1]]]);
//# sourceMappingURL=main.2978a3a3.chunk.js.map