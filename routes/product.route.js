const express = require ("express");
const router = express.Router();

const { getAllProducts, getOneProduct,createProduct, deleteProduct, updateProduct } = require("../controllers/product.controller");




router.get("/", getAllProducts );
router.get("/:id", getOneProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);




module.exports =router;