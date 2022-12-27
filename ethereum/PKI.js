import web3 from './web3';
import CertificatePKI from './build/CertificatePKI.json';

const instance = new web3.eth.Contract(
  JSON.parse(CertificatePKI.interface),
  '0x8af70BBF6B6A465f697CB0598b0993bDa11AF39E'
);

export default instance;
