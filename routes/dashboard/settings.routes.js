const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  res.render('dashboard/settings', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

module.exports = router;
