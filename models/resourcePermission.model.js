const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ResourcePermission extends Model {}

ResourcePermission.init(
  {
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource',
        key: 'id',
      },
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permission',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ResourcePermission',
  }
);

module.exports = ResourcePermission;
