exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(904);
;// CONCATENATED MODULE: ./components/Header.js





const Header = () => {
  return (
    /*#__PURE__*/
    // <Menu style={{ marginTop: "10px" }}>
    //   <Link route="/">
    //     <a className="item">PKI Systme</a>
    //   </Link>
    //   <Menu.Menu position="right">
    //     <Link route="/">
    //       <a className="item">Certificates</a>
    //     </Link>
    //     <Link route="/certificates/new">
    //       <a className="item">+</a>
    //     </Link>
    //   </Menu.Menu>
    // </Menu>
    jsx_runtime_.jsx("div", {
      class: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "text",
        style: {
          padding: "20px",
          margin: "20px",
          "font-size": "xx-large",
          "font-weight": "bold",
          "font-style": "italic",
          "text-align": "center",
          "background-color": "#2185d0",
          color: "white",
          "transition-duration": "5s",
          animation: "text-animation 5s",
          "transition-timing-function": "ease-in-out",
          direction: "reverse",
          "border-radius": "15px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
          route: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            style: {
              "color": "white"
            },
            children: " PKI System "
          })
        })
      })
    })
  );
};

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./components/Layout.js







const Layout = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), props.children]
    })
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(247)(); // require('next-routes') returns a fxn, and the 2nd () envokes that function


routes.add("/certificates/new", "/certificates/new") //Added before the ":address" reute so that it can override it
// .add("/rsa/keys", "/rsa/keys") //Added before the ":address" reute so that it can override it
//Added before the ":address" reute so that it can override it
.add("/certificates/:address", "/certificates/show");
module.exports = routes;

/***/ })

};
;