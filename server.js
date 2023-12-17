const express = require("express");
const app = express();
const indexRoutes = require("./routes/router");

require("dotenv").config();

const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

app.use(express.json());
app.use(allowCrossDomain);
app.use("/", indexRoutes);

// Start the server and listen on port 3000
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));