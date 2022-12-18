const express = require ("express");
const router = express.Router();

const { getAllSuppliers, getOneSupplier,createSupplier, deleteSupplier, updateSupplier } = require("../controllers/supplier.controller");




router.get("/", getAllSuppliers );
router.get("/:id", getOneSupplier);
router.post("/", createSupplier);
router.delete("/:id", deleteSupplier);
router.patch("/:id", updateSupplier);




module.exports =router;