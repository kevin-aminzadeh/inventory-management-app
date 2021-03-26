const { Product, Brand } = require('../models/index');

exports.searchBrands = async (param) => {
  try {
    const products = await Brand.findAll({
      where: {
        name: param,
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
