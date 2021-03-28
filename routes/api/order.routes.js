const router = require('express').Router();
const OrderController = require('../../controllers/order.controller');

router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.searchOrder);
router.post('/', OrderController.addOrder);
// router.delete('/:id', OrderController.deleteOrder);
// router.patch('/:id', OrderController.updateOrder);

module.exports = router;
