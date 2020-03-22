const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const Authenticate = require('../middleware/Authenticate');

router.use('/', Authenticate.authenticateUser);
router.post('/signup', authController.signup);

module.exports = router;