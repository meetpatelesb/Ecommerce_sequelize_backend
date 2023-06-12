const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT = 8001;
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use( express.static( __dirname+"/product_images"));

let user = require("./routes/signupLogin");
let product = require("./routes/adminProduct");
let addToCart = require('./routes/addToCart')
let orderplace = require('./routes/orderplace')

app.use("/", user);
app.use("/", product);
app.use('/',addToCart)
app.use('/',orderplace)


app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
