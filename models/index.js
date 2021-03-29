const User = require('./user.model');
const Role = require('./role.model');
const Product = require('./product.model');
const Item = require('./item.model');
const Brand = require('./brand.model');
const Category = require('./category.model');
const Order = require('./order.model');
const OrderItem = require('./orderItem.model');
const OrderStatus = require('./orderStatus.model');

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

// Describe Item and OrderItem Relationship
OrderItem.belongsTo(Item, {
  foreignKey: 'item_id',
});

Item.hasOne(OrderItem, {
  foreignKey: 'item_id',
});

OrderItem.belongsTo(Product, {
  foreignKey: 'item_id',
});

// Describe Order and OrderItem Relationship
Order.hasMany(OrderItem, {
  foreignKey: 'order_id',
});

OrderItem.belongsTo(Order, {
  foreignKey: 'order_id',
});

// Describe Order and OrderStatus Relationship
Order.belongsTo(OrderStatus, {
  foreignKey: 'status_id',
});

OrderStatus.hasMany(Order, {
  foreignKey: 'status_id',
});

module.exports = {
  User,
  Role,
  Product,
  Item,
  Brand,
  Category,
  Order,
  OrderStatus,
  OrderItem,
};
