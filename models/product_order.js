"use strict";
const { Model } = require("sequelize");
const product_cart = require("./product_cart");
module.exports = (sequelize, DataTypes) => {
  class product_order extends Model {
    static associate(models) {
      //one to many
      product_order.belongsTo(models.customer, {
        foreignKey: "customer_id",
      });
    }
  }
  product_order.init(
    {
      customer_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      product_cart_id: DataTypes.INTEGER,
      quentity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_order",
    }
  );
  return product_order;
};
