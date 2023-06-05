'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
   
    static associate(models) {
     
    }
  }
  rating.init(
    {
      customer_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      rating_description: DataTypes.STRING,
      deletedAt:DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "rating",
    }
  );
  return rating;
};