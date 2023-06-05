"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sellers",
      [
        {
          company: "prisma pvt. ltd.",
          gstNo: "23prpl2023",
          address: "ahmedabad",
          email: "prisma@gmail.com",
          phoneNo: "9632587410",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company: "balaji pvt. ltd.",
          gstNo: "23bapl2023",
          address: "rajkot",
          email: "balaji@gmail.com",
          phoneNo: "9678541223",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company: "shree hari pvt. ltd.",
          gstNo: "23shpl2023",
          address: "atkot",
          email: "shreehari@gmail.com",
          phoneNo: "9645887411",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company: "espark pvt. ltd.",
          gstNo: "23espl2023",
          address: "ahmedabad",
          email: "espark@gmail.com",
          phoneNo: "9632556565",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company: "parle pvt. ltd.",
          gstNo: "23papl2023",
          address: "mumbai",
          email: "parle@gmail.com",
          phoneNo: "9638989410",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
  },
};
