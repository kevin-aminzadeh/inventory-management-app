const { ProductModel, ProductItemModel } = require('../models/index');

exports.AddProductItem = async (data) => {
  try {
    const products = await ProductItemModel.create(data);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
