const router = require('express').Router();
const CategoryController = require('../../controllers/category.controller');

router.get('/:id',  CategoryController.searchCategory);
router.get('/', CategoryController.listAllCategory)
router.post("/",CategoryController.addCategory)
router.delete('/:id', CategoryController.removeCategory)
module.exports = router;
