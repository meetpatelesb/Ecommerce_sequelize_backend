const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const Product = db.product;
const Product_cart = db.product_cart;
const { Op, QueryTypes } = require("sequelize");

const updateq = async (quentity, cartId, productId) => {
  const updateQuentity = await Product_cart.update(
    {
      quentity: quentity,
    },
    {
      where: {
        [Op.and]: [
          { cart_id: cartId },
          { product_id: productId },
          { isOrderComplete: "no" },
        ],
      },
    }
  );
  return updateQuentity;
};

const addToCart = async (req, res) => {
  const { id, userId } = req.body;
  try {
    const itemCheckAlready = await Product_cart.findAll({
      attributes: ["quentity"],
      where: {
        [Op.and]: [
          { cart_id: userId },
          { product_id: id },
          { isOrderComplete: "no" },
        ],
      },
    });

    const getProductData = await Product.findAll({
      attributes: ["name", "discription", "price", "product_image"],
      where: { id: id },
    });

    const { price, name, product_image, discription } =
      getProductData[0]?.dataValues;

    if (getProductData) {
      if (itemCheckAlready[0] === undefined) {
        const addtocart = await Product_cart.create({
          cart_id: userId,
          product_id: id,
          quentity: 1,
          price: price,
          name: name,
          product_image: product_image,
          discription: discription,
        });
      } else {
        var quentity = itemCheckAlready[0].dataValues.quentity;
        quentity++;

        const updateQuentity = updateq(quentity, userId, id);
        res.json({ updateQuentity });
      }
    } else {
      console.log("product not found!!!");
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
    res.json({ status: 200, getcartitems });
  } catch (error) {
    console.log(error);
  }
};

const updateCartItems = async (req, res) => {
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

    var quentity = quentityCount[0].dataValues.quentity;

    if (quentityCount[0].dataValues.quentity) {
      if (type === "inc") {
        quentity++;
        const updateQuentity = updateq(quentity, cartId, productId);
        res.json({ updateQuentity });
      } else if (type === "dec") {
        if (quentity > 1) {
          quentity--;

          const updateQuentity = updateq(quentity, cartId, productId);

          res.json({ updateQuentity });
        }
        //count--1
      } else if (type === "delete") {
        const updateQuentity = await Product_cart.destroy({
          where: {
            [Op.and]: [
              { cart_id: cartId },
              { product_id: productId },
              { isOrderComplete: "no" },
            ],
          },
        });
        res.json({ updateQuentity });
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
