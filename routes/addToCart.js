let express = require("express");
let router = express.Router();
const Cart = require("../controllers/cart");
const cors = require("cors");
const app = express();
app.use(cors());


// add update delete cart
router.post("/insertcart", Cart.addToCart);

// update cart increament ,decreament,delete
router.post("/updatecart", Cart.updateCartItems);


// product cart items
router.post("/getcartitems", Cart.getCartItems);




module.exports = router;
