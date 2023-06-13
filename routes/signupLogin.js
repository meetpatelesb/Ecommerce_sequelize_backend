const { Router } = require("express");
let express = require("express");
let router = express.Router();
const Signup = require("../controllers/signup");
const cors = require("cors");  
const app = express()
app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// crud
router.post("/signup", Signup.signup);
router.post('/login',Signup.login);


module.exports = router;
