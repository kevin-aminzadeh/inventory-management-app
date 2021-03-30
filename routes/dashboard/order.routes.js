const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  res.render('dashboard/orders', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

router.get('/:id', withAuth, (req, res) => {
  res.render('dashboard/order-details', { layout: 'dashboard' });
});

module.exports = router;
