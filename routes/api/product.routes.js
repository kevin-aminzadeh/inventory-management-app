const router = require('express').Router();
const ProductController = require('../../controllers/product.controller');

router.get('/', ProductController.getProduct);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProduct);
router.patch('/:id', ProductController.updateProduct)

module.exports = router;
