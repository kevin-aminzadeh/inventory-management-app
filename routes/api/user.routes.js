const router = require('express').Router();
const UserController = require('../../controllers/user.controller');
const { updateUsers } = require('../../services/user.service');


router.get('/', UserController.getUsers);
router.put('/:id',UserController.updateUser);
module.exports = router;
