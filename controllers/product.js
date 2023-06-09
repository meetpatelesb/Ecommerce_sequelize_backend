const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const Product = db.product;
const Product_category = db.product_category;
const Product_seller = db.product_seller;
const { Op, QueryTypes } = require("sequelize");

const addProduct = async (req, res) => {
  const { name, discription, price } = req.body;
  const image = req.file.filename;
  const t = await db.sequelize.transaction();
  try {
    const insertProductData = await Product.create(
      {
        name: name,
        discription: discription,
        price: price,
        product_image: image,
        product_sellers: {
          seller_id: 5,
        },
      },
      {
        incude: {
          model: Product_seller,
          transaction: t,
        },
      }
    );
    if (insertProductData.id){
      await Product_category.create({
        product_id: insertProductData.id,
        category_id: 2,
        transaction: t,
      });
    } await t.commit();
    res.status(200).json({ data: insertProductData });
  } catch (error) {
    await t.rollback();
    console.log(error);
  }

  // res.json({status:200,data})
};

const getProductDetails = async (req,res)=>{
  const data={
    name:"meet",
    age:23
  }
  try {
    const getProductData = await Product.findAll({
      attributes: ["id", "name", "discription", "price", "product_image"],
    });
    res.json({ data: getProductData });
  } catch (error) {
    console.log(error);
  }
  
}
module.exports = {
  addProduct,
  getProductDetails,
};
