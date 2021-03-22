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
exports.updateUser = async (req, res, next) => {
  // Validate Request Parameters/Queries

  const userId = req.params.id;
  if (req.body.name || req.body.email || req.body.password || req.body.role_id) {
    const updatedData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role_id: req.body.role_id
    }
    try {
      const user = await UserService.updateUser({ ...updatedData }, userId);
      return res.status(200).json({
        status: 200,
        data: user,
        message: 'Successfully Updates User.',
      });
    } catch (err) {
      return res.status(400).json({ status: 400, message: err.message });
    }
  } 
  else {
    res.status(400).json({ status: 400, message: 'Employee Not Found' });
  };
};
