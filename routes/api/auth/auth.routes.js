const router = require('express').Router();
const AuthController = require('../../../controllers/auth.controller');

router.post('/login', AuthController.authenticateUser);

module.exports = router;
