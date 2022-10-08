const { ACCESS_TOKEN_SECRET_KEY } = require('../constants/common.constant');
const jwt = require('jsonwebtoken');

module.exports = {
  signToken: (payload) => {
    const token = jwt.sign(
      payload,
      ACCESS_TOKEN_SECRET_KEY,
      {
        expiresIn: 120 // seconds
      });
    return token;
  },
  verifyToken: (token) => {
    const result = jwt.verify(
      token,
      ACCESS_TOKEN_SECRET_KEY,
      {
        expiresIn: 120
      }
    );
    return result; // or return boolean;
  }
};