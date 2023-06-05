'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // one to many
      // category.hasMany(models.product, {
      //   foreignKey: "category_id",
      // });


      // many to many
      category.belongsToMany(models.product, {
        through: "product_categories",
        foreignKey: "category_id",
        otherKey: "product_id",
      });


    }
  }
  category.init(
    {
      name: DataTypes.STRING,
      discription: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};