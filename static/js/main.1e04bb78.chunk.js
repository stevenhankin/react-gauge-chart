(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){t.exports=a(25)},22:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),c=(a(22),a(8)),l=a(9),s=a(11),u=a(10),d=a(12),h=a(27),g=a(28),p=a(29),m=(a(23),a(7)),f=a(3),v=(a(24),-Math.PI/2),w=Math.PI/2,R=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).initChart=function(){a.svg=a.container.append("svg"),a.g=a.svg.append("g"),a.doughnut=a.g.append("g").attr("class","doughnut"),a.pie.value(function(t){return t.value}).startAngle(v).endAngle(w).sort(null),a.needle=a.g.append("g").attr("class","needle"),window.addEventListener("resize",function(){a.renderChart(!0)}),a.renderChart()},a.renderChart=function(t){a.updateDimensions(),a.svg.attr("width",a.width+a.margin.left+a.margin.right).attr("height",a.height+a.margin.top+a.margin.bottom),a.g.attr("transform","translate("+a.margin.left+", "+a.margin.top+")"),a.calculateRadius(),a.doughnut.attr("transform","translate("+a.outerRadius+", "+a.outerRadius+")"),a.arc.outerRadius(a.outerRadius).innerRadius(a.outerRadius*(1-a.props.arcWidth)).cornerRadius(a.props.cornerRadius).padAngle(a.props.arcPadding),a.doughnut.selectAll(".arc").remove(),a.needle.selectAll("*").remove(),a.g.selectAll(".text-group").remove(),a.doughnut.selectAll(".arc").data(a.pie(a.arcData)).enter().append("g").attr("class","arc").append("path").attr("d",a.arc).style("fill",function(t){return t.data.color}),a.drawNeedle(t),a.needle.attr("transform","translate("+a.outerRadius+", "+a.outerRadius+")")},a.updateDimensions=function(){var t=a.props.marginInPercent,e=a.container.node().getBoundingClientRect(),n=e.width,r=e.height;console.log(e),a.margin.left=n*t,a.margin.right=n*t,a.width=n-a.margin.left-a.margin.right,a.margin.top=r*t,a.margin.bottom=r*t,a.height=a.width/2-a.margin.top-a.margin.bottom},a.calculateRadius=function(){a.width<2*a.height?a.outerRadius=(a.width-a.margin.left-a.margin.right)/2:a.outerRadius=a.height-a.margin.top-a.margin.bottom,a.centerGraph()},a.centerGraph=function(){a.margin.left=a.width/2-a.outerRadius+a.margin.right,a.g.attr("transform","translate("+a.margin.left+", "+a.margin.top+")")},a.drawNeedle=function(t){var e=a.props.percent,n=Object(m.a)(Object(m.a)(a)),r=n.container,o=n.calculateRotation,i=[0,-7.5],c=a.calculateRotation(0);a.needle.append("path").attr("d",c).attr("fill","#464A4F"),a.needle.append("circle").attr("cx",i[0]).attr("cy",i[1]).attr("r",15).attr("fill","#464A4F"),a.addText(a.props.percent),t?r.select(".needle path").attr("d",o(e)):a.needle.transition().delay(500).ease(f.b).duration(3e3).tween("progress",function(){return function(t){var a=t*e;return r.select(".needle path").attr("d",o(a))}})},a.calculateRotation=function(t){var e=.55*a.outerRadius,n=a.percentToRad(t),r=[0,-7.5],o=[r[0]-e*Math.cos(n),r[1]-e*Math.sin(n)],i=[r[0]-15*Math.cos(n-Math.PI/2),r[1]-15*Math.sin(n-Math.PI/2)],c=[r[0]-15*Math.cos(n+Math.PI/2),r[1]-15*Math.sin(n+Math.PI/2)];return"M ".concat(i[0]," ").concat(i[1]," L ").concat(o[0]," ").concat(o[1]," L ").concat(c[0]," ").concat(c[1])},a.percentToRad=function(t){return t*Math.PI},a.getColors=function(){for(var t=a.props,e=t.nrOfLevels,n=t.colors,r=f.e().domain([1,e]).range([n[0],n[n.length-1]]).interpolate(f.c),o=[],i=1;i<=e;i++)o.push(r(i));return o},a.addText=function(t){a.g.append("g").attr("class","text-group").attr("transform","translate(".concat(a.outerRadius,", ").concat(a.outerRadius/2+20,")")).append("text").text("".concat(100*t,"%")).style("font-size",function(){return a.width<500||a.height<250?40:a.width<1e3||a.height<500?80:100}).style("fill",a.props.textColor).attr("class","percent-text")};var n=a.props,r=n.nrOfLevels,o=n.colors;a.svg={},a.g={},a.width={},a.height={},a.doughnut={},a.needle={},a.data={},a.outerRadius={},a.margin={},a.arc=f.a(),a.pie=f.d(),r===o.length?a.colorArray=o:a.colorArray=a.getColors(),a.arcData=[];for(var i=0;i<r;i++){var l={value:1,color:a.colorArray[i]};a.arcData.push(l)}return a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.id&&(this.container=f.f("#".concat(this.props.id)),this.initChart())}},{key:"componentDidUpdate",value:function(){this.initChart()}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,style:{width:"100%"}})}}]),e}(r.a.Component),E=R;R.defaultProps={marginInPercent:.05,cornerRadius:6,nrOfLevels:3,percent:.4,arcPadding:.05,arcWidth:.2,colors:["#00FF00","#FF0000"],textColor:"#fff"};var b=E,C=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(p.a,{xs:12,lg:{offset:2,span:8}},r.a.createElement("h1",null,"React Gauge Chart Demo"))),r.a.createElement(g.a,null,r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with default props"),r.a.createElement(b,{id:"gauge-chart1"})),r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with 20 levels"),r.a.createElement(b,{id:"gauge-chart2",nrOfLevels:20,percent:.86}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with custom colors"),r.a.createElement(b,{id:"gauge-chart3",nrOfLevels:30,colors:["#FF5F6D","#FFC371"],arcWidth:.3,percent:.37})),r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with larger padding between elements"),r.a.createElement(b,{id:"gauge-chart4",nrOfLevels:10,arcPadding:.1,cornerRadius:3,percent:.6})))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.1e04bb78.chunk.js.map