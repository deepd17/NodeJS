const express = require("express");
const router = new express.Router();
const register  = require("../models/register.js")
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
router.use(cors());
require("../db/connection.js");
const auth = require("../middleware/auth.js");
router.use(cookieParser());
router.use(express.json());
router.use(express.urlencoded({extended: false}));
const registerUser = require("../controllers/registerUser.js");
const loginUser = require("../controllers/loginUser.js");
const viewAllData = require("../controllers/viewAllData.js");
const viewById = require("../controllers/viewById.js");
const updateById = require("../controllers/updateById.js");
const deleteUser = require("../controllers/deleteUser");


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/view', viewAllData)
router.delete('/delete/:id', deleteUser);
router.get('/view/:id', viewById);
router.put('/update/:id', updateById);



module.exports = router