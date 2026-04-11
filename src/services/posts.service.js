const Post = require('../models/post.model');

const getAllPosts = async () => {
  return await Post.find({});
};

const getPostById = async (id) => {
  return await Post.findById(id);
};

const createPost = async (postData) => {
  return await Post.create(postData);
};

const updatePost = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, { new: true });
};

const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};