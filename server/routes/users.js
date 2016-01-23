var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');

/* get current user. */
router.get('/', userService.getCurrentUser);

/* get all users. */
router.get('/getall', userService.checkAdmin, userService.getAll);

/* get user by id. */
router.get('/getbyid/:id', userService.checkLogin, userService.getById);

/* add new user */
router.post('/', userService.add);

/* remove user */
router.delete('/:id', userService.checkAdmin, userService.remove);

/* edit user */
router.put('/', userService.checkAdmin, userService.edit);

/* login */
router.post('/login', userService.login);

/* logout */
router.get('/logout', userService.checkLogin, userService.logout);

module.exports = router;