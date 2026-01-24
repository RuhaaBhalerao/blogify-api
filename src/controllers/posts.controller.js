export const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Fetching all posts"
  });
};

export const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: `You requested data for post ID: ${postId}`
  });
};
