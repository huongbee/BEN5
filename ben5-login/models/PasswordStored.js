const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PasswordStoreSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  passwords: [String]
});
const UserModel = mongoose.model('PasswordStore', PasswordStoreSchema);

module.exports = User;