const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductItem extends Model {}
ProductItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    itemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    serialNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateDeleted: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'productItem',
  }
);
module.exports = ProductItem;
