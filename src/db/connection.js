const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`).then(()=>{
    console.log("Connection is created successfully ");
}).catch((err)=>{
    console.log("Connection is not created");
})