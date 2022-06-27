const register  = require("../models/register.js")
require("../db/connection.js");


const loginUser =  async(req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const login = await register.findOne({
            email: email,
            password: password 
        })
        const token = await login.generateToken();

        // res.cookie("logined", token,{
        //     expires: new Date( Date.now()+ 500000),
        //     httpOnly: true
        // });

        if(login){
            res.status(201).json({message: "You are logged in ", token : login.token});
        }else{
            res.send("Invalid email and password");
        }

    } catch (error) {
        res.status(401).send("Data not present");
    }
}

module.exports = loginUser;