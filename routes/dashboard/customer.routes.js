const router = require('express').Router();
const customer = require('../../services/user.service');

router.get('/', async (req, res) => {
  const x = await customer.getCustomers();
 console.log(x);
  res.render('dashboard/customers', {
    customers: x.rows,
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

router.get('/:id', (req, res) => {
  res.render('dashboard/customer-details', { layout: 'dashboard' });
});

module.exports = router;
