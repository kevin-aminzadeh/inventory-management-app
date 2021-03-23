const UserModel = require('./user.model');
const RoleModel = require('./role.model');
const PermissionModel = require('./permission.model');
const ResourceModel = require('./resource.model');
const ResourcePermissionModel = require('./resourcePermission.model');

const RolePermissionModel = require('./rolePermission.model');

// const ProductModel = require('./product.model');

// Define User and Role Model Relationship
UserModel.belongsTo(RoleModel, {
  foreignKey: 'role_id',
});

RoleModel.hasMany(UserModel, {
  foreignKey: 'role_id',
});

// Define Role and RolePermission Model Relationship

RolePermissionModel.belongsTo(RoleModel, {
  foreignKey: 'role_id',
});

RoleModel.hasMany(RolePermissionModel, {
  foreignKey: 'role_id',
});

// Define Permission and RolePermission Model Relationship

RolePermissionModel.belongsTo(PermissionModel, {
  foreignKey: 'permission_id',
});

PermissionModel.hasMany(RolePermissionModel, {
  foreignKey: 'permission_id',
});

// Define Permission and ResourcePermission Model Relationship
ResourcePermissionModel.belongsTo(PermissionModel, {
  foreignKey: 'permission_id',
});

PermissionModel.hasMany(ResourcePermissionModel, {
  foreignKey: 'permission_id',
});

// Define Resource and ResourcePermission Model Relationship
ResourcePermissionModel.belongsTo(ResourceModel, {
  foreignKey: 'resource_id',
});

ResourceModel.hasMany(ResourcePermissionModel, {
  foreignKey: 'resource_id',
});

module.exports = {
  UserModel,
  RoleModel,
  PermissionModel,
  ResourceModel,
  RolePermissionModel,
  ResourcePermissionModel,
};
