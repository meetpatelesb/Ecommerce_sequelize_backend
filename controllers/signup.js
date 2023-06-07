const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const { Op, QueryTypes } = require("sequelize");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

const Customer = db.customer;
const Customer_address = db.customer_address;
const Cart = db.cart;

const signup = async (req, res) => {
  console.log(req.body);
  // const data = {
  //   address: "kailashnagar,atkot",
  //   city: "Ahmedabad",
  //   country: "India",
  //   cpassword: "Meet@123",
  //   dob: "2002-07-13",
  //   email: "m@gmail.com",
  //   first_name: "meetkumar",
  //   gender: "male",
  //   last_name: "patel",
  //   password: "Meet@123",
  //   phoneNo: 9363636363,
  //   pincode: 360040,
  //   state: "Gujarat",
  // };

  const {
    address,
    city,
    country,
    dob,
    email,
    first_name,
    last_name,
    gender,
    password,
    phoneNo,
    pincode,
    state,
  } = req.body;

  const hash = await bcrypt.hash(password, 10);
  const t = await db.sequelize.transaction();
  try {
    var addRegistrationData = await Customer.create(
      {
        username: first_name,
        password: hash,
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        dob: dob,
        email: email,
        phoneNo: phoneNo,
        customer_addresses: {
          country: country,
          state: state,
          city: city,
          pincode: pincode,
          address: address,
          phoneNo: phoneNo,
          email: email,
        },
      },
      {
        include: { model: Customer_address, transaction: t },
      }
    );

    console.log(addRegistrationData.id);
    if (addRegistrationData.id) {
      await Cart.create({
        customer_id: addRegistrationData.id,
        username: first_name,
        transaction: t,
      });
    }
    await t.commit();
    res.status(200).json({ data: addRegistrationData });
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
  return;
};

const login = async (req, res) => {
  
  const { email, password } = req.body;
  // var cookie = req.cookies.token;
  // console.log(cookie);
  // if (cookie) {
  //   const data = jwt.verify(cookie, "malhar");
  //   console.log(data);
  // } else {
  const checkEmail = await Customer.findAll({
    attributes: ["first_name", "last_name", "id", "email", "password"],
    where: {
      email: email,
    },
  });

  res.status(200).json({ checkEmail });

  if (checkEmail?.length) {
    const pswCheck = await bcrypt.compare(password, checkEmail[0].password);
    if (pswCheck) {
      const tokenGenerate = jwt.sign(
        {
          customer_id: checkEmail[0].id,
          f_name: checkEmail[0].first_name,
          l_name: checkEmail[0].last_name,
          email: checkEmail[0].email,
          psw: checkEmail[0].password,
        },
        "malhar"
      );
      localStorage.setItem("token", tokenGenerate);
      // const datasss = localStorage.getItem('token')
    } else {
      console.log("psw is wrong!!!");
    }
  } else {
    console.log("email is not registred!!!");
  }
  // }
};

module.exports = {
  signup,
  login,
};
