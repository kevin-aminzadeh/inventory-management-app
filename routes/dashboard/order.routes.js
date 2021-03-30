const router = require('express').Router();
const orderService = require('../../services/order.service');
const productService = require('../../services/product.service');
const userService = require('../../services/user.service');

router.get('/', async (req, res) => {
  const orders = await orderService.getAllOrders();
  const products = await productService.getProducts();
  const customers = await userService.getCustomers();

  console.log(customers);

  res.render('dashboard/orders', {
    layout: 'dashboard',
    currentRoute: req.baseUrl,
    data: orders,
    count: orders.length,
    products,
    customers,
    text: 'Orders',
  });
});

router.get('/:id', async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  console.log(order);
  res.render('dashboard/order-details', { layout: 'dashboard', order });
});

router.post('/new', async (req, res) => {
  console.log('New Order!');
});

module.exports = router;
