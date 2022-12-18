const {v4:uuidv4} =require("uuid");

const Product = require("../models/product.model");


const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

const getOneProduct = async (req, res) => {
    try {
      const product = await Product.findOne({ id: req.params.id });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const createProduct = async (req, res) => {
    try {
      const newProduct = new Product({
        id: uuidv4(),
        ...req.body
        
      });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

const updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate({ id: req.params.id }, req.body , {new: true});
      res.status(200).json(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const deleteProduct = async (req, res) => {
    try {
      await Product.deleteOne({ id: req.params.id });
      res.status(200).json({ message: "product is deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };


module.exports = {getAllProducts, getOneProduct, createProduct ,updateProduct, deleteProduct};