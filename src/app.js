const express = require("express");
const ejs = require("ejs");
const routeUser = require("./routers/user.js")
const app = express();
const port = process.env.PORT;


app.use(routeUser)
app.set('view engine', 'ejs');

app.listen(port, ()=>{
    console.log(`Server is starting on port no: ${port}`);
})
