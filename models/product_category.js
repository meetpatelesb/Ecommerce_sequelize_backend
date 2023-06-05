"use strict";
const { Model } = require("sequelize");
const category = require("./category");
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    static associate(models) {}
  }
  product_category.init(
    {
      product_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_category",
    }
  );
  return product_category;
};
