const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('dashboard/products', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

router.get('/:id', (req, res) => {
  res.render('dashboard/product-details', { layout: 'dashboard' });
});

module.exports = router;
