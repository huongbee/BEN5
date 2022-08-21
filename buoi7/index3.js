const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ben5-test')
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err.message))

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  fullname: String,
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'http://example.com/images/hinh1.jpg'
  }
});
const UserModel = mongoose.model('User', UserSchema); // users

// insert
// UserModel.create({
//   id: 2,
//   fullname: 'Nguyen Van B',
//   email: 'nguyenvanB@gmail.com'
// })
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message))
UserModel.findOne({ id: 2 }) // select fullname from users where
  .then(result => console.log(result.fullname))
  .catch(err => console.log(err.message))
// insert 50-100 users
// select * from users where id=10
// select fullname from users where id=10 and email=nguyenvana@gmail.com
// select * from users where name like 'Nguyen%'
// select * from users limit 0,10
//
