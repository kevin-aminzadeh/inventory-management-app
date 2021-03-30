const OrderService = require('../services/order.service');

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await OrderService.getAllOrders();
    return res.status(200).json({
      status: 200,
      data: orders,
      message: 'Successfully Retrieved Orders.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    return res.status(200).json({
      status: 200,
      data: order,
      message: 'Successfully Retrieved Order',
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

exports.addOrder = async (req, res, next) => {
  try {
    const products = await OrderService.addOrder(req.body);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Added Order.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const products = await OrderService.deleteOrder(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Removed Order.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const products = await OrderService.updateOrder(req.body, req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Added Order.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
