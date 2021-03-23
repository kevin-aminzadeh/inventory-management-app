const router = require('express').Router();

// Initialize API Child Routes
const productRoutes = require('./product.routes')
const authRoutes = require('./auth/auth.routes');
const userRoutes = require('./user.routes');

// Configure API Child Routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/product', productRoutes);

module.exports = router;
