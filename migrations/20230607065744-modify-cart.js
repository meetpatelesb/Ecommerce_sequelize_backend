'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn("carts", "username", {
    //  allowNull: true,
     type: Sequelize.STRING,
   });
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn("carts", "username")]);
  }
};
