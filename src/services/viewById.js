const register  = require("../models/register.js")
require("../db/connection.js");

const viewById = async(req, res)=>{
    const data = await register.findById(req.params.id);
    if(data){
        res.status(201).send(data);
    }
}

module.exports = viewById;