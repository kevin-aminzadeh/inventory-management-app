const router = require('express').Router({ mergeParams: true });

// Initialize Dashboard Child Routes
const productRoutes = require('./product.routes');
const orderRoutes = require('./order.routes');
const customerRoutes = require('./customer.routes');
const settingsRoutes = require('./settings.routes');
const withAuth = require('../../utils/auth');

// Configure Dashboard Child Routes
router.get('/', withAuth, (req, res) => {
  res.render('dashboard/home', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

// Login Route
router.use('/login', (req, res) => {
  res.render('dashboard/login', {
    layout: false,
  });
});

// Product View Routes
router.use('/products', productRoutes);

// Order View Routes
router.use('/orders', orderRoutes);

// Customer View Routes
router.use('/customers', customerRoutes);

// Settings View Routes
router.use('/settings', settingsRoutes);

module.exports = router;
