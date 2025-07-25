const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Create a new user
 */
router.post('/register', register);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user & return JWT
 */
router.post('/login', login);

module.exports = router;
