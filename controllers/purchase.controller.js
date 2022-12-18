const {v4:uuidv4} =require("uuid");

const Purchase = require("../models/purchases");


const getAllPurchases = async (req, res) => {
    try {
      const purchases = await Purchase.find().populate("productId").populate("supplierId")
      res.status(200).json(purchases);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

const getOnePurchase = async (req, res) => {
    try {
      const purchase = await Purchase.findOne({ id: req.params.id });
      res.status(200).json(purchase);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const createPurchase = async (req, res) => {
    try {
      console.log(req.body) 
      const newPurchase = new Purchase({
        id: uuidv4(),
        ...req.body
      });
      await newPurchase.save();
      res.status(201).json(newPurchase);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

const updatePurchase = async (req, res) => {
    try {
      const purchase = await Purchase.findByIdAndUpdate({ id: req.params.id }, req.body , {new: true});
      res.status(200).json(purchase);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const deletePurchase = async (req, res) => {
    try {
      await Purchase.deleteOne({ id: req.params.id });
      res.status(200).json({ message: "purchase is deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };


module.exports = {getAllPurchases, getOnePurchase, createPurchase ,updatePurchase, deletePurchase};