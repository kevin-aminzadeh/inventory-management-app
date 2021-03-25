const { ProductModel, CategoryModel } = require('../models/index');

exports.searchCategory = async (param) => {
  try {
    const products = await CategoryModel.findAll({
      where: {
        name: param,
      },
      include: {
        model: ProductModel,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.listAllCategory = async (param) => {
  try {
    const products = await CategoryModel.findAll({
      include: {
        model: ProductModel,
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
    const products = await CategoryModel.create(param);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.removeCategory = async (param) => {
  try {
    const products = await CategoryModel.destroy({
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
