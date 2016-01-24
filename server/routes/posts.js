var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');
var postService = require('../services/posts.service');

/* get all posts */
router.get('/', userService.checkLogin, postService.getAll);

/* get all posts */
router.post('/count', postService.count);

/* get post by id */
router.get('/id/:id', postService.getById);

/* get post by page */
router.post('/getbypage', postService.getByPage);

/* get post by category */
router.get('/category/:categoryId', userService.checkAdmin, postService.getByCategory);

/* add post */
router.post('/', userService.checkAdmin, postService.add);

/* remove post */
router.delete('/:id', userService.checkAdmin, postService.remove);

/* edit post */
router.put('/', userService.checkAdmin, postService.edit);

module.exports = router;