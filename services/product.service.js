const { Product, Item } = require('../models/index');

exports.getProducts = async () => {
  try {
    const products = await Product.findAll({
      include: {
        model: Item,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.getProductById = async (id) => {
  try {
    const products = await Product.findByPk(id, {
      include: {
        model: Item,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.addProduct = async (body) => {
  try {
    const products = await Product.create(body);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.deleteProduct = async (param) => {
  try {
    const products = await Product.destroy({
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
