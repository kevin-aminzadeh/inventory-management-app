const sequelize = require('../config/connection');
const { UserModel, RoleModel } = require('../models');

const userData = require('./userData.json');
const roleData = require('./roleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed The Role Table
  await RoleModel.bulkCreate(roleData, {
    individualHooks: true,
    returning: true,
  });

  // Seed The User Table
  await UserModel.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
