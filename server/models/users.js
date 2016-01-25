var mongoose = require('../configs/database');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['registered', 'admin'],
    default: 'registered'
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  kids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'kids'
  }],
  activateCode: String,
  isActivated: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    default: 'http://41.media.tumblr.com/18a5ac1fc70360ea1b2ef476ec9f15f2/tumblr_mgblfiaRi21qarlxmo1_400.png'
  },
  fullName: {
    type: String,
    required: true,
    default: 'Tên người dùng'
  },
  job: {
    type: String,
    default: 'Nghề nghiệp'
  },
  address: {
    type: String,
    default: 'Địa chỉ'
  }
});

module.exports = mongoose.model('users', userSchema);