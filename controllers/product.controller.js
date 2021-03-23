const ProductController = require('../services/product.service');

exports.getProduct = async (req, res, next) => {
  try {
    const products = await ProductController.getProducts();
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved products.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const products = await ProductController.getProductById(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved product.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
