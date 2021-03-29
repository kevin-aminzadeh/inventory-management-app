const ProductService = require('../services/product.service');

exports.getProducts = async (req, res, next) => {
  try {
    let products;
    switch (req.params.id) {
      case true:
        products = await ProductService.getProductById(req.params.id);
        return res.status(200).json({
          status: 200,
          data: products,
          message: 'Successfully Retrieved products.',
        });
      default:
        products = await ProductService.getProducts();
        return res.status(200).json({
          status: 200,
          data: products,
          message: 'Successfully Retrieved product.',
        });
    }
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.addProduct = async (req, res, next) => {
  try {
    const products = await ProductController.addProduct(req.body);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully added product.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const products = await ProductController.deleteProduct(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved product.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const products = await ProductController.updateProduct(
      req.body,
      req.params.id
    );
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Updated Product.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
