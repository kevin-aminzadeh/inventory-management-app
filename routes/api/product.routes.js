const router = require('express').Router();
const ProductController = require('../../controllers/product.controller');


router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProducts);
router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProduct);
router.patch('/:id', ProductController.updateProduct);

router.get('/category/:category', ProductController.getProductByCategory);
router.get('/name/:name', ProductController.getProductByName);
router.get('/brand/:brand', ProductController.getProductByBrand);

module.exports = router;
