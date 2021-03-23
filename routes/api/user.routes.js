const router = require('express').Router();
const UserController = require('../../services/user.service');
const { updateUsers } = require('../../services/user.service');


router.get('/', UserController.getUsers);
router.get('/search/',UserController.getUser);
router.put('/:id',UserController.updateUser);
module.exports = router;
