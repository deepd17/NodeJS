const register  = require("../models/register.js")
require("../db/connection.js");

const updateById = async(req, res)=>{
    const data = await register.findById(req.params.id);
    if(data){
        const name = req.body.name || data.name;
        const course  = req.body.course || data.course;
            
        data.name =  name,
        data.course =  course,
        data.email  =  data.email,
        data.password =  data.password,
        data.cpassword =  data.cpassword
        data.save().then(res.status(201).send("Data is updated"));
    }
}

module.exports = updateById;