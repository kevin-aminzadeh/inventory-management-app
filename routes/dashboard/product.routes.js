const router = require('express').Router();
const ProductService = require('../../services/product.service');

router.get('/', async (req, res) => {
  const x = await ProductService.getProducts();
  console.log(x);
  res.render('dashboard/products', {
    Products: x.rows,
    count: x,
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

router.get('/:id', (req, res) => {
  res.render('dashboard/product-details', { layout: 'dashboard' });
});

module.exports = router;
