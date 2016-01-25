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
router.put('/', userService.checkLogin, userService.edit);

/* login */
router.post('/login', userService.login);

/* logout */
router.get('/logout', userService.checkLogin, userService.logout);

/* resend code */
router.post('/active/resend', userService.checkLogin, userService.resendCode);

/* active */
router.post('/active', userService.checkLogin, userService.active);

module.exports = router;