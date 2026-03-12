const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

router.post('/posts', postsController.createPost);
router.get('/posts', postsController.getAllPosts);
router.get('/posts/:id', postsController.getPostById);
router.patch('/posts/:id', postsController.updatePost);
router.delete('/posts/:id', postsController.deletePost);

module.exports = router;