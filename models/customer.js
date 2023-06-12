"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    static associate(models) {
      // many to many rating
      customer.belongsToMany(models.product, {
        through: "ratings",
        foreignKey: "customer_id",
        otherKey: "product_id",
      });

      //one to one
      customer.hasOne(models.cart, {
        foreignKey: "customer_id",
      });

      //one to many
      customer.hasMany(models.customer_address, {
        foreignKey: "customer_id",
      });

      //one to many
      // customer.hasMany(models.product_cart, {
      //   foreignKey: "customer_id",
      // });
      //one to many
      customer.hasMany(models.product_order, {
        foreignKey: "customer_id",
      });
    }
  }
  customer.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      dob: DataTypes.ENUM('male','female','others'),
      email: DataTypes.STRING,
      phoneNo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "customer",
    }
  );
  return customer;
};
