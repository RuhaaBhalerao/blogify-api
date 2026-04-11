const postService = require('../services/posts.service');

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json({
      success: true,
      data: posts
    });
  }
  catch (error) {
    next(error);
  };

};

const getPostById = async (req, res, next) => {
  try {
    const post = await postService.getPostById(req.params.id);  
    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    next(error);
  } 

};

const createPost = async (req, res, next) => {
  try {
    const newPost = await postService.createPost(req.body);

    res.status(201).json({
      success: true,
      data: newPost
    });

  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const postId=req.params.id;
    const updatedPost = await postService.updatePost(postId, req.body); 
    if(!updatedPost){
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.status(200).json({    
      success: true,
      data: updatedPost
    });
  }
  catch (error) {
    next(error);
  }
};
const deletePost = async (req, res, next) => {
  try {
    const postId=req.params.id;
    const deletedPost = await postService.deletePost(postId); 
    if(!deletedPost){
      return res.status(404).json({
        success: false, 
        message: 'Post not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });
  }
  catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};