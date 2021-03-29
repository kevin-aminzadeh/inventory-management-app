const { User } = require('../models/index.js');

exports.getUsers = async (query, page, limit) => {
  try {
    const usersData = await User.findAll(query);
    return usersData;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
exports.getUser = async (req, res) => {
  try {
    if (req.body.name) {
      const userData = await User.findAll({
        where: { name: req.body.name },
      });
      res.json(userData);
    } else {
      const userData = await User.findAll({
        where: { email: req.body.email },
      });
      res.json(userData);
    }
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.updateUser = async (query, userId) => {
  try {
    const userData = await User.findByPk(userId);
    if (userData) {
      try {
        User.update(query, {
          where: { id: `${userId}` },
        });
      } catch (err) {
        throw Error(err);
      }
    }
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.getCustomers = async () => {
  try {
    const userData = await User.findAndCountAll({
      raw: true,
      where: { role_id: 4 },
      attributes: { exclude: ['password'] }
    });
    delete userData.password;
    return userData;
  } catch (err) {
    throw Error(err);
  }
};
