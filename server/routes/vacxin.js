var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');
var vacxinService = require('../services/vacxin.service');

/* get all lich tiem chung */
router.get('/', vacxinService.getAll);

/* add lich tiem chung */
router.post('/', userService.checkAdmin, vacxinService.add);

/* remove lich tiem chung */
router.delete('/:id', userService.checkAdmin, vacxinService.remove);

/* edit lich tiem chung */
router.put('/', userService.checkAdmin, vacxinService.edit);

module.exports = router;