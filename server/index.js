const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const productRoute = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server running at port " + PORT));
