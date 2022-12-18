const express = require ("express");
const cors = require("cors");
const productRouter = require("./routes/product.route");
const orderRouter = require("./routes/order.route");
const purchaseRouter = require("./routes/purchases.route");
const supplierRouter = require("./routes/suppliers.route");
require("./config/db");
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/purchases", purchaseRouter);
app.use("/api/suppliers", supplierRouter);

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

app.use( (req,res,next)=>{
    res.status(404).json({
        message: "route not found",
    })
});

app.use( (err,req,res,next)=>{
    res.status(500).json({
        message: "something broke",
    });
});
module.exports=app;