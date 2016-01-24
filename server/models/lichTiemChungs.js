var mongoose = require('../configs/database');
var Schema = mongoose.Schema;

var lichTiemChungSchema = new Schema({
  month: {
    type: Number,
    default: 0
  },
  year: {
    type: Number,
    default: 0
  },
  content: []
});

module.exports = mongoose.model('lichtiemchungs', lichTiemChungSchema);