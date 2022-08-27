require('./DBConnect');
const sha256 = require('sha256');
const UserModel = require('./UserModel.js');
const CommentModel = require('./CommentModel.js');
const PostModel = require('./PostModel.js');
const SECRET_KEY = 'chuoi_bi_mat_de_hash_p@ssw0rd';

// UserModel.insertMany([
//   {
//     email: 'nguyenvana@gmail.com',
//     password: sha256(sha256(SECRET_KEY + '111111')),
//     name: 'Nguyen Van A'
//   },
//   {
//     email: 'nguyenvanb@gmail.com',
//     password: sha256(sha256(SECRET_KEY + '111111')),
//     name: 'Nguyen Van B'
//   },
//   {
//     email: 'nguyenvanc@gmail.com',
//     password: sha256(sha256(SECRET_KEY + '111111')),
//     name: 'Nguyen Van C'
//   },
//   {
//     email: 'nguyenvand@gmail.com',
//     password: sha256(sha256(SECRET_KEY + '111111')),
//     name: 'Nguyen Van D'
//   },
//   {
//     email: 'nguyenvane@gmail.com',
//     password: sha256(sha256(SECRET_KEY + '111111')),
//     name: 'Nguyen Van E'
//   }
// ]).then(result => console.log(result));

// hash | encode | encrypt

(async () => {
  // user login
  const user = await UserModel.findOne({
    email: 'nguyenvanc@gmail.com',
    password: sha256(sha256(SECRET_KEY + '111111'))
  })
  if (user) {
    // insert
    // console.log(user);
    const post = await PostModel.create({
      author: user._id,
      content: 'Status thu tu tren trang ca nhan cua user C'
    })

  } else {
    console.log('Can\'t find user');
  }

})();
