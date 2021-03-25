const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('dashboard/customers', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

router.get('/:id', (req, res) => {
  res.render('dashboard/customer-details', { layout: 'dashboard' });
});

module.exports = router;
