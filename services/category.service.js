const { Product, Category } = require('../models/index');

exports.searchCategory = async (param) => {
  try {
    const products = await Category.findAll({
      where: {
        id: param,
      },
      include: {
        model: Product,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.addCategory = async (param) => {
  try {
    const products = await Category.create(param);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.deleteCategory = async (param) => {
  try {
    const products = await Category.destroy({
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
