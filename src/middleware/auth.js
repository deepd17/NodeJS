const jwt = require("jsonwebtoken");
const register = require('../models/register.js');

const auth = async (req, res, next)=>{
    try {
        const token = req.cookies.logined;
        const verifyUser = jwt.verify(token, "mynameisdeepanshudeswalandthisistokenpractice");
        //console.log(verifyUser);

        const user = await register.findOne({_id: verifyUser._id});
        req.token = token;
        req.user = user;
        next();

    } catch (error) {
        res.status(401).send("Login before accesing the data");
    }
}
module.exports = auth;