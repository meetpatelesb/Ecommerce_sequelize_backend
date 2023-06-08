"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_sellers",
      [
        {
          product_id: 11,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 13,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 14,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 12,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 15,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 16,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 17,
          seller_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 18,
          seller_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 19,
          seller_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 20,
          seller_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 21,
          seller_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 18,
          seller_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 20,
          seller_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 19,
          seller_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 16,
          seller_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 12,
          seller_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 19,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 21,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 11,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_sellers", null, {});
  },
};
