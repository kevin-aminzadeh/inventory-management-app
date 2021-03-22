const router = require('express').Router();

// Initialize Dashboard Child Routes

// Configure Dashboard Child Routes
router.get('/', (req, res) => {
  res.render('dashboard/home', { layout: 'dashboard' });
});

module.exports = router;
