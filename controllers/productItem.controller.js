const productItemController = require('../services/productItem.service');

exports.getProduct = async (req, res, next) => {
  try {
    const products = await productItemController.getProducts();
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved products.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.AddProductItem = async (req, res, next) => {
  try {
    const products = await productItemController.AddProductItem(req.body);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Added product instance.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
