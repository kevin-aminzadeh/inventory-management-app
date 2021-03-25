const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('dashboard/orders', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

router.get('/:id', (req, res) => {
  res.render('dashboard/order-details', { layout: 'dashboard' });
});

module.exports = router;
