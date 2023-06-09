"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("product_carts", "product_image", {
      allowNull: true,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_carts", "name", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_carts", "discription", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("product_carts", "product_image"),
      queryInterface.removeColumn("product_carts", "name"),
      queryInterface.removeColumn("product_carts", "discription"),
    ]);
  },
};
