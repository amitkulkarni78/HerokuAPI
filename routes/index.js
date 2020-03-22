const express = require('express');
const router = express.Router();
const auth = require('./auth.routes');
const authController = require('../controllers/auth.controller');

router.get('/token',authController.getToken);

module.exports = router;
