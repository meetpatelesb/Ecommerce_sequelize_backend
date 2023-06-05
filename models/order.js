"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      //one to many
      order.belongsTo(models.customer_address, {
        foreignKey: "address_id",
      });
      //one to many
      order.belongsTo(models.customer, {
        foreignKey: "customer_id",
      });

      //many to many
     order.belongsToMany(models.product_cart, {
       through: "product_orders",
       foreignKey: "order_id",
       otherKey: "product_cart_id",
     });
    }
  }
  order.init(
    {
      customer_id: DataTypes.INTEGER,
      address_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      picode: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNo: DataTypes.STRING,
      email: DataTypes.STRING,
      cancelAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
