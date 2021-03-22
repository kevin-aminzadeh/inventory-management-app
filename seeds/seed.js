const sequelize = require('../config/connection');
const {
  UserModel,
  RoleModel,
  BrandModel,
  CategoryModel,
  ProductModel,
} = require('../models');

const userData = require('./userData.json');
const roleData = require('./roleData.json');
const brandData = require('./brandData.json');
const categoryData = require('./categoryData.json');
const productData = require('./productData.json');

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

  // Seed the brand table
  await BrandModel.bulkCreate(brandData, {
    individualHooks: true,
    returning: true,
  });

  // Seed the Category table
  await CategoryModel.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  await ProductModel.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
