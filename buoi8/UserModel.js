const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: String,
  name: String,
  tags: [String], // ['tag1','tag2']
  posts: [{
    type: mongoose.Types.ObjectId,
    ref: 'Post'
  }],
  friends: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }],
  receiveRequests: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }],
  sendRequests: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }]
});
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
