const User = require('./User.model');
const Role = require('./Role.model');
const Product = require('./Product.model');
const Item = require('./Item.model');
const Brand = require('./Brand.model');
const Category = require('./Category.model');

// Describe Category and Product Relationship
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Describe Brand and Product Relationship
Brand.hasMany(Product, {
  foreignKey: 'brand_id',
  onDelete: 'SET NULL',
});

Product.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

// Describe Product and Item Relationship
Product.hasMany(Item, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Item.belongsTo(Product, {
  foreignKey: 'product_id',
});

module.exports = {
  User,
  Role,
  Product,
  Item,
  Brand,
  Category,
};
