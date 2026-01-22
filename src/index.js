// src/index.js

const express = require('express');
const postRouter = require('./routes/posts.routes');

const app = express();

app.use(express.json());

// Mount the posts router
app.use('/api/v1/posts', postRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
