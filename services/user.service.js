const User = require('../models/user.model');

exports.getUsers = async (query, page, limit) => {
  try {
    const usersData = await User.findAll(query);
    return usersData;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
