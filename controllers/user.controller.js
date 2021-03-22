const UserService = require('../services/user.service');

exports.getUsers = async (req, res, next) => {
  // Validate Request Parameters/Queries

  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;

  try {
    const users = await UserService.getUsers({}, page, limit);
    return res.status(200).json({
      status: 200,
      data: users,
      message: 'Successfully Retrieved Users.',
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
