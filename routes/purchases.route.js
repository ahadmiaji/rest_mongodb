const express = require ("express");
const router = express.Router();

const { getAllPurchases, getOnePurchase,createPurchase, deletePurchase, updatePurchase } = require("../controllers/purchase.controller");




router.get("/", getAllPurchases );
router.get("/:id", getOnePurchase);
router.post("/", createPurchase);
router.delete("/:id", deletePurchase);
router.patch("/:id", updatePurchase);




module.exports =router;