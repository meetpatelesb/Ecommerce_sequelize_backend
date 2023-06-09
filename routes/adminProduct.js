let express = require("express");
let router = express.Router();
const Product = require("../controllers/product");
const cors = require("cors");
const app = express();
app.use(cors());
let multer = require("../config/multer");

// crud
router.post(
  "/addproduct",
  multer.upload.single("product_image"),
  Product.addProduct
);

router.get("/getproduct", Product.getProductDetails);

module.exports = router;
