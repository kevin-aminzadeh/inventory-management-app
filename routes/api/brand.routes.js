const router = require('express').Router();
const BrandController = require('../../controllers/brand.controller');

router.get('/:id',  BrandController.searchBrand);

module.exports = router;
