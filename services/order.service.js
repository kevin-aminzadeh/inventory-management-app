const {
  Product,
  Brand,
  Item,
  Order,
  OrderItem,
  OrderStatus,
} = require('../models/index');

exports.getAllOrders = async () => {
  try {
    const products = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: Product,
          required: true,
        },
        {
          model: OrderStatus,
        },
      ],
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
exports.searchOrder = async (params) => {
  try {
    const products = await Order.findByPk(params, {
      include: [
        {
          model: OrderItem,
          include: Product,
          required: true,
        },
        {
          model: OrderStatus,
        },
      ],
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.addOrder = async (param) => {
  try {
    const products = await Order.create(param);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.deleteOrder = async (param) => {
  try {
    const products = await Order.destroy({
      where: {
        id: param,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.updateOrder = async (param, data) => {
  try {
    const products = await Order.update(param, {
      where: {
        id: data,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
