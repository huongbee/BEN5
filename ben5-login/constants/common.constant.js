const md5 = require('md5');

module.exports = {
  PASSWORD_SECRET_KEY: md5('p@ssw0rd_key_0987654321'),
  ACCESS_TOKEN_SECRET_KEY: '@ccessT0ken_secretKey_1234567890',
  COUNT_INVALID_PASS: 'COUNT_INVALID_PASS_'
}