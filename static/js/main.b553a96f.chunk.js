(this.webpackJsonpfallout_secret_service_randomiser=this.webpackJsonpfallout_secret_service_randomiser||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(8),o=n.n(r),i=(n(14),n(3)),c=n(2),u=(n(15),n(4)),d=n(5),l=['1. Perform one successful \u201eComputers" test.\n2. Kill one enemy model.\n3. Perform one successful "Lockpick" test.\n4. Wound two enemy models.\n5. Perform one successful "Search" test.\n6. Grab and hold the 1 "item" until the end of the game.\n7. Ensure that you have one model in the target zone.\n8. Wound the enemy leader.\n9. Perform one successful "Presence" test','\n1. Perform three successful "Expertise" tests\nof any type or two successful "Expertise"\ntests of the same type.\n2. Kill more models than your\nenemy.\n3. Kill the enemy model that cost\nmost caps.\n4. Grab and hold the 2 "item" until the end\nof the game.\n5. At least one of your models should be\nin the enemy deployment zone at the\nend of the game.\n6. Ensure that you have more models in the\ntarget zone than your enemy.\n7. Select one of your models(not leader), it\nmustn\'t be wounded by an enemy untill the\nend of a game.\n',"\n1. Kill the enemy leader.\n2. Your leader should be in the enemy depl\noyment zone at the end of the game.\n3. Collect twice as many caps as your\nenemy. Caps= cost of models.\n4. Kill twice as many models as your\nenemy.\n5. Ensure that you have at least one model in\nthe target zone and your enemy has none.\n6. You leader mustn't be killed by enemy\nplayer until the end of the game\n",'\n1. Perform five successful "Expertise" tests or\none successful "Expertise" test of each type.\n2. You must kill at least 80% of caps of your\nopponents forces.\n3. Grab and hold the 3 "item" until the end\nof the game.\n4. At the end of the game, the enemy should\nnot control the "Item".\n5. At least 50% of your living models,\nincluding the leader, must finish the\ngame in the enemy\'s deployment zone.\n6. Ensure that you have all\nyour living models in the target zone\nand your enemy has none.\n7. More than 50% of your models\nmust survive the battle.'],f=["ZATAN","RADIATION","ENERGY","CHEM"],h=n(9),m=n.n(h),y=function(){function e(){Object(u.a)(this,e);var t=new RegExp("\\d\\. ");this.typeCount=[5,4,3,2],this.typeRemove=[1,2,2,1],this.cardTypes=l.map((function(e){return e.replace(/\n/g," ").split(t).map((function(e){return e.trim()})).slice(1)})),this.pickedCards=[]}return Object(d.a)(e,[{key:"rand",value:function(){for(var e in this.pickedCards=[],this.cardTypes){var t=this.cardTypes[e];this.pickedCards.push(this._pickRandomFromArray(t,this.typeCount[e]))}return this.pickedCards}},{key:"pick",value:function(e){var t=this._pickRandomFromArray(this.cardTypes[e]);return this.pickedCards[e].push(t),t}},{key:"unpick",value:function(e,t){t.sort((function(e,t){return t-e}));var n,a=Object(i.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;this.cardTypes[e].push(this.pickedCards[e].splice(s,1))}}catch(r){a.e(r)}finally{a.f()}}},{key:"repick",value:function(e,t){var n=this.pickedCards[e].splice(t,1),a=this.pick(e);return this.cardTypes[e].push(n),a}},{key:"_pickRandomFromArray",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return m()(e).splice(0,t)}},{key:"restoreFromObject",value:function(e){this.cardTypes=e.cardTypes,this.pickedCards=e.pickedCards}}]),e}(),p=n(0);var b=function(e){var t=e.onStageChange,n=e.stage,a=e.done;return Object(p.jsx)("div",{className:"controls",children:n<2?Object(p.jsx)("button",{onClick:t,disabled:!a,children:"\u0414\u0430\u043b\u0435\u0435"}):""})},j=function(){function e(){Object(u.a)(this,e),this.expire=300,this._fixMode=!!localStorage.getItem("fixMode")}return Object(d.a)(e,[{key:"fixMode",get:function(){return this._fixMode},set:function(e){e?(this._fixMode=!0,localStorage.setItem("fixMode","1")):(this._fixMode=!1,localStorage.removeItem("fixMode"))}},{key:"get",value:function(e){var t,n=localStorage.getItem(e);try{t=JSON.parse(n)}catch(a){console.error(a)}return!(!t||!this.fixMode&&(!t.expire||!t.data||new Date(t.expire)<new Date))&&t.data}},{key:"set",value:function(e,t){var n=new Date;return n.setSeconds(n.getSeconds()+this.expire),localStorage.setItem(e,JSON.stringify({expire:n,data:t}))}}]),e}(),v=new y,g=new j,O=g.get("data");var k=function(){var e=Object(a.useState)(g.fixMode),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),o=Object(c.a)(r,2),u=o[0],d=o[1],h=Object(a.useState)(null),m=Object(c.a)(h,2),y=m[0],j=m[1],k=Object(a.useState)(!1),x=Object(c.a)(k,2),C=x[0],S=x[1],w=Object(a.useState)(0),E=Object(c.a)(w,2),M=E[0],T=E[1],A=Object(a.useState)(L),_=Object(c.a)(A,2),F=_[0],N=_[1],z=Object(a.useState)(!1),I=Object(c.a)(z,2),R=I[0],P=I[1];function D(e,t){F.get(e).has(t)?F.get(e).delete(t):K(e)&&F.get(e).set(t),N(new Map(F))}function K(e){if(0==M)return v.typeRemove[e]>F.get(e).size;if(1===M){var t,n=Object(i.a)(F.values());try{for(n.s();!(t=n.n()).done;){return!(t.value.size>0)}}catch(a){n.e(a)}finally{n.f()}}return!1}function G(){d(v.pickedCards.map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[f[t],0===M?Object(p.jsxs)("span",{children:[" \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c ",v.typeRemove[t]]}):""]}),Object(p.jsx)("ol",{children:e.map((function(e,n){return Object(p.jsxs)("li",{disabled:!K(t)&&M<2,onClick:D.bind(null,t,n),children:[M<2?Object(p.jsx)("input",{type:"checkbox",readOnly:!0,checked:F.get(t).has(n)}):"",e]},e)}))})]},t)})))}function J(){return M>0||function(){var e,t=Object(i.a)(F.entries());try{for(t.s();!(e=t.n()).done;){var n=Object(c.a)(e.value,2),a=n[0],s=n[1];if(v.typeRemove[a]!==s.size)return!1}}catch(r){t.e(r)}finally{t.f()}return!0}()}function L(){var e=new Map;for(var t in l)e.set(Number(t),new Map);return e}return Object(a.useEffect)((function(){if("undefined"!==typeof O.cards&&"undefined"!==typeof O.time&&"undefined"!==typeof O.stage){var e=g.get("data");v.restoreFromObject(e.cards),j(new Date(e.time)),T(e.stage)}else{v.rand();var t=new Date;j(t),g.set("data",{cards:v,time:t,stage:0})}G()}),[]),Object(a.useEffect)((function(){G()}),[F]),Object(a.useEffect)((function(){0===M&&P(J())}),[F]),Object(a.useEffect)((function(){G()}),[M]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[0===M?"\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b":"",1===M?"\u041c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u0443, \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u0443\u044e \u0442\u043e\u0433\u043e-\u0436\u0435 \u0442\u0438\u043f\u0430":"",2===M?"\u0413\u043e\u0442\u043e\u0432\u043e":"",Object(p.jsx)("button",{onClick:function(){return S(!0)},children:"\u0412\u0440\u0435\u043c\u044f"})]}),Object(p.jsx)("div",{children:u}),Object(p.jsx)(b,{stage:M,onStageChange:function(){0===M?function(){if(!J())return;var e,t=Object(i.a)(F.entries());try{for(t.s();!(e=t.n()).done;){var n=Object(c.a)(e.value,2),a=n[0],s=n[1];v.unpick(a,Array.from(s.keys()))}}catch(r){t.e(r)}finally{t.f()}T(1),g.set("data",{cards:v,time:y,stage:1}),N(L())}():function(){var e,t=Object(i.a)(F.entries());try{for(t.s();!(e=t.n()).done;){var n,a=Object(c.a)(e.value,2),s=a[0],r=a[1],o=Object(i.a)(r.keys());try{for(o.s();!(n=o.n()).done;){var u=n.value;v.repick(s,u)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){t.e(d)}finally{t.f()}T(2),g.set("data",{cards:v,time:y,stage:2}),N(L())}()},done:R||M>0}),Object(p.jsx)("button",{onClick:function(){g.fixMode=!n,s(!n)},children:n?"Fix mode on":"Fix mode off"}),Object(p.jsx)("div",{className:"modal",style:{display:C?"flex":"none"},onClick:function(){return S(!1)},children:Object(p.jsx)("div",{className:"modal-content",children:y?y.toLocaleTimeString():"Time is not set"})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.b553a96f.chunk.js.map