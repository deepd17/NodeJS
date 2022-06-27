const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const registerInfo = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    token:{
        type:String,
        //required:true
    }  

});


registerInfo.methods.generateToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()}, "mynameisdeepanshudeswalandthisistokenpractice");
        this.token = token ;
        await this.save();
        return token;
    }catch(error){
        res.send("Error is creating token");
    }
}


const register = mongoose.model('Register', registerInfo);
module.exports = register;