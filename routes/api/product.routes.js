const router = require('express').Router();
const ProductController = require('../../controllers/product.controller');

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProducts);

module.exports = router;
