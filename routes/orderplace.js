let express = require("express");
let router = express.Router();
const OrderPlace = require("../controllers/orderplace");
const cors = require("cors");
const app = express();
app.use(cors());
const myCustomMiddleware = require("../middlewares/middleware");

// get address
router.post("/getaddress",myCustomMiddleware, OrderPlace.getAddress);

//order placed
router.post("/orderplace", myCustomMiddleware, OrderPlace.orderPlace);

//order list
router.post("/orderlist", myCustomMiddleware, OrderPlace.orderList);
module.exports = router;
