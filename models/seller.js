'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seller extends Model {
   
    static associate(models) {
      // many to many
      seller.belongsToMany(models.product, {
        through: "product_sellers",
        foreignKey: "seller_id",
        otherKey: "product_id",
      });
    }
  }
  seller.init({
  company: DataTypes.STRING,
      gstNo: DataTypes.INTEGER,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'seller',
  });
  return seller;
};