'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return Promise.all([
    queryInterface.removeColumn("orders", "address_id"),
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn("orders", "address_id", {
      allowNull: true,
      type: Sequelize.STRING,
    });
  }
};
