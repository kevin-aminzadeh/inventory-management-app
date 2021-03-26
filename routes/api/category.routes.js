const router = require('express').Router();
const CategoryController = require('../../controllers/category.controller');

router.get('/:id', CategoryController.searchCategory);
router.post('/', CategoryController.addCategory)
router.delete('/:id',CategoryController.deleteCategory)

module.exports = router;
