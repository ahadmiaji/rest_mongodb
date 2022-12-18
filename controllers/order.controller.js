const { v4: uuidv4 } = require("uuid");

const Order = require("../models/orders");


const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("productId")
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const getOneOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ id: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createOrder = async (req, res) => {
  try {
    // const neworder = new Order({
    //   id: uuidv4(),
    //   ...req.body
    // });
    // await neworder.save();

    const neworder = await Order.create(req.body);

    res.status(201).json(neworder);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate({ id: req.params.id }, req.body, { new: true });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "order is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = { getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder };