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
          product_image: "product_images/musical_guitar.png",
        },
        {
          name: "Drums AA",
          discription: "Drums AA",
          price: "82000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/musical_drum.png",
        },
        {
          name: "400 days book",
          discription: "book by chetan bhagat",
          price: "499",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/book1.png",
        },
        {
          name: "One Indian Girl",
          discription: "book by chetan bhagat",
          price: "599",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/book2.png",
        },
        {
          name: "Jamini Roy painting ",
          discription: "masterpeice adition 1923 by mh patel",
          price: "20000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/finart.png",
        },
        {
          name: " Mf hasan painting",
          discription: "masterpeice adition 2023",
          price: "35000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/fineart2.png",
        },
        {
          name: "Sony mania 5232",
          discription: "size:52 inches, color, led,4k",
          price: "234999",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/tv1.png",
        },
        {
          name: "Videocon m2x",
          discription: "size:16 inches color led",
          price: "52999",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/tv2.png",
        },
        {
          name: "Samsung galaxy s23 ultra",
          discription: "memory:256 gb , ram: 16 gb",
          price: "98000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/samsung.png",
        },
        {
          name: "Iphone X",
          discription: "memory:256 gb , ram: 16 gb ",
          price: "128000",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
          product_image: "product_images/phone_iphone.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
