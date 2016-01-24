var mongoose = require('mongoose');

/* connect local database */
// mongoose.connect('mongodb://localhost:27017/cuasotamhonDB');

/* connect database hosting */
mongoose.connect('mongodb://nhuan:12345@ds047355.mongolab.com:47355/cuasotamhondb');

module.exports = mongoose;
