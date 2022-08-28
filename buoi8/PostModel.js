const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: mongoose.Types.ObjectId,
    ref: 'Comment'
  }]
});
const PostModel = mongoose.model('Post', PostSchema);
module.exports = PostModel;


// https://kminacademy.notion.site/n-cu-i-kh-a-9af9f657023a48149f53ee2eb649fadf