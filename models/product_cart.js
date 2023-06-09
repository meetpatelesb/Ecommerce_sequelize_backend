"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_cart extends Model {
    static associate(models) {
      //many to many
      product_cart.belongsToMany(models.order, {
        through: "product_orders",
        foreignKey: "product_cart_id",
        otherKey: "order_id",
      });
    }
  }
  product_cart.init(
    {
      cart_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quentity: DataTypes.INTEGER,
      name: DataTypes.STRING,
      discription: DataTypes.STRING,
      product_image: DataTypes.STRING,
      price: DataTypes.INTEGER,
      isOrderComplete: DataTypes.ENUM("yes", "no"),
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "product_cart",
    }
  );
  return product_cart;
};
