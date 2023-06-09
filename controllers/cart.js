const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const Product = db.product;
const Product_cart = db.product_cart;
const { Op, QueryTypes } = require("sequelize");
console.log(Product_cart);

const addToCart = async (req, res) => {
  console.log("id");
  console.log(req.body);
  const { id, userId } = req.body;

  const t = await db.sequelize.transaction();
  try {
    const getProductData = await Product.findAll({
      attributes: ["name", "discription", "price", "product_image"],
      where: { id: id },
    });
    console.log(getProductData[0].dataValues);
    const { price, name, product_image, discription } =
      getProductData[0].dataValues;
    console.log(price);

    if (getProductData) {
      const addtocart = await Product_cart.create({
        cart_id: userId,
        product_id: id,
        quentity: 1,
        price: price,
        name: name,
        product_image: product_image,
        discription: discription,
      });
      console.log(addtocart);
    }
    // await t.commit();
  } catch (error) {
    console.log(error);
    // await t.rollback();
  }
  return;
};

const getCartItems = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  try {
    const getcartitems = await Product_cart.findAll({
      attributes: [
        "id",
        "product_id",
        "quentity",
        "price",
        "isOrderComplete",
        "name",
        "product_image",
        "discription",
      ],
      where: { [Op.and]: [{ cart_id: userId }, { isOrderComplete: "no" }] },
    });
    console.log(getcartitems);
    res.json({ status: 200, getcartitems });
  } catch (error) {
    console.log(error);
  }
};

const updateCartItems = async (req, res) => {
  console.log(req.body);
  const { cartId, productId, type } = req.body;
  try {
    const quentityCount = await Product_cart.findAll({
      attributes: ["quentity"],
      where: {
        [Op.and]: [
          { cart_id: cartId },
          { product_id: productId },
          { isOrderComplete: "no" },
        ],
      },
    });

    console.log(quentityCount[0].dataValues.quentity);
    if (quentityCount[0].dataValues.quentity) {
      if (type === "inc") {
        // count+1
      } else if (type === "dec") {
        //count--1
      } else if (type === "delete") {
        //record delete
      } else {
        console.log("type is not found!!!");
      }
    } else {
      console.log("count is not found!!!");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addToCart,
  getCartItems,
  updateCartItems,
};
