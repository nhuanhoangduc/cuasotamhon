module.exports = function(app) {
  // index routes
  var indexRoute = require('../routes/index');
  app.use('/', indexRoute);

  // user services
  var userRoute = require('../routes/users');
  app.use('/users', userRoute);

  // vacxin services
  var vacxinRoute = require('../routes/vacxin');
  app.use('/vacxin', vacxinRoute);

  // kid services
  var kidRoute = require('../routes/kids');
  app.use('/kids', kidRoute);

  // category services
  var categoryRoute = require('../routes/categories');
  app.use('/categories', categoryRoute);

  // post services
  var postRoute = require('../routes/posts');
  app.use('/posts', postRoute);
};
