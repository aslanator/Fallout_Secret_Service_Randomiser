(this.webpackJsonpfallout_secret_service_randomiser=this.webpackJsonpfallout_secret_service_randomiser||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(1),s=t.n(r),a=t(6),o=t.n(a),c=(t(14),t(2)),i=t(3),u=(t(15),t(7)),l=t(8),d=['1. Perform one successful \u201eComputers" test.\n2. Kill one enemy model.\n3. Perform one successful "Lockpick" test.\n4. Wound two enemy models.\n5. Perform one successful "Search" test.\n6. Grab and hold the 1 "item" until the end of the game.\n7. Ensure that you have one model in the target zone.\n8. Wound the enemy leader.\n9. Perform one successful "Presence" test','\n1. Perform three successful "Expertise" tests\nof any type or two successful "Expertise"\ntests of the same type.\n2. Kill more models than your\nenemy.\n3. Kill the enemy model that cost\nmost caps.\n4. Grab and hold the 2 "item" until the end\nof the game.\n5. At least one of your models should be\nin the enemy deployment zone at the\nend of the game.\n6. Ensure that you have more models in the\ntarget zone than your enemy.\n7. Select one of your models(not leader), it\nmustn\'t be wounded by an enemy untill the\nend of a game.\n',"\n1. Kill the enemy leader.\n2. Your leader should be in the enemy depl\noyment zone at the end of the game.\n3. Collect twice as many caps as your\nenemy. Caps= cost of models.\n4. Kill twice as many models as your\nenemy.\n5. Ensure that you have at least one model in\nthe target zone and your enemy has none.\n6. You leader mustn't be killed by enemy\nplayer until the end of the game\n",'\n1. Perform five successful "Expertise" tests or\none successful "Expertise" test of each type.\n2. You must kill at least 80% of caps of your\nopponents forces.\n3. Grab and hold the 3 "item" until the end\nof the game.\n4. At the end of the game, the enemy should\nnot control the "Item".\n5. At least 50% of your living models,\nincluding the leader, must finish the\ngame in the enemy\'s deployment zone.\n6. Ensure that you have all\nyour living models in the target zone\nand your enemy has none.\n7. More than 50% of your models\nmust survive the battle.'],h=["ZATAN","RADIATION","ENERGY","CHEM"],f=t(9),m=t.n(f),y=function(){function e(){Object(u.a)(this,e);var n=new RegExp("\\d\\. ");this.typeCount=[5,4,3,2],this.typeRemove=[1,2,2,1],this.cardTypes=d.map((function(e){return e.replace(/\n/g," ").split(n).map((function(e){return e.trim()})).slice(1)})),this.pickedCards=[]}return Object(l.a)(e,[{key:"rand",value:function(){for(var e in this.pickedCards=[],this.cardTypes){var n=this.cardTypes[e];this.pickedCards.push(this._pickRandomFromArray(n,this.typeCount[e]))}return this.pickedCards}},{key:"pick",value:function(e){var n=this._pickRandomFromArray(this.cardTypes[e]);return this.pickedCards[e].push(n),n}},{key:"unpick",value:function(e,n){n.sort((function(e,n){return n-e}));var t,r=Object(c.a)(n);try{for(r.s();!(t=r.n()).done;){var s=t.value;this.cardTypes[e].push(this.pickedCards[e].splice(s,1))}}catch(a){r.e(a)}finally{r.f()}}},{key:"repick",value:function(e,n){var t=this.pickedCards[e].splice(n,1),r=this.pick(e);return this.cardTypes[e].push(t),r}},{key:"_pickRandomFromArray",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return m()(e).splice(0,n)}}]),e}(),p=t(0);var v=function(e){var n=e.onStageChange,t=e.stage,r=e.done;return Object(p.jsx)("div",{className:"controls",children:t<2?Object(p.jsx)("button",{onClick:n,disabled:!r,children:"\u0414\u0430\u043b\u0435\u0435"}):""})},b=new y;var j=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],s=n[1],a=Object(r.useState)(0),o=Object(i.a)(a,2),u=o[0],l=o[1],f=Object(r.useState)(!1),m=Object(i.a)(f,2),y=m[0],j=m[1],O=Object(r.useState)(z),g=Object(i.a)(O,2),k=g[0],C=g[1];function x(e,n){k.get(e).has(n)?k.get(e).delete(n):E(e)&&k.get(e).set(n),C(new Map(k))}function E(e){if(0==u)return b.typeRemove[e]>k.get(e).size;if(1===u){var n,t=Object(c.a)(k.values());try{for(t.s();!(n=t.n()).done;){return!(n.value.size>0)}}catch(r){t.e(r)}finally{t.f()}}return!1}function A(){s(b.pickedCards.map((function(e,n){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[h[n],0===u?Object(p.jsxs)("span",{children:[" \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c ",b.typeRemove[n]]}):""]}),Object(p.jsx)("ol",{children:e.map((function(e,t){return Object(p.jsxs)("li",{disabled:!E(n)&&u<2,onClick:x.bind(null,n,t),children:[u<2?Object(p.jsx)("input",{type:"checkbox",readOnly:!0,checked:k.get(n).has(t)}):"",e]},e)}))})]},n)})))}function w(){return u>0||function(){var e,n=Object(c.a)(k.entries());try{for(n.s();!(e=n.n()).done;){var t=Object(i.a)(e.value,2),r=t[0],s=t[1];if(b.typeRemove[r]!==s.size)return!1}}catch(a){n.e(a)}finally{n.f()}return!0}()}function z(){var e=new Map;for(var n in d)e.set(Number(n),new Map);return e}return Object(r.useEffect)((function(){b.rand(),A()}),[]),Object(r.useEffect)((function(){A()}),[k]),Object(r.useEffect)((function(){0===u&&j(w())}),[k]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[0===u?"\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b":"",1===u?"\u041c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u0443, \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u0443\u044e \u0442\u043e\u0433\u043e-\u0436\u0435 \u0442\u0438\u043f\u0430":"",2===u?"\u0413\u043e\u0442\u043e\u0432\u043e":""]}),Object(p.jsx)("div",{children:t}),Object(p.jsx)(v,{stage:u,onStageChange:function(){0===u?function(){if(!w())return;var e,n=Object(c.a)(k.entries());try{for(n.s();!(e=n.n()).done;){var t=Object(i.a)(e.value,2),r=t[0],s=t[1];b.unpick(r,Array.from(s.keys()))}}catch(a){n.e(a)}finally{n.f()}l(1),C(z()),A()}():function(){var e,n=Object(c.a)(k.entries());try{for(n.s();!(e=n.n()).done;){var t,r=Object(i.a)(e.value,2),s=r[0],a=r[1],o=Object(c.a)(a.keys());try{for(o.s();!(t=o.n()).done;){var u=t.value;b.repick(s,u)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){n.e(d)}finally{n.f()}l(2),C(z()),A()}()},done:y})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,r=n.getFID,s=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),s(e),a(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.dbf688e4.chunk.js.map