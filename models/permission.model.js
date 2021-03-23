const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Permission extends Model {}

Permission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'resource',
        key: 'id',
      },
    },
        operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'operation',
        key: 'id',
      },

  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'permission',
  }
);

module.exports = Permission;
