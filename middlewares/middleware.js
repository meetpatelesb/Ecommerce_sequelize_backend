const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const myCustomMiddleware = async (req, res, next) => {
  console.log(
    "middleware called--------------------------------------------------------"
  );
  const { authorization } = req.headers;

  // console.log(token);
  if (authorization) {
    const data = jwt.verify(authorization, "malhar");
    console.log(
      "data found-----------------------------------------------------------"
    );
    next();
  } else {
    // res.redirect("http://localhost:8182/login");
    res.json({ status: 200, boolean: false });
  }
};

module.exports = myCustomMiddleware;
