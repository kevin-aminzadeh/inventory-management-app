const router = require('express').Router();
const ProductItemController = require('../../controllers/productItem.controller')

router.put('/', ProductItemController.AddProductItem);

module.exports = router;
