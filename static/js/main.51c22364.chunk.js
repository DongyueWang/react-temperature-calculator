(this["webpackJsonptemperature-calculator"]=this["webpackJsonptemperature-calculator"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=(n(13),n.p+"static/media/logo.8d16ff4e.gif"),u=(n(14),n(3)),h=n(4),l=n(2),o=n(6),j=n(5),d=n(0),p={c:"Celsius",f:"Fahrenheit"},b=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){this.props.onTemperatureChange(e.target.value)}},{key:"render",value:function(){var e=this.props.temperature,t=this.props.scale;return Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("legend",{children:["Saisissez la temp\xe9ratue en ",p[t]," :"]}),Object(d.jsx)("input",{value:e,onChange:this.handleChange})]})}}]),n}(r.a.Component),f=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return this.props.celsius>=100?Object(d.jsx)("div",{children:"Boiling"}):Object(d.jsx)("div",{children:"not boiling"})}}]),n}(r.a.Component);n(16);function g(e){return 5*(e-32)/9}function O(e){return 9*e/5+32}function C(e,t){var n=parseFloat(e);if(Number.isNaN(n))return"";var a=t(n);return(Math.round(1e3*a)/1e3).toString()}var v=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleCelsiusChange=a.handleCelsiusChange.bind(Object(l.a)(a)),a.handleFahrenheitChange=a.handleFahrenheitChange.bind(Object(l.a)(a)),a.state={temperature:"",scale:"c"},a}return Object(h.a)(n,[{key:"handleCelsiusChange",value:function(e){this.setState({temperature:e,scale:"c"})}},{key:"handleFahrenheitChange",value:function(e){this.setState({temperature:e,scale:"f"})}},{key:"render",value:function(){var e=this.state.scale,t=this.state.temperature,n="f"===e?C(t,g):t,a="c"===e?C(t,O):t;return Object(d.jsxs)("div",{id:"calculator",children:[Object(d.jsx)(b,{scale:"c",temperature:n,onTemperatureChange:this.handleCelsiusChange}),Object(d.jsx)(b,{scale:"f",temperature:a,onTempuratureChange:this.handleFahrenheitChange}),Object(d.jsx)(f,{celsius:parseFloat(n)})]})}}]),n}(r.a.Component);var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(d.jsx)(v,{})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.51c22364.chunk.js.map