"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9683],{9683:function(n,e,t){t.r(e),t.d(e,{ClassNameExample:function(){return v},Component:function(){return p}});var r=t(22951),o=t(91976),i=t(60726),a=t(3019),d=t(25964);function u(n,e){var t,r=new a.f_,o=(0,i.Z)(n.visibleRanges);try{for(o.s();!(t=o.n()).done;)for(var u=t.value,c=u.from,l=u.to,f=c;f<=l;){var s=n.state.doc.lineAt(f);if(e.add&&"function"===typeof e.add){var h=e.add(s.number);if(h&&"string"===typeof h){var m={class:h};r.add(s.from,s.from,d.p.line({attributes:m}))}}f=s.to+1}}catch(v){o.e(v)}finally{o.f()}return r.finish()}var c=t(30325),l=t(47841),f=t(6319),s=t(55045),h=t(17664),m=t(39736),v=function(n){var e,t=n.source,i=(0,s.F)().theme,a=d.tk.baseTheme({"&dark .first-line":{backgroundColor:"red"},"&light .first-line":{backgroundColor:"red"},"&dark .line-color":{backgroundColor:"blue"},"&light .line-color":{backgroundColor:"blue"}});return(0,m.jsx)(h.Oq,{children:(0,m.jsx)(c.default,{value:t,theme:i,height:"300px !important",style:{margin:"0 0 23px 0"},extensions:[l.RI.markdown(),a,(e={add:function(n){return 3===n?"first-line":5===n?"line-color":void 0}},void 0===e&&(e={}),d.lg.fromClass(function(){function n(t){(0,r.Z)(this,n),this.decorations=void 0,this.decorations=u(t,e)}return(0,o.Z)(n,[{key:"update",value:function(n){(n.docChanged||n.viewportChanged)&&(this.decorations=u(n.view,e))}}]),n}(),{decorations:function(n){return n.decorations}}))]})})},p=function(){return(0,m.jsx)(f.MB,{path:function(){return t.e(1984).then(t.bind(t,21984))},children:(0,m.jsx)(v,{})})}},17664:function(n,e,t){t.d(e,{Oq:function(){return d}});var r,o,i=t(50669),a=t(74379),d=a.ZP.div(r||(r=(0,i.Z)(["\n  flex: 1;\n  max-width: 980px;\n  padding: 20px 20px 30px 20px;\n"])));a.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  flex: 1;\n"])))},55045:function(n,e,t){t.d(e,{F:function(){return i}});var r=t(11026),o=t(9531);function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",e=document.documentElement.getAttribute("data-color-mode"),t=(0,o.useState)("dark"===e?"dark":n),i=(0,r.Z)(t,2),a=i[0],d=i[1];return(0,o.useEffect)((function(){d("dark"===document.documentElement.getAttribute("data-color-mode")?"dark":"light"),document.addEventListener("colorschemechange",(function(n){d(n.detail.colorScheme)}))}),[]),{theme:a,setTheme:d}}}}]);