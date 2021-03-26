const sequelize = require('../config/connection');
const { User, Role, Brand, Category, Product, Item } = require('../models');

const userData = require('./userData.json');
const roleData = require('./roleData.json');
const brandData = require('./brandData.json');
const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const itemData = require('./itemData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed The Role Table
  await Role.bulkCreate(roleData, {
    individualHooks: true,
    returning: true,
  });

  // Seed The User Table
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Seed the brand table
  await Brand.bulkCreate(brandData, {
    individualHooks: true,
    returning: true,
  });

  // Seed the category table
  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });
  // Seed the product table
  await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  await Item.bulkCreate(itemData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
