const router = require('express').Router();

// Initialize Shop Child Routes

// Configure Shop Child Routes
router.get('/', (req, res) => {
  // res.render('shop/home');
  res.render('dashboard/login');
});

module.exports = router;
