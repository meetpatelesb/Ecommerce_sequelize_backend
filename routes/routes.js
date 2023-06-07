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
router.post('/login',Signup.login)
// router.delete("/delete/:id", crud.deleteData);
// router.get("/show", crud.showData);
// router.patch("/update/:id", crud.updateData);
// router.get("/show/:id", crud.getUser);
// router.get("/finder", crud.findUser);
// router.get("/getsetvirtual", crud.getSetVirtualUser);
// router.get("/rawdata", crud.rawQuery);



module.exports = router;
