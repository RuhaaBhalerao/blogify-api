// src/routes/posts.routes.js

import express from 'express';
import { getAllPosts, getPostById } from '../controllers/posts.controller.js';

const router = express.Router();

// GET /api/v1/posts
router.get('/posts', getAllPosts);

// GET /api/v1/posts/:postId
router.get('/posts/:postId', getPostById);

// Test route
router.post('/posts/test-body', (req, res) => {
  console.log('Received body:', req.body);
  res.status(200).json({ status: 'success', received: req.body });
});

export default router;