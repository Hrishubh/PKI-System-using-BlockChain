(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,c,a,u,l,s=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),a=document.createRange(),u=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),a.selectNodeContents(l),u.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(a):u.removeAllRanges()),l&&document.body.removeChild(l),c()}return s}},7513:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),o=(n(7294),n(5712)),i=n(9008),c=n(7904),a=function(){return(0,r.jsx)("div",{class:"container",children:(0,r.jsx)("div",{class:"text",style:{padding:"20px",margin:"20px","font-size":"xx-large","font-weight":"bold","font-style":"italic","text-align":"center","background-color":"#2185d0",color:"white","transition-duration":"5s",animation:"text-animation 5s","transition-timing-function":"ease-in-out",direction:"reverse","border-radius":"15px"},children:(0,r.jsx)(c.Link,{route:"/",children:(0,r.jsx)("a",{style:{color:"white"},children:" PKI System "})})})})},u=function(e){return(0,r.jsx)("div",{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"})}),(0,r.jsx)(a,{}),e.children]})})}},9921:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(5835),n(7294),n(7513),n(4855);t.default=function(e){return e.publicKey,e.privateKey,(0,r.jsx)("h1",{children:"Teri Maa Ki Chut"})}},7904:function(e,t,n){var r=n(7018)();r.add("/certificates/new","/certificates/new").add("/certificates/:address","/certificates/show"),e.exports=r},3173:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rsa/rsaNext",function(){return n(9921)}])},4300:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(7294)),i=a(n(640)),c=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,a=y(u);function u(){var e;f(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(m(e=a.call.apply(a,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,c=n.onCopy,a=n.children,u=n.options,l=o.default.Children.only(a),s=(0,i.default)(r,u);c&&c(r,s),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t)})),e}return t=u,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,c),r=o.default.Children.only(t);return o.default.cloneElement(r,l(l({},n),{},{onClick:this.onClick}))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.PureComponent);t.CopyToClipboard=g,v(g,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,n){"use strict";var r=n(4300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},6601:function(){},9214:function(){},1922:function(){},2363:function(){},6419:function(){},6353:function(){},9386:function(){},1616:function(){},9862:function(){},964:function(){}},function(e){e.O(0,[774,493,835,888,179],(function(){return t=3173,e(e.s=t);var t}));var t=e.O();_N_E=t}]);