require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const { requestLogger, errorHandler } = require('./middleware');
const mainRouter = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Blogify API!' });
});

// API routes
app.use('/api/v1', mainRouter);

// global error handler
app.use(errorHandler);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});