const { ProductModel, ProductItemModel } = require('../models/index');

exports.getProducts = async () => {
  try {
    const products = await ProductModel.findAll({
      include: {
        model: ProductItemModel,
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
    const products = await ProductModel.findByPk(id, {
      include: {
        model: ProductItemModel,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
exports.AddProduct = async (data) => {
  try {
    const products = await ProductModel.create(data);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
