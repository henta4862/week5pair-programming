require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
app.use(express.json());
connectDB();

app.use("/api/cars", require("./routers/carRouter"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  