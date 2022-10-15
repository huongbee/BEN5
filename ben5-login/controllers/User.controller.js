const express = require('express');
const router = express.Router();
const UserModel = require('../models/User.model');
const User = new UserModel();
const { hashPassword, comparePassword, aesEncrypt, aesDecrypt } = require('../libs/utils');
const commonConstant = require('../constants/common.constant');
const { signToken, verifyToken } = require('../libs/jwt');
const { authenticate } = require('../middlewares/authenticate');
const Redis = require('../libs/ioredis');
const redis = new Redis();
const Mailer = require('../libs/nodemailer');

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
  const { oldPass, newPass, confirmPass } = req.body;
  if (newPass !== confirmPass) {
    return res.json({
      code: 1001,
      message: 'Mật khẩu không giống nhau',
      data: null
    })
  }
  const email = req.email;
  const usrID = req.userId;
  const user = await User.findUserByEmail(email);
  if (!user) {
    return res.json({
      code: 1001,
      message: 'Không tìm thấy user',
      data: null
    })
  }
  const passwordHashed = hashPassword(oldPass, commonConstant.PASSWORD_SECRET_KEY);
  const storedPassword = user.password;

  if (!comparePassword(passwordHashed, storedPassword)) { // tương tự chức năng login
    return res.json({
      code: 1001,
      message: 'Mật khẩu cũ không chính xác',
      data: null
    })
  }
  const passwordNew = hashPassword(newPass, commonConstant.PASSWORD_SECRET_KEY);
  // check passwordNew exists in PasswordStoreSchema.passwords
  const updated = await User.updatePassword(usrID, passwordNew);
  // lưu pass cũ (storedPassword) vào trong collection PasswordStoreSchema bằng hàm addToSet
  if (!updated || updated.modifiedCount != 1) {
    return res.json({
      code: 1001,
      message: 'Cập nhật mật khẩu không thành công',
      data: null
    })
  }
  return res.json({
    code: 1000,
    message: 'Cập nhật mật khẩu thành công',
    data: null
  })
})

router.post('/user', authenticate, async (req, res) => {
  // TODO: get user info logged in
})
// 4.1
router.post('/forget-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findUserByEmail(email);
  if (!user) {
    return res.json({
      code: 1001,
      message: 'Không tìm thấy user',
      data: null
    })
  }
  // TODO: gửi token về mail cho user để reset pass
  const objUser = {
    userId: user._id,
    email
    // expiredAt: new Date() + 5 mins (Cách I)
  };
  let token = aesEncrypt(objUser, commonConstant.FORGET_PASS_TOKEN_KEY);
  let link = `http://localhost:3000/forget-password/token/${token}`;

  // luu token vào DB cho user đã yc quên password (Cách II)

  console.log(link);
  // await Mailer.sendMail(link, email);
  return res.json({
    code: 1000,
    message: 'Gửi mail thành công',
    data: null
  })
})
// do user nhấp vào link quên pass trong email
router.get('/forget-password/token/*', async (req, res) => {
  const token = req.params[0]; // * any text
  try {
    const data = aesDecrypt(token, commonConstant.FORGET_PASS_TOKEN_KEY);
    // validate expiredAt vs new Date() (Cách I)
    // find token trong DB để kiểm tra token có tồn tại hay không (Cách II)
    // nếu có thì cho phép xác thực token thành công và xóa token đã lưu
    // nếu không thì báo lỗi token ko tồn tại => lỗi
    return res.json({
      code: 1000,
      message: 'Xác thực thành công',
      data
    })
  } catch (error) {
    return res.json({
      code: 1001,
      message: 'Liên kết bạn nhập vào không đúng, vui lòng thử lại',
      data: null
    })
  }
});
//5.Reset password
router.post('/forget-password/reset-password', async (req, res) => {
  const { password, confirmPass, userId, email } = req.body;
  // password, confirmPass: do user nhập từ form
  // userId, email: do client (web/app) gửi lên từ response của api /forget-password/token/*
  // TODO giống chức năng update password nhưng không có authenticate
})

module.exports = router;