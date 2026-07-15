const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

/**
 * @route POST /api/auth/register
 * @description register user using credentials and generate token
 */
router.post('/register',authController.registerUser);



/**
 * @route POST /api/auth/login
 * @description login user using credentials and generate token
 */
router.post('/login',authController.loginUser);

/**
 * @route GET /api/auth/get-me
 * @description Get the authenticated user's profile using the JWT token
 * @access Private
 */
router.get('/get-me',authMiddleware.authUser,authController.getMe);

/**
 * @route GET /api/auth/logout
 * @description Logout the authenticated user by blacklisting the JWT token in Redis
 * @access Private
 */
router.get('/logout',authController.logoutUser);


module.exports = router;