const sha256 = require('js-sha256');
const CryptoJS = require('crypto-js');

module.exports = {
  hashPassword: (password, secretKey) => {
    return sha256(password + '-' + secretKey)
  },
  comparePassword: (password, storedPassword) => {
    return password === storedPassword;
  },
  aesEncrypt: (obj, key) => {
    const encryptText = CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString();
    return encryptText;
  },
  aesDecrypt: (encryptText, key) => {
    const decryptedData = CryptoJS.AES.decrypt(encryptText, key);
    return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));;
  }
}
