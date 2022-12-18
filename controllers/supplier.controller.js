const {v4:uuidv4} =require("uuid");

const Supplier = require("../models/suppliers");


const getAllSuppliers = async (req, res) => {
    try {
      const suppliers = await Supplier.find();
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

const getOneSupplier = async (req, res) => {
    try {
      const supplier = await Supplier.findOne({ id: req.params.id });
      res.status(200).json(supplier);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const createSupplier = async (req, res) => {
    try {
      const newSupplier = new Supplier({
        id: uuidv4(),
        ...req.body
        
      });
      await newSupplier.save();
      res.status(201).json(newSupplier);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

const updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate({ id: req.params.id }, req.body , {new: true});
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).send(error.message);
  }
  };

  const deleteSupplier = async (req, res) => {
    try {
      await Supplier.deleteOne({ id: req.params.id });
      res.status(200).json({ message: "supplier is deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };


module.exports = {getAllSuppliers, getOneSupplier, createSupplier ,updateSupplier, deleteSupplier};