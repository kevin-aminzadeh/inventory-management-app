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
