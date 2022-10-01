const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SingerSchema = new Schema({
  name: String,
  avatar: String,
  link: String,
  createdAt: Date,
  updatedAt: Date
});
const SingerModel = mongoose.model('Singer', SingerSchema);
class Singer {
  getAll() {
    return SingerModel.find().lean();
  }

  insert(name, avatar, link) {
    return SingerModel.create({ name, avatar, link, createdAt: new Date() })
  }
  findOne(_id) {
    return SingerModel.findOne({ _id }).lean(); // json object
  }
  updateOne(_id, name, avatar, link) {
    return SingerModel.updateOne(
      { _id },
      {
        $set: {
          name,
          avatar,
          link,
          updatedAt: new Date()
        }
      }
    )
  }
  removeOne(_id) {
    return SingerModel.deleteOne({ _id });
  }
}
module.exports = Singer;