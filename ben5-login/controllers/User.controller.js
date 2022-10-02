const express = require('express');
const router = express.Router();
const UserModel = require('../models/User.model');
const User = new UserModel();
const utils = require('../libs/utils');
const commonConstant = require('../constants/common.constant');

router.post('/register', async (req, res) => {
  try {
    // TODO: validate input
    // TODO: check email/phone exits
    const { email, phone, password, fullname } = req.body;
    const passwordHashed = utils.hashPassword(password, commonConstant.PASSWORD_SECRET_KEY);

    const user = await User.createUser(email, phone, passwordHashed, fullname);
    if (!user || !user._id) {
      return res.json({
        code: 1002,
        message: 'Tạo tài khoản thất bại',
        data: {
          fullname: user.fullname,
          id: user._id
        }
      })
    }
    return res.json({
      code: 1000,
      message: 'Tạo tài khoản thành công',
      data: {
        fullname: user.fullname,
        id: user._id
      }
    })
  } catch (error) {
    res.json({
      code: 1001,
      message: 'Lỗi hệ thống. Vui lòng thử lại sau',
      data: null
    })
  }
});

module.exports = router;