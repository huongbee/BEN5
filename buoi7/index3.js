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
// UserModel.findOne({
//   id: 10,
//   email: 'nguyenvana@gmail.com'
// })
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message))
// insert 50-100 users
// select * from users where id=10
// select fullname from users where id=10 and email=nguyenvana@gmail.com
// select fullname from users where id=10 or email=nguyenvana@gmail.com
// select * from users where name like 'Nguyen%'
// select * from users limit 0,10
//
// for (let i = 3; i <= 100; i++) {
//   UserModel.create({
//     id: i,
//     fullname: 'Nguyen Van B ' + i,
//     email: `nguyenvanb_${i}@gmail.com`
//   })
// };
// UserModel.find({
//   $or: [ // $or | $and | $gte | $lte | $lt | $gt | $exist | $eq
//     { id: 10 },
//     { email: 'nguyenvana@gmail.com' }
//   ]
// })
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message))

// cach 1
// UserModel.findOne({
//   id: 10,
//   email: 'nguyenvana@gmail.com'
// })
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message))
// cach 2
// UserModel.find({
//   $and: [
//     { id: { $eq: 10 } },
//     { email: 'nguyenvana@gmail.com' }
//   ]
// })
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message))

// UserModel.find({
//   id: { $lt: 20 }  // id<10
// }).sort({
//   // id: 'asc'
//   id: 1
// }).skip(10).limit(10) // = limit 10,10
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message))


UserModel.find({
  fullname: { $regex: /([a-zA-Z ])Van([a-zA-Z ])/ } // like '%Van%'
})
  .then(result => console.log(result))
  .catch(err => console.log(err.message))