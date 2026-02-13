const express = require('express');
const router = express.Router();

const userRoutes = require('./users.routes');
const postRoutes = require('./posts.routes');

router.get('/about', (req, res) => {
  res.send({ message: 'Welcome to the Blogify API!' });
});

router.get('/error-test', (req, res) => {
    throw new Error('This is a test error!');
});

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;    