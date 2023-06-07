"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer_address extends Model {
    static associate(models) {
      //one to many
      customer_address.belongsTo(models.customer, {
        foreignKey: "customer_id",
      });
      //one to many
      customer_address.hasMany(models.order,{
        foreignKey:"address_id"
      });
    }
  }
  customer_address.init(
    {
      customer_id: DataTypes.INTEGER,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      pincode: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNo: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "customer_address",
    }
  );
  return customer_address;
};
