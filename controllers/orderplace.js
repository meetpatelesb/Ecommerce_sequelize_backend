const req = require("express/lib/request");
const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const CustomerAddress = db.customer_address;
const Order = db.order;
const Product_cart = db.product_cart;
const ProductOrders = db.product_order;
const { Op, QueryTypes, where } = require("sequelize");

const getAddress = async (req, res) => {
  const { userId } = req.body.data;
  try {
    const getAddress = await CustomerAddress.findAll({
      attributes: [
        "id",
        "customer_id",
        "country",
        "state",
        "city",
        "pincode",
        "address",
        "phoneNo",
        "email",
      ],
      where: {
        customer_id: userId,
      },
    });
    res.json({ getAddress });
  } catch (error) {
    console.log(error);
  }
};

const orderPlace = async (req, res) => {
  const { customer_id, pincode, city, state, country, address } = req.body.address;
  try {
    const orderDetails = await Order.create({
      customer_id: customer_id,
      country: country,
      state: state,
      city: city,
      pincode: pincode,
      address: address,
    });

    if (orderDetails.id) {
      const orderItems = await Product_cart.findAll({
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
        where: {
          [Op.and]: [{ cart_id: customer_id }, { isOrderComplete: "no" }],
        },
      });
      for (let i = 0; i < orderItems?.length; i++) {
        await ProductOrders.create({
          customer_id: customer_id,
          order_id: orderDetails.id,
          product_cart_id: orderItems[i].dataValues.id,
        });

        await Product_cart.update(
          {
            isOrderComplete: "yes",
          },
          {
            where: {
              [Op.and]: [{ cart_id: customer_id }, { isOrderComplete: "no" }],
            },
          }
        );
      }
      res.json({ status: 200, boolean: true });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: 200, boolean: false });
  }
};

const orderList = async (req, res) => {
  const { customer_id } = req.body.data;
  const orderList = await Order.findAll({
    where: {
      customer_id: customer_id,
    },
    include: [
      {
        model: Product_cart,
      },
    ],
  });
  console.log(orderList);
  res.json({ orderList });
};
module.exports = {
  getAddress,
  orderPlace,
  orderList,
};
