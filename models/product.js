"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // //many to one

      // product.belongsTo(models.category, { foreignKey: "category_id" });

      //many to many

      product.belongsToMany(models.category, {
        through: "product_categories",
        foreignKey: "product_id",
        otherKey: "category_id",
      });

      //many to many
      product.belongsToMany(models.seller, {
        through: "product_sellers",
        foreignKey: "product_id",
        otherKey: "seller_id",
      });

      //many to many rating
      product.belongsToMany(models.customer, {
        through: "ratings",
        foreignKey: "product_id",
        otherKey: "customer_id",
      });

      //many to many 
      product.belongsToMany(models.cart, {
        through: "product_carts",
        foreignKey: "product_id",
        otherKey: "cart_id",
      });

      // //many to many
      // product.belongsToMany(models.order, {
      //   through: "product_orders",
      //   foreignKey: "product_id",
      //   otherKey: "cart_id",
      // });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      discription: DataTypes.STRING,
      price: DataTypes.STRING,
      // category_id: DataTypes.INTEGER,
      delete_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
