// src/index.js

import express from 'express';
import postRoutes from './routes/posts.routes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// ✅ IMPORT ROUTES

// Base route
app.get('/', (req, res) => {
  res.send('Welcome!');
});

// Test route
app.post('/api/v1/test', (req, res) => {
  console.log('Request Body Received:', req.body);
  res.status(200).json({
    message: 'Data received successfully!',
    yourData: req.body
  });
});

// ✅ MOUNT ROUTES
app.use('/api/v1', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});