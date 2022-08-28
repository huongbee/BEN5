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

// (async () => {
//   // user login
//   const user = await UserModel.findOne({
//     email: 'nguyenvana@gmail.com',
//     password: sha256(sha256(SECRET_KEY + '111111'))
//   })
//   if (user) {
//     // insert
//     // console.log(user);
//     const post = await PostModel.create({
//       author: user._id,
//       content: 'Status thu tu tren trang ca nhan cua user C'
//     });
//     const comment = await CommentModel.create({
//       author: user._id,
//       post: post._id,
//       content: 'User A comment tren bai post cua user C co idPost la ' + post._id
//     })
//     console.log(comment);

//   } else {
//     console.log('Can\'t find user');
//   }

// })();

// 4.4->4.5
// (async () => {
//   // user login
//   const user = await UserModel.findOne({
//     email: 'nguyenvanb@gmail.com',
//     password: sha256(sha256(SECRET_KEY + '111111'))
//   })
//   if (user) {
//     // id post: 630a1df9891c293501eba06e
//     const updated = await PostModel.updateOne(
//       {
//         _id: '630a230a2bc7d7382fb7cf82'
//       },
//       {
//         // $addToSet: { // thêm phần tử user._id vào array likes, có validate unique
//         //   likes: user._id
//         // }
//         // $push: { // thêm phần tử user._id vào array likes
//         //   likes: user._id
//         // }
//         $pull: { // remove phần tử user._id khỏi array likes (pullAll)
//           likes: user._id
//         }
//       }
//     );
//     console.log(updated); // { n: 1, nModified: 1, ok: 1 }
//     if (updated && updated.nModified === 1) {
//       console.log('Cập nhật thành công');
//     }
//     // const post = await PostModel.findOneAndUpdate({})
//   } else {
//     console.log('Can\'t find user');
//   }

// })();

// 4.6
(async () => {
  // userA login
  const userA = await UserModel.findOne({
    email: 'nguyenvana@gmail.com',
    password: sha256(sha256(SECRET_KEY + '111111'))
  })
  if (userA) {
    const userB = await UserModel.findOneAndUpdate(
      {
        email: 'nguyenvanc@gmail.com',
      },
      {
        $addToSet: {
          receiveRequests: userA._id
        }
      }
    )
    if (userB) {
      const updateUserA = await UserModel.updateOne(
        {
          _id: userA._id,
        },
        {
          $addToSet: {
            sendRequests: userB._id
          }
        }
      );
      console.log(updateUserA);

    }

    // const post = await PostModel.findOneAndUpdate({})
  } else {
    console.log('Can\'t find userA');
  }

})();