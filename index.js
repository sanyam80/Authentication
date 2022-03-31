const express = require("express");
const connect = require("./config/db.js");
const usercontroller = require("./controller/usercontroller.js");
const productcontroller = require("./controller/product.controller.js")
const {register,login} = require("./controller/auth.controller.js");
const app = express();
app.use(express.json());
app.use("/users",usercontroller)
app.post("/register",register);
app.post("/login",login);
app.use("/products", productcontroller)

app.listen(5000,async()=>{
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message)
    }
})