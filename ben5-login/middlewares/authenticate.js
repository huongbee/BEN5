const { verifyToken } = require('../libs/jwt');

module.exports = {
  authenticate: (req, res, next) => {
    const { accesstoken } = req.headers;
    console.log(accesstoken);
    try {
      verifyToken(accesstoken);
    } catch (error) {
      console.log('Error!!! ' + error.message);
      res.status(401);
      return res.json({
        code: 1001,
        message: 'Vui lòng đăng nhập lại',
        data: null
      });
    }
    return next();
  }
};