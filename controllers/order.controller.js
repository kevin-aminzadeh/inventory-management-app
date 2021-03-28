const OrderService = require('../services/Order.service');

exports.getAllOrders = async (req, res, next) => {
  try {
    const products = await OrderService.searchOrders(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved Order.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.searchOrder = async (req, res, next) => {
  try {
    const products = await OrderService.searchOrder(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved Order.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};


