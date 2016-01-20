var mongoose = require('../configs/database');
var Schema = mongoose.Schema;

var lichTiemChungSchema = new Schema({
  month: Number,
  year: {
    type: Number,
    default: 0
  },
  content: [{
    vacxin: String,
    note: String
  }]
});

module.exports = mongoose.model('lichtiemchungs', lichTiemChungSchema);
