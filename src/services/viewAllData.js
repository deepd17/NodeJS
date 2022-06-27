const register  = require("../models/register.js")
require("../db/connection.js");

const viewAllData = async(req, res)=>{
    const data = await register.find();
    if(data){
        res.status(201).send(data);
    }else{
        res.status(401).send("Data no found");
    }
}

module.exports = viewAllData;