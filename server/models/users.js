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
  }
});

module.exports = mongoose.model('users', userSchema);