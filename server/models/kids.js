var mongoose = require('../configs/database');
var Schema = mongoose.Schema;

var kidSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model('kids', kidSchema);
