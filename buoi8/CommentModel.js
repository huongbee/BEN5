const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: 'Post'
  },
  content: String,
  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }]
});
const CommentModel = mongoose.model('Comment', CommentSchema);
module.exports = CommentModel;
