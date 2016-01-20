module.exports = function(app) {
  // index routes
  var indexRoute = require('../routes/index');
  app.use('/', indexRoute);
};
