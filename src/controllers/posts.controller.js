const posts= [
  {
id: 1,
title: 'First Post',
content: 'This is the content of the first post.',
  },
{id: 2, title: 'Second Post', content: 'This is the content of the second post.', }, ];

exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: posts
  });
};

exports.getPostById = (req, res) => {
  const { postId } = req.params;
  const post = posts.find(p => p.id === parseInt(postId));

  res.status(200).json({
    success: true,
    data: post || null
  });
};