const router = require('express').Router({ mergeParams: true });

// Initialize Dashboard Child Routes
const productRoutes = require('./product.routes');
const orderRoutes = require('./order.routes');
const customerRoutes = require('./customer.routes');
const settingsRoutes = require('./settings.routes');
const { User } = require('../../models');

// Configure Dashboard Child Routes
router.get('/', (req, res) => {
  res.render('dashboard/home', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
  });
});

// Login Route
router.get('/login', (req, res) => {
  res.render('dashboard/login', {
    layout: false,
  });
});

router.post('/login', async (req, res) => {
  try{
    const userData = await User.findOne({where: {email: req.body.email} });

    if(!userData) {
      res.status(400)
      .json({message: 'Incorrect email or password, please try again'});
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
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
