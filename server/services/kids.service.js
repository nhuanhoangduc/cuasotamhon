/*
 * @author hoang duc nhuan
 */


/* init variables */
var Kid = require('../models/kids');
var LichTiemChung = require('../models/lichTiemChungs');
var User = require('../models/users');
var async = require('async');


/*
 * services
 */

/* show all kid*/
var getAll = function(req, res, next) {
  Kid.find({}, function(err, results) {
    if (err)
      return next(err);

    res.send(results);
  });
};

/* add new */
var add = function(req, res, next) {
  var kid = req.body;
  var sess = req.session;

  if (sess.user) {
    var userId = sess.user._id;

    async.waterfall([
        // load schedules
        function(nextItem) {
          LichTiemChung.find({}, function(err, schedules) {
            nextItem(err, schedules);
          });
        },

        // add kid
        function(schedules, nextItem) {
          for (var i = 0; i < schedules.length; i++) {
            schedules[i].isInjected = false;
          };

          kid.schedules = schedules;

          Kid.create(kid, function(err, result) {
            if (err)
              nextItem(err);

            sess.user.kids.push(result);
            nextItem(null, result._id)
          });
        },

        // find user
        function(kidId, nextItem) {
          User
            .findOne({
              _id: userId
            })
            .exec(function(err, user) {
              nextItem(err, user, kidId);
            });
        },

        //update user's kids
        function(user, kidId, nextItem) {
          user.kids.push({
            _id: kidId
          });

          User.update({
            _id: user._id
          }, user, function(err) {
            nextItem(err);
          });
        }

      ],
      function done(err) {
        if (err)
          return next(err);

        return res.send(200);
      });
  } else {
    res.send(404);
  }

};

/* remove */
var remove = function(req, res, next) {
  var sess = req.session;
  var kidId = req.params.id;


  if (sess.user) {
    async.waterfall([

      // delele user's kid
      function(nextItem) {
        User.findOne({
          _id: sess.user._id
        }, function(err, user) {
          if (err)
            return nextItem(err);

          for (var i = 0; i < user.kids.length; i++) {
            var id = user.kids[i];
            if (id.toString().trim() === kidId.trim()) {
              user.kids.splice(i, i + 1);
              break;
            }
          }

          nextItem(null, user);
        });
      },

      // update user
      function(user, nextItem) {
        User.update({
          _id: user._id
        }, user, function(err) {
          nextItem(err);
        });
      },

      // remove kid
      function(nextItem) {
        Kid.remove({
          _id: kidId
        }, function(err) {
          nextItem(err);
        });
      }

    ], function done(err) {
      if (err)
        return next(err);

      res.send(200);
    });
  } else {
    res.send(404);
  }

};

/* edit */
var edit = function(req, res, next) {
  Kid.update({
    _id: req.body._id
  }, req.body, function(err) {
    if (err)
      return next(err);

    res.send(200);
  });
};


/* exports services */
module.exports = {
  getAll: getAll,
  add: add,
  remove: remove,
  edit: edit
};