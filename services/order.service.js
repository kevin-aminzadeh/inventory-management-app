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
    const createOrder = await Order.create({
      order_total: param.order_total,
      customer_id: param.customer_id,
    });
    const orderId = createOrder.get({ plain: true }).id;
    param.order_items.forEach((e) => {
      OrderItem.create({
        item_id: e.item_id,
        order_id: orderId,
        product_id: e.product_id,
      });
    });
    console.log(orderId);
  } catch (err) {
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
