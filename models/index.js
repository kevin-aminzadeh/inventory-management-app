const UserModel = require('./User.model');
const RoleModel = require('./Role.model');
const ProductModel = require('./Product.model');
const Item = require('./Item.model');
const BrandModel = require('./Brand.model');
const CategoryModel = require('./Category.model');

Item.belongsTo(ProductModel, { foreignKey: 'itemID' });
ProductModel.hasMany(Item, { foreignKey: 'itemID' });
BrandModel.hasMany(ProductModel, { foreignKey: 'brandID' });

module.exports = {
  UserModel,
  RoleModel,
  ProductModel,
  Item,
  BrandModel,
  CategoryModel,
};
