const register  = require("../models/register.js")
require("../db/connection.js");

const registerUser = async(req, res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password === cpassword){
            const registerUser = new register({
                name: req.body.name,
                course: req.body.course,
                email: req.body.email,
                password: password,
                cpassword: cpassword,
            });
        
            const registered = await registerUser.save();

            res.status(201).send("Data is uploded");
        }else{
            res.status(401).send("Password are not matching");
        }

    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = registerUser;