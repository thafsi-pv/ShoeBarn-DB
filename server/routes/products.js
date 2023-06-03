const express = require("express");
const product = require("../models/productModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await product.findById(id);
    res.json(item)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
