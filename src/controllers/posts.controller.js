export const getAllPosts = (req, res) => {
  const { sortBy } = req.query;

  let posts = [
    { id: 2, title: 'My Second Post', date: '2023-10-26' },
    { id: 1, title: 'My First Post', date: '2023-10-25' }
  ];

  if (sortBy === 'date') {
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  res.status(200).json({
    success: true,
    data: {
      posts: posts
    }
  });
};

export const getPostById = (req, res) => {
  const { postId } = req.params;

  res.status(200).json({
    success: true,
    data: {
      postId: postId
    }
  });
};