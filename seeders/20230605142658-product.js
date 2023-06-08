"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Guitar ATZ",
          discription: "Guitar ATZ",
          price: "20000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218691133.png",
        },
        {
          name: "Drums AA",
          discription: "Drums AA",
          price: "82000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218691163.png",
        },
        {
          name: "400 days book",
          discription: "book by chetan bhagat",
          price: "499",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218509911.png",
        },
        {
          name: "One Indian Girl",
          discription: "book by chetan bhagat",
          price: "599",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218496604.png",
        },
        {
          name: "Jamini Roy painting ",
          discription: "masterpeice adition 1923 by mh patel",
          price: "20000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218691116.png",
        },
        {
          name: " Mf hasan painting",
          discription: "masterpeice adition 2023",
          price: "35000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218691110.jpg",
        },
        {
          name: "Sony mania 5232",
          discription: "size:52 inches, color, led,4k",
          price: "234999",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218630176.png",
        },
        {
          name: "Videocon m2x",
          discription: "size:16 inches color led",
          price: "52999",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218635243.png",
        },
        {
          name: "Samsung galaxy s23 ultra",
          discription: "memory:256 gb , ram: 16 gb",
          price: "98000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218691119.png",
        },
        {
          name: "Iphone X",
          discription: "memory:256 gb , ram: 16 gb ",
          price: "128000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "1686218720152.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
