const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controller');

// GET /api/v1/posts - Get all posts
router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);

module.exports = router;