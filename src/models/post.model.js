const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  isPublished: Boolean,

  blog_title: String,
  blog_content: String,
  author_name: String,
  publish_date: Date,
  views: Number,
  comments: Number,
  rating: Number
});

module.exports = mongoose.model('Post', postSchema, 'post');