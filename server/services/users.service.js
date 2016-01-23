/*
 * author : hoang duc nhuan
 */

/* init variables */
var User = require('../models/users');
var randomString = require('random-string');
var modemService = require('./modem.service');


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

/* get current user */
var getCurrentUser = function(req, res, next) {
  var sess = req.session;
  var user = sess.user;

  if (sess.user) {
    res.send({
      username: user.username,
      fullName: user.fullName,
      phone: user.phone,
      isPaid: user.isPaid,
      kids: user.kids,
      isActivated: user.isActivated,
      imgUrl: user.imgUrl,
      job: user.job,
      isLogin: true
    });
  } else {
    res.send({
      isLogin: false
    });
  }
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
  var code = randomString({
    length: 8,
    numeric: true,
    letters: true,
    special: false
  });
  var newUser = req.body;
  newUser.activateCode = code;

  User.create(newUser, function(err, user) {
    if (err)
      return next(err);

    modemService.sendMessage('Mã kích hoạt của bạn là ' + code, user.phone, function(err) {
      if (err)
        console.log('Tin nhắn gửi đến số điện thoại ' + user.phone + ' bị lỗi!');

      console.log('Tin nhắn gửi đến số điện thoại ' + user.phone + ' thành công!');
    });

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
  getCurrentUser: getCurrentUser,
  getById: getById,
  add: add,
  remove: remove,
  edit: edit,
  login: login,
  logout: logout,
  checkLogin: checkLogin,
  checkAdmin: checkAdmin,
};