var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');
var postService = require('../services/posts.service');

/* get all posts */
router.get('/', userService.checkLogin, postService.getAll);

/* get post by id */
router.get('/id/:id', userService.checkLogin, postService.getById);

/* get post by category */
router.get('/category/:categoryId/:from/:to', userService.checkLogin, postService.getByCategory);

/* add post */
router.post('/', userService.checkAdmin, postService.add);

/* remove post */
router.delete('/:id', userService.checkAdmin, postService.remove);

/* edit post */
router.put('/', userService.checkAdmin, postService.edit);

module.exports = router;
