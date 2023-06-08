"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_categories",
      [
        {
          product_id: 11,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 12,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 13,
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 14,
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 15,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 16,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 17,
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 18,
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 19,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 20,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 21,
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 17,
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 18,
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 19,
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 20,
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 21,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 21,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
