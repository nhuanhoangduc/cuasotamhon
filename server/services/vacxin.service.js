/*
 * @author hoang duc nhuan
 */


/* init variables */
var LichTiemChung = require('../models/lichTiemChungs');


/*
 * services
 */

/* show all lich tiem chung */
var getAll = function(req, res, next) {
  LichTiemChung.find({}, function(err, results) {
    if (err)
      return next(err);

    res.send(results);
  });
};

/* add new */
var add = function(req, res, next) {
  LichTiemChung.create(req.body, function(err, result) {
    if (err)
      return next(err);

    res.send(result);
  });
};

/* remove */
var remove = function(req, res, next) {
  LichTiemChung.remove({
    _id: req.params.id
  }, function(err) {
    if (err)
      return next(err);

    res.send(200);
  });
};

/* edit */
var edit = function(req, res, next) {
  LichTiemChung.update({
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
