const CategoryService = require('../services/category.service');

exports.searchCategory = async (req, res, next) => {
  try {
    const products = await CategoryService.searchCategory(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Retrieved category.',
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
      message: 'Successfully Retrieved category.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const products = await CategoryService.deleteCategory(req.params.id);
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully removed category.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const products = await CategoryService.updateCategory(
      req.body,
      req.params.id
    );
    return res.status(200).json({
      status: 200,
      data: products,
      message: 'Successfully Updated Category.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
