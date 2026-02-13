const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

const userController = require('../controllers/user.controller');
router.use((req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.originalUrl}`);
  next();
});

const registrationValidationRules = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
];

router.get('/', (req, res) => {
  res.json({ message: 'User routes are working!' });
});

router.post('/register', registrationValidationRules, userController.registerUser);

module.exports = router;