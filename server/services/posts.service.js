/*
 * @author hoang duc nhuan
 */


/* init variables */
var Post = require('../models/posts');


/*
 * services
 */

/* show all posts */
var getAll = function(req, res, next) {
  Post.find({}, function(err, results) {
    if (err)
      return next(err);

    res.send(results);
  });
};

/* counting */
var count = function(req, res, next) {
  if (req.body.categoryId) {
    Post.count({
      category: req.params.categoryId
    }, function(err, count) {
      if (err)
        return next(err);

      res.send({
        count: count
      });
    });
  } else {
    Post.count({}, function(err, count) {
      if (err)
        return next(err);

      res.send({
        count: count
      });
    });
  }
};

/* get post by id */
var getById = function(req, res, next) {
  Post.findOne({
    _id: req.params.id
  }, function(err, results) {
    if (err)
      return next(err);

    res.send(results);
  });
};

/* get post by category */
var getByCategory = function(req, res, next) {
  Post.find({
    category: req.params.categoryId
  })
    .sort({
      date: -1
    })
    .exec(function(err, results) {
      if (err)
        return next(err);

      res.send(results);
    });
};

/* get post by page */
var getByPage = function(req, res, next) {
  var pageNumber = req.body.pageNumber;
  var pageCount = req.body.count;
  var categoryId = req.body.categoryId;

  if (categoryId) {
    Post
      .find({
        category: categoryId
      })
      .sort({
        date: -1
      })
      .skip((pageNumber - 1) * pageCount)
      .limit(pageCount)
      .exec(function(err, posts) {
        if (err)
          return next(err);

        res.send(posts);
      });
  } else {
    Post
      .find({})
      .sort({
        date: -1
      })
      .skip((pageNumber - 1) * pageCount)
      .limit(pageCount)
      .exec(function(err, posts) {
        if (err)
          return next(err);

        res.send(posts);
      });
  }
};

/* add new */
var add = function(req, res, next) {
  Post.create(req.body, function(err, result) {
    if (err)
      return next(err);

    res.send(result);
  });
};

/* remove */
var remove = function(req, res, next) {
  Post.remove({
    _id: req.params.id
  }, function(err) {
    if (err)
      return next(err);

    res.send(200);
  });
};

/* edit */
var edit = function(req, res, next) {
  Post.update({
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
  count: count,
  getById: getById,
  getByCategory: getByCategory,
  getByPage: getByPage,
  add: add,
  remove: remove,
  edit: edit
};