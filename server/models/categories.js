var mongoose = require('../configs/database');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('categories', categorySchema);
