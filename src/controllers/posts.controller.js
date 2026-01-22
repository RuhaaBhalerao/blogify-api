// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  res.status(200).json({
    message: 'Route handled by postController.getAllPosts',
  });
};

module.exports = { getAllPosts };
