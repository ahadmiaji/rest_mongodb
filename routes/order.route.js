const express = require ("express");
const router = express.Router();

const { getAllOrders, getOneOrder,createOrder, deleteOrder, updateOrder } = require("../controllers/order.controller");




router.get("/", getAllOrders );
router.get("/:id", getOneOrder);
router.post("/", createOrder);
router.delete("/:id", deleteOrder);
router.patch("/:id", updateOrder);




module.exports =router;