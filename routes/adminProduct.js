let express = require("express");
let router = express.Router();
const Product = require("../controllers/product");
const cors = require("cors");
const app = express();
app.use(cors());
let multer = require("../config/multer");
const middlewareWrapper = require("cors");
const myCustomMiddleware = require("../middlewares/middleware");

// crud
router.post(
  "/addproduct",
  myCustomMiddleware,
  multer.upload.single("product_image"),
  Product.addProduct
);

router.get("/getproduct",myCustomMiddleware ,Product.getProductDetails);

module.exports = router;
