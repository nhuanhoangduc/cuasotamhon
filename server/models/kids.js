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
  },
  sex: {
    type: String,
    enum: ['boy', 'girl'],
    default: 'boy'
  },
  schedules: []
});

module.exports = mongoose.model('kids', kidSchema);