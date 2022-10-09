const express = require('express');
const router = express.Router();
const UserModel = require('../models/User.model');
const User = new UserModel();
const { hashPassword, comparePassword } = require('../libs/utils');
const commonConstant = require('../constants/common.constant');
const { signToken, verifyToken } = require('../libs/jwt');
const { authenticate } = require('../middlewares/authenticate');
const Redis = require('../libs/ioredis');
const redis = new Redis();

router.post('/register', async (req, res) => {
  try {
    // TODO: validate input
    // TODO: check email/phone exits
    const { email, phone, password, fullname } = req.body;
    const passwordHashed = hashPassword(password, commonConstant.PASSWORD_SECRET_KEY);

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

// route router routing

router.post('/login', async (req, res) => {
  try {
    // TODO: validate input
    const { email, password } = req.body;
    const user = await User.findUserByEmail(email);
    // check user was locked
    if (user.isLocked) {
      return res.json({
        code: 1003,
        message: 'Tài khoản đã bị khóa. Vui lòng liên hệ bộ phận CSKH...',
        data: null
      })
    }
    const passwordHashed = hashPassword(password, commonConstant.PASSWORD_SECRET_KEY);
    const storedPassword = user.password;

    if (!comparePassword(passwordHashed, storedPassword)) {
      // check user enter password invalid 5 times
      let countInvalid = +(await redis.get(commonConstant.COUNT_INVALID_PASS + user._id)) || 0;
      countInvalid++;
      if (countInvalid === 5) {
        // lock user unlimit
        await User.lockUser(user._id);
        return res.json({
          code: 1004,
          message: 'Tài khoản đã bị khóa do nhập sai mật khẩu 5 lần liên tiếp. Vui lòng ....',
          data: null
        })
      }
      redis.set(commonConstant.COUNT_INVALID_PASS + user._id, countInvalid); // COUNT_INVALID_PASS_633949363b551a6e9682bad9

      return res.json({
        code: 1002,
        message: 'Mật khẩu không đúng',
        data: null
      })
    }
    // user nhập đúng pass
    // clear số lần đã nhập sai trước đó
    redis.delete(commonConstant.COUNT_INVALID_PASS + user._id);
    delete user.password;
    delete user.__v;
    const accessToken = signToken({
      _id: user._id,
      email: user.email,
      phone: user.phone
    });
    return res.json({
      code: 1000,
      message: 'Đăng nhập thành công',
      data: {
        accessToken,
        userInfo: { ...user }
      }
    })
  } catch (error) {
    console.log(error);
    res.json({
      code: 1001,
      message: 'Lỗi hệ thống. Vui lòng thử lại sau',
      data: null
    })
  }
});

router.post('/update-password', authenticate, async (req, res) => {
  // TODO: update password
  res.json({
    code: 1000,
    message: 'Thành công',
    data: null
  })
})

router.post('/user', authenticate, async (req, res) => {
  // TODO: get user info logged in
})
module.exports = router;