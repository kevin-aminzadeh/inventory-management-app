const router = require('express').Router();
const ProductController = require('../../controllers/product.controller');
const ProductItemController = require('../../controllers');

router.get('/', ProductController.getProduct);
router.get('/:id', ProductController.getProductById);
router.put('/', ProductController.AddProduct);

module.exports = router;
