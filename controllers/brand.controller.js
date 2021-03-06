const BrandService = require('../services/brand.service');

exports.searchBrand = async (req, res, next) => {
  try {
    const products = await BrandService.searchBrands(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved Brand.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.addBrand = async (req, res, next) => {
  try {
    const products = await BrandService.addBrand(req.body);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved Brand.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteBrand = async (req, res, next) => {
  try {
    const products = await BrandService.deleteBrand(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully removed Brand.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateBrand = async (req, res, next) => {
  try {
    const products = await BrandService.updateBrand(req.body, req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Updated Brand.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};