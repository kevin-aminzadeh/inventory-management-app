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
    const products = await ProductService.addProduct(req.body);
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
    const products = await ProductService.deleteProduct(req.params.id);
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
    const products = await ProductService.updateProduct(
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

exports.getProductByCategory = async (req, res, next) => {
  try {
    const products = await ProductService.getProductByCategory(
      req.params.category
    );
    res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved products by Category.',
    });
  } catch (err) {
     res.status(400).json({ status: 400, message: err.message });
  }
};

exports.getProductByName = async (req, res, next) => {
  try {
    const products = await ProductService.getProductByName(req.params.name);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved products by name.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.getProductByBrand = async (req, res, next) => {
  try {
    const products = await ProductService.getProductByBrand(
      req.params.brand
    );
    res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved products by name.',
    });
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
};