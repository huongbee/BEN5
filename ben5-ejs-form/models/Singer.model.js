const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SingerSchema = new Schema({
  name: String,
  avatar: String,
  link: String,
  createdAt: Date
})
const SingerModel = mongoose.model('Singer', SingerSchema);
module.exports = SingerModel;