const sequelize = require('../config/connection');
const {
  UserModel,
  RoleModel,
  PermissionModel,
  ResourceModel,
  RolePermissionModel,
  ResourcePermissionModel,
} = require('../models');

const roleData = require('./roleData.json');
const permissionData = require('./permissionData.json');
const resourceData = require('./resourceData.json');
const rolePermissionData = require('./rolePermissionData.json');
const resourcePermissionData = require('./resourcePermissionData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed The Role Table
  await RoleModel.bulkCreate(roleData, {
    individualHooks: true,
    returning: true,
  });

  // Seed The Permission Table
  await PermissionModel.bulkCreate(permissionData, {
    individualHooks: true,
    returning: true,
  });

  // Seed The Resource Table
  await ResourceModel.bulkCreate(resourceData, {
    individualHooks: true,
    returning: true,
  });

  // Seed The RolePermissions Table
  await RolePermissionModel.bulkCreate(rolePermissionData, {
    individualHooks: true,
    returning: true,
  });

  // Seed The ResourcePermission Table
  await ResourcePermissionModel.bulkCreate(resourcePermissionData, {
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
