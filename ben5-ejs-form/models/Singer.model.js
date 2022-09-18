const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SingerSchema = new Schema({
  name: String,
  avatar: String,
  link: String,
  createdAt: Date
});
const SingerModel = mongoose.model('Singer', SingerSchema);
class Singer {
  getAll() {
    return SingerModel.find().lean();
  }
}
module.exports = Singer;