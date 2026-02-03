import express from 'express';
const app = express();
const PORT = 3000;

// Update this route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API! This is the main entry point.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});