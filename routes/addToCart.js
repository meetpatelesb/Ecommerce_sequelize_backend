let express = require("express");
let router = express.Router();
const Cart = require("../controllers/cart");
const cors = require("cors");
const app = express();
app.use(cors());
const myCustomMiddleware = require("../middlewares/middleware");


// add update delete cart
router.post("/insertcart", myCustomMiddleware, Cart.addToCart);

// update cart increament ,decreament,delete
router.post("/updatecart", myCustomMiddleware, Cart.updateCartItems);


// product cart items
router.post("/getcartitems", myCustomMiddleware, Cart.getCartItems);




module.exports = router;
