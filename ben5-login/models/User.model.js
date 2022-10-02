const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  phone: String,
  password: String,
  fullname: {
    type: String,
    required: true
  },
  isLocked: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: new Date
  },
  updatedAt: {
    type: Date,
    default: new Date
  }
});
const UserModel = mongoose.model('User', UserSchema);
class User {
  createUser(email, phone, password, fullname) {
    const user = UserModel.create({
      email,
      phone,
      password,
      fullname
    });
    return user;
  }
}

module.exports = User;