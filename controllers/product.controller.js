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
