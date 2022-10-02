const sha256 = require('js-sha256');
module.exports = {
  hashPassword: (password, secretKey) => {
    return sha256(password + '-' + secretKey)
  },
  comparePassword: (password, storedPassword) => {
    return password === storedPassword;
  }
}
