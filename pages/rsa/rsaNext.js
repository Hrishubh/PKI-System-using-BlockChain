import { generateKeyPairSync } from "crypto";
import React from "react";
import Layout from "../../components/Layout";
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Button, Col, UncontrolledTooltip } from "reactstrap";

function app({publicKey,privateKey}) {
  return (
    <h1>Teri Maa Ki Chut</h1>
  )
}

// app.getInitialProps = async (props) => {
//   const keyPair = generateKeyPairSync("rsa", {
//         modulusLength: 1024,
//         publicKeyEncoding: {
//             type: "spki",
//             format: "pem",
//         },
//         privateKeyEncoding: {
//             type: "pkcs8",
//             format: "pem",
//             cipher: "aes-256-cbc",
//             passphrase: "",
//         },
//     });
//     const publicKey=keyPair.publicKey;
//     const privateKey=keyPair.privateKey;
//   return { publicKey,privateKey };
// };

export default app;