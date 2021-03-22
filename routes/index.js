// Import Express Router Module
const router = require('express').Router();

// Initialize Routes
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard');
const shopRoutes = require('./shop');

// Configure Top Level Routes
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', shopRoutes);

module.exports = router;
