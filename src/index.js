require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const { requestLogger, errorHandler } = require('./middleware');
const mainRouter = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the Blogify API!' });
});

app.use('/api/v1', mainRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});