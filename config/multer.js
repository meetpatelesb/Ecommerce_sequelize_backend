// multer use
var multer = require("multer");
const path = require("path");


// upload using MULTER
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      "/home/meet-vaghasiya/Ecommerce/Ecommerce_sequelize2/product_images"
    ); //folder name
    console.log("in destination");
  },
  filename: (req, file, cb) => {

    cb(null, Date.now()  + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
