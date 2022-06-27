const register  = require("../models/register.js")
require("../db/connection.js");

const deleteUser = async(req, res)=>{
    const data = await register.findById(req.params.id);
    if(data){
        data.remove().then(res.status(201).send("data is delted"));
    }
}

module.exports = deleteUser;