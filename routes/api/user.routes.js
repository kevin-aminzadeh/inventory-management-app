const router = require('express').Router();
const UserController = require('../../controllers/user.controller');

router.get('/', UserController.getUsers);

module.exports = router;
