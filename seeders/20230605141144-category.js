"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Musical Instruments",
          discription: "Musical Instruments",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name: "Cell Phones & Accessories",
          discription: "Cell Phones & Accessories",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name: "Collectibles & Fine Art",
          discription: "Collectibles & Fine Art",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name: "Movies & TV",
          discription: "Movies & TV",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name: "Clothing, Shoes and Jewelry",
          discription: "Clothing, Shoes and Jewelry",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name: "Beauty & Personal Care ",
          discription: "Beauty & Personal Care",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name: "Books",
          discription: "Books",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name: "	Electronics ",
          discription: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
