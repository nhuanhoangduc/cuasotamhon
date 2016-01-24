var mongoose = require('../configs/database');
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
  date: Date,
  content: String
});

module.exports = mongoose.model('notifications', notificationSchema);