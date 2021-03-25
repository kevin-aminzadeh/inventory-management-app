const CategoryService = require('../services/category.service');

exports.searchCategory = async (req, res, next) => {
  try {
    const products = await CategoryService.searchCategory(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved Category.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.listAllCategory = async (req, res, next) => {
  try {
    const products = await CategoryService.listAllCategory(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved product.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.addCategory = async (req, res, next) => {
  try {
    const products = await CategoryService.addCategory(req.body);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Created Category.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.removeCategory = async (req, res, next) => {
  try {
    const products = await CategoryService.removeCategory(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Removed Category.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};