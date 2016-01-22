var express = require('express');
var router = express.Router();
var categoryService = require('../services/categories.service');
var resources = require('../configs/resources');

/* GET home page. */
router.get('/', function(req, res, next) {
  categoryService.count(function(categories) {
    resources.getJsFiles(function(files) {
      console.log(files);
      res.render('index', {
        categories: categories,
        files: files
      });
    });
  });
});

module.exports = router;