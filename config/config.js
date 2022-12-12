require("dotenv").config();

const dev ={
    app:{
        port : process.env.PORT || 5002
    },

    db:{
        url: process.env.DB_URL || "mongodb://localhost:27017/RestDB",
    },
};

module.exports= dev;
