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
exports.updateUser = async (query, userId) => {
  try {
    const userData = await User.findByPk(userId);
    if(userData){
      try{
        User.update(query,{
          where: {id: `${userId}`},
        });
      }catch(err){
        throw Error(err);
      };
    };
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
