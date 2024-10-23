const express = require('express');
const { check } = require('express-validator');
const { registerUser } = require('../controllers/authController');

const router = express.Router();

// Register new user
router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    ],
    registerUser
);

module.exports = router;