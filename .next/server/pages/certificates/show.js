(function() {
var exports = {};
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ show; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(513);
// EXTERNAL MODULE: ./ethereum/PKI.js + 1 modules
var PKI = __webpack_require__(657);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(542);
;// CONCATENATED MODULE: ./ethereum/build/Certificate.json
var Certificate_namespaceObject = JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"CertificateOwner\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"renewals\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"validity\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getSummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"terminateCertificate\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"requestedExtension\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"extendCertificate\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"publicKey\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getRenewals\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"isValid\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"publicKeyAlgo\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"applicant\\",\\"type\\":\\"address\\"},{\\"name\\":\\"suggestedKey\\",\\"type\\":\\"string\\"},{\\"name\\":\\"suggestedAlgo\\",\\"type\\":\\"string\\"},{\\"name\\":\\"requestedValidity\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]"}');
;// CONCATENATED MODULE: ./ethereum/Certificate.js



const certificate = address => {
  return new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(Certificate_namespaceObject.w3), address);
};

/* harmony default export */ var Certificate = (certificate);
;// CONCATENATED MODULE: ./pages/certificates/show.js









function CertificateShow({
  summary,
  contractAddress
}) {
  const [counter, setCounter] = external_react_default().useState(summary[3]);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: errorMessage,
    1: seterrorMessage
  } = (0,external_react_.useState)("");
  const webAddress = "https://sepolia.etherscan.io/address/" + contractAddress;

  const findTime = num => {
    if (num < 1) {
      return '0';
    }

    ;

    const qualifier = num => num > 1 ? ' ' : '';

    const numToStr = (num, unit) => num > 0 ? ` ${num}
    ${unit}${qualifier(num)}` : '';

    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneMonth = oneDay * 30.4375;
    const oneYear = oneDay * 365;
    const times = {
      Years: ~~(num / oneYear),
      Months: ~~(num % oneYear / oneMonth),
      Days: ~~(num % oneMonth / oneDay),
      Hours: ~~(num % oneDay / oneHour),
      Min: ~~(num % oneHour / oneMinute),
      Sec: num % oneMinute
    };
    let str = '';

    for (let [key, value] of Object.entries(times)) {
      str += numToStr(times[key], key);
    }

    const arr = str.trim().split(',');
    const res = [];
    arr.forEach((x, i) => {
      if (i % 2 === 0 && i !== 0) res.push(i === arr.length - 2 ? 'and' : ' ');
      res.push(x);
    });
    return res.join(" ").replace(/\s,/g, ',');
  };

  external_react_default().useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  function renderCards() {
    const CertificateOwner = summary[0],
          publicKey = summary[1],
          publicKeyAlgo = summary[2],
          valid = summary[4];
    let status = "";

    if (valid) {
      status = "This Certificate is Valid.";
    } else {
      status = "This Certificate has Expired.";
    }

    const items = [{
      header: CertificateOwner,
      meta: "Owner's Account",
      description: "The owner owns the public key in this certificate.",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: contractAddress,
      meta: "Address of the Contract",
      description: "The address on the blockchain where the current certificate has been stored.",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: publicKey,
      meta: "Public Key",
      description: "This is the key which can be used to communicate with the owner of the key. They are a very integral feature of most modern verification systems.",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: publicKeyAlgo,
      meta: "Algorithm associated with the Public Key",
      description: "The algorithm which is used in decryption and encryption using the given pair of public/private keys."
    }, {
      header: findTime(counter),
      meta: "Validity (seconds)",
      description: "The period for which the certificate is actually valid.",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: status,
      meta: "Status of the Certificate",
      description: "Shows if the Certificate is still valid or has it expired already."
    }];
    return /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
      centered: true,
      items: items
    });
  }

  const onClick = async event => {
    event.preventDefault();
    setLoading(true);
    seterrorMessage("");

    try {
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      await PKI/* default.methods.terminateCertificate */.Z.methods.terminateCertificate(accounts[0]).send({
        from: accounts[0]
      });
      Router.pushRoute("/");
    } catch (err) {
      seterrorMessage(err.message);
    }

    setLoading(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      class: "ui one column stackable center aligned page grid",
      children: "Certificate Details :"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
            width: 20,
            children: renderCards()
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
      loading: loading,
      onClick: onClick,
      class: "blue fluid ui button",
      style: {
        width: "60%",
        marginLeft: "20%"
      },
      children: "Remove Certificate!"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      href: webAddress,
      style: {
        color: "white"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        class: "blue fluid ui button",
        style: {
          width: "80%",
          marginLeft: "10%"
        },
        children: "View on EtherScan"
      })
    })]
  });
}

;

CertificateShow.getInitialProps = async props => {
  const certificate = Certificate(props.query.address);
  const contractAddress = props.query.address;
  const summary = await certificate.methods.getSummary().call();
  return {
    summary,
    contractAddress
  };
};

/* harmony default export */ var show = (CertificateShow);

/***/ }),

/***/ 247:
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 409:
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [513,657], function() { return __webpack_exec__(579); });
module.exports = __webpack_exports__;

})();