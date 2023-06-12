let express = require("express");
let router = express.Router();
const OrderPlace = require("../controllers/orderplace");
const cors = require("cors");
const app = express();
app.use(cors());

// get address
router.post("/getaddress", OrderPlace.getAddress);

//order placed
router.post("/orderplace", OrderPlace.orderPlace);

//order list
router.post("/orderlist", OrderPlace.orderList);
module.exports = router;
