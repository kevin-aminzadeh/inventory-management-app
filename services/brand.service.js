const { ProductModel, ProductItemModel, BrandModel } = require('../models/index');

exports.searchBrands = async (param) => {
  try {
    const products = await BrandModel.findAll({
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
