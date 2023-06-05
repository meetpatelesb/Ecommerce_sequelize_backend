'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_seller extends Model {
    
    static associate(models) {
      
    }
  }
  product_seller.init(
    {
      product_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_seller",
    }
  );
  return product_seller;
};