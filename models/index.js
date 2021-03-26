const UserModel = require('./user.model');
const RoleModel = require('./role.model');
const ProductModel = require('./product.model');
const ProductItemModel = require('./productItem.model');
const BrandModel = require('./brand.model');
const CategoryModel = require('./category.model');

ProductItemModel.belongsTo(ProductModel, { foreignKey: 'itemID' });
ProductModel.hasMany(ProductItemModel, { foreignKey: 'itemID' });
BrandModel.hasMany(ProductModel, { foreignKey: 'brandID' });
ProductModel.belongsTo(CategoryModel, {
  foreignKey: 'categoryID',
  onDelete: 'SET DEFAULT',
});
module.exports = {
  UserModel,
  RoleModel,
  ProductModel,
  ProductItemModel,
  BrandModel,
  CategoryModel,
};
