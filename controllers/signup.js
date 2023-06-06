const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const Customer = db.customer;
console.log(Customer);
const { Op, QueryTypes } = require("sequelize");

const signup = async (req, res) => {
  const updatedData = req.body;
  
  console.log(updatedData);
  // Change everyone without a last name to "Doe"
  // const users = await User.update(updatedData, {
  //   where: {
  //     id: req.params.id,
  //   },
  // });
 res.status(200).json({ "data" :updatedData});
  // console.log("all updated data:", JSON.stringify(users, null, 2));
  // res.send(JSON.stringify(users, null, 2));
};


module.exports = {
  signup,
};
