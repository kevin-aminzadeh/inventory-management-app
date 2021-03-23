const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PermissionOperation extends Model {}

PermissionOperation.init(
  {
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permission',
        key: 'id',
      },
    },
    operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'operation',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'permissionOperation',
  }
);

module.exports = PermissionOperation;
