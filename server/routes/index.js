var express = require('express');
var router = express.Router();
var categoryService = require('../services/categories.service');
var userService = require('../services/users.service');
var resources = require('../configs/resources');

var renderIndex = function(req, res, next) {
  categoryService.count(function(categories) {
    resources.getJsFiles(function(files) {
      res.render('index', {
        categories: categories,
        files: files
      });
    });
  });
};

var renderProfile = function(req, res, next) {
  resources.getJsFiles(function(files) {
    res.render('profile', {
      files: files
    });
  });
};

var renderAdmin = function(req, res, next) {
  resources.getJsFiles(function(files) {
    res.render('admin', {
      files: files
    });
  });
};

/* GET home page. */
router.get('/', renderIndex);

/* GET profile page. */
router.get('/edit', renderProfile);

/* GET admin page. */
router.get('/admin', userService.checkAdmin, renderAdmin);

module.exports = router;