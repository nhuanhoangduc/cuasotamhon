var express = require('express');
var router = express.Router();
var categoryService = require('../services/categories.service');
var resources = require('../configs/resources');

/* GET home page. */
router.get('/', function(req, res, next) {
  categoryService.count(function(categories) {
    resources.getJsFiles(function(files) {
      res.render('index', {
        categories: categories,
        files: files
      });
    });
  });
});

/* GET profile page. */
router.get('/edit', function(req, res, next) {
  resources.getJsFiles(function(files) {
    res.render('profile', {
      files: files
    });
  });
});

module.exports = router;