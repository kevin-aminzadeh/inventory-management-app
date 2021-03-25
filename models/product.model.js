const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryID: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id',
        onDelete: 'SET DEFAULT',
        
      },
    },
    costPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    brandID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brand',
        key: 'id',
      },
    },
    salePrice: {
      type: DataTypes.FLOAT,
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
    dateUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'product',
  }
);
module.exports = Product;
