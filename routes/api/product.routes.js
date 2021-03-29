const router = require('express').Router();
const ProductController = require('../../controllers/product.controller');


router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProducts);
router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProduct);
router.patch('/:id', ProductController.updateProduct)


module.exports = router;
