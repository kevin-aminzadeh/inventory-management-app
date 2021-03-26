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

exports.addBrand = async (param) => {
  try {
    const products = await Brand.create(param);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.deleteBrand = async (param) => {
  try {
    const products = await Brand.destroy({
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