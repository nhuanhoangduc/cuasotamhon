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
  imageUrl: {
    type: String,
    default: 'http://www.ivillage.ca/sites/default/files/use-sign-language636.jpg'
  },
  schedules: []
});

module.exports = mongoose.model('kids', kidSchema);