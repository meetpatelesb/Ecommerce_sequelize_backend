"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    static associate(models) {
      //  one to one

      cart.belongsTo(models.customer, {
        foreignKey: "customer_id",
      });

      //many to many rating
      cart.belongsToMany(models.product, {
        through: "product_carts",
        foreignKey: "cart_id",
        otherKey: "product_id",
      });
    }
  }
  cart.init(
    {
      customer_id: DataTypes.INTEGER,
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cart",
    }
  );
  return cart;
};
