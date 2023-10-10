const user = require("./user.route");
const order = require("./order.route");
const cart = require("./cart.route");
const product = require("./product.route");
const express = require("express");

const router = express.Router();
router.use("/user", user);
router.use("/order", order);
router.use("/cart", cart);
router.use("/product", product);

module.exports = router;