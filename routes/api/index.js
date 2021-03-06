const router = require('express').Router();

// Initialize API Child Routes
const productRoutes = require('./product.routes');
const authRoutes = require('./auth/auth.routes');
const userRoutes = require('./user.routes');
const brandRoutes = require('./brand.routes');
const categoryRoutes = require('./category.routes');
const orderRoutes = require('./order.routes');

// Configure API Child Routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/brands', brandRoutes);
router.use('/category', categoryRoutes);
router.use('/order', orderRoutes);

module.exports = router;
