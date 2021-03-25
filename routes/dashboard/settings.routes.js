const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('dashboard/settings', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

module.exports = router;
