var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');
var categoryService = require('../services/categories.service');

/* get all categories */
router.get('/', categoryService.getAll);

/* add category */
router.post('/', userService.checkAdmin, categoryService.add);

/* remove category */
router.delete('/:id', userService.checkAdmin, categoryService.remove);

/* edit category */
router.put('/', userService.checkAdmin, categoryService.edit);

module.exports = router;