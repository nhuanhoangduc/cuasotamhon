/*
 * author : hoang duc nhuan
 */

/* init variables */
var User = require('../models/users');


/*
 * methods
 */

/* get all users */
var getAll = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err)
      return next(err);

    res.send(users);
  });
};

/* get user by id */
var getById = function(req, res, next) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err)
      return next(err);

    res.send(user);
  });
};

/* add new user */
var add = function(req, res, next) {
  User.create(req.body, function(err, user) {
    if (err)
      return next(err);

    res.send(user);
  });
};

/* remove user */
var remove = function(req, res, next) {
  User.remove({
    _id: req.params.id
  }, function(err) {
    if (err)
      return next(err);

    res.send(200);
  });
};

/* edit user */
var edit = function(req, res, next) {
  User.update({
    _id: req.body._id
  }, req.body, function(err) {
    if (err)
      return next(err);

    res.send(200);
  });
};

/* login check user */
var login = function(req, res, next) {
  var sess = req.session;

  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, function(err, user) {
    if (err || user === null)
      return next(err);

    sess.user = user;
    res.send(user);
  });
};

/* logout */
var logout = function(req, res, next) {
  var sess = req.session;
  sess.destroy(function(err) {
    if (err)
      return next(err);

    res.send(200);
  });
}

/* check login */
var checkLogin = function(req, res, next) {
  var sess = req.session;
  if (sess.user)
    return next();

  return res.send(404);
};

/* Check admin permissions */
var checkAdmin = function(req, res, next) {
  var sess = req.session;
  if (sess.user)
    if (sess.user.type === 'admin')
      return next();

  return res.send(404);
};


/* export all methods */
module.exports = {
  getAll: getAll,
  getById: getById,
  add: add,
  remove: remove,
  edit: edit,
  login: login,
  logout: logout,
  checkLogin: checkLogin,
  checkAdmin: checkAdmin,
};
