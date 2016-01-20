var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');
var kidsService = require('../services/kids.service');

/* get all kids */
router.get('/', userService.checkAdmin, kidsService.getAll);

/* add kid */
router.post('/', userService.checkLogin, kidsService.add);

/* remove kid */
router.delete('/:id', userService.checkLogin, kidsService.remove);

/* edit kid */
router.put('/', userService.checkLogin, kidsService.edit);

module.exports = router;
