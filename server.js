const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const PORT = 8001;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

let signup = require("./routes/routes");
// let user2Crud = require("./routes/routes");
app.use("/", signup);
// app.use("/", user2Crud);

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
