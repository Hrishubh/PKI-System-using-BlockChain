(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{7513:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var i=t(5893),r=(t(7294),t(5712)),c=t(9008),s=t(7904),a=function(){return(0,i.jsx)("div",{class:"container",children:(0,i.jsx)("div",{class:"text",style:{padding:"20px",margin:"20px","font-size":"xx-large","font-weight":"bold","font-style":"italic","text-align":"center","background-color":"#2185d0",color:"white","transition-duration":"5s",animation:"text-animation 5s","transition-timing-function":"ease-in-out",direction:"reverse","border-radius":"15px"},children:(0,i.jsx)(s.Link,{route:"/",children:(0,i.jsx)("a",{style:{color:"white"},children:" PKI System "})})})})},o=function(n){return(0,i.jsx)("div",{children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(c.default,{children:(0,i.jsx)("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"})}),(0,i.jsx)(a,{}),n.children]})})}},2758:function(n,e,t){"use strict";t.r(e);var i=t(809),r=t.n(i),c=t(2447),s=t(5893),a=t(5835),o=(t(7294),t(7513));function u(n){n.publicKey,n.privateKey;return(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"/rsa/keys",children:(0,s.jsx)("button",{class:"blue fluid ui button",style:{width:"60%",marginLeft:"20%"},icon:"add circle",content:"Generate Public Private Key Pair",primary:!0,children:"Generate Public Private Key Pair"})})]})}u.getInitialProps=(0,c.Z)(r().mark((function n(){var e,t,i;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,a.generateKeyPairSync)("rsa",{modulusLength:1024,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem",cipher:"aes-256-cbc",passphrase:""}}),t=e.publicKey,i=e.privateKey,n.abrupt("return",{publicKey:t,privateKey:i});case 4:case"end":return n.stop()}}),n)}))),e.default=u},7904:function(n,e,t){var i=t(7018)();i.add("/certificates/new","/certificates/new").add("/certificates/:address","/certificates/show"),n.exports=i},8915:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rsa/generate",function(){return t(2758)}])},2447:function(n,e,t){"use strict";function i(n,e,t,i,r,c,s){try{var a=n[c](s),o=a.value}catch(u){return void t(u)}a.done?e(o):Promise.resolve(o).then(i,r)}function r(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var s=n.apply(e,t);function a(n){i(s,r,c,a,o,"next",n)}function o(n){i(s,r,c,a,o,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return r}})},6601:function(){},9214:function(){},1922:function(){},2363:function(){},6419:function(){},6353:function(){},9386:function(){},1616:function(){},9862:function(){},964:function(){}},function(n){n.O(0,[774,493,835,888,179],(function(){return e=8915,n(n.s=e);var e}));var e=n.O();_N_E=e}]);